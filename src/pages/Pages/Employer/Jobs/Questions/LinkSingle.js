import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { createQuestionSingle, updateQuestions } from '../../../../../store/actions';

const LinkSingle = ({ handleEditClose, onSubmit }) => {
  const [question, setQuestion] = useState('');
  const [answerOptions, setAnswerOptions] = useState(['']);
  const [idealAnswerIndex, setIdealAnswerIndex] = useState(0);

  const { data } = useSelector((state) => ({
    data: state.Jobs.editCloneData,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      setQuestion(data.questionTitle || '');

      if (data.questionOption && Array.isArray(data.questionOption)) {
        const options = data.questionOption.map((option) => option.optionValue);
        setAnswerOptions(options);

        const idealIndex = data.questionOption.findIndex(
          (option) => option.optionBenchMark === 1
        );
        setIdealAnswerIndex(idealIndex >= 0 ? idealIndex : 0);
      }
    }
  }, [data]);

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleAnswerChange = (index, value) => {
    const updatedOptions = [...answerOptions];
    updatedOptions[index] = value;
    setAnswerOptions(updatedOptions);
  };

  const handleAddAnswer = () => {
    setAnswerOptions([...answerOptions, '']);
  };

  const handleRemoveAnswer = (index) => {
    const updatedOptions = [...answerOptions];
    updatedOptions.splice(index, 1);
    setAnswerOptions(updatedOptions);
  };

  const handleIdealAnswerChange = (e) => {
    setIdealAnswerIndex(parseInt(e.target.value, 10));
  };

  const { idLoading, idError, idInfo,payloading, payError, payInfo  } = useSelector((state) => ({
    loading: state.Jobs.idLoading,
    error: state.Jobs.idError,
    idInfo: state.Jobs.id,
    payloading: state.Rates.payloading,
    payInfo: state.Rates.payInfo,
    payError: state.Rates.payError,
  }));

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedData = {
      questionTitle: question,
      questionType: 'single',
      jobId: idInfo?.jobId,
      questionOption: answerOptions.map((option, index) => ({
        optionLabel: `Answer ${index + 1}`,
        optionValue: option,
        optionBenchMark: index + 1,
      })),
    };

    onSubmit(formattedData);

    // dispatch(updateQuestions(formattedData));

    setQuestion('');
    setAnswerOptions(['']);
    setIdealAnswerIndex(0);
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
              value={answer}
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
          </div>
        </FormGroup>
      ))}
      <Button color="primary" onClick={handleAddAnswer} style={{ backgroundColor: '#244a59' }}>
        Add Answer
      </Button>
      <FormGroup className="mt-4">
        <Label for="idealAnswer">Ideal Answer</Label>
        <Input
          type="select"
          id="idealAnswer"
          value={idealAnswerIndex}
          onChange={handleIdealAnswerChange}
        >
          {answerOptions.map((_, index) => (
            <option key={index} value={index}>
              Answer {index + 1}
            </option>
          ))}
        </Input>
      </FormGroup>
      <Button color="primary" type="submit" style={{ backgroundColor: '#244a59' }}>
        Update and use question
      </Button>
    </Form>
  );
};

export default LinkSingle;
