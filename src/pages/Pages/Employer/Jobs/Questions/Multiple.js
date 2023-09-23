import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useSelector } from 'react-redux';

const Multiple = ({ onSubmit }) => {
  const [question, setQuestion] = useState('');
  const [answerOptions, setAnswerOptions] = useState(['']); // Initial answer option
  const [idealAnswerIndex, setIdealAnswerIndex] = useState(0); // Index of the ideal answer

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


  const {loading, error, idInfo} = useSelector((state)=>({
    loading: state.Jobs.idLoading,
    error: state.Jobs.idError,
    idInfo: state.Jobs.id,
}))

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format the data to match the desired JSON structure
    const formattedData = {
      questionTitle: question,
      questionType: 'multi',
      jobId: loading === false && error === false ? idInfo?.jobId : "",
      questionOption: answerOptions.map((option, index) => ({
        optionLabel: `Answer ${index + 1}`,
        optionValue: option,
        optionBenchMark: index + 1,
      })),
    };

    // Pass the formatted data to the parent component
    onSubmit(formattedData);

    // Reset form values to default after submission
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
             color='light'
              className="ml-4"
              style={{ marginLeft: '3px'}}
            >
              <i className='bx bx-trash bx-tada-hover fs-17' onClick={() => handleRemoveAnswer(index)}></i>
            </Button>
          </div>
        </FormGroup>
      ))}
      <Button color="primary" onClick={handleAddAnswer} style={{backgroundColor: '#244a59'}}>
        Add Answer
      </Button>
      <FormGroup className='mt-4'>
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
      <Button color="primary" type="submit" style={{backgroundColor: '#244a59'}}>
        Add Question
      </Button>
      {/* Display formatted data below the form */}
      {/* {formattedData && (
        <div className="mt-4">
          <h2>Formatted Data</h2>
          <pre>{JSON.stringify(formattedData, null, 2)}</pre>
        </div>
      )} */}
    </Form>
  );
};

export default Multiple;
