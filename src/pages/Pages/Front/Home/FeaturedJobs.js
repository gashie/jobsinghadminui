import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Container,
  NavLink,
  NavItem,
  TabPane,
  TabContent,
  Nav,
} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { jobGrid } from "../../../../common/data/appsJobs";
import classnames from "classnames";

import SimpleBar from "simplebar-react";
import { useDispatch, useSelector } from "react-redux";
import {
  category,
  fullJobDetails,
  generalJobs,
  saveJobs,
  searchJob,
} from "../../../../store/actions";
import { formatDate } from "../../../../Components/Hooks/formatDate";

const FeaturedJobs = () => {
  const sortbyname = [
    {
      options: [
        { label: "All", value: "All" },
        { label: "Today", value: "Today" },
        { label: "Yesterday", value: "Yesterday" },
        { label: "Last 7 Days", value: "Last 7 Days" },
        { label: "Last 30 Days", value: "Last 30 Days" },
        { label: "Thise Month", value: "Thise Month" },
        { label: "Last Year", value: "Last Year" },
      ],
    },
  ];
  const option = [
    {
      options: [
        { label: "All", value: "All" },
        { label: "Active", value: "Active" },
        { label: "New", value: "New" },
        { label: "Close", value: "Close" },
      ],
    },
  ];

  const [arrowNavTab, setarrowNavTab] = useState("1");
  const arrowNavToggle = (tab) => {
    if (arrowNavTab !== tab) {
      setarrowNavTab(tab);
    }
  };

  const decodeHTML = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  const [customActiveTab, setcustomActiveTab] = useState("1");
  const toggleCustom = (tab) => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab);
    }
  };

  var [width, setWidth] = useState("");
  const [spaceLeft, setSpaceLeft] = useState("");
  const [relative, setRelative] = useState("");

  const updateWindowSize = () => {
    const newWindowSize = document.documentElement.clientWidth;
    if (newWindowSize <= 375) {
      setWidth("100%");
    } else if (newWindowSize <= 1200) {
      setWidth("95%");
    } else if (newWindowSize >= 1200) {
      setWidth("87%");
    } else if (newWindowSize > 375) {
      setWidth("100%");
    }
  };

  const navigate = useNavigate();

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

  useEffect(() => {
    dispatch(generalJobs({ viewAction: "" }));
  }, [dispatch]);

  const { loading, error, jobsInfo } = useSelector((state) => ({
    loading: state.Jobs.generalJobsLoaing,
    error: state.Jobs.generalJobsError,
    jobsInfo: state.Jobs.generalJobs,
  }));

  const [showEntries, setShowEntries] = useState(4);

  const handleShowEntriesChange = (e) => {
    setShowEntries(e.target.value);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = showEntries;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the current page of items
  const filter = jobsInfo?.slice(startIndex, endIndex);

  // Function to handle page changes
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Determine if "Previous" and "Next" links should be disabled
  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = endIndex >= jobsInfo?.length;

  const { catLoading, catError, categoryInfo } = useSelector((state) => ({
    catLoading: state.Industry.loading,
    catError: state.Industry.error,
    categoryInfo: state.Industry.categoryInfo,
  }));

  useEffect(() => {
    dispatch(category({ viewAction: "" }));
  }, [dispatch]);

  const [likedJobs, setLikedJobs] = useState({});

  // Function to toggle the liked status for a specific job
  const toggleLike = (jobId) => {
    setLikedJobs((prevLikedJobs) => ({
      ...prevLikedJobs,
      [jobId]: !prevLikedJobs[jobId], // Toggle the liked status
    }));
  };

  return (
    <>
      <div style={{ backgroundColor: "white" }}>
        <Container
          fluid
          className="col-md-10 col-xxl-10 mt-5 mb-5"
          style={{ width: width }}
        >
          <Row>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "3rem",
              }}
              className=" p-4"
            >
              <h4 style={{ color: "244a59" }} className="fw-bolder">
                Featured Jobs
              </h4>
              <Link to="/job-list">
                <Button
                  style={{ backgroundColor: "#244a59" }}
                  className="btn btn-dark"
                >
                  See all jobs
                </Button>
              </Link>
            </div>
          </Row>
          <Row id="job-list" className="p-3">
            {loading === false && error === false ? (
              filter.map((item, key) => (
                <Col xl={3} md={6} key={key} xs={15}>
                  <Card style={{ cursor: "pointer" }}>
                    <CardBody
                      style={{
                        height: "45vh",
                        border: "1px solid #e0e0e0",
                        borderRadius: "10px",
                      }}
                    >
                      <Button
                        type="button"
                        className="btn btn-dark btn-soft-primary float-end"
                        style={{
                          backgroundColor: "white",
                          boxShadow: "none",
                        }}
                        onClick={() => {
                          toggleLike(item.jobId);
                          dispatch(saveJobs({ jobId: item?.jobId }));
                        }}
                      >
                        <i
                          className={`bx bx-heart fs-20 fw-bolder ${
                            likedJobs[item.jobId] ? "bx bxs-heart" : ""
                          }`}
                          style={{ color: "#244a59" }}
                        ></i>
                      </Button>
                      <div className="avatar-xxl mb-4 ">
                        <div className="">
                          <img
                            src={
                              "http://108.166.181.225:5050/uploads/image/logos/" +
                              item?.companyLogo
                            } // Use the actual image URL
                            alt=""
                            className="avatar-md img-fluid"
                          />
                        </div>
                      </div>
                     
                        <h5
                          className="fw-bolder"
                          style={{ color: "#244a59" }}
                          onClick={() => {
                            // dispatch(searchJob(item?.jobTitle));
                            dispatch(fullJobDetails({ jobId: item?.jobId }));
                            navigate(`/job-details?.title=B&id=${item?.jobId}`);
                          }}
                        >
                          {item.jobTitle}
                        </h5>
                     
                      <p className="text-muted mt-5">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: decodeHTML(
                              item?.jobDescription.substring(0, 100) +
                                (item?.jobDescription.length > 100 ? "..." : "")
                            ),
                          }}
                        ></div>
                      </p>
                      <p className="text-muted mt-5">
                        <i className="ri-map-pin-2-line text-muted me-1 align-bottom fs-20"></i>{" "}
                        {item.jobLocation}
                      </p>
                      <p className="text-muted mt-4">
                        <i className="bx bx-calendar text-muted me-1 align-bottom fs-20"></i>{" "}
                        Expires {formatDate(item?.goLiveDate)}
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              ))
            ) : (
              <p>Loading</p>
            )}
          </Row>

          {/* Browse Jobs */}
          <Row>
            <Col xxl={6} className="mt-5">
              <h5
                className="mb-3 mt-5 p-4"
                style={{
                  fontWeight: "bolder",
                  marginTop: "10rem",
                }}
              >
                Browse Jobs
              </h5>
              <Nav
                tabs
                className="nav nav-tabs nav-tabs-custom nav-justified mb-3 p-4"
              >
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer", color: "#244a59" }}
                    className={classnames({
                      active: customActiveTab === "1",
                    })}
                    onClick={() => {
                      toggleCustom("1");
                    }}
                  >
                    By Categories
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer", color: "#244a59" }}
                    className={classnames({
                      active: customActiveTab === "2",
                    })}
                    onClick={() => {
                      toggleCustom("2");
                    }}
                  >
                    By Industry
                  </NavLink>
                </NavItem>
              </Nav>

              <TabContent activeTab={customActiveTab} className="text-muted">
                <TabPane tabId="1" id="home1">
                  <div className="d-flex">
                    <div
                      className="ms-2 p-3"
                      style={{
                        display: "flex",
                        gap: "2rem",
                        flexWrap: "wrap",
                      }}
                    >
                      {catLoading === false && catError === false ? (
                        categoryInfo?.map((item) => (
                          <>
                            <Col md={2} xl={3}>
                              <p
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  dispatch(searchJob(item.jobCategoryName));
                                  navigate("/job-list");
                                }}
                              >
                                {item.jobCategoryName}
                              </p>
                            </Col>
                          </>
                        ))
                      ) : (
                        <p>Loading</p>
                      )}
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="2">
                  <div className="d-flex">
                    <div
                      className="ms-2 p-3"
                      style={{
                        display: "flex",
                        gap: "2rem",
                        flexWrap: "wrap",
                      }}
                    >
                      {catLoading === false && catError === false ? (
                        categoryInfo?.map((item) => (
                          <>
                            <Col md={2} xl={3}>
                              <p
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  dispatch(searchJob(item.jobCategoryName));
                                  navigate("/job-list");
                                }}
                              >
                                {item.jobCategoryName}
                              </p>
                            </Col>
                          </>
                        ))
                      ) : (
                        <p>Loading</p>
                      )}
                    </div>
                  </div>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
          <br />
          <br />
          <br />
        </Container>
      </div>
    </>
  );
};

export default FeaturedJobs;
