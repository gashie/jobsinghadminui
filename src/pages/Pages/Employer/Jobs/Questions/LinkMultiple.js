import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { createQuestionMultiple, updateQuestions } from '../../../../../store/actions';

const LinkMultiple = ({ handleEditClose, onSubmit }) => {
  const [question, setQuestion] = useState('');
  const [answerLabels, setAnswerLabels] = useState(['']);
  const [idealAnswerIndices, setIdealAnswerIndices] = useState([]);

  const { data } = useSelector((state) => ({
    data: state.Jobs.editCloneData,
  }));

  const { idLoading, idError, idInfo,payloading, payError, payInfo  } = useSelector((state) => ({
    loading: state.Jobs.idLoading,
    error: state.Jobs.idError,
    idInfo: state.Jobs.id,
    payloading: state.Rates.payloading,
    payInfo: state.Rates.payInfo,
    payError: state.Rates.payError,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      setQuestion(data.questionTitle || '');

      if (data.optionsData && Array.isArray(data.optionsData)) {
        const labels = data.optionsData.map((option) => option.optionLabel);
        setAnswerLabels(labels);

        const indices = data.optionsData.reduce((indices, option, index) => {
          if (option.optionBenchMark) {
            indices.push(index);
          }
          return indices;
        }, []);
        setIdealAnswerIndices(indices);
      }
    }
  }, [data]);

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
      const updatedIndices = idealAnswerIndices.filter((item) => item !== index);
      setIdealAnswerIndices(updatedIndices);
    } else {
      setIdealAnswerIndices([...idealAnswerIndices, index]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedData = {
      questionTitle: question,
      questionType: 'multi',
      jobId: idInfo?.jobId,
      questionOption: answerLabels.map((label, index) => ({
        optionLabel: label,
        optionValue: label,
        optionBenchMark: idealAnswerIndices.includes(index) ? 1 : 0, // Use 1 for ideal answers, 0 for others
      })),
    };

    onSubmit(formattedData); // Call the parent's onSubmit function

    // Dispatch an action to update the questions
    //dispatch(updateQuestions(formattedData));

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
            <div className='d-flex'>
              <Label check className="ml-4 w-100 ">
                <Input
                  type="checkbox"
                  checked={idealAnswerIndices.includes(index)}
                  onChange={() => handleIdealAnswerChange(index)}
                />
                <p> Ideal Answer</p> 
              </Label>
            </div>
          </div>
        </FormGroup>
      ))}
  
      <div className='d-flex gap-2'>
        <Button onClick={handleAddAnswer} style={{ backgroundColor: '#244a59' }} className='btn btn-dark'>
          Add Answer
        </Button>
        <Button color="primary" type="submit" style={{ backgroundColor: '#244a59', marginRight: '2rem' }} className='btn btn-dark'>
          Add Question
        </Button>
      </div>
    </Form>
  );
  
};

export default LinkMultiple;
