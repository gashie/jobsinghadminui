import {
  Col,
  Row,
  Modal,
  ModalBody,
  Input,
  Container,
  Button,
  Form,
  Card,
  ModalHeader,
  ModalFooter,
  FormGroup,
  Label,
} from "reactstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Editor from "./Editor";
import { category, createJob, employers, jobStatus } from "../../../../store/actions";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const AddJob = () => {
  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    console.log(data); // This will log the content of the editor to the console
  };

  const [modal_standard, setmodal_standard] = useState(false);

  function tog_standard() {
    setmodal_standard(!modal_standard);
  }

  const [selectedOption, setSelectedOption] = useState("Select one");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  // const handleCheckboxChange = (event) => {
  //   const value = event.target.value;
  //   if (event.target.checked) {
  //     setSelectedCheckboxes([...selectedCheckboxes, value]);
  //   } else {
  //     setSelectedCheckboxes(
  //       selectedCheckboxes.filter((item) => item !== value)
  //     );
  //   }
  // };

  // Sample list of checkbox items
  const list1 = [{ id: 1, label: "Use auto responder" }];
  const list2 = [
    { id: 1, label: "Equal or more than passing score" },
    { id: 2, label: "Less than passing score" },
  ];
  const list3 = [
    { id: 1, label: "Equal or more than passing score" },
    { id: 2, label: "Less than passing score" },
  ];
  const list4 = [
    { id: 1, label: "Yes/No" },
    { id: 2, label: "List of answers with multiple choice" },
    { id: 3, label: "List of answers with sinlge choice" },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(employers({ viewAction: "notdeleted", userType: 3 }));
    dispatch(category({ viewAction: "" }));
    dispatch(jobStatus({ viewAction: "" }));
  }, [dispatch]);

  const { loading, error, employerInfo, catLoading, catError, categoryInfo } =
    useSelector((state) => ({
      loading: state.Users.loading,
      error: state.Users.error,
      employerInfo: state.Users.employersInfo,
      catLoading: state.Industry.loading,
      catError: state.Industry.error,
      categoryInfo: state.Industry.categoryInfo,
    }));

  const { jobloading, joberror, jobsInfo } = useSelector((state) => ({
    jobloading: state.Jobs.loading,
    joberror: state.Jobs.error,
    jobsInfo: state.Jobs.jobStatusInfo,
  }));

  const [inputValue, setInputValue] = useState("");
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [finalLocations, setFinalLocations] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyUp = (e) => {
    if (e.key === " " && inputValue.trim() !== "") {
      const newLocation = { locationName: inputValue.trim() };
      setSelectedLocations([...selectedLocations, newLocation]);
      setFinalLocations([...finalLocations, newLocation]);
      setInputValue("");
    } else if (
      e.key === "Backspace" &&
      inputValue === "" &&
      selectedLocations.length > 0
    ) {
      const newLocations = [...selectedLocations];
      newLocations.pop();
      setSelectedLocations(newLocations);
    }
  };

  const [email, setEmail] = useState("Redirect to my website");
  const [url, setUrl] = useState("");

  const [questionName, setQuestionName] = useState("Redirect to my website");
  const [description, setDescription] = useState()

  const handleEditorContentChange = (content) => {
    setDescription(content)
  };

 

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      jobTitle: "",
      jobCategoryId: null,
      jobLocation: "",
      jobSalaryAmount: "",
      companyId: "",
      isCompanyConfidential: "",
      jobDescription: "",
      jobSkillsId: "",
      jobSalaryCurrency: "",
      jobStatusId: null,
      applyMode: "",
      applyLink: "",
    },
    validateOnChange: true,
    // validationSchema: Yup.object({
    //   rateTitle: Yup.string().required("Please enter a rate title"),
    //   rateDescription: Yup.string().required("Please enter a rate description"),
    //   ratePrice: Yup.string().required("Please enter rate price"),
    //   rateLimit: Yup.string().required("Please enter rate limit"),
    // }),
    onSubmit: (values) => {
      const finalData = {
        jobTitle: values.jobTitle,
        jobCategoryId: values.jobCategoryId,
        jobLocation: finalLocations,
        jobSalaryAmount: values.jobSalaryAmount,
        companyId: "",
        isCompanyConfidential: isConfidential,
        jobDescription: description,
        jobSkillsId: "1",
        jobSalaryCurrency: "Ghc",
        jobStatusId: values.jobStatusId,
        applyMode: "",
        applyLink: "",
      };

      
      dispatch(createJob(finalData));
      
      validation.resetForm();
     
    },
  });

  // Define state for the checkbox
  const [isConfidential, setIsConfidential] = useState(false);

  // Function to handle checkbox change
  const handleCheckboxChange = () => {
    setIsConfidential(!isConfidential);
  };

  

  return (
    <>
      <div className="m-2 p-2 mb-5">
      

        <div className="p-3">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              validation.handleSubmit();
              return false;
            }}
          >
            <Row>
              {/* left */}

              {/* <Col lg={20} className="mb-3">
                <select className="form-select p-3">
                  {loading === false && error === false ? (
                    employerInfo?.map((item, key) => (
                      <option key={key}>{item?.fullName}</option>
                    ))
                  ) : (
                    <option>loading employers...</option>
                  )}
                </select>
              </Col> */}

              <Col>
                <label>Job Title</label>
                <Row className="mb-3">
                  <Col lg={15}>
                    <Input
                      type="text"
                      className="form-control p-3"
                      id="jobTitle"
                      placeholder="Job title"
                      onChange={validation.handleChange}
                      value={validation.values.jobTitle || ""}
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <label>Select Category</label>
                  <Col lg={15}>
                    <select
                      className="form-select p-3"
                      name="jobCategoryId"
                      id="jobCategoryId"
                      value={validation.values.jobCategoryId}
                      onChange={validation.handleChange}
                    >
                      {catLoading === false && catError === false ? (
                        categoryInfo?.map((item, key) => (
                          <option key={key} value={item?.jobCategoryId}>
                            {item?.jobCategoryName}
                          </option>
                        ))
                      ) : (
                        <option>loading categories...</option>
                      )}
                    </select>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col lg={15} className="d-flex align-items-center">
                    <Input
                      type="checkbox"
                      className="form-check-input"
                      id="confidentialCheckbox"
                      checked={isConfidential} // Use state variable for checked attribute
                      onChange={handleCheckboxChange} // Update state on change
                    />
                    <label
                      htmlFor="confidentialCheckbox"
                      className="form-check-label"
                    >
                      Mark company as confidential
                    </label>
                  </Col>
                </Row>

                {/* <Row className="mb-3">
                  <label>Enter Education Level</label>
                  <Col lg={15}>
                    <Input
                      type="text"
                      className="form-control p-3"
                      id="websitetext"
                      placeholder="Education"
                      onChange={validation.handleChange}
                      value={validation.values.education || ""}
                    />
                  </Col>
                </Row> */}

                {/* <Row className="mb-3">
                  <Col
                    lg={15}
                    className="d-flex gap-3 p-2"
                    style={{
                      border: "1px solid #ebeff0",
                      borderRadius: "0.5rem",
                    }}
                  >
                    <Button
                      className="btn btn-light"
                      onClick={() => tog_standard()}
                    >
                      How to apply
                    </Button>
                    <p style={{ color: "red" }}>Not set</p>
                  </Col>
                </Row> */}
              </Col>

              {/* right */}
              <Col>
                <Row className="mb-3">
                  <label>Select Status</label>
                  <Col lg={12}>
                    <select
                      className="form-select p-3"
                      name="jobStatusId"
                      id="jobStatusId"
                      value={validation.values.jobStatusId}
                      onChange={validation.handleChange}
                    >
                      {jobloading === false && joberror === false ? (
                        jobsInfo?.map((item, key) => (
                          <option key={key} value={item?.jobStatusId}>
                            {item?.jobStatusTitle}
                          </option>
                        ))
                      ) : (
                        <option>loading status...</option>
                      )}
                    </select>
                  </Col>
                </Row>

                {/* <Row className="mb-3">
                  <label>Select Category</label>
                  <Col lg={15}>
                    <select
                      className="form-select p-3"
                      name="jobCategoryId"
                      id="jobCategoryId"
                      value={validation.values.jobCategoryId}
                      onChange={validation.handleChange}
                    >
                      {catLoading === false && catError === false ? (
                        categoryInfo?.map((item, key) => (
                          <option key={key} value={item?.jobCategoryId}>
                            {item?.jobCategoryName}
                          </option>
                        ))
                      ) : (
                        <option>loading categories...</option>
                      )}
                    </select>
                  </Col>
                </Row> */}

                <Row className="mb-3">
                  <Col lg={15} className="p-2">
                    <div>
                      <div className="d-flex gap-1">
                        {finalLocations.map((location, index) => (
                          <div
                            className="selected-location p-1"
                            key={index}
                            style={{
                              backgroundColor: "#e0e0e0",
                              borderRadius: "6px",
                            }}
                          >
                            {location.locationName}
                          </div>
                        ))}
                      </div>
                      <br />
                      <Input
                        type="text"
                        className="form-control p-3"
                        id="websitetext"
                        placeholder="Job location eg. Accra, Tarkwa"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyUp={handleKeyUp}
                      />
                    </div>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <label>Job Salary Amount</label>
                  <Col lg={15}>
                    <Input
                      type="number"
                      className="form-control p-3"
                      id="jobSalaryAmount"
                      // name='jobSalaryAmount'
                      placeholder="Enter Job Salary Amount"
                      onChange={validation.handleChange}
                      value={validation.values.jobSalaryAmount || ""}
                    />
                  </Col>
                </Row>

                {/* <Row className="mb-3">
                <Col lg={15}>
                  <Input
                    type="date"
                    className="form-control p-3"
                    id="websitetext"
                    placeholder="End date"
                  />
                </Col>
              </Row> */}
              </Col>
            </Row>

            <Row className="mt-3">
              <h6 style={{ color: "#244a59", fontWeight: "bolder" }}>
                Description
              </h6>
              <Col lg={12}>
                {/* <Form method="post">
                <CKEditor
                  editor={ClassicEditor}
                  data=""
                  onChange={handleEditorChange} // Use the custom handleEditorChange function
                />
              </Form> */}
                <Editor onContentChange={handleEditorContentChange} />
              </Col>
            </Row>
            {/* 
            <Row className="mt-3">
              <h6 style={{ color: "#244a59", fontWeight: "bolder" }}>
                How to apply
              </h6>
              <Col lg={12}> */}
            {/* <Form method="post">
                <CKEditor
                  editor={ClassicEditor}
                  data=""
                  onChange={handleEditorChange} // Use the custom handleEditorChange function
                />
              </Form> */}
            {/* <Editor />
              </Col>
            </Row> */}

            <div className="text-start d-flex gap-3 mt-4">
              
              <button
                type="submit"
                className="btn btn-dark"
                style={{ backgroundColor: "#244a59" }}
              >
                Submit
              </button>
             
            </div>
          </Form>
        </div>
      </div>

      {/* Modals */}
      {/* 
      <Button color="primary" onClick={() => tog_standard()}>
        Standard Modal
      </Button> */}

      <Modal
        id="myModal"
        isOpen={modal_standard}
        toggle={() => {
          tog_standard();
        }}
        style={{ borderRadius: "1rem" }}
      >
        <div
          className="d-flex p-3"
          style={{
            justifyContent: "space-between",
            backgroundColor: "#244a59",
          }}
        >
          <div></div>

          <div>
            <h5 className="modal-title text-light" id="myModalLabel">
              Application settings
            </h5>
          </div>
          <div className="text-end">
            <Button
              style={{
                backgroundColor: "#4e6d79",
                borderRadius: "0.7rem",
                color: "#304852",
              }}
              type="button"
              className="btn-close p-1"
              onClick={() => {
                setmodal_standard(false);
                setSelectedOption("Select one");
              }}
              aria-label="Close"
            ></Button>
          </div>
        </div>

        <ModalBody>
          {selectedOption === "Select one" ? (
            <Row className="mb-3">
              <Col lg={15}>
                <label>Receive application:</label>
                <select
                  className="form-select p-3"
                  onChange={handleSelectChange}
                  value={selectedOption}
                >
                  <option>Select one</option>
                  <option>Redirect to my website</option>
                  <option>Receive via email</option>
                  {/* <option>Application tracker</option> */}
                </select>
              </Col>
            </Row>
          ) : selectedOption === "Application tracker" ? (
            <Row>
              <Col xl={9} md={9} className="">
                <label className="fs-11">
                  Accept resume with these keywords
                </label>
                <Input
                  type="text"
                  className="form-control p-3"
                  id="websitetext"
                  placeholder=""
                />
                <p className="fw-light fs-10 mt-2">
                  Please separate each keyword with comma. eg. Banking, Nurse
                </p>
              </Col>

              <Col xl={3} md={3}>
                <label className="fs-11"></label>
                <select className="form-select p-3 form-control mt-2">
                  <option>None</option>
                  <option>...</option>
                </select>
              </Col>

              <hr className="mt-3" />

              <h6 className="mt-2">Screening questionnaires</h6>

              <Row>
                <Col xl={20} md={20} className="mt-4">
                  <label className="fs-11">Question Name</label>
                  <Input
                    type="text"
                    className="form-control p-3"
                    id="websitetext"
                    placeholder="Enter question name"
                  />
                </Col>
              </Row>

              <Row>
                <Col xl={20} md={20} className="mt-4">
                  <label className="fs-11">Passing score</label>
                  <Input
                    type="text"
                    className="form-control p-3"
                    id="websitetext"
                    placeholder="Select passing score"
                  />
                </Col>
              </Row>

              {list1.map((item) => (
                <Row key={item.id} className="mt-3">
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        value={item.label}
                        checked={selectedCheckboxes.includes(item.label)}
                        onChange={handleCheckboxChange}
                      />{" "}
                      {item.label}
                    </Label>
                  </FormGroup>
                </Row>
              ))}

              <p className="mt-3">
                Send auto-reply email to candidates whose score is
              </p>
              {list2.map((item) => (
                <Row key={item.id}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        value={item.label}
                        checked={selectedCheckboxes.includes(item.label)}
                        onChange={handleCheckboxChange}
                      />{" "}
                      {item.label}
                    </Label>
                  </FormGroup>
                </Row>
              ))}
              <p className="mt-3">
                Send auto-reply email to candidates whose score is
              </p>
              {list3.map((item) => (
                <Row key={item.id}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        value={item.label}
                        checked={selectedCheckboxes.includes(item.label)}
                        onChange={handleCheckboxChange}
                      />{" "}
                      {item.label}
                    </Label>
                  </FormGroup>
                </Row>
              ))}
              <p className="mt-3">Question answer type</p>
              {list4.map((item) => (
                <Row key={item.id}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        value={item.label}
                        checked={selectedCheckboxes.includes(item.label)}
                        onChange={handleCheckboxChange}
                      />{" "}
                      {item.label}
                    </Label>
                  </FormGroup>
                </Row>
              ))}
            </Row>
          ) : selectedOption === "Receive via email" ? (
            <Row>
              <h6 className="mt-2">Screening questionnaires</h6>

              <div>
                <Row>
                  <Col xl={20} md={20} className="mt-4">
                    <label className="fs-11">Receive application</label>
                    <Input
                      type="text"
                      className="form-control p-3"
                      id="websitetext"
                      placeholder="Enter question name"
                      value={questionName} // Use state variable for value
                      onChange={(e) => setQuestionName(e.target.value)} // Update state on change
                    />
                  </Col>
                </Row>

                <Row>
                  <Col xl={20} md={20} className="mt-4">
                    <Input
                      type="text"
                      className="form-control p-3"
                      id="websitetext"
                      placeholder="Enter url (eg. http://email@gmail.com.com)"
                      value={url} // Use state variable for value
                      onChange={(e) => setUrl(e.target.value)} // Update state on change
                    />
                  </Col>
                </Row>
              </div>
            </Row>
          ) : selectedOption === "Redirect to my website" ? (
            <Row>
              <h6 className="mt-2">Screening questionnaires</h6>

              <div>
                <Row>
                  <Col xl={20} md={20} className="mt-4">
                    <label className="fs-11">Receive application</label>
                    <Input
                      type="text"
                      className="form-control p-3"
                      id="emailtext"
                      placeholder="Enter email"
                      value={email} // Use state variable for value
                      onChange={(e) => setEmail(e.target.value)} // Update state on change
                    />
                  </Col>
                </Row>

                <Row>
                  <Col xl={20} md={20} className="mt-4">
                    <Input
                      type="text"
                      className="form-control p-3"
                      id="urltext"
                      placeholder="Enter url (eg. email@gmail.com)"
                      value={url} // Use state variable for value
                      onChange={(e) => setUrl(e.target.value)} // Update state on change
                    />
                  </Col>
                </Row>
              </div>
            </Row>
          ) : (
            ""
          )}
        </ModalBody>

        <div className="text-start p-3">
          <Button
            className="btn btn-dark text-end"
            style={{ backgroundColor: "#244a59" }}
          >
            Apply settings
          </Button>{" "}
          <Button
            className="btn btn-light"
            style={{ border: "1px solid #244a59" }}
            onClick={() => {
              tog_standard();
              setSelectedOption("Select one");
            }}
          >
            Cancel
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default AddJob;
