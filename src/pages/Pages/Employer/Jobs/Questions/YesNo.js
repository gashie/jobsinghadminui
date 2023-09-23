import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Col } from "reactstrap";
import { useSelector } from "react-redux";

function YesNo({ onSubmit }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("Yes"); // Default answer is 'Yes'

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
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
      questionType: "yesno",
      jobId: loading === false && error === false ? idInfo?.jobId : "",
      benchMark: answer,
    };

    // Pass the formatted data to the parent component
    onSubmit(formattedData);

    // Reset form values to default after submission
    setQuestion("");
    setAnswer("Yes");
  };

  return (
    <>
      <Col>
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
              className="p-3"
            />
          </FormGroup>
          <FormGroup>
            <Label for="answer">Answer</Label>
            <Input
              type="select"
              id="answer"
              value={answer}
              onChange={handleAnswerChange}
              className="p-3"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </Input>
          </FormGroup>
          <Button
            color="primary"
            type="submit"
            style={{ backgroundColor: "#244a59" }}
          >
            Add
          </Button>
        </Form>
      </Col>
    </>
  );
}

export default YesNo;
