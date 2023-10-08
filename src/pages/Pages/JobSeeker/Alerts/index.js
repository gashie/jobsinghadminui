import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Row,
  Table,
  Button,
  Card,
  CardBody,
  Container,
  Input,
  Label,
  Form,
  FormFeedback,
  Modal,
  ModalHeader,
  ModalBody,
  Spinner,
} from "reactstrap";
import data from "./data";
import {
  createJobAlert,
  viewjobAlerts,
  updateJobAlert,
  category,
} from "../../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import locations from "../../../../common/data/cities.json";

const Alerts = () => {
  const [create, setCreate] = useState(false);

  const dispatch = useDispatch();

  const { jobAlerts, jobAlertsError, jobAlertsLoading, loading, error } =
    useSelector((state) => ({
      jobAlerts: state.JobAlerts.jobAlerts,
      jobAlertsError: state.JobAlerts.jobAlertsError,
      jobAlertsLoading: state.JobAlerts.jobAlertsLoading,
      loading: state.JobAlerts.loading,
      error: state.JobAlerts.error,
    }));

  useEffect(() => {
    dispatch(viewjobAlerts({ viewAction: "" }));
  }, [dispatch]);

  //Date formatter
  function formatDate(timestamp) {
    // Create a Date object from the input timestamp
    const date = new Date(timestamp);

    // Define months array for formatting
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Get the date components
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    // Function to add the "st," "nd," "rd," or "th" suffix to the day
    function getDayWithSuffix(day) {
      if (day >= 11 && day <= 13) {
        return `${day}th`;
      }
      switch (day % 10) {
        case 1:
          return `${day}st`;
        case 2:
          return `${day}nd`;
        case 3:
          return `${day}rd`;
        default:
          return `${day}th`;
      }
    }

    // Format the date in the desired format
    const formattedDate = `${getDayWithSuffix(day)} ${month}, ${year}`;

    return formattedDate;
  }

  const [selectedOption, setSelectedOption] = useState(""); // Default selected option
  const [selectedFrequency, setSelectedFrequency] = useState("");

  const handleRadioChange = (e) => {
    e.preventDefault();
    setSelectedOption(e.target.value);
  };

  const handleFreqChange = (e) => {
    e.preventDefault();
    setSelectedFrequency(e.target.value);
  };

  //create alert validation form
  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      keyword: "",
      name: "",
      criteria: selectedOption,
      frequency: selectedFrequency,
      location: "",
      category: "",
      experience: "",
      jobType: "",
    },
    validateOnChange: true,
    validationSchema: Yup.object({
      keyword: Yup.string().required("Please enter a keyword"),
      name: Yup.string().required("Please enter a name"),
      location: Yup.string().required("Please select a location"),
      frequency: Yup.string().required("Please select a frquency"),
      criteria: Yup.string().required("Please select a criteria"),
      category: Yup.string().required("Please select a category"),
      experience: Yup.string().required("Please select an experience level"),
      jobType: Yup.string().required("Please select a job type"),
    }),
    onSubmit: (values) => {
      const alertDetails = {
        alertName: values.name,
        alertKeyword: values.keyword,
        alertKeywordCriteria: values.criteria,
        runEvery: values.frequency,
        locationId: values.location,
        jobCategoryId: values.category,
        jobTypeId: values.jobType,
        experienceLevel: values.experience,
      };

      dispatch(createJobAlert(alertDetails));
      validation.resetForm();
      setCreate(false);

      validation.resetForm();
    },
  });

  const [editItem, setEditItem] = useState();

  //edit
  const editValidation = useFormik({
    enableReinitialize: true,
    initialValues: {
      keyword: editItem?.patchData?.alertKeyword,
      name: editItem?.patchData?.alertName,
      criteria: selectedOption,
      frequency: selectedFrequency,
      location: editItem?.locationId,
      category: editItem?.jobCategoryId,
      experience: editItem?.experienceLevel,
      jobType: editItem?.jobTypeId,
    },
    validateOnChange: true,
    validationSchema: Yup.object({
      keyword: Yup.string().required("Please enter a keyword"),
      name: Yup.string().required("Please enter a name"),
      location: Yup.string().required("Please select a location"),
      frequency: Yup.string().required("Please select a frquency"),
      criteria: Yup.string().required("Please select a criteria"),
      category: Yup.string().required("Please select a category"),
      experience: Yup.string().required("Please select an experience level"),
      jobType: Yup.string().required("Please select a job type"),
    }).shape({
      frequency: Yup.string().required("Please choose a search criteria"),
    }),

    onSubmit: (values) => {
      const alertDetails = {
        deleterecord: false,
        alertId: editItem?.alertId,
        restore: 0,
        patch: true,
        patchData: {
          alertName: values.name,
          alertKeyword: values.keyword,
          alertKeywordCriteria: values.criteria,
          runEvery: values.frequency,
          locationId: values.location,
          jobCategoryId: values.category,
          jobTypeId: values.jobType,
          experienceLevel: values.experience,
        },
      };
      dispatch(viewjobAlerts({ viewAction: "" }));
      dispatch(updateJobAlert(alertDetails));

      setCreate(false);

      setmodal_grid(false);
      editValidation.resetForm();
    },
  });

  const [deleteItem, setDeleteItem] = useState({});
  const handleDelete = (item) => {
    const deleteDate = {
      deleterecord: true,
      alertId: item?.alertId,
      restore: 0,
      patch: false,
      patchData: {
        alertName: item?.alertName,
        alertKeyword: item?.alertKeyword,
        alertKeywordCriteria: item?.alertKeywordCriteria,
        runEvery: item?.runEvery,
        locationId: item?.locationId,
        jobCategoryId: "",
        jobTypeId: item?.jobTypeId,
        experienceLevel: item?.experienceLevel,
      },
    };

    setDeleteItem();

    dispatch(updateJobAlert(deleteDate));
    dispatch(viewjobAlerts({ viewAction: "" }));
  };

  

  const handleEdit = (item) => {
    setEditItem({
      deleterecord: false,
      alertId: item?.alertId,
      restore: 0,
      patch: false,
      patchData: {
        alertName: item?.alertName,
        alertKeyword: item?.alertKeyword,
        alertKeywordCriteria: item?.alertKeywordCriteria,
        runEvery: item?.runEvery,
        locationId: item?.locationId,
        jobCategoryId: "",
        jobTypeId: item?.jobTypeId,
        experienceLevel: item?.experienceLevel,
      },
    });

    console.log(item, "edits")
  };

  useEffect(() => {});

  const [modal_grid, setmodal_grid] = useState(false);

  function tog_grid() {
    setmodal_grid(!modal_grid);
  }

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the current page of items
  const currentJobs = jobAlerts?.slice(startIndex, endIndex);

  // Function to handle page changes
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Determine if "Previous" and "Next" links should be disabled
  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = endIndex >= jobAlerts?.length;

  useEffect(()=>{
dispatch(category({viewAction: ""}))
  }, [dispatch])

  const { catLoading, catError, categoryInfo } = useSelector((state) => ({
    catLoading: state.Industry.loading,
    catError: state.Industry.error,
    categoryInfo: state.Industry.categoryInfo,
  }));

 

  return (
    <>
      {create === false ? (
        <>
          <ToastContainer />
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
            className="mt-5"
          >
            <h5
              style={{ fontWeight: "bolder", color: "#244a59" }}
              className="mt-3 mx-5 px-2"
            >
              My Alerts
            </h5>

            <Button
              className="btn btn-dark mx-5"
              style={{ backgroundColor: "#244a59" }}
              onClick={() => {
                setCreate(true);
              }}
            >
              Create new alert
            </Button>
          </div>
          <Col className="m-5">
            <div className="table-responsive">
              <Table className="align-middle table-nowrap mb-0">
                <thead>
                  <tr>
                    <th scope="col">Job title</th>
                    <th scope="col">Inserted</th>
                    <th scope="col">Updated</th>
                    <th scope="col">Status</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                {jobAlertsError === false && loading === false ? (
                  currentJobs?.map((item, key) => (
                    <tr key={key}>
                      <th scope="row"  className="p-3">
                        <Link to="#" className="fw-medium">
                          {item?.alertName}
                        </Link>
                      </th>
                      <td className="p-3">{formatDate(item?.createdAt)}</td>
                      <td className="p-3">
                        {item?.updatedAt === null
                          ? "No updates made yet"
                          : formatDate(item?.updatedAt)}
                      </td>
                      <td className="p-3">{item?.jobTypeId}</td>
                      <td
                        style={{
                          cursor: "pointer",
                        }}
                        className="fw-pointer p-2"
                        onClick={() => {
                          handleEdit(item);
                          setmodal_grid(true);
                        }}
                      >
                        Edit
                      </td>
                      <td
                        style={{
                          color: "red",
                          cursor: "pointer",
                        }}
                        className="fw-pointer p-2"
                        onClick={() => {
                          handleDelete(item);
                        }}
                      >
                        Delete
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center mt-5">
                      <div className="d-flex align-items-center justify-content-center">
                        {loading === true ? (
                          <>
                            <Spinner
                              size="lg"
                              className="me-2 mt-5"
                              style={{ color: "#244a59" }}
                            ></Spinner>
                          </>
                        ) : (
                          <>
                            <p className="fw-light mt-5">
                              You don't have any Job Alerts at the moment.
                            </p>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                )}
              </Table>
            </div>

            <div className="d-flex justify-content-end mt-4">
              <div className="pagination-wrap hstack gap-2">
                <Link
                  className={`page-item pagination-prev ${
                    isPrevDisabled ? "disabled" : ""
                  }`}
                  to="#"
                  onClick={() =>
                    !isPrevDisabled && handlePageChange(currentPage - 1)
                  }
                >
                  Previous
                </Link>
                <span
                  className="page-number p-2 px-3 text-light"
                  style={{ backgroundColor: "#244a59" }}
                >
                  {" "}
                  {currentPage}
                </span>
                <ul className="pagination listjs-pagination mb-0"></ul>
                <Link
                  className={`page-item pagination-next ${
                    isNextDisabled ? "disabled" : ""
                  }`}
                  to="#"
                  onClick={() =>
                    !isNextDisabled && handlePageChange(currentPage + 1)
                  }
                >
                  Next
                </Link>
              </div>
            </div>
          </Col>
        </>
      ) : (
        <>
          <div>
            <p style={{ cursor: "pointer" }} onClick={() => setCreate(false)}>
              Back
            </p>
            <h5
              style={{ fontWeight: "bold", color: "#244a59" }}
              className="mt-3"
            >
              Create Job Alert
            </h5>

            <div className="container p-5">
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  validation.handleSubmit();
                  return false;
                }}
              >
                <div className="mb-3">
                  <label htmlFor="name">
                    Name<span className="text-danger">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    className="form-control p-3"
                    placeholder="Enter your name"
                    type="text"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.name || ""}
                    invalid={
                      validation.touched.name && validation.errors.name
                        ? true
                        : false
                    }
                  />
                  {validation.touched.name && validation.errors.name ? (
                    <FormFeedback type="invalid">
                      <div>{validation.errors.name}</div>
                    </FormFeedback>
                  ) : null}
                </div>

                <div className="mb-3">
                  <label htmlFor="keyword">Keyword:</label>
                  <Input
                    id="keyword"
                    name="keyword"
                    className="form-control p-3"
                    placeholder="Enter alert keyword"
                    type="text"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.keyword || ""}
                    invalid={
                      validation.touched.keyword && validation.errors.keyword
                        ? true
                        : false
                    }
                  />
                  {validation.touched.keyword && validation.errors.keyword ? (
                    <FormFeedback type="invalid">
                      <div>{validation.errors.keyword}</div>
                    </FormFeedback>
                  ) : null}
                </div>

                {/* Search Criteria */}
                <div className="mb-3">
                  <label className="form-right" style={{ textAlign: "left" }}>
                    Choose your search criteria
                  </label>
                  <div className="d-flex gap-5">
                    <label>
                      <Input
                        type="radio"
                        className="form-check-input"
                        name="criteria"
                        value="any"
                        checked={validation.values.criteria === "any"}
                        onChange={validation.handleChange}
                        invalid={!!validation.errors.criteria}
                      />
                      Any of these words
                    </label>
                    <label>
                      <Input
                        type="radio"
                        className="form-check-input"
                        name="criteria"
                        value="all"
                        checked={validation.values.criteria === "all"}
                        onChange={validation.handleChange}
                        invalid={!!validation.errors.criteria}
                      />
                      All of These word
                    </label>
                  </div>
                  <FormFeedback type="invalid">
                    {validation.errors.criteria}
                  </FormFeedback>
                </div>

                {/* Frequency */}
                <div className="mb-3 mt-5">
                  <label className="form-right" style={{ textAlign: "left" }}>
                    Get job alerts
                  </label>
                  <div className="d-flex gap-5 form-check">
                    <label>
                      <Input
                        type="radio"
                        className="form-check-input"
                        name="frequency"
                        value="daily"
                        checked={validation.values.frequency === "daily"}
                        onChange={validation.handleChange}
                        invalid={!!validation.errors.frequency}
                      />
                      Daily
                    </label>
                    <label>
                      <Input
                        type="radio"
                        className="form-check-input"
                        name="frequency"
                        value="weekly"
                        checked={validation.values.frequency === "weekly"}
                        onChange={validation.handleChange}
                        invalid={!!validation.errors.frequency}
                      />
                      Weekly
                    </label>
                    <label>
                      <Input
                        type="radio"
                        className="form-check-input"
                        name="frequency"
                        value="monthly"
                        checked={validation.values.frequency === "monthly"}
                        onChange={validation.handleChange}
                        invalid={!!validation.errors.frequency}
                      />
                      Monthly
                    </label>
                  </div>

                  <FormFeedback type="invalid">
                    {validation.errors.frequency}
                  </FormFeedback>
                </div>

                <Row className="mb-3">
                  <Col lg={3}>
                    <p
                      htmlFor="nameInput"
                      className="form-right "
                      style={{ textAlign: "left" }}
                    >
                      Location:
                    </p>
                  </Col>

                  <Col lg={9}>
                    <Input
                      id="location"
                      type="select"
                      name="location"
                      className="form-select mb-3 p-3"
                      aria-label="Location"
                      onChange={validation.handleChange}
                      onBlur={validation.handleBlur}
                      value={validation.values.location}
                      invalid={!!validation.errors.location}
                    >
                      <option value="">Select Location</option>
                      {Object.entries(locations).map(([region, cities]) => (
                        <optgroup label={region} key={region}>
                          {cities.map((city) => (
                            <option key={city} value={city}>
                              {city}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </Input>

                    <FormFeedback type="invalid">
                      {validation.errors.location}
                    </FormFeedback>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col lg={3}>
                    <p
                      htmlFor="nameInput"
                      className="form-right "
                      style={{ textAlign: "left" }}
                    >
                      Job category:
                    </p>
                  </Col>

                  <Col lg={15}>
                    <Input
                      id="category"
                      type="select"
                      name="category"
                      className="form-select mb-3 p-3"
                      aria-label="Default"
                      onChange={validation.handleChange}
                      onBlur={validation.handleBlur}
                      value={validation.values.category}
                      invalid={!!validation.errors.category}
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
                    <FormFeedback type="invalid">
                      {validation.errors.category}
                    </FormFeedback>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col lg={3}>
                    <p
                      htmlFor="nameInput"
                      className="form-right "
                      style={{ textAlign: "left" }}
                    >
                      Job type:
                    </p>
                  </Col>
                  <Col lg={9}>
                    <Input
                      id="jobType"
                      name="jobType"
                      className="form-select mb-3 p-3"
                      type="select"
                      aria-label="Default"
                      onChange={validation.handleChange}
                      onBlur={validation.handleBlur}
                      value={validation.values.jobType}
                      invalid={!!validation.errors.jobType}
                    >
                      <option>Any time</option>
                      <option>Full-time</option>
                      <option>Part-time</option>
                      <option>Contract</option>
                      <option>Permanent</option>
                      <option>Temporary</option>
                      <option>Internship</option>
                      <option>Remote</option>
                      <option>Science</option>
                    </Input>
                    <FormFeedback type="invalid">
                      {validation.errors.jobType}
                    </FormFeedback>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col lg={3}>
                    <p
                      htmlFor="nameInput"
                      className="form-right "
                      style={{ textAlign: "left" }}
                    >
                      Any Experience:
                    </p>
                  </Col>
                  <Col lg={9}>
                    <Input
                      id="experience"
                      type="select"
                      name="experience"
                      className="form-select mb-3 p-3"
                      aria-label="Experience"
                      onChange={validation.handleChange}
                      onBlur={validation.handleBlur}
                      value={validation.values.experience}
                      invalid={!!validation.errors.experience}
                    >
                      <option>Any experience</option>
                      <option>1 year</option>
                      <option>1 year to 3years</option>
                      <option>3 years to 6 years</option>
                      <option>6 years to 10 years</option>
                      <option>10 years plus</option>
                    </Input>
                    <FormFeedback type="invalid">
                      {validation.errors.experience}
                    </FormFeedback>
                  </Col>
                </Row>

                <button
                  type="submit"
                  className="btn btn-dark"
                  style={{ backgroundColor: "#244a59" }}
                >
                  Create Job Alert
                </button>
              </Form>
            </div>
          </div>
        </>
      )}

      {/* Modal */}
      <Modal
        isOpen={modal_grid}
        toggle={() => {
          tog_grid();
        }}
      >
        <ModalHeader>
          {/* <h5 className="modal-title">Edit Alert</h5> */}
          <Button
            type="button"
            onClick={() => {
              setmodal_grid(false);
            }}
            className="btn-close"
            aria-label="Close"
          ></Button>
        </ModalHeader>
        <ModalBody>
        <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  editValidation.handleSubmit();
                  return false;
                }}
              >
                <div className="mb-3">
                  <label htmlFor="name">
                    Name<span className="text-danger">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    className="form-control p-3"
                    placeholder="Enter your name"
                    type="text"
                    onChange={editValidation.handleChange}
                    onBlur={editValidation.handleBlur}
                    value={editValidation.values.name || ""}
                    invalid={
                      editValidation.touched.name && editValidation.errors.name
                        ? true
                        : false
                    }
                  />
                  {editValidation.touched.name && editValidation.errors.name ? (
                    <FormFeedback type="invalid">
                      <div>{editValidation.errors.name}</div>
                    </FormFeedback>
                  ) : null}
                </div>

                <div className="mb-3">
                  <label htmlFor="keyword">Keyword:</label>
                  <Input
                    id="keyword"
                    name="keyword"
                    className="form-control p-3"
                    placeholder="Enter alert keyword"
                    type="text"
                    onChange={editValidation.handleChange}
                    onBlur={editValidation.handleBlur}
                    value={editValidation.values.keyword || ""}
                    invalid={
                      editValidation.touched.keyword && editValidation.errors.keyword
                        ? true
                        : false
                    }
                  />
                  {editValidation.touched.keyword && editValidation.errors.keyword ? (
                    <FormFeedback type="invalid">
                      <div>{editValidation.errors.keyword}</div>
                    </FormFeedback>
                  ) : null}
                </div>

                {/* Search Criteria */}
                <div className="mb-3">
                  <label className="form-right" style={{ textAlign: "left" }}>
                    Choose your search criteria
                  </label>
                  <div className="d-flex gap-5">
                    <label>
                      <Input
                        type="radio"
                        className="form-check-input"
                        name="criteria"
                        value="any"
                        checked={editValidation.values.criteria === "any"}
                        onChange={editValidation.handleChange}
                        invalid={!!editValidation.errors.criteria}
                      />
                      Any of these words
                    </label>
                    <label>
                      <Input
                        type="radio"
                        className="form-check-input"
                        name="criteria"
                        value="all"
                        checked={editValidation.values.criteria === "all"}
                        onChange={editValidation.handleChange}
                        invalid={!!editValidation.errors.criteria}
                      />
                      All of These word
                    </label>
                  </div>
                  <FormFeedback type="invalid">
                    {editValidation.errors.criteria}
                  </FormFeedback>
                </div>

                {/* Frequency */}
                <div className="mb-3 mt-5">
                  <label className="form-right" style={{ textAlign: "left" }}>
                    Get job alerts
                  </label>
                  <div className="d-flex gap-5 form-check">
                    <label>
                      <Input
                        type="radio"
                        className="form-check-input"
                        name="frequency"
                        value="daily"
                        checked={editValidation.values.frequency === "daily"}
                        onChange={editValidation.handleChange}
                        invalid={!!editValidation.errors.frequency}
                      />
                      Daily
                    </label>
                    <label>
                      <Input
                        type="radio"
                        className="form-check-input"
                        name="frequency"
                        value="weekly"
                        checked={editValidation.values.frequency === "weekly"}
                        onChange={editValidation.handleChange}
                        invalid={!!editValidation.errors.frequency}
                      />
                      Weekly
                    </label>
                    <label>
                      <Input
                        type="radio"
                        className="form-check-input"
                        name="frequency"
                        value="monthly"
                        checked={editValidation.values.frequency === "monthly"}
                        onChange={editValidation.handleChange}
                        invalid={!!editValidation.errors.frequency}
                      />
                      Monthly
                    </label>
                  </div>

                  <FormFeedback type="invalid">
                    {editValidation.errors.frequency}
                  </FormFeedback>
                </div>

                <Row className="mb-3">
                  <Col lg={3}>
                    <p
                      htmlFor="nameInput"
                      className="form-right "
                      style={{ textAlign: "left" }}
                    >
                      Location:
                    </p>
                  </Col>

                  <Col lg={9}>
                    <Input
                      id="location"
                      type="select"
                      name="location"
                      className="form-select mb-3 p-3"
                      aria-label="Location"
                      onChange={editValidation.handleChange}
                      onBlur={editValidation.handleBlur}
                      value={editValidation.values.location}
                      invalid={!!editValidation.errors.location}
                    >
                      <option value="">Select Location</option>
                      {Object.entries(locations).map(([region, cities]) => (
                        <optgroup label={region} key={region}>
                          {cities.map((city) => (
                            <option key={city} value={city}>
                              {city}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </Input>

                    <FormFeedback type="invalid">
                      {editValidation.errors.location}
                    </FormFeedback>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col lg={3}>
                    <p
                      htmlFor="nameInput"
                      className="form-right "
                      style={{ textAlign: "left" }}
                    >
                      Job category:
                    </p>
                  </Col>

                  <Col lg={15}>
                    <Input
                      id="category"
                      type="select"
                      name="category"
                      className="form-select mb-3 p-3"
                      aria-label="Default"
                      onChange={editValidation.handleChange}
                      onBlur={editValidation.handleBlur}
                      value={editValidation.values.category}
                      invalid={!!editValidation.errors.category}
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
                    <FormFeedback type="invalid">
                      {editValidation.errors.category}
                    </FormFeedback>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col lg={3}>
                    <p
                      htmlFor="nameInput"
                      className="form-right "
                      style={{ textAlign: "left" }}
                    >
                      Job type:
                    </p>
                  </Col>
                  <Col lg={9}>
                    <Input
                      id="jobType"
                      name="jobType"
                      className="form-select mb-3 p-3"
                      type="select"
                      aria-label="Default"
                      onChange={editValidation.handleChange}
                      onBlur={editValidation.handleBlur}
                      value={editValidation.values.jobType}
                      invalid={!!editValidation.errors.jobType}
                    >
                      <option>Any time</option>
                      <option>Full-time</option>
                      <option>Part-time</option>
                      <option>Contract</option>
                      <option>Permanent</option>
                      <option>Temporary</option>
                      <option>Internship</option>
                      <option>Remote</option>
                      <option>Science</option>
                    </Input>
                    <FormFeedback type="invalid">
                      {editValidation.errors.jobType}
                    </FormFeedback>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col lg={3}>
                    <p
                      htmlFor="nameInput"
                      className="form-right "
                      style={{ textAlign: "left" }}
                    >
                      Any Experience:
                    </p>
                  </Col>
                  <Col lg={9}>
                    <Input
                      id="experience"
                      type="select"
                      name="experience"
                      className="form-select mb-3 p-3"
                      aria-label="Experience"
                      onChange={editValidation.handleChange}
                      onBlur={editValidation.handleBlur}
                      value={editValidation.values.experience}
                      invalid={!!editValidation.errors.experience}
                    >
                      <option>Any experience</option>
                      <option>1 year</option>
                      <option>1 year to 3years</option>
                      <option>3 years to 6 years</option>
                      <option>6 years to 10 years</option>
                      <option>10 years plus</option>
                    </Input>
                    <FormFeedback type="invalid">
                      {editValidation.errors.experience}
                    </FormFeedback>
                  </Col>
                </Row>

                <button
                  type="submit"
                  className="btn btn-dark"
                  style={{ backgroundColor: "#244a59" }}
                >
                  Edit Job Alert
                </button>
              </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Alerts;
