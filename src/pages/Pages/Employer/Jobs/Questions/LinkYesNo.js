import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, FormGroup, Label, Input, Button, Col } from "reactstrap";
import { createQuestionYN } from "../../../../../store/actions";

function LinkYesNo({ onSubmit }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("Yes"); // Default answer is 'Yes'

  const { data, idLoading, idError, idInfo, payloading, payError, payInfo } = useSelector(
    (state) => ({
      data: state.Jobs.editCloneData,
      idLoading: state.Jobs.idLoading,
      idError: state.Jobs.idError,
      idInfo: state.Jobs.id,
      payloading: state.Rates.payloading,
      payInfo: state.Rates.payInfo,
      payError: state.Rates.payError,
    })
  );

  const dispatch = useDispatch();

  useEffect(() => {
    // Initialize the component with the data from the Redux store
    if (data) {
      setQuestion(data.questionTitle || "");
      setAnswer(data.benchMark || "Yes");
    }
  }, [data]);

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format the data to match the desired JSON structure
    const formattedData = {
      questionTitle: question,
      questionType: "yesno",
      jobId: idInfo?.jobId,
      benchMark: answer,
    };

    // Pass the formatted data to the parent component
    onSubmit(formattedData);

    dispatch(createQuestionYN(formattedData));

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
            Update and use question
          </Button>
        </Form>
      </Col>
    </>
  );
}

export default LinkYesNo;
