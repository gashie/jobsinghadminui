import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { createQuestionMultiple } from '../../../../../store/actions';

const Multiple = ({ onSubmit }) => {
  const [question, setQuestion] = useState('');
  const [answerLabels, setAnswerLabels] = useState(['']); // Initial answer labels
  const [idealAnswerIndices, setIdealAnswerIndices] = useState([]); // Indices of the ideal answers

  const dispatch = useDispatch();

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleAnswerChange = (index, value) => {
    const updatedLabels = [...answerLabels];
    updatedLabels[index] = value;
    setAnswerLabels(updatedLabels);
  };

  const handleAddAnswer = () => {
    setAnswerLabels([...answerLabels, '']);
  };

  const handleRemoveAnswer = (index) => {
    const updatedLabels = [...answerLabels];
    updatedLabels.splice(index, 1);
    setAnswerLabels(updatedLabels);
  };

  const handleIdealAnswerChange = (index) => {
    if (idealAnswerIndices.includes(index)) {
      // If the index is already in the array, remove it
      const updatedIndices = idealAnswerIndices.filter((item) => item !== index);
      setIdealAnswerIndices(updatedIndices);
    } else {
      // If the index is not in the array, add it
      setIdealAnswerIndices([...idealAnswerIndices, index]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format the data to match the desired JSON structure
    const formattedData = {
      questionTitle: question,
      questionType: 'multi',
      jobId: '',
      questionOption: answerLabels.map((label, index) => ({
        optionLabel: label,
        optionValue: label,
        optionBenchMark: idealAnswerIndices.includes(index) ? 1 : 0, // Use 1 for ideal answers, 0 for others
      })),
    };

    // Pass the formatted data to the parent component
    onSubmit(formattedData);

    dispatch(createQuestionMultiple(formattedData));

    // Reset form values to default after submission
    setQuestion('');
    setAnswerLabels(['']);
    setIdealAnswerIndices([]);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="question">Question</Label>
        <Input
          type="text"
          id="question"
          value={question}
          onChange={handleQuestionChange}
          placeholder="Enter your question"
          required
        />
      </FormGroup>
      {answerLabels.map((label, index) => (
        <FormGroup key={index}>
          <Label for={`answer-${index}`}>Answer {index + 1}</Label>
          <div className="d-flex">
            <Input
              type="text"
              id={`answer-${index}`}
              value={label}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
              placeholder={`Enter answer ${index + 1}`}
            />
            <Button
              color="light"
              className="ml-4"
              style={{ marginLeft: '3px' }}
              onClick={() => handleRemoveAnswer(index)}
            >
              <i className="bx bx-trash bx-tada-hover fs-17"></i>
            </Button>
            <Label check className="ml-4">
              <Input
                type="checkbox"
                checked={idealAnswerIndices.includes(index)}
                onChange={() => handleIdealAnswerChange(index)}
              />
              Ideal Answer
            </Label>
          </div>
        </FormGroup>
      ))}
      <Button color="primary" onClick={handleAddAnswer} style={{ backgroundColor: '#244a59' }}>
        Add Answer
      </Button>
      <Button color="primary" type="submit" style={{ backgroundColor: '#244a59' }}>
        Add Question
      </Button>
    </Form>
  );
};

export default Multiple;
