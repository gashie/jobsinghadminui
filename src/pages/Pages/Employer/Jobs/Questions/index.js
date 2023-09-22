import React from "react";
import {
  Col,
  Row,
  CardBody,
  Card,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Modal,
  ModalBody,
  ModalHeader,
  Button,
  ModalFooter,
  Input,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Select from "react-select";
import YesNo from "./YesNo";
import Range from "./Range";
import Multiple from "./Multiple";
import Single from "./YesNo";
import { useDispatch } from "react-redux";
import { createJobQuestion } from "../../../../../store/actions";

function AddQuestion() {
 
 
  const dispatch = useDispatch()

  
 
  
  const [questionsData, setQuestionsData] = useState([]);

  const handleFormSubmit = (formData) => {
    setQuestionsData([...questionsData, formData]);
    console.log(questionsData);
  };

  const [finalQuestions, setFinalQuestions] = useState([]);

  useEffect(() => {
    console.log(questionsData);
    setFinalQuestions(questionsData);
  }, [questionsData]);

  const [questionType, setQuestionType] = useState("");

  const handleSubmitQuestion = () =>{
      dispatch(createJobQuestion(finalQuestions))
      console.log(finalQuestions)
  }

  return (
    <>
      <div>
        <div className="m-2 p-2 mb-5">
          <div className="p-3 mt-5" style={{ marginTop: "0rem" }}>
            <div className="d-flex" style={{ justifyContent: "space-between" }}>
              <div className="mt-">
                <h4 className="fw-bolder mt-5">Add Questions</h4>

              </div>

          
            </div>
          </div>
        </div>

        <div className="p-2" style={{ marginTop: "-3rem" }}>
          <Row>
            <Col lg={12} className="mt-0">
              <div>
                <div className="p-4">
                  <div id="customerList">
                    <Row>
                      <Col>
                        <h4>Create Question (Step 1)</h4>
                        <p>Select type of question to generate.</p>
                        <div className="d-flex gap-2">
                          <Button
                            className="btn btn-light"
                            onClick={() => setQuestionType("Yes/No")}
                            style={{ border: "1px solid #244a59" }}
                          >
                            Yes/No
                          </Button>
                          <Button
                            className="btn btn-light"
                            onClick={() => setQuestionType("Range")}
                            style={{ border: "1px solid #244a59" }}
                          >
                            Range
                          </Button>
                          <Button
                            className="btn btn-light"
                            onClick={() => setQuestionType("Multiple")}
                            style={{ border: "1px solid #244a59" }}
                          >
                            Multiple Choice
                          </Button>
                        </div>

                        <div className="mt-5">
                          {questionType === "Yes/No" ? (
                            <YesNo onSubmit={handleFormSubmit} />
                          ) : questionType === "Range" ? (
                            <Range onSubmit={handleFormSubmit} />
                          ) : questionType === "Multiple" ? (
                            <Multiple onSubmit={handleFormSubmit} />
                          ) : (
                            <p className="mt-4">
                              Please Select a Type of Question to create
                            </p>
                          )}
                        </div>
                      </Col>

                      <Col>
                      <h4>Generated Questions (Step 2)</h4>
                      <div className="d-flex gap-2" style={{flexWrap: 'wrap'}}>
                        {finalQuestions.map((item, key) => (
                            <Row key={key} >
                        
                            <div>
                              <p
                                style={{
                                  border: "1px solid black",
                                  borderRadius: "10px",
                                }}
                                className="p-1"
                              >
                                {item.questionTitle}{" "}
                               
                              </p>
                            </div>
                        
                          </Row>
                        ))}
                          </div>

                        <Button style={{backgroundColor: "#00d084", border: 'none'}} className="btn btn-dark" disabled={finalQuestions.length === 0}
                        onClick={handleSubmitQuestion}
                        >
                            Add all generated questions
                        </Button>
                      </Col>
                      <Col>
                      <h4>Link Questions to Job (Step 3)</h4>
                      <div className="d-flex gap-2" style={{flexWrap: 'wrap'}}>
                        {finalQuestions.map((item, key) => (
                            <Row key={key} >
                        
                            <div>
                              <p
                                style={{
                                  border: "1px solid black",
                                  borderRadius: "10px",
                                }}
                                className="p-1"
                              >
                                {item.questionTitle}{" "}
                                <i className="bx bx-link p-2 fw-bolder fs-17" style={{color: '#00d084', backgroundColor: '#dcf1d4', borderRadius: "5px", cursor: 'pointer' }}></i>
                              </p>
                            </div>
                        
                          </Row>
                        ))}
                          </div>

                        <Button style={{backgroundColor: "#00d084", border: 'none'}} className="btn btn-dark" disabled={finalQuestions.length === 0}
                        onClick={handleSubmitQuestion}
                        >
                            Continue
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

    </>
  );
}

export default AddQuestion;
