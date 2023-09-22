import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Range = ({ onSubmit }) => {
  const [question, setQuestion] = useState('');
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');
  const [idealValue, setIdealValue] = useState('');

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleMinValueChange = (e) => {
    setMinValue(e.target.value);
  };

  const handleMaxValueChange = (e) => {
    setMaxValue(e.target.value);
  };

  const handleIdealValueChange = (e) => {
    setIdealValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format the data to match the desired JSON structure
    const formattedData = {
      questionTitle: question,
      questionType: 'range',
      jobId: '61d3bab7-20ff-40ab-9b97-2296cd567a11',
      benchMark: parseInt(idealValue, 10),
      minimumValue: parseInt(minValue, 10),
      maximumValue: parseInt(maxValue, 10),
    };

    // Pass the formatted data to the parent component
    onSubmit(formattedData);

    // Reset form values to default after submission
    setQuestion('');
    setMinValue('');
    setMaxValue('');
    setIdealValue('');
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

      <FormGroup>
        <Label for="minValue">Min Value</Label>
        <Input
          type="number"
          id="minValue"
          value={minValue}
          onChange={handleMinValueChange}
          placeholder="Enter minimum value"
        />
      </FormGroup>
      <FormGroup>
        <Label for="maxValue">Max Value</Label>
        <Input
          type="number"
          id="maxValue"
          value={maxValue}
          onChange={handleMaxValueChange}
          placeholder="Enter maximum value"
        />
      </FormGroup>
      <FormGroup>
        <Label for="idealValue">Ideal Value</Label>
        <Input
          type="number"
          id="idealValue"
          value={idealValue}
          onChange={handleIdealValueChange}
          placeholder="Enter ideal value"
        />
      </FormGroup>
      <Button type="submit" style={{backgroundColor: '#244a59'}} className='btn btn-dark'>
        Add Question
      </Button>
    </Form>
  );
};

export default Range;
