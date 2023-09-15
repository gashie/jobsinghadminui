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
} from "reactstrap";
import data from "./data";
import { createJobAlert, viewjobAlerts } from "../../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Alerts = () => {
  const [create, setCreate] = useState(false);

  const dispatch = useDispatch();

  const { jobAlerts, jobAlertsError, jobAlertsLoading } = useSelector(
    (state) => ({
      jobAlerts: state.JobAlerts.jobAlerts,
      jobAlertsError: state.JobAlerts.jobAlertsError,
      jobAlertsLoading: state.JobAlerts.jobAlertsLoading,
    })
  );

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

  const handleRadioChange = (event) => {
    event.preventDefault()
    setSelectedOption(event.target.value);
  };

  const handleFreqChange = (event) => {
    event.preventDefault()
    setSelectedFrequency(event.target.value);
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
      criteria: Yup.string().required("Please choose a search criteria"),
      frequency: Yup.string().required("Please select a frequency"),
      location: Yup.string().required("Please select a location"),
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
        jobCategoryId: "",
        jobTypeId: values.jobType,
        experienceLevel: values.experience,
      };
      console.log(values);

      dispatch(createJobAlert(alertDetails));
      toast.success("Job Alert Created Successfully", {
        autoClose: 3000,
      });
      setCreate(false);
      dispatch(viewjobAlerts({ viewAction: "" }));
      dispatch(viewjobAlerts({ viewAction: "" }));
      dispatch(viewjobAlerts({ viewAction: "" }));
      validation.resetForm();
    },
  });

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
                    <>
                      <tbody key={key}>
                        <tr>
                          <th scope="row">
                            <Link to="#" className="fw-medium">
                              {item?.alertName}
                            </Link>
                          </th>

                          <td>{formatDate(item?.createdAt)}</td>
                          <td>{formatDate(item?.updatedAt)}</td>
                          <td>{item?.jobTypeId}</td>
                          <td>Edit</td>
                          <td>
                            <p
                              style={{
                                color: "red",
                              }}
                            >
                              Delete
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </>
                  ))
                ) : (
                  <p className="htstack justify-content-center mt-4">
                    Loading Data...
                  </p>
                )}
              </Table>
            </div>
          </Col>
        </>
      ) : (
        <>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              validation.handleSubmit();
              return false;
            }}
          >
            <div>
              <p style={{ cursor: "pointer" }} onClick={() => setCreate(false)}>
                Back
              </p>
              <h5
                style={{ fontWeight: "bolder", color: "#244a59" }}
                className="mt-3"
              >
                Create job Alert
              </h5>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Col className="" lg={8}>
                  <Container className="p-5">
                    <Row className="mb-3">
                      <Col lg={15}>
                        <Label htmlFor="useremail" className="form-label">
                          Name<span className="text-danger">*</span>
                        </Label>
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
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col lg={15}>
                        <p
                          htmlFor="nameInput"
                          className="form-right "
                          style={{ textAlign: "left" }}
                        >
                          Keyword:
                        </p>
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
                            validation.touched.keyword &&
                            validation.errors.keyword
                              ? true
                              : false
                          }
                        />
                        {validation.touched.keyword &&
                        validation.errors.keyword ? (
                          <FormFeedback type="invalid">
                            <div>{validation.errors.keyword}</div>
                          </FormFeedback>
                        ) : null}
                      </Col>
                    </Row>

                    <Col lg={10}>
                      <div className="d-flex gap-5 form-check">
                        <div>
                          <Col lg={20}>
                            <p
                              htmlFor="nameInput"
                              className="form-right "
                              style={{ textAlign: "left" }}
                            >
                              Choose your search criteria
                            </p>
                          </Col>
                        </div>
                        <div>
                          <label className="form-check-label">
                            <input
                              type="radio"
                              className="form-check-input"
                              name="searchCriteria"
                              value="any"
                              checked={selectedOption === "any"}
                              onChange={handleRadioChange}
                            />
                            Any of these words
                          </label>
                        </div>
                        <div>
                          <label className="form-check-label">
                            <input
                              type="radio"
                              className="form-check-input"
                              name="searchCriteria"
                              value="all"
                              checked={selectedOption === "all"}
                              onChange={handleRadioChange}
                            />
                            All of these words
                          </label>
                        </div>
                      </div>
                    </Col>

                    <Row className="mb-3 mt-5 ">
                      <Col lg={3}>
                        <p
                          htmlFor="nameInput"
                          className="form-right "
                          style={{ textAlign: "left" }}
                        >
                          Get job alerts
                        </p>
                      </Col>
                      <Col lg={9}>
                        <div className="d-flex gap-5 form-check">
                          <div>
                            <input
                              type="radio"
                              className="form-check-input"
                              name="frequencyRadio"
                              id="dailyRadio"
                              value="daily"
                              checked={selectedFrequency === "daily"}
                              onChange={handleFreqChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="dailyRadio"
                            >
                              Daily
                            </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              className="form-check-input"
                              name="frequencyRadio"
                              id="weeklyRadio"
                              value="weekly"
                              checked={selectedFrequency === "weekly"}
                              onChange={handleFreqChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="weeklyRadio"
                            >
                              Weekly
                            </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              className="form-check-input"
                              name="frequencyRadio"
                              id="monthlyRadio"
                              value="monthly"
                              checked={selectedFrequency === "monthly"}
                              onChange={handleFreqChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="monthlyRadio"
                            >
                              Monthly
                            </label>
                          </div>
                        </div>
                      </Col>
                    </Row>

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
                          <option>Select Question Type</option>
                          <option>Account Information</option>
                          <option>Advertising</option>
                          <option>Applying to a job</option>
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
                      Create job alert
                    </button>
                  </Container>
                </Col>
              </div>
            </div>
          </Form>
        </>
      )}
    </>
  );
};

export default Alerts;
