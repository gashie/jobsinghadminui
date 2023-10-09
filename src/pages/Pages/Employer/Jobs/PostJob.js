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
  FormFeedback,
} from "reactstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Editor from "./Editor";
import {
  category,
  createJob,
  employerCompanies,
  employers,
  jobStatus,
  rateCard,
} from "../../../../store/actions";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AddQuestion from "./Questions";
import Payment from "./Payment/index";
import Select from "react-select";
import locationData from "../../../../common/data/cities.json";

const AddJob = () => {
  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    console.log(data); // This will log the content of the editor to the console
  };

  const navigate = useNavigate();

  const [modal_standard, setmodal_standard] = useState(false);

  function tog_standard() {
    setmodal_standard(!modal_standard);
  }

  // const options = Object.keys(locationData).map((region) => {
  //   const cities = locationData[region].map((city) => ({
  //     value: city,
  //     label: city,
  //   }));

  //   return {
  //     label: region,
  //     options: cities,
  //   };
  // });

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
    jobsInfo: state.Jobs.jobsInfo,
  }));

  const [inputValue, setInputValue] = useState("");
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [finalLocations, setFinalLocations] = useState([]);

  // const handleInputChange = (e) => {
  //   setInputValue(e.target.value);
  // };

  // const handleKeyUp = (e) => {
  //   if (e.key === " " && inputValue.trim() !== "") {
  //     const newLocation = { locationName: inputValue.trim() };
  //     setSelectedLocations([...selectedLocations, newLocation]);
  //     setFinalLocations([...finalLocations, newLocation]);
  //     setInputValue("");
  //   } else if (
  //     e.key === "Backspace" &&
  //     inputValue === "" &&
  //     selectedLocations.length > 0
  //   ) {
  //     const newLocations = [...selectedLocations];
  //     newLocations.pop();
  //     setSelectedLocations(newLocations);
  //   }
  // };

  const [email, setEmail] = useState("Redirect to my website");
  const [url, setUrl] = useState("");

  const [questionName, setQuestionName] = useState("Redirect to my website");
  const [description, setDescription] = useState();

  const handleEditorContentChange = (content) => {
    setDescription(content);
  };

  const updateEditorData = (editorId, html) => {
    setEditorData({
      ...editorData,
      [editorId]: html,
    });
  };

  const [editorData, setEditorData] = useState({
    editor1: "",
    editor2: "",
    // Add more editors as needed
  });

  const { user } = useSelector((state) => ({
    user: state.Login.userInfo,
  }));

  const [selectedMulti, setSelectedMulti] = useState([]);

  const options = [];
  for (const region in locationData) {
    const cities = locationData[region].map((city) => ({
      value: city,
      label: city,
    }));

    options.push(...cities);
  }

  const handleMulti = (selectedOptions) => {
    setSelectedMulti(selectedOptions);
  };

  const formattedSelectedMulti = selectedMulti.map((option) => ({
    locationName: option.label,
  }));


  console.log(formattedSelectedMulti,4)

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      jobTitle: "",
      jobCategoryId: null,
      jobLocation: [],
      jobSalaryAmount: "",
      companyId: "",
      isCompanyConfidential: "",
      jobDescription: "",
      jobSkillsId: "",
      jobSalaryCurrency: "",
      jobStatusId: null,
      applyMode: "",
      applyLink: "",
      education: "",
      goLiveDate: "",
      yearsOfExperience: null,
      appliedEmail: "",
    },
    validateOnChange: true,
    validationSchema: Yup.object({
      jobTitle: Yup.string().required("Please enter a job title"),
      jobCategoryId: Yup.string().required("Please select a job category"),
      // jobLocation: Yup.string().required("Please select a job location"),
      jobSalaryAmount: Yup.number()
        .typeError("Salary must be a number")
        .required("Please enter a salary amount"),
      // companyId: Yup.string().required("Please select a company"),
      isCompanyConfidential: Yup.boolean(),
      // jobDescription: Yup.string().required("Please enter a job description"),

      jobStatusId: Yup.string().required("Please select a job category"),
      applyMode: Yup.string().required("Please select a job category"),
      // applyLink: Yup.string().required("Please select a job category"),
      education: Yup.string().required("Please select a job category"),
      goLiveDate: Yup.string().required("Please select a job category"),
      yearsOfExperience: Yup.number().integer(
        "Years of experience must be a whole number"
      ),
      // appliedEmail: Yup.string().email("Invalid email format"),
    }),
    appliedEmail: Yup.string().email("Invalid email format"),
    onSubmit: (values) => {
      const finalData = {
        jobTitle: values.jobTitle,
        jobCategoryId: values.jobCategoryId,
        jobLocation: formattedSelectedMulti,
        jobSalaryAmount: values.jobSalaryAmount,
        companyId: user?.userInfo?.company?.companyId,
        isCompanyConfidential: isConfidential,

        jobSkills: [],
        jobSalaryCurrency: "Ghc",
        jobStatus: values.jobStatusId,
        applyMode: values.applyMode,
        applyLink: values.applyLink,
        yearsOfExperience: values.yearsOfExperience,
        appliedEmail: values.appliedEmail,
        education: values.education,
        howToApply: editorData.editor2,
        jobDescription: editorData.editor2,
        goLiveDate: values.goLiveDate,
      };

      console.log(finalData)

      toggleModal();
      dispatch(createJob(finalData));

      // navigate("/manage-jobs");

      validation.resetForm();
    },
  });

  // Define state for the checkbox
  const [isConfidential, setIsConfidential] = useState(false);

  // Function to handle checkbox change
  const handleCheckboxChange = () => {
    setIsConfidential(!isConfidential);
  };

  const { companyLoading, companyInfo, companyError } = useSelector(
    (state) => ({
      companyLoading: state.Users.companiesLoading,
      companyError: state.Users.companiesError,
      companyInfo: state.Users.employerCompanies,
    })
  );

  // useEffect(() => {
  //   dispatch(employerCompanies({ viewAction: "" }));
  // }, [dispatch]);

  //Payment Modals
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const [secondIsOpen, setSecondIsOpen] = useState(false);

  const toggleSecondModal = () => {
    setSecondIsOpen(!secondIsOpen);
  };

  const [questionIsOpen, setQuestionIsOpen] = useState(false);

  const toggleQuestionModal = () => {
    setQuestionIsOpen(!questionIsOpen);
  };

  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  const togglePaymentModal = () => {
    setIsPaymentOpen(!isPaymentOpen);
  };

  useEffect(() => {
    dispatch(rateCard({ viewAction: "" }));
  }, [dispatch]);

 
  console.log(formattedSelectedMulti, 1);
  console.log(validation.errors)
  return (
    <>
      <div className="m-2 p-2 mb-5">
        {/* <div className="p-3 mt-5" style={{ marginTop: "0rem" }}>
          <div className="d-flex" style={{ justifyContent: "space-between" }}>
            <div className="mt-">
              <h4 className="fw-bolder mt-5">Add Job</h4>
              <p className="">
                <b>Dashboard</b> / Add Job
              </p>
            </div>

            <div className="mt-5">
              <Link to="/manage-jobs">
                <p className="text-end mt-0">
                  <button
                    className="btn text-light p-3"
                    style={{ backgroundColor: "#00d084" }}
                  >
                    Back to Jobs
                  </button>
                </p>
              </Link>
            </div>
          </div>
        </div> */}

        <Card className="p-3">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              validation.handleSubmit();
              // toggleSecondModal();
              return false;
            }}
          >
            <Row>
              {/* left */}

              {/* <Col md={20}>
                <div className="mb-3 mt-4">
                  <Label for="emailidInput" className="form-label">
                    Employer
                  </Label>
                  <select
                    className="form-select p-3"
                    id="companyId"
                    value={validation.values.companyId}
                    onChange={validation.handleChange}
                  >
                    <option>Select Company</option>
                    {companyLoading === false && companyError === false ? (
                      companyInfo?.map((item, key) => (
                        <option key={key} value={item?.companyId}>
                          {item?.companyName}
                        </option>
                      ))
                    ) : (
                      <option>loading employers...</option>
                    )}
                  </select>
                </div>
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
                      invalid={
                        validation.touched.jobTitle &&
                        validation.errors.jobTitle
                          ? true
                          : false
                      }
                    />
                  </Col>
                </Row>
                {validation.touched.jobTitle && validation.errors.jobTitle ? (
                  <FormFeedback type="invalid">
                    <div>{validation.errors.jobTitle}</div>
                  </FormFeedback>
                ) : null}

                <label>Years of Experience</label>
                <Row className="mb-3">
                  <Col lg={15}>
                    <Input
                      type="number"
                      className="form-control p-3"
                      id="yearsOfExperience"
                      placeholder="Years of experience"
                      onChange={validation.handleChange}
                      value={validation.values.yearsOfExperience || ""}
                      invalid={
                        validation.touched.yearsOfExperience &&
                        validation.errors.yearsOfExperience
                          ? true
                          : false
                      }
                    />
                  </Col>
                </Row>

                <label>Go Live Date</label>
                <Row className="mb-3">
                  <Col lg={15}>
                    <Input
                      type="date"
                      className="form-control p-3"
                      id="goLiveDate"
                      name="goLiveDate"
                      placeholder=""
                      onChange={validation.handleChange}
                      value={validation.values.goLiveDate || ""}
                      invalid={
                        validation.touched.goLiveDate &&
                        validation.errors.goLiveDate
                          ? true
                          : false
                      }
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <label>Select Category</label>
                  <Col lg={15}>
                    <Input
                      className="form-select p-3"
                      name="jobCategoryId"
                      id="jobCategoryId"
                      type="select"
                      value={validation.values.jobCategoryId}
                      onChange={validation.handleChange}
                      invalid={
                        validation.touched.jobCategoryId &&
                        validation.errors.jobCategoryId
                          ? true
                          : false
                      }
                    >
                      <option>Select Category</option>
                      {catLoading === false && catError === false ? (
                        categoryInfo?.map((item, key) => (
                          <option key={key} value={item?.jobCategoryId}>
                            {item?.jobCategoryName}
                          </option>
                        ))
                      ) : (
                        <option>loading categories...</option>
                      )}
                    </Input>
                  </Col>
                </Row>

                <label>Education Level</label>
                <Row className="mb-3">
                  <Col lg={15}>
                    <Input
                      type="text"
                      className="form-control p-3"
                      id="education"
                      placeholder="Education level"
                      onChange={validation.handleChange}
                      value={validation.values.education || ""}
                      invalid={
                        validation.touched.education &&
                        validation.errors.education
                          ? true
                          : false
                      }
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col lg={15} className="d-flex align-items-center">
                    <Input
                      type="checkbox"
                      className="form-check-input"
                      id="confidentialCheckbox"
                      placeholder="Education level"
                      checked={isConfidential} // Use state variable for checked attribute
                      onChange={handleCheckboxChange} // Update state on change
                      invalid={
                        validation.touched.isCompanyConfidential &&
                        validation.errors.isCompanyConfidential
                          ? true
                          : false
                      }
                    />
                    <label
                      htmlFor="confidentialCheckbox"
                      className="form-check-label"
                    >
                      Mark company as confidential
                    </label>
                  </Col>
                </Row>
              </Col>

              {/* right */}
              <Col>
                <Row className="mb-3">
                  <label>Select Status</label>
                  <Col lg={12}>
                    <Input
                      className="form-select p-3"
                      name="jobStatusId"
                      id="jobStatusId"
                      type="select"
                      value={validation.values.jobStatusId}
                      onChange={validation.handleChange}
                      invalid={
                        validation.touched.jobStatusId &&
                        validation.errors.jobStatusId
                          ? true
                          : false
                      }
                    >
                      <option>Permanent</option>
                      <option>Contract</option>
                      <option>Part Time</option>
                    </Input>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <label>Select Apply Mode</label>
                  <Col lg={12}>
                    <Input
                      className="form-select p-3"
                      name="applyMode"
                      id="applyMode"
                      type="select"
                      value={validation.values.applyMode}
                      onChange={validation.handleChange}
                      invalid={
                        validation.touched.applyMode &&
                        validation.errors.applyMode
                          ? true
                          : false
                      }
                    >
                      <option>select apply mode</option>
                      <option>Email</option>
                      <option>Website</option>
                    </Input>
                  </Col>
                </Row>

                {validation.values.applyMode === "Email" ? (
                  <Row className="mb-3">
                    <label>Apply Email</label>
                    <Col lg={12}>
                      <Input
                        className="form-select p-3"
                        name="appliedEmail"
                        id="appliedEmail"
                        type="text"
                        value={validation.values.appliedEmail}
                        onChange={validation.handleChange}
                        invalid={
                          validation.touched.appliedEmail &&
                          validation.errors.appliedEmail
                            ? true
                            : false
                        }
                      />
                    </Col>
                  </Row>
                ) : validation.values.applyMode === "Website" ? (
                  <Row className="mb-3">
                    <label>Apply Link</label>
                    <Col lg={12}>
                      <Input
                        className="form-select p-3"
                        name="applyLink"
                        id="applyLink"
                        type="text"
                        value={validation.values.applyLink}
                        onChange={validation.handleChange}
                        invalid={
                          validation.touched.applyLink &&
                          validation.errors.applyLink
                            ? true
                            : false
                        }
                      />
                    </Col>
                  </Row>
                ) : (
                  ""
                )}

                <Row>
                  <Col lg={15} className="">
                    <div>
                      <div className="d-flex gap-1">
                        <label>Select Job Location</label>
                      </div>
                      <Select
                        isMulti
                        value={selectedMulti}
                        onChange={handleMulti}
                        options={options}
                        className={
                          validation.touched.jobLocation &&
                          validation.errors.jobLocation
                            ? "invalid-select"
                            : ""
                        }
                        
                        id="jobLocation"
                        name="jobLocation"
                      />
                      {validation.touched.jobLocation &&
                      validation.errors.jobLocation ? (
                        <div className="invalid-feedback">
                          {validation.errors.jobLocation}
                        </div>
                        
                      ) : null}
                    </div>
                  </Col>
                </Row>

                <Row className="mb-3 mt-3">
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
                      invalid={
                        validation.touched.jobSalaryAmount &&
                        validation.errors.jobSalaryAmount
                          ? true
                          : false
                      }
                    />
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="mt-3">
              <h6 style={{ color: "#244a59", fontWeight: "bolder" }}>
                Description
              </h6>
              <Col lg={12}>
                <Editor
                  editorId="editor2"
                  transmitHtml={updateEditorData}
                  invalid={
                    validation.touched.jobDescription &&
                    validation.errors.jobDescription
                      ? true
                      : false
                  }
                />
              </Col>
            </Row>

            <Row className="mt-5">
              <h6 style={{ color: "#244a59", fontWeight: "bolder" }}>
                How to apply
              </h6>
              <Col lg={12}>
                <Editor editorId="editor2" transmitHtml={updateEditorData} />
              </Col>
            </Row>

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
        </Card>
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

      {/* First Step */}
      <Modal isOpen={modalIsOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}></ModalHeader>
        <ModalBody>
          Would you like to save this job or procced to add questions?
        </ModalBody>
        <ModalFooter>
          <Button
            className="btn btn-dark"
            onClick={() => {
              toggleModal();
              toggleSecondModal();
            }}
            style={{ backgroundColor: "#244a59" }}
          >
            Save
          </Button>
          <Button
            className="btn btn-dark"
            onClick={() => {
              toggleModal();
              toggleQuestionModal();
            }}
            style={{ backgroundColor: "#244a59" }}
          >
            Add Questions
          </Button>
        </ModalFooter>
      </Modal>

      {/* Second Step */}
      <Modal isOpen={secondIsOpen} toggle={toggleSecondModal}>
        <ModalHeader toggle={toggleSecondModal}></ModalHeader>
        <ModalBody>Would you like to Pay for Job Posting Now?</ModalBody>
        <ModalFooter>
          <Button
            className="btn btn-dark"
            onClick={() => {
              toggleSecondModal();
              togglePaymentModal();
            }}
            style={{ backgroundColor: "#244a59" }}
          >
            Pay now
          </Button>
          <Button
            className="btn btn-dark"
            onClick={() => {
              toggleSecondModal();
              navigate("/employer-jobs");
              // payLater()
            }}
            style={{ backgroundColor: "#244a59" }}
          >
            Pay Later
          </Button>
        </ModalFooter>
      </Modal>

      {/* Transaction Step */}
      <Modal
        isOpen={isPaymentOpen}
        toggle={togglePaymentModal}
        size="xl"
        className="modal-fullscreen"
      >
        <ModalHeader toggle={togglePaymentModal}></ModalHeader>
        <ModalBody>
          <Payment
            togglePaymentModal={togglePaymentModal}
            //  payLater={payLater}
          />
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>

      {/* Question Step */}
      <Modal
        isOpen={questionIsOpen}
        toggle={toggleQuestionModal}
        size="xl"
        className="modal-fullscreen"
      >
        <ModalHeader toggle={toggleQuestionModal}></ModalHeader>
        <ModalBody>
          <AddQuestion
            toggleQuestionModal={toggleQuestionModal}
            toggleSecondModal={toggleSecondModal}
          />
        </ModalBody>
        {/* <ModalFooter>
          <Button color="secondary" onClick={toggleQuestionModal} style={{backgroundColor: '#244a59'}}>
            Save
          </Button>
          <Button color="primary" onClick={toggleQuestionModal} style={{backgroundColor: '#244a59'}}>
            Add Questions
          </Button>
        </ModalFooter> */}
      </Modal>
    </>
  );
};

export default AddJob;
