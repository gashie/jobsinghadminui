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
  FormFeedback
} from "reactstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Editor from "./Editor";
import {
  category,
  createJob,
  // employerCompanies,
  employers,
  industry,
  jobStatus,
  updateJob,
} from "../../../../store/actions";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { formatDate2 } from "../../../../Components/Hooks/formatDate2";

const EditJobs = ({ handleCloseHandle }) => {
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
  const [description, setDescription] = useState();

  const handleEditorContentChange = (content) => {
    setDescription(content);
  };

  // const validation = useFormik({
  //   enableReinitialize: true,
  //   initialValues: {
  //     jobTitle: data.jobTitle || "",
  //     jobCategoryId: null,
  //     jobLocation: "",
  //     jobSalaryAmount: data.jobSalaryAmount || "",
  //     companyId: "",
  //     isCompanyConfidential: "",
  //     jobDescription: "",
  //     jobSkillsId: "",
  //     jobSalaryCurrency: "",
  //     jobStatusId: null,
  //     applyMode: "",
  //     applyLink: "",
  //   },
  //   validateOnChange: true,
  //   validationSchema: Yup.object({
  //     jobTitle: Yup.string().required("Please enter a Job Title"),
  //     // rateDescription: Yup.string().required("Please enter a rate description"),
  //     // ratePrice: Yup.string().required("Please enter rate price"),
  //     // rateLimit: Yup.string().required("Please enter rate limit"),
  //   }),
  //   onSubmit: (values) => {

  //     const patch ={
  //         deleterecord: false,
  //         restore: 0,
  //         patch: true,
  //         jobId: data.jobId,
  //         jobTitle: values.jobTitle,
  //         patchData: {
  //             jobCategoryId: values.jobCategoryId,
  //             jobLocation: finalLocations,
  //             jobSalaryAmount: values.jobSalaryAmount,
  //             companyId: "",
  //             isCompanyConfidential: isConfidential,
  //             jobDescription: description,
  //             jobSkillsId: "1",
  //             jobSalaryCurrency: "Ghc",
  //             jobStatusId: values.jobStatusId,
  //             applyMode: "",
  //             applyLink: "",
  //             jobTitle: values.jobTitle,
  //         }
  //     }

  //     dispatch(updateJob(patch));
  //     handleCloseHandle()
  //     validation.resetForm();

  //   },
  // });


  const {data} = useSelector((state) => ({
      data: state.Jobs.editCloneData
  }))

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

  const navigate = useNavigate()


  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      jobTitle: data?.jobTitle || "",
      jobCategoryId: null,
      jobLocation: data?.jobLocation || "",
      jobSalaryAmount: data?.jobSalaryAmount || "",
      companyId: "",
      isCompanyConfidential: "",
      jobDescription: data?.jobDescription || "",
      jobSkillsId: "",
      jobSalaryCurrency: "",
      jobStatusId: null,
      applyMode: data?.applyMode || "",
      applyLink: data?.applyLink || "",
      education: data?.education || "",
      goLiveDate: formatDate2(data?.goLiveDate) || "",
      yearsOfExperience: data?.yearsOfExperience || "",
      appliedEmail: data?.appliedEmail || "",
    },
    validateOnChange: true,
    validationSchema: Yup.object({
      // goLiveDate: Yup.date().required("Please select go live date"),
      // jobCategoryId: Yup.string().required("Please job category"),
      // companyId: Yup.string().required("Please a company"),
     
    }),
    onSubmit: (values) => {
      // const finalData = {
      //   jobTitle: values.jobTitle,
      //   jobCategoryId: values.jobCategoryId,
      //   jobLocation: finalLocations,
      //   jobSalaryAmount: values.jobSalaryAmount,
      //   companyId: "",
      //   isCompanyConfidential: isConfidential,
      //   jobDescription: description,
      //   jobSkills: [],
      //   jobSalaryCurrency: "Ghc",
      //   jobStatus: values.jobStatusId,
      //   applyMode: values.applyMode,
      //   applyLink: values.applyLink,
      //   yearsOfExperience: values.yearsOfExperience,
      //   appliedEmail: values.appliedEmail,
      //   education: values.education,

        
      // };

      const finalData = {
        deleterecord: false,
        restore: 0,
        jobId: data?.jobId,
        patch: true,
        patchData: {
          jobTitle: values?.jobTitle,
          jobCategoryId: values?.jobCategoryId,
          jobLocation:finalLocations,
          jobSalaryAmount: values?.jobSalaryAmount,
          companyId: data?.companyId,
          isCompanyConfidential: isConfidential,
          howToApply: editorData.editor2,
          jobDescription: editorData.editor2,
          jobSkills: [],
          jobSalaryCurrency: "Ghc",
          jobStatus: values?.jobStatusId,
          applyMode: values?.applyMode,
          applyLink: values?.applyLink,
          appliedEmail: values?.appliedEmail,
        }
      };
      


     

      dispatch(updateJob(finalData));
       navigate('/employer-jobs');
      handleCloseHandle()
      validation.resetForm();
    },
  });


  const { inLoading, inError, info } = useSelector((state) => ({
    catLoading: state.Industry.loading,
    catError: state.Industry.error,
    categoryInfo: state.Industry.industryInfo,
  }));

  // useEffect(()=>{
  //    dispatch(employerCompanies({viewAction: ""}))
  // }, [dispatch])


  const { companyLoading, companyInfo, companyError } = useSelector((state) => ({
    companyLoading: state.Users.companiesLoading, 
    companyError: state.Users.companiesError, 
    companyInfo: state.Users.employerCompanies
  }));

  

  // Define state for the checkbox
  const [isConfidential, setIsConfidential] = useState(false);

  // Function to handle checkbox change
  const handleCheckboxChange = () => {
    setIsConfidential(!isConfidential);
  };


  return (
    <>
      <div className="m-2 p-0 mb-5">
        {/* <div className="p-0 mt-5" style={{ marginTop: "0rem" }}>
            <div className="d-flex" style={{ justifyContent: "space-between" }}>
              <div className="mt-">
                <h4 className="fw-bolder mt-5">Edit Jobs</h4>
                <p className="">
                  <b>Dashboard</b> / Jobs
                </p>
              </div>
            </div>
          </div> */}

        <Card className="p-3">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              validation.handleSubmit();
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
                    />
                  </Col>
                </Row>

                <label>Years of Experience</label>
                <Row className="mb-3">
                  <Col lg={15}>
                    <Input
                      type="number"
                      className="form-control p-3"
                      id="yearsOfExperience"
                      placeholder="Years of Experience"
                      onChange={validation.handleChange}
                      value={validation.values.yearsOfExperience || ""}
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
                    />
                  </Col>
                  {validation.touched.goLiveDate && validation.errors.goLiveDate ? (
                  <FormFeedback type="invalid">
                    <div>{validation.errors.goLiveDate}</div>
                  </FormFeedback>
                ) : null}
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
                    </select>
                  </Col>
                  {validation.touched.jobCategoryId && validation.errors.jobCategoryId ? (
                  <FormFeedback type="invalid">
                    <div>{validation.errors.jobCategoryId}</div>
                  </FormFeedback>
                ) : null}
                </Row>

                <label>Education Level</label>
                <Row className="mb-3">
                  <Col lg={15}>
                    <Input
                      type="text"
                      className="form-control p-3"
                      id="education"
                      placeholder="Education Level"
                      onChange={validation.handleChange}
                      value={validation.values.education || ""}
                    />
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
                      <option>Permanent</option>
                      <option>Contract</option>
                      <option>Part Time</option>
                    </select>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <label>Select Apply Mode</label>
                  <Col lg={12}>
                    <select
                      className="form-select p-3"
                      name="applyMode"
                      id="applyMode"
                      value={validation.values.applyMode}
                      onChange={validation.handleChange}
                    >
                      <option>select apply mode</option>
                      <option>Email</option>
                      <option>Website</option>
                    </select>
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
                      />
                    </Col>
                  </Row>
                ) : (
                  ""
                )}

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
                    <p>Please hit the space key after entering location.</p>
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
        

            
              </Col>
               {validation.touched.companyId && validation.errors.companyId ? (
                  <FormFeedback type="invalid">
                    <div>{validation.errors.companyId}</div>
                  </FormFeedback>
                ) : null}
            </Row>

            <Row className="mt-3">
              <h6 style={{ color: "#244a59", fontWeight: "bolder" }}>
                Description
              </h6>
              <Col lg={12}>
                <Editor editorId="editor2" transmitHtml={updateEditorData} />
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
    </>
  );
};

export default EditJobs;
