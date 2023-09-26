import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useSelector } from 'react-redux';

const Multiple = ({ onSubmit }) => {
  // State variables
  const [question, setQuestion] = useState('');
  const [answerOptions, setAnswerOptions] = useState([{ text: '', isSelected: false }]);

  // Handle question input change
  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  // Handle answer text change
  const handleAnswerChange = (index, text) => {
    const updatedOptions = [...answerOptions];
    updatedOptions[index].text = text;
    setAnswerOptions(updatedOptions);
  };

  // Handle answer checkbox change
  const handleCheckboxChange = (index) => {
    const updatedOptions = [...answerOptions];
    updatedOptions[index].isSelected = !updatedOptions[index].isSelected;
    setAnswerOptions(updatedOptions);
  };

  // Add a new answer option
  const handleAddAnswer = () => {
    setAnswerOptions([...answerOptions, { text: '', isSelected: false }]);
  };

  // Remove an answer option
  const handleRemoveAnswer = (index) => {
    const updatedOptions = [...answerOptions];
    updatedOptions.splice(index, 1);
    setAnswerOptions(updatedOptions);
  };

  // Redux selector for job information
  const { loading, error, idInfo } = useSelector((state) => ({
    loading: state.Jobs.idLoading,
    error: state.Jobs.idError,
    idInfo: state.Jobs.id,
  }));

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an array of selected answer options
    const selectedOptions = answerOptions
      .filter((option) => option.isSelected)
      .map((option, index) => ({
        optionLabel: `Answer ${index + 1}`,
        optionValue: option.text,
        optionBenchMark: index + 1,
      }));

    // Create the formatted data object without idealAnswerIndices
    const formattedData = {
      questionTitle: question,
      questionType: 'multi',
      jobId: loading === false && error === false ? idInfo?.jobId : "",
      questionOption: selectedOptions,
    };

    // Pass the formatted data to the parent component
    onSubmit(formattedData);

    // Reset form values to default after submission
    setQuestion('');
    setAnswerOptions([{ text: '', isSelected: false }]);
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
      {answerOptions.map((answer, index) => (
        <FormGroup key={index}>
          <Label for={`answer-${index}`}>Answer {index + 1}</Label>
          <div className="d-flex">
            <Input
              type="text"
              id={`answer-${index}`}
              value={answer.text}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
              placeholder={`Enter answer ${index + 1}`}
            />
            <Button
              color='light'
              className="ml-4"
              style={{ marginLeft: '3px'}}
            >
              <i className='bx bx-trash bx-tada-hover fs-17' onClick={() => handleRemoveAnswer(index)}></i>
            </Button>
            <Input
              type="checkbox"
              className="ml-4 mt-2"
              checked={answer.isSelected}
              onChange={() => handleCheckboxChange(index)}
            />
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
