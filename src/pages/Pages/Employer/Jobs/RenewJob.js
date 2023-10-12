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
  industry,
  jobStatus,
  updateJob,
} from "../../../../store/actions";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { formatDate } from "../../../../Components/Hooks/formatDate";
import { formatDate2 } from "../../../../Components/Hooks/formatDate2";

const RenewJob = ({ handleCloseRenew }) => {
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

  const inputDate = data?.goLiveDate;

  // Convert the string to a Date object
  const date = new Date(inputDate);

  // Add 30 days to the date
  date.setDate(date.getDate() + 30);

  // Format the new date in the "yyyy-mm-dd" format
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed, so add 1
  const day = String(date.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  const dataArray = data?.jobLocation.split(",").map((item) => {
    return {
      
      locationName: item.trim(),
    };
  });

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
      goLiveDate: formattedDate,
      yearsOfExperience: data?.yearsOfExperience || "",
      appliedEmail: data?.appliedEmail || "",
    },
    validateOnChange: true,
    validationSchema: Yup.object({
      goLiveDate: Yup.date().required("Please select go live date"),
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
          jobTitle: data?.jobTitle,
          jobCategoryId: data?.jobCategoryId,
          jobLocation: dataArray,
          jobSalaryAmount: data?.jobSalaryAmount,
          companyId: data?.companyId,
          isCompanyConfidential: isConfidential,
          howToApply: data?.howToApply,
          jobDescription: data?.jobDescription,
          jobSkills: [],
          jobSalaryCurrency: "Ghc",
          jobStatus: data?.jobStatus,
          applyMode: data?.applyMode,
          applyLink: data?.applyLink,
          appliedEmail: data?.appliedEmail,
        },
      };

      dispatch(updateJob(finalData));
      navigate("/manage-jobs");
      handleCloseRenew();
      validation.resetForm();
    },
  });

  const { inLoading, inError, info } = useSelector((state) => ({
    catLoading: state.Industry.loading,
    catError: state.Industry.error,
    categoryInfo: state.Industry.industryInfo,
  }));

  // useEffect(() => {
  //   dispatch(employerCompanies({ viewAction: "" }));
  // }, [dispatch]);

  const { companyLoading, companyInfo, companyError } = useSelector(
    (state) => ({
      companyLoading: state.Users.companiesLoading,
      companyError: state.Users.companiesError,
      companyInfo: state.Users.employerCompanies,
    })
  );

  console.log(data?.goLiveDate);

  // Define state for the checkbox
  const [isConfidential, setIsConfidential] = useState(false);

  // Function to handle checkbox change
  const handleCheckboxChange = () => {
    setIsConfidential(!isConfidential);
  };

  return (
    <>
      <div className="m-2 p-0 mb-5">
      
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            validation.handleSubmit();
            return false;
          }}
        >
       
           
            <Col>
            
              <label>Extend Go Live Date</label>

              <Col lg={12} md={12}>
                <Input
                  type="date"
                  className="form-control p-3"
                  id="goLiveDate"
                  name="goLiveDate"
                  placeholder=""
                  disabled="true"
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
              <p className="mt-3">By Submitting you will be increasing the go live Date for this job from <b>{formatDate(data?.goLiveDate)}</b> to <b>{formatDate(formattedDate)} </b></p>

            
            </Col>

            {/* right */}
            <Col>
            
            </Col>
        

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

      {/* Modals */}
      {/* 
            <Button color="primary" onClick={() => tog_standard()}>
              Standard Modal
            </Button> */}
    </>
  );
};

export default RenewJob;
