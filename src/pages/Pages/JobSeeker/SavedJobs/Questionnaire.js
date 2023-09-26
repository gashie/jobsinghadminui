import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FormGroup, Label, Input, Button, Container } from "reactstrap";
import { applyForJobs } from "../../../../store/actions";

const Questionnaire = ({ questionInfo, handleBack, data }) => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    // Initialize the answers state with the provided JSON data
    const initialAnswers = questionInfo.map((question) => ({
      questionId: question.questionId,
      ans: question.ans || "",
    }));
    setAnswers(initialAnswers);
  }, [questionInfo]);

  const handleInputChange = (questionId, value) => {
    const updatedAnswers = answers.map((answer) =>
      answer.questionId === questionId ? { ...answer, ans: value } : answer
    );
    setAnswers(updatedAnswers);
  };

  const handleMultiSelectChange = (questionId, selectedOptions) => {
    const updatedAnswers = answers.map((answer) =>
      answer.questionId === questionId
        ? { ...answer, ans: selectedOptions }
        : answer
    );
    setAnswers(updatedAnswers);
  };

  const [finalData, setFinalData] = useState({});

  const dispatch = useDispatch();

  const handleFinal = () => {
    const formData = new FormData();
    formData.append("fullName", data?.fullName);
    formData.append("email", data?.email);
    formData.append("phone", data?.phone);
    formData.append("resume", data?.file);
    formData.append("answers", JSON.stringify(answers));

    dispatch(applyForJobs(formData));
  };

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
              {question.optionsData.map((option) => (
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
                {question.optionsData.map((option) => (
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
    <Container>
      <div>
        <h4 className="d-flex htstack justify-content-center">
          Step 2 of 2 (Please answer all questions)
        </h4>
        <p onClick={handleBack} style={{ cursor: "pointer" }}>
          Back
        </p>
        <div className="mt-5">
          {questionInfo?.map((question) => renderQuestion(question))}
        </div>
        <Button
          style={{ backgroundColor: "#244a59" }}
          className="mt-4 btn btn-dark"
          onClick={() => {
            console.log({ answers });
            handleFinal();
          }}
        >
          Continue
        </Button>
      </div>
    </Container>
  );
};

export default Questionnaire;
