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
import locationData from "../../../../common/data/cities.json";
import Select from "react-select";

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

  const { data } = useSelector((state) => ({
    data: state.Jobs.editCloneData,
  }));

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

  const navigate = useNavigate();

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

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      jobTitle: data?.jobTitle || "",
      jobCategoryId: data?.jobCategoryId,
      jobLocation: formattedSelectedMulti,
      jobSalaryAmount: data?.jobSalaryAmount || "",
      companyId: "",
      isCompanyConfidential: "",
      jobDescription: data?.jobDescription || "",
      jobSkillsId: "",
      jobSalaryCurrency: "",
      jobStatusId: data?.jobStatus || "",
      applyMode: data?.applyMode || "",
      applyLink: data?.applyLink || "",
      education: data?.education || "",
      goLiveDate: formatDate2(data?.goLiveDate) || "",
      yearsOfExperience: data?.yearsOfExperience || "",
      appliedEmail: data?.appliedEmail || "",
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
      // isCompanyConfidential: Yup.boolean(),
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
          jobLocation: formattedSelectedMulti,
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
        },
      };

      dispatch(updateJob(finalData));
      navigate("/app/employer-jobs");
      handleCloseHandle();
      validation.resetForm();
    },
  });

  console.log(validation.errors)
  console.log(editorData.editor1);

  const { inLoading, inError, info } = useSelector((state) => ({
    catLoading: state.Industry.loading,
    catError: state.Industry.error,
    categoryInfo: state.Industry.industryInfo,
  }));

  // useEffect(()=>{
  //    dispatch(employerCompanies({viewAction: ""}))
  // }, [dispatch])

  const { companyLoading, companyInfo, companyError } = useSelector(
    (state) => ({
      companyLoading: state.Users.companiesLoading,
      companyError: state.Users.companiesError,
      companyInfo: state.Users.employerCompanies,
    })
  );

  // Define state for the checkbox
  const [isConfidential, setIsConfidential] = useState(false);

  // Function to handle checkbox change
  const handleCheckboxChange = () => {
    setIsConfidential(!isConfidential);
  };

  console.log(validation.errors);

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
                      <option>Job status</option>
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

                <Row className="mb-3 mt-4">
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
                  editorId="editor1"
                  transmitHtml={updateEditorData}
                  // data={data?.jobDescription}
                />
              </Col>
            </Row>

            <Row className="mt-5">
              <h6 style={{ color: "#244a59", fontWeight: "bolder" }}>
                How to apply
              </h6>
              <Col lg={12}>
                <Editor
                  editorId="editor2"
                  transmitHtml={updateEditorData}
                  // data={data?.howToApply}
                />
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
