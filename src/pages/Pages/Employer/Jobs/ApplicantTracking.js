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
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "../../../../Components/Hooks/formatDate";
import {
  approveApplications,
  employerApplications,
} from "../../../../store/actions";

const ApplicantTracking = () => {
  const [margin, setMargin] = useState("");
  const [action, setAction] = useState(false);
  const [takeAction, setTakeAction] = useState("");

  // const updateWindowSize = () => {
  //   const newWindowSize = document.documentElement.clientWidth;
  //   if (newWindowSize <= 375) {
  //     setMargin("-25rem");
  //   } else if (newWindowSize <= 1200) {
  //     setMargin("");
  //   } else if (newWindowSize >= 1200) {
  //     setMargin("");
  //   } else if (newWindowSize > 375) {
  //     setMargin("");
  //   }
  // };

  const [modalOpen, setModalOpen] = useState(false);

  const [justifyTab, setjustifyTab] = useState("1");
  const justifyToggle = (tab) => {
    if (justifyTab !== tab) {
      setjustifyTab(tab);
    }
  };

  const [display, setDisplay] = useState("");

  const updateWindowSize = () => {
    const newWindowSize = document.documentElement.clientWidth;
    if (newWindowSize <= 375) {
      setDisplay("none");
    } else if (newWindowSize <= 1200) {
      setDisplay("none");
    } else if (newWindowSize >= 1200) {
      setDisplay("");
    } else if (newWindowSize > 375) {
      setDisplay("");
    }
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

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const actionList = [
    {
      label: "Accept Application",
      color: "black",
      icon: "bx bx-pencil",
      check: "accept",
    },
    {
      label: "Reject Application",
      color: "black",
      icon: "ri-delete-bin-fill",
      check: "reject",
    },
    {
      label: "View Profile",
      color: "black",
      icon: "ri-eye-line",
      check: "view",
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

  const dispatch = useDispatch();

  const { loading, error, details } = useSelector((state) => ({
    loading: state.Jobs.employerApplicationsLoading,
    error: state.Jobs.employerApplicationsError,
    details: state.Jobs.employerApplications,
  }));

  const [profile, setProfile] = useState({});

  const handleOptionClick = (item, check) => {
    if (check === "accept") {
      dispatch(
        approveApplications({
          applicationId: item?.applicationId,
          applicationStatus: true,
        })
      );
      dispatch(
        employerApplications({
          jobId: item?.jobId,
        })
      );
    }

    if (check === "reject") {
      dispatch(
        approveApplications({
          applicationId: item?.applicationId,
          applicationStatus: false,
        })
      );
      dispatch(
        employerApplications({
          jobId: item?.jobId,
        })
      );
    }

    if (check === "view") {
      toggleModal();
      setProfile(item);
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
                              <td className="expDate">
                                <p
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
                                        : item?.applicationStatus === "pending"
                                        ? "#c89b51"
                                        : "red",
                                    borderRadius: "10px",
                                    width: "max-content",
                                  }}
                                  className="p-1"
                                >
                                  {item?.applicationStatus}
                                </p>
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
                                    You don't have any Applications at the
                                    moment.
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

      <div>
        {/* <Button color="primary" onClick={toggleModal}>
        Open Profile Modal
      </Button> */}

        <Modal isOpen={modalOpen} toggle={toggleModal} size="xl">
          <ModalHeader toggle={toggleModal}>Applicant Profile </ModalHeader>
          <ModalBody>
            <Row>
              {/* <h4>Company's Profile</h4> */}
              <Col
                style={{
                  position: "relative",
                  left: "6rem",
                  marginTop: "10rem",
                }}
                xl={3}
                md={4}
                xs={7}
              >
                <p style={{ textAlign: "center" }}>
                  <img
                    src={
                      "https://108.166.181.225:5050/uploads/image/logos/" +
                      profile?.userInfo?.company?.companyLogo
                    }
                    alt="profile-img"
                    className="img-fluid avatar-xxl"
                  ></img>
                </p>
                <h5 style={{ textAlign: "center", marginTop: "1rem" }}>
                  {profile?.userInfo?.company?.companyName}
                </h5>
              </Col>

              <Col>
                <div
                  style={{
                    borderLeft: "1px dashed black",
                    height: "100%",
                    position: "relative",
                    left: "12rem",
                    display: display,
                  }}
                ></div>
              </Col>

              <Col
                style={{ display: "grid", gap: "2.5rem", marginRight: "-4rem" }}
                xl={6}
                md={5}
                xs={10}
                className="mt-3 px-5"
              >
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <h6 style={{ color: "#244a59", flex: "0 0 30%" }}>Applicant Name:</h6>
                  <h6 style={{ flex: "0 0 70%" }}>
                    {profile?.applicantName}
                  </h6>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <h6 style={{ color: "#244a59", flex: "0 0 30%" }}>Phone:</h6>
                  <h6 style={{ flex: "0 0 70%" }}>
                    {profile?.applicantPhone}
                  </h6>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <h6 style={{ color: "#244a59", flex: "0 0 30%" }}>Email:</h6>
                  <h6 style={{ flex: "0 0 70%" }}>
                    {profile?.applicantEmail}
                  </h6>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <h6 style={{ color: "#244a59", flex: "0 0 30%" }}>
                    Date Applied:
                  </h6>
                  <h6 style={{ flex: "0 0 70%" }}>30th August, 1992</h6>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <h6 style={{ color: "#244a59", flex: "0 0 30%" }}>
                    Address:
                  </h6>
                  <h6 style={{ flex: "0 0 70%" }}>
                    {formatDate(profile?.appliedAt)}
                  </h6>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <h6 style={{ color: "#244a59", flex: "0 0 30%" }}>
                    Application Status:
                  </h6>
                  <h6 style={{ flex: "0 0 70%" }}>{profile?.applicationStatus}</h6>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <h6 style={{ color: "#244a59", flex: "0 0 30%" }}>
                    Resume (Click to download resume):
                  </h6>
                  <h6 style={{ flex: "0 0 70%" }}>{profile?.applicantResume === null ? "No Resume"  : ""}</h6>
                </div>
                {/* <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <h6 style={{ color: "#244a59", flex: "0 0 30%" }}>
                    Website:
                  </h6>
                  <h6 style={{ flex: "0 0 70%" }}>ghashietechnologie.net</h6>
                </div> */}
                {/* <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <h6 style={{ color: "#244a59", flex: "0 0 30%" }}>
                    Facebook Page Url:
                  </h6>
                  <h6 style={{ flex: "0 0 70%" }}>ghashietechnologie.net</h6>
                </div> */}
                {/* <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <h6 style={{ color: "#244a59", flex: "0 0 30%" }}>
                    Twitter Page Url:
                  </h6>
                  <h6 style={{ flex: "0 0 70%" }}>ghashietechnologie.net</h6>
                </div> */}
                {/* <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <h6 style={{ color: "#244a59", flex: "0 0 30%" }}>
                    LinkedIn Page Url:
                  </h6>
                  <h6 style={{ flex: "0 0 70%" }}>ghashietechnologie.net</h6>
                </div> */}
                {/* <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <h6 style={{ color: "#244a59", flex: "0 0 30%" }}>
                    Company Description:
                  </h6>
                  <h6 style={{ flex: "0 0 70%" }}>
                    {profile?.userInfo?.company?.companyProfile}
                  </h6>
                </div> */}
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button style={{backgroundColor: "#244a59"}} onClick={toggleModal}>
              Close
            </Button>
            {/* <Button style={{backgroundColor: "#244a59"}} onClick={toggleModal}>
              Save Changes
            </Button> */}
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
};

export default ApplicantTracking;
