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
import {
  category,
  createJob,
  employers,
  jobStatus,
} from "../../../../store/actions";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import AddQuestion from "./Questions";
import { rateCard } from "../../../../store/Rates/action";
import Payment from './Payment/index'


const AddJob = ({payLater}) => {
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

  const [description, setDescription] = useState();

  const handleEditorContentChange = (content) => {
    setDescription(content);
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
      education: "",
      goLiveDate: "",
      yearsOfExperience: null,
      appliedEmail: "",
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
        jobSkills: [],
        jobSalaryCurrency: "Ghc",
        jobStatus: values.jobStatusId,
        applyMode: values.applyMode,
        applyLink: values.applyLink,
        yearsOfExperience: values.yearsOfExperience,
        appliedEmail: values.appliedEmail,
        education: values.education
      };

      dispatch(createJob(finalData));
      toggleModal();
      validation.resetForm();
    },
  });

  // Define state for the checkbox
  const [isConfidential, setIsConfidential] = useState(false);

  // Function to handle checkbox change
  const handleCheckboxChange = () => {
    setIsConfidential(!isConfidential);
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  console.log(validation.values.jobCategoryId)

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

  useEffect(()=>{
    dispatch(rateCard({viewAction: ""}))
  }, [dispatch])

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
                </Row>

                <label>Education Level</label>
                <Row className="mb-3">
                  <Col lg={15}>
                    <Input
                      type="text"
                      className="form-control p-3"
                      id="education"
                      placeholder=""
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
                      type='text'
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
            </Row>

            <Row className="mt-3">
              <h6 style={{ color: "#244a59", fontWeight: "bolder" }}>
                Description
              </h6>
              <Col lg={12}>
                <Editor onContentChange={handleEditorContentChange} />
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
        </div>
      </div>

      {/* First Step */}
      <Modal isOpen={modalIsOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}></ModalHeader>
        <ModalBody>
          Would you like to save this job or procced to add questions?
        </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            onClick={toggleModal}
            style={{ backgroundColor: "#244a59" }}
          >
            Save
          </Button>
          <Button
            color="primary"
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
          <Button className="btn btn-dark" onClick={()=>{
            toggleSecondModal()
            togglePaymentModal()
          }} style={{backgroundColor: '#244a59'}} >
            Pay now
          </Button>
          <Button className="btn btn-dark" onClick={()=>{
            toggleSecondModal()
            payLater()
          }} style={{backgroundColor: '#244a59'}}>
            Pay Later
          </Button>
        </ModalFooter>
      </Modal>



      {/* Transaction Step */}
      <Modal isOpen={isPaymentOpen} toggle={togglePaymentModal}
       size="xl"
       className="modal-fullscreen"
      >
        <ModalHeader toggle={togglePaymentModal}></ModalHeader>
        <ModalBody>

         <Payment />
        </ModalBody>
        <ModalFooter>
          <Button className="btn btn-dark" onClick={toggleSecondModal} style={{backgroundColor: '#244a59'}}>
            Pay now
          </Button>
          <Button className="btn btn-dark" onClick={()=>{
            toggleSecondModal()
            payLater()
          }} style={{backgroundColor: '#244a59'}}>
            Pay Later
          </Button>
        </ModalFooter>
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
          <AddQuestion toggleQuestionModal={toggleQuestionModal} toggleSecondModal={toggleSecondModal} />
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
