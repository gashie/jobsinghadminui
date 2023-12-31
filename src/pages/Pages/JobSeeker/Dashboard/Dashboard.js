import { useEffect, useState } from "react";
import {
  NavItem,
  TabPane,
  NavLink,
  Card,
  CardBody,
  Nav,
  TabContent,
  Col,
  Row,
  Button,
  Spinner,
} from "reactstrap";
import classnames from "classnames";
import img1 from "../../../../assets/images/jobsinghana/seatec.png";
import Applications from "../Applications";
import Alerts from "../Alerts";
import SavedJobs from "../SavedJobs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fullJobDetails,
  viewCv,
  viewResume,
  viewSavedJobs,
  viewjobAlerts,
} from "../../../../store/actions";

const Dashboard = () => {
  const [justifyTab, setjustifyTab] = useState("1");
  const justifyToggle = (tab) => {
    if (justifyTab !== tab) {
      setjustifyTab(tab);
    }
  };

  // useEffect(() => {
  //   if (window.location.pathname === "/job-seeker-applications") {
  //     setjustifyTab("2");
  //   } else if (window.location.pathname === "/job-seeker-alerts") {
  //     setjustifyTab("3");
  //   } else if (window.location.pathname === "/job-seeker-saved-jobs") {
  //     setjustifyTab("4");
  //   } else setjustifyTab("1");
  // }, []);

  const [height, setHeight] = useState("");

  const updateWindowSize = () => {
    const newWindowSize = document.documentElement.clientWidth;
    if (newWindowSize <= 375) {
      setHeight("90vh");
    } else if (newWindowSize <= 1200) {
      setHeight("90vh");
    } else if (newWindowSize >= 1200) {
      setHeight("90vh");
    } else if (newWindowSize > 375) {
      setHeight("90vh");
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

  const { loading, error, userInfo } = useSelector((state) => ({
    loading: state.Login.loading,
    error: state.Login.error,
    userInfo: state.Login.userInfo,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(viewCv({ viewAction: "" }));
    dispatch(viewjobAlerts({ viewAction: "" }));
    dispatch(viewResume({ viewAction: "" }));
    dispatch(viewSavedJobs({ viewAction: "" }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(viewSavedJobs({ viewAction: "" }));
  }, [dispatch]);

  const {
    savedJobsInfo,
    savedLoading,
    savedError,
    details,
    detailLoading,
    detailerror,
  } = useSelector((state) => ({
    savedLoading: state.JobAlerts.savedJobsLoading,
    savedError: state.JobAlerts.savedJobsError,
    savedJobsInfo: state.JobAlerts.savedJobs,
    details: state.JobAlerts.fullJobDetails,
    detailLoading: state.JobAlerts.fullJobDetailsLoading,
    detailerror: state.JobAlerts.fullJobDetailsError,
  }));

  const [showEntries, setShowEntries] = useState(2);

  const handleShowEntriesChange = (e) => {
    setShowEntries(e.target.value);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = showEntries;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the current page of items
  const filter =
    loading === false &&
    error === false &&
    savedJobsInfo?.slice(startIndex, endIndex);

  // Function to handle page changes
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Determine if "Previous" and "Next" links should be disabled
  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = endIndex >= savedJobsInfo?.length;

  return (
    <>
      <Col
        xxl={11}
        // className="m-0"
        md={11}
        sm={20}
        style={{ position: "relative", top: "1rem", marginLeft: "1rem" }}
      >
        <Card style={{ border: "none", boxShadow: "0px 0px 0px white" }}>
          <CardBody>
            <Nav tabs className="nav-tabs nav-justified mb-3">
              <NavItem>
                <Link to="/app/job-seeker-dashboard">
                  <NavLink
                    style={{ cursor: "pointer", color: "black" }}
                    className={classnames({ active: justifyTab === "1" })}
                    onClick={() => {
                      justifyToggle("1");
                    }}
                  >
                    Dashboard
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/app/job-seeker-applications">
                  <NavLink
                    style={{ cursor: "pointer", color: "black" }}
                    className={classnames({ active: justifyTab === "2" })}
                    onClick={() => {
                      justifyToggle("2");
                    }}
                  >
                    Applications
                  </NavLink>
                </Link>
              </NavItem>

              <NavItem>
                <Link to="/app/job-seeker-alerts">
                  <NavLink
                    style={{ cursor: "pointer", color: "black" }}
                    className={classnames({ active: justifyTab === "3" })}
                    onClick={() => {
                      justifyToggle("3");
                    }}
                  >
                    Alerts
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/app/job-seeker-saved-jobs">
                  <NavLink
                    style={{ cursor: "pointer", color: "black" }}
                    className={classnames({ active: justifyTab === "4" })}
                    onClick={() => {
                      justifyToggle("4");
                    }}
                  >
                    Saved jobs
                  </NavLink>
                </Link>
              </NavItem>
            </Nav>

            <TabContent activeTab={justifyTab} className="text-muted">
              <TabPane
                tabId="1"
                id="base-justified-home"
                style={{
                  height: "700px",
                  position: "relative",
                  overflow: "scroll",
                }}
                className="scroll-change"
              >
                <Row md={20}>
                  <h5 style={{ fontWeight: "bolder" }} className="mt-4">
                    {loading === false && error === false
                      ? `Welcome, ${userInfo?.userInfo?.fullName}`
                      : ""}
                  </h5>

                  <div className="d-flex mt-5 gap-2">
                    <div>
                      <i
                        className="ri-map-pin-line"
                        style={{
                          fontSize: "2rem",
                          position: "relative",
                          top: "0.6rem",
                          backgroundColor: "#00d084",
                          color: "white",
                          padding: "1rem",
                          borderRadius: "0.2rem",
                        }}
                      ></i>
                    </div>

                    <div style={{ display: "grid" }}>
                      <h5
                        style={{
                          position: "relative",
                          top: "0.6rem",
                          color: "#244a59",
                          fontWeight: "bolder",
                        }}
                      >
                        New recommended jobs
                      </h5>
                      <p style={{ color: "#244a59", fontWeight: "lighter" }}>
                        Based on your current search
                      </p>
                    </div>
                  </div>

                  {/* New company */}
                  <div className="d-grid">
                    {savedLoading === false && savedError === false ? (
                      (filter || []).map((item, key) => (
                        <>
                          <Col xl={5} key={key}>
                            <div
                              className="d-flex mt-5 gap-2"
                              style={{
                                justifyContent: "space-between",
                                border: "1px solid #dbdbdb",
                                padding: "0.4rem",
                                borderRadius: "0.3rem",
                                display: "flex",

                                flexWrap: "wrap",
                              }}
                            >
                              <div className="d-flex gap-2">
                                <div>
                                  <img
                                    src={
                                      "https://108.166.181.225:5050/uploads/image/logos/" +
                                      item?.companyLogo
                                    }
                                    alt="logo"
                                    className="img-fluid avatar-xxl"
                                    width="100"
                                    height="100"
                                  ></img>
                                </div>

                                <div style={{ display: "grid" }}>
                                  <h5
                                    style={{
                                      position: "relative",
                                      top: "0.6rem",
                                      color: "#244a59",
                                      fontWeight: "bolder",
                                    }}
                                  >
                                    {item.jobTitle}
                                  </h5>
                                  <p
                                    style={{
                                      color: "#244a59",
                                      fontWeight: "lighter",
                                    }}
                                  >
                                    {item.companyName}
                                  </p>
                                </div>
                              </div>

                              <div>
                                <Link to="/app/apply">
                                  <Button
                                    className="btn btn-dark"
                                    style={{
                                      backgroundColor: "#244a59",
                                      position: "relative",
                                      top: "0.7rem",
                                    }}
                                    onClick={() => {
                                      justifyToggle("4");
                                      dispatch(
                                        fullJobDetails({ jobId: item?.jobId })
                                      );
                                    }}
                                  >
                                    Quick Apply
                                  </Button>
                                </Link>
                              </div>
                            </div>
                          </Col>
                        </>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7" className="text-center mt-5">
                          <div className="d-flex align-items-center justify-content-center">
                            {savedLoading === true ? (
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
                                  You don't have any Service inquiries at the
                                  moment.
                                </p>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    )}
                  </div>

                  {/* End company */}

                  {/* <div>
                    <p style={{ textAlign: "center" }} className="mt-5">
                      <Button
                        className="btn btn-light"
                        style={{
                          border: "1px solid #244a59",
                          color: "#244a59",
                        }}
                      >
                        View More
                      </Button>
                    </p>
                  </div> */}

                  <div className="d-flex mt-5 gap-2">
                    <div>
                      <i
                        className="ri-map-pin-line"
                        style={{
                          fontSize: "2rem",
                          position: "relative",
                          top: "0.6rem",
                          backgroundColor: "#00d084",
                          color: "white",
                          padding: "1rem",
                          borderRadius: "0.2rem",
                        }}
                      ></i>
                    </div>
                    <div style={{ display: "grid" }}>
                      <h5
                        style={{
                          position: "relative",
                          top: "0.6rem",
                          color: "#244a59",
                          fontWeight: "bolder",
                        }}
                      >
                        You haven’t sent any applications yet
                      </h5>
                      <p style={{ color: "#244a59", fontWeight: "lighter" }}>
                        Keep track of the current status of your applications.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex mt-5 gap-2">
                    <div>
                      <i
                        className="ri-map-pin-line"
                        style={{
                          fontSize: "2rem",
                          position: "relative",
                          top: "0.6rem",
                          backgroundColor: "#00d084",
                          color: "white",
                          padding: "1rem",
                          borderRadius: "0.2rem",
                        }}
                      ></i>
                    </div>
                    <div style={{ display: "grid", cursor: "pointer" }}>
                      <h5
                        style={{
                          position: "relative",
                          top: "0.6rem",
                          color: "#244a59",
                          fontWeight: "bolder",
                        }}
                      >
                        My job alerts
                      </h5>
                      <p style={{ color: "#244a59", fontWeight: "lighter" }}>
                        Discover jobs that match your job title preference and
                        previous job searches
                      </p>
                    </div>
                  </div>
                </Row>
              </TabPane>

              <TabPane
                tabId="2"
                id="product"
                style={{ height: "700px", position: "relative" }}
              >
                <Applications />
              </TabPane>

              <TabPane
                tabId="3"
                id="base-justified-messages"
                style={{
                  height: "700px",
                  position: "relative",
                  overflow: "scroll",
                }}
                className="scroll-change"
              >
                <Alerts />
              </TabPane>

              <TabPane
                tabId="4"
                id="base-justified-settings"
                style={{ height: "700px", position: "relative" }}
              >
                <SavedJobs />
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Dashboard;
