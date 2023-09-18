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

  const [selectedOption, setSelectedOption] = useState("any"); // Default selected option
  const [selectedFrequency, setSelectedFrequency] = useState("Daily");

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
      // criteria: Yup.string().required("Please choose a search criteria"),
      // frequency: Yup.string().required("Please select a frequency"),
      // location: Yup.string().required("Please select a location"),
      // category: Yup.string().required("Please select a category"),
      // experience: Yup.string().required("Please select an experience level"),
      // jobType: Yup.string().required("Please select a job type"),
    }),
    onSubmit: (values) => {
      const alertDetails = {
        alertName: values.name,
        alertKeyword: values.keyword,
        alertKeywordCriteria: values.criteria,
        runEvery: values.frequency,
        locationId: values.location,
        jobCategoryId: "",
        jobTypeId: values.jobType,
        experienceLevel: values.experience,
      };

      dispatch(createJobAlert(alertDetails));
validation.resetForm()
      setCreate(false);
      dispatch(viewjobAlerts({ viewAction: "" }));
      dispatch(viewjobAlerts({ viewAction: "" }));
      dispatch(viewjobAlerts({ viewAction: "" }));
      // validation.resetForm();
    },
  });

  const [editItem, setEditItem] = useState();

  //edit
  const editValidation = useFormik({
    enableReinitialize: true,
    initialValues: {
      keyword: editItem?.patchData?.alertName,
      name: editItem?.patchData?.alertKeyword,
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
      // criteria: Yup.string().required("Please choose a search criteria"),
      // frequency: Yup.string().required("Please select a frequency"),
      // location: Yup.string().required("Please select a location"),
      // category: Yup.string().required("Please select a category"),
      // experience: Yup.string().required("Please select an experience level"),
      // jobType: Yup.string().required("Please select a job type"),
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
          jobCategoryId: "",
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
  };

  useEffect(() => {});

  const [modal_grid, setmodal_grid] = useState(false);

  function tog_grid() {
    setmodal_grid(!modal_grid);
  }

  return (
    <>
      {create === false ? (
        <>
          <ToastContainer />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h5
              style={{ fontWeight: "bolder", color: "#244a59" }}
              className="mt-3"
            >
              My Alerts
            </h5>

            <Button
              className="btn btn-dark"
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
                {jobAlertsError === false && jobAlertsLoading === false ? (
                  jobAlerts?.map((item, key) => (
                    <tr key={key}>
                      <th scope="row">
                        <Link to="#" className="fw-medium">
                          {item?.alertName}
                        </Link>
                      </th>
                      <td className="p-2">{formatDate(item?.createdAt)}</td>
                      <td className="p-2">
                        {item?.updatedAt === null
                          ? "No updates made yet"
                          : formatDate(item?.updatedAt)}
                      </td>
                      <td className="p-2">{item?.jobTypeId}</td>
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
                        {jobAlerts?.length > 1 ? (
                          <Spinner
                            size="lg"
                            className="me-2 mt-5"
                            style={{ color: "#244a59" }}
                          >
                            Loading...
                          </Spinner>
                        ) : (
                          <p className="fw-light mt-5">
                            You currently don't have any Job alerts.
                          </p>
                        )}
                      </div>
                    </td>
                  </tr>
                )}
              </Table>
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
                      <input
                        type="radio"
                        className="form-check-input"
                        name="criteria"
                        value="any"
                        checked={validation.values.criteria === "any"}
                        onChange={validation.handleChange}
                      />
                      Any of these words
                    </label>
                    <label>
                      <input
                        type="radio"
                        className="form-check-input"
                        name="criteria"
                        value="all"
                        checked={validation.values.criteria === "all"}
                        onChange={validation.handleChange}
                      />
                      All of These word
                    </label>
                  </div>
                </div>

                {/* Frequency */}
                <div className="mb-3 mt-5">
                  <label className="form-right" style={{ textAlign: "left" }}>
                    Get job alerts
                  </label>
                  <div className="d-flex gap-5 form-check">
                    <label>
                      <input
                        type="radio"
                        className="form-check-input"
                        name="frequency"
                        value="daily"
                        checked={validation.values.frequency === "daily"}
                        onChange={validation.handleChange}
                      />
                      Daily
                    </label>
                    <label>
                      <input
                        type="radio"
                        className="form-check-input"
                        name="frequency"
                        value="weekly"
                        checked={validation.values.frequency === "weekly"}
                        onChange={validation.handleChange}
                      />
                      Weekly
                    </label>
                    <label>
                      <input
                        type="radio"
                        className="form-check-input"
                        name="frequency"
                        value="monthly"
                        checked={validation.values.frequency === "monthly"}
                        onChange={validation.handleChange}
                      />
                      Monthly
                    </label>
                  </div>
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
                    <select
                      id="location"
                      name="location"
                      className="form-select mb-3 p-3"
                      aria-label="Location"
                      onChange={validation.handleChange}
                      onBlur={validation.handleBlur}
                      value={validation.values.location}
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
                    </select>
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
                  <Col lg={9}>
                    <select
                      id="category"
                      name="category"
                      className="form-select mb-3 p-3"
                      aria-label="Default"
                      onChange={validation.handleChange}
                      onBlur={validation.handleBlur}
                      value={validation.values.category}
                    >
                      <option>All job Categories</option>
                      <option>Accounting</option>
                      <option>Banking</option>
                      <option>Data Management</option>
                      <option>Extractive</option>
                      <option>Health and Nutrition</option>
                      <option>Insurance</option>
                      <option>Policy</option>
                      <option>Science</option>
                      <option>Automation/Machinery/Aviation</option>
                      <option>Driving/Transportation</option>
                      <option>Agriculture</option>
                      <option>Marketing</option>
                      <option>Publishing /Printing</option>
                      <option>Procurement</option>
                      <option>Social Work</option>
                      <option>Consulting</option>
                      <option>Customer Service</option>
                      <option>Poroject Development</option>
                      <option>Supply CHain</option>
                      <option>Internships</option>
                      <option>Operations</option>
                      <option>Food Service</option>
                      <option>I.T</option>
                      <option>Other</option>
                    </select>
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
                    <select
                      id="jobType"
                      name="jobType"
                      className="form-select mb-3 p-3"
                      aria-label="Default"
                      onChange={validation.handleChange}
                      onBlur={validation.handleBlur}
                      value={validation.values.jobType}
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
                    </select>
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
                    <select
                      id="experience"
                      name="experience"
                      className="form-select mb-3 p-3"
                      aria-label="Experience"
                      onChange={validation.handleChange}
                      onBlur={validation.handleBlur}
                      value={validation.values.experience}
                    >
                      <option>Any experience</option>
                      <option>1 year</option>
                      <option>1 year to 3years</option>
                      <option>3 years to 6 years</option>
                      <option>6 years to 10 years</option>
                      <option>10 years plus</option>
                    </select>
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
                  editValidation.touched.keyword &&
                  editValidation.errors.keyword
                    ? true
                    : false
                }
              />
              {editValidation.touched.keyword &&
              editValidation.errors.keyword ? (
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
                  <input
                    type="radio"
                    className="form-check-input"
                    name="criteria"
                    value="any"
                    checked={editValidation.values.criteria === "any"}
                    onChange={editValidation.handleChange}
                  />
                  Any of these words
                </label>
                <label>
                  <input
                    type="radio"
                    className="form-check-input"
                    name="criteria"
                    value="all"
                    checked={editValidation.values.criteria === "all"}
                    onChange={editValidation.handleChange}
                  />
                  All of These word
                </label>
              </div>
            </div>

            {/* Frequency */}
            <div className="mb-3 mt-5">
              <label className="form-right" style={{ textAlign: "left" }}>
                Get job alerts
              </label>
              <div className="d-flex gap-5 form-check">
                <label>
                  <input
                    type="radio"
                    className="form-check-input"
                    name="frequency"
                    value="daily"
                    checked={editValidation.values.frequency === "daily"}
                    onChange={editValidation.handleChange}
                  />
                  Daily
                </label>
                <label>
                  <input
                    type="radio"
                    className="form-check-input"
                    name="frequency"
                    value="weekly"
                    checked={editValidation.values.frequency === "weekly"}
                    onChange={editValidation.handleChange}
                  />
                  Weekly
                </label>
                <label>
                  <input
                    type="radio"
                    className="form-check-input"
                    name="frequency"
                    value="monthly"
                    checked={editValidation.values.frequency === "monthly"}
                    onChange={editValidation.handleChange}
                  />
                  Monthly
                </label>
              </div>
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
                <select
                  id="location"
                  name="location"
                  className="form-select mb-3 p-3"
                  aria-label="Location"
                  onChange={editValidation.handleChange}
                  onBlur={editValidation.handleBlur}
                  value={editValidation.values.location}
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
                </select>
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
              <Col lg={9}>
                <select
                  id="category"
                  name="category"
                  className="form-select mb-3 p-3"
                  aria-label="Default"
                  onChange={editValidation.handleChange}
                  onBlur={editValidation.handleBlur}
                  value={editValidation.values.category}
                >
                  <option>All job Categories</option>
                  <option>Accounting</option>
                  <option>Banking</option>
                  <option>Data Management</option>
                  <option>Extractive</option>
                  <option>Health and Nutrition</option>
                  <option>Insurance</option>
                  <option>Policy</option>
                  <option>Science</option>
                  <option>Automation/Machinery/Aviation</option>
                  <option>Driving/Transportation</option>
                  <option>Agriculture</option>
                  <option>Marketing</option>
                  <option>Publishing /Printing</option>
                  <option>Procurement</option>
                  <option>Social Work</option>
                  <option>Consulting</option>
                  <option>Customer Service</option>
                  <option>Poroject Development</option>
                  <option>Supply CHain</option>
                  <option>Internships</option>
                  <option>Operations</option>
                  <option>Food Service</option>
                  <option>I.T</option>
                  <option>Other</option>
                </select>
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
                <select
                  id="jobType"
                  name="jobType"
                  className="form-select mb-3 p-3"
                  aria-label="Default"
                  onChange={editValidation.handleChange}
                  onBlur={editValidation.handleBlur}
                  value={editValidation.values.jobType}
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
                </select>
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
                <select
                  id="experience"
                  name="experience"
                  className="form-select mb-3 p-3"
                  aria-label="Experience"
                  onChange={editValidation.handleChange}
                  onBlur={editValidation.handleBlur}
                  value={editValidation.values.experience}
                >
                  <option>Any experience</option>
                  <option>1 year</option>
                  <option>1 year to 3years</option>
                  <option>3 years to 6 years</option>
                  <option>6 years to 10 years</option>
                  <option>10 years plus</option>
                </select>
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
        </ModalBody>
      </Modal>
    </>
  );
};

export default Alerts;
