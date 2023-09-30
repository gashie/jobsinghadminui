import { useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  Spinner,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "../../../../Components/Hooks/formatDate";
import { approveApplications, employerApplications } from "../../../../store/actions";

const ApplicantTracking = () => {
  const [margin, setMargin] = useState("");
  const [action, setAction] = useState(false);
  const [takeAction, setTakeAction] = useState("");

  const updateWindowSize = () => {
    const newWindowSize = document.documentElement.clientWidth;
    if (newWindowSize <= 375) {
      setMargin("-25rem");
    } else if (newWindowSize <= 1200) {
      setMargin("");
    } else if (newWindowSize >= 1200) {
      setMargin("");
    } else if (newWindowSize > 375) {
      setMargin("");
    }
  };

  const actionList = [
    {
      label: "Accept Application",
      color: "#00d084",
      icon: "bx bx-pencil",
      check: "accept",
    },
    {
      label: "Reject Application",
      color: "red",
      icon: "ri-delete-bin-fill",
      check: "reject",
    },
  ];

  const [isOpenAction, setIsOpenAction] = useState({});

  // Define a function to toggle the dropdown open/close state
  const toggleAction = (industryId) => {
    // Clone the current state object to avoid directly mutating state
    const newIsOpenAction = { ...isOpenAction };

    // Toggle the state for the specific industryId
    newIsOpenAction[industryId] = !newIsOpenAction[industryId];

    // Update the state with the new open/close state
    setIsOpenAction(newIsOpenAction);
  };

  useEffect(() => {
    // Initial window size calculation
    updateWindowSize();

    // Event listener for window resize
    window.addEventListener("resize", updateWindowSize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  const dispatch = useDispatch()

  const { loading, error, details } = useSelector((state) => ({
    loading: state.Jobs.employerApplicationsLoading,
    error: state.Jobs.employerApplicationsError,
    details: state.Jobs.employerApplications,
  }));

  const handleOptionClick = (item, check) => {
    if (check === "accept") {
      dispatch(approveApplications({
        applicationId: item?.applicationId, 
        applicationStatus: true
      }))
      dispatch(employerApplications({
        jobId: item?.jobId
      }))
    }

    if (check === "reject") {
      dispatch(approveApplications({
        applicationId: item?.applicationId, 
        applicationStatus: false
      }))
      dispatch(employerApplications({
        jobId: item?.jobId
      }))
    }
  };

  return (
    <>
      <Row>
        <Col lg={12} className="mt-4">
          <Card>
            <CardBody>
              <div id="customerList">
                <div className="table-responsive table-card mt-3 mb-1">
                  <table
                    className="table align-middle table-nowrap"
                    id="customerTable"
                    style={{ backgroundColor: "#ebeff0" }}
                  >
                    <thead className="table-light">
                      <tr>
                        <th>Applicant Name</th>
                        <th>Job Title</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Application Status</th>
                        <th>Date Applied</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody
                      className="list form-check-all"
                      style={{ backgroundColor: "white" }}
                    >
                      {loading === false && error === null ? (
                        details?.map((item, key) => (
                          <>
                            <tr>
                              <td className="location">
                                {item?.applicantName}
                              </td>
                              <td className="startDate">{item?.jobTitle}</td>
                              <td className="expDate">
                                {item?.applicantEmail}
                              </td>
                              <td className="expDate">
                                {item?.applicantPhone}
                              </td>
                              <td
                                className="expDate"
                                style={{
                                  backgroundColor:
                                    item?.applicationStatus === "accepted"
                                      ? "#e7f8f5"
                                      : item?.applicationStatus === "pending"
                                      ? "#fef8ed"
                                      : "#f7d5ca",
                                  color:
                                    item?.applicationStatus === "accepted"
                                      ? "#00d084"
                                      :  item?.applicationStatus === "pending"
                                      ? "#c89b51"
                                      : "red",
                                  borderRadius: "0px",
                                  width: "max-content",
                                }}
                              >
                                {item?.applicationStatus}
                              </td>
                              <td className="status">
                                {" "}
                                {item?.appliedAt === null
                                  ? "No updates made yet"
                                  : formatDate(item?.appliedAt)}
                              </td>

                              <td>
                                <Dropdown
                                  isOpen={
                                    isOpenAction[item?.applicationId] || false
                                  }
                                  toggle={() =>
                                    toggleAction(item?.applicationId)
                                  }
                                >
                                  <DropdownToggle
                                    tag="p"
                                    onClick={() =>
                                      toggleAction(item?.applicationId)
                                    }
                                    style={{
                                      cursor: "pointer",
                                      marginTop: "1rem",
                                    }}
                                  >
                                    <i className="bx bx-dots-vertical-rounded fs-20"></i>{" "}
                                  </DropdownToggle>
                                  <DropdownMenu>
                                    {actionList.map((action) => (
                                      <DropdownItem
                                        key={action.label}
                                        onClick={() =>
                                          handleOptionClick(item, action.check)
                                        }
                                        style={{
                                          cursor: "pointer",
                                          color: action.color,
                                        }}
                                      >
                                        <i className={action.icon}></i>{" "}
                                        {action.label}
                                      </DropdownItem>
                                    ))}
                                  </DropdownMenu>
                                </Dropdown>
                              </td>
                            </tr>
                          </>
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
                                    You don't have any Applications at the moment.
                                  </p>
                                </>
                              )}
                            </div>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ApplicantTracking;
