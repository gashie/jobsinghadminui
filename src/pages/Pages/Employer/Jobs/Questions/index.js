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
import { useDispatch, useSelector } from "react-redux";
import {
  createJobQuestion,
  linkJobQuestion,
  viewMyQuestions,
} from "../../../../../store/actions";

function AddQuestion({ toggleQuestionModal, toggleSecondModal }) {
  const dispatch = useDispatch();

  const [questionsData, setQuestionsData] = useState([]);

  const handleFormSubmit = (formData) => {
    setQuestionsData([...questionsData, formData]);
    console.log(questionsData);
  };

  const {
    loading,
    error,
    idInfo,
    questionsLoading,
    questionsError,
    questions,
  } = useSelector((state) => ({
    loading: state.Jobs.idLoading,
    error: state.Jobs.idError,
    idInfo: state.Jobs.id,
    questionsLoading: state.Questions.viewQuestionsLoading,
    questionsError: state.Questions.viewQuestionsError,
    questions: state.Questions.questions,
  }));

  const [finalQuestions, setFinalQuestions] = useState([]);
  const [sendQuestion, setSendQuestion] = useState({});

  useEffect(() => {
    console.log(questionsData);
    setFinalQuestions(questionsData);
    setSendQuestion({
      jobId: loading === false && error === false ? idInfo?.jobId : "",
      hasQuestions: "yes",
      questions: questionsData,
    });
    dispatch(viewMyQuestions());
  }, [questionsData, dispatch]);

  const [questionType, setQuestionType] = useState("");

  const handleSubmitQuestion = () => {
    dispatch(createJobQuestion(sendQuestion));
    dispatch(viewMyQuestions());
    toggleQuestionModal();
    toggleSecondModal();
  };

  const [linkStatus, setLinkStatus] = useState("");
  const [linkstate, setLinkState] = useState(true);

  const handleLink = (item) => {
    console.log(item);
    setLinkStatus(item.questionId);
    setLinkState(true);

    console.log(idInfo?.jobId, item?.jobId);
    if (idInfo?.jobId !== item?.questionId) {
      dispatch(
        linkJobQuestion({
          questionId: item?.questionId,
          jobId: idInfo?.jobId,
        })
      );
      console.log("link will be amde");
      console.log(idInfo?.jobId, item?.jobId);
    }
  };

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
                        <div
                          className="d-flex gap-2"
                          style={{ flexWrap: "wrap" }}
                        >
                          {finalQuestions.map((item, key) => (
                            <Row key={key}>
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

                        <Button
                          style={{ backgroundColor: "#00d084", border: "none" }}
                          className="btn btn-dark"
                          disabled={finalQuestions.length === 0}
                          onClick={handleSubmitQuestion}
                        >
                          Add all generated questions
                        </Button>
                      </Col>
                      <Col>
                        <h4>Link Questions to Job (Step 3)</h4>
                        <div
                          className="d-flex gap-2"
                          style={{ flexWrap: "wrap" }}
                        >
                          {questionsLoading === false &&
                          questionsError === false ? (
                            questions?.map((item, key) => (
                              <Row key={key}>
                                <div>
                                  <p
                                    style={{
                                      border: `1px solid ${
                                        idInfo?.jobId === item?.jobId
                                          ? "#00d084"
                                          : "black"
                                      }`,
                                      borderRadius: "10px",
                                      backgroundColor: `${
                                        idInfo?.jobId === item?.jobId
                                          ? "#00d084"
                                          : "white"
                                      }`,
                                    }}
                                    className="p-1"
                                  >
                                    {item.questionTitle}{" "}
                                    <i
                                      className={`bx ${
                                        idInfo?.jobId === item?.jobId
                                          ? "bx-link"
                                          : "bx-link"
                                      } p-2 fw-bolder fs-17`}
                                      style={{
                                        color: "#00d084",
                                        backgroundColor: "#dcf1d4",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                      }}
                                      onClick={() => {
                                        handleLink(item);
                                      }}
                                    ></i>
                                  </p>
                                </div>
                              </Row>
                            ))
                          ) : (
                            <p>Loading Questions</p>
                          )}
                        </div>

                        <Button
                          style={{ backgroundColor: "#00d084", border: "none" }}
                          className="btn btn-dark"
                          //   disabled={finalQuestions.length === 0}
                          onClick={handleSubmitQuestion}
                        >
                          Save Job
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
