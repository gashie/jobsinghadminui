import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Card,
  CardBody,
  Spinner
} from "reactstrap";
import { applyForJobs } from "../../../../store/actions";
import { useNavigate } from "react-router-dom";

const Questionnaire = ({ questionInfo, handleBack, data }) => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    // Initialize the answers state with the provided JSON data
    const initialAnswers = questionInfo?.map((question) => ({
      questionId: question.questionId,
      ans: question.ans || "",
    }));
    setAnswers(initialAnswers);
  }, [questionInfo]);

  const handleInputChange = (questionId, value) => {
    const updatedAnswers = answers?.map((answer) =>
      answer.questionId === questionId ? { ...answer, ans: value } : answer
    );
    setAnswers(updatedAnswers);
  };

  const handleMultiSelectChange = (questionId, selectedOptions) => {
    const updatedAnswers = answers?.map((answer) =>
      answer.questionId === questionId
        ? { ...answer, ans: selectedOptions }
        : answer
    );
    setAnswers(updatedAnswers);
  };

  const [finalData, setFinalData] = useState({});

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleFinal = () => {
    const formData = new FormData();
    formData.append("fullName", data?.fullName);
    formData.append("email", data?.email);
    formData.append("phone", data?.phone);
    formData.append("resume", data?.file);
    formData.append("answers", JSON.stringify(answers));
    formData.append("jobId", data?.jobId);

    dispatch(applyForJobs(formData));
    navigate("/job-list")
  };

  const {loading, error} = ((state)=>({
    loading: state.JobAlerts.applyForJobsLoading,
    error: state.JobAlerts.applyForJobsError,
  }))

  const renderQuestion = (question) => {
    switch (question.questionType) {
      case "range":
        return (
          <div key={question.questionId}>
            <FormGroup>
              <Label for={question.questionId}>{question.questionTitle}</Label>
              <Input
                type="number"
                className="p-3"
                id={question.questionId}
                min={question.minimumValue}
                max={question.maximumValue}
                value={
                  answers.find(
                    (answer) => answer.questionId === question.questionId
                  )?.ans || ""
                }
                onChange={(e) =>
                  handleInputChange(question.questionId, e.target.value)
                }
              />
            </FormGroup>
          </div>
        );

      case "multi":
        return (
          <div key={question.questionId}>
            <FormGroup>
              <Label for={question.questionId}>{question.questionTitle}</Label>
              {question.optionsData?.map((option) => (
                <div key={option.optionValue}>
                  <Label check>
                    <Input
                      type="checkbox"
                      name={option.optionValue}
                      value={option.optionValue}
                      checked={(
                        answers.find(
                          (answer) => answer.questionId === question.questionId
                        )?.ans || []
                      ).includes(option.optionValue)}
                      onChange={(e) => {
                        const selectedOptions =
                          answers.find(
                            (answer) =>
                              answer.questionId === question.questionId
                          )?.ans || [];
                        if (e.target.checked) {
                          selectedOptions.push(option.optionValue);
                        } else {
                          const index = selectedOptions.indexOf(
                            option.optionValue
                          );
                          if (index !== -1) {
                            selectedOptions.splice(index, 1);
                          }
                        }
                        handleMultiSelectChange(
                          question.questionId,
                          selectedOptions
                        );
                      }}
                    />{" "}
                    {option.optionLabel}
                  </Label>
                </div>
              ))}
            </FormGroup>
          </div>
        );

      case "yesno":
        return (
          <div key={question.questionId}>
            <FormGroup>
              <Label>{question.questionTitle}</Label>
              <div>
                <Label check>
                  <Input
                    type="radio"
                    name={question.questionId}
                    value="yes"
                    checked={
                      answers.find(
                        (answer) => answer.questionId === question.questionId
                      )?.ans === "yes"
                    }
                    onChange={(e) =>
                      handleInputChange(question.questionId, e.target.value)
                    }
                  />{" "}
                  Yes
                </Label>
                &nbsp;&nbsp;&nbsp; {/* Add spacing */}
                <Label check>
                  <Input
                    type="radio"
                    name={question.questionId}
                    value="no"
                    checked={
                      answers.find(
                        (answer) => answer.questionId === question.questionId
                      )?.ans === "no"
                    }
                    onChange={(e) =>
                      handleInputChange(question.questionId, e.target.value)
                    }
                  />{" "}
                  No
                </Label>
              </div>
            </FormGroup>
          </div>
        );

      case "single":
        return (
          <div key={question.questionId}>
            <FormGroup>
              <Label for={question.questionId}>{question.questionTitle}</Label>
              <Input
                type="select"
                id={question.questionId}
                value={
                  answers.find(
                    (answer) => answer.questionId === question.questionId
                  )?.ans || ""
                }
                onChange={(e) =>
                  handleInputChange(question.questionId, e.target.value)
                }
                className="p-3"
              >
                <option value="">Select an option</option>
                {question.optionsData?.map((option) => (
                  <option key={option.optionValue} value={option.optionValue}>
                    {option.optionLabel}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card>
      <CardBody>
        <Container>
          <div style={{ paddingBottom: "5rem" }}>
            {/* <h4 className="d-flex htstack justify-content-center">
          Step 2 of 2 (Please answer all questions)
        </h4> */}
            <p
              onClick={() => {
                navigate("/admin/apply");
              }}
              style={{
                cursor: "pointer",
                border: "1px solid #e0e0e0",
                width: "max-content",
              }}
              className="p-2 mb-5 fw-bolder"
            >
              Back
            </p>
            <div style={{ marginTop: "5rem", paddingBottom: "5rem" }}>
              {questionInfo?.map((question) => renderQuestion(question))}
            </div>
            <Button
              style={{ backgroundColor: "#244a59" }}
              disabled={error ? null : loading}
              className="mt-4 btn btn-dark"
              onClick={() => {
               
                handleFinal();
              }}
            >
              {loading ? (
                <Spinner size="sm" className="me-2">
                  {" "}
                  Loading...{" "}
                </Spinner>
              ) : null}
              Submit Application
            </Button>
          </div>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Questionnaire;
