import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Spinner,
} from "reactstrap";
import { jobGrid } from "../../../../common/data/appsJobs";
import { Link, useNavigate } from "react-router-dom";
import lash from "./lash.png";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  findJob,
  fullJobDetails,
  saveJobs,
  searchJob,
} from "../../../../store/actions";
import ClipboardJS from "clipboard";
import { Popover, PopoverHeader, PopoverBody } from "reactstrap";
import { formatDate } from "../../../../Components/Hooks/formatDate";

const JobDetails = () => {
  var [left, setLeft] = useState("");
  var [width, setWidth] = useState("");

  const updateWindowSize = () => {
    const newWindowSize = document.documentElement.clientWidth;
    if (newWindowSize <= 375) {
      setLeft("0rem");
      setWidth("w-100");
    } else if (newWindowSize <= 1200) {
      setLeft("-10rem");
      setWidth("w-100");
    } else if (newWindowSize >= 1200) {
      setLeft("-16rem");
      setWidth("");
    } else if (newWindowSize === 390) {
      setLeft("");
      setWidth("");
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

  const { savedJobsInfo, loading, error, details, detailLoading, detailerror } =
    useSelector((state) => ({
      loading: state.JobAlerts.savedJobsLoading,
      error: state.JobAlerts.savedJobsError,
      savedJobsInfo: state.JobAlerts.savedJobs,
      details: state.JobAlerts.findJobData,
      detailLoading: state.JobAlerts.findJobLoading,
      detailerror: state.JobAlerts.findJobError,
    }));

  const decodeHTML = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [popoverOpen, setPopoverOpen] = useState(false);
  const [sharedUrl, setSharedUrl] = useState("");

  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };

  const handleClick = () => {
    // Get the current URL
    const currentUrl = window.location.href;

    // Add data parameters (customize as needed)
    const newData = {
      title: details?.jobInfo?.jobTitle,
      id: details?.jobInfo?.jobId,
      // param2: details?.jobInfo?.jobDescription,
    };

    // Create a new URL with the added data parameters
    const newUrl = new URL(currentUrl);
    Object.entries(newData).forEach(([key, value]) => {
      newUrl.searchParams.append(key, value);
    });

    // Set the new URL as the shared URL
    setSharedUrl(newUrl.href);

    // Open the popover
    togglePopover();
  };

  // Get the current URL
  const currentUrl = window.location.href;

  // Create a URL object
  const url = new URL(currentUrl);

  // Get the search params
  const searchParams = url.searchParams;

  // Get individual parameters
  const param1 = searchParams.get("title");
  const param2 = searchParams.get("id");

  useEffect(() => {
    dispatch(findJob({ jobId: param2 }));
  }, [dispatch, param2]);

  // Function to copy the URL to clipboard
  const copyToClipboard = () => {
    const clipboard = new ClipboardJS(".copy-button", {
      text: function () {
        return sharedUrl;
      },
    });

    clipboard.on("success", function (e) {
      e.clearSelection();
      alert("URL copied to clipboard");
    });
  };

  const shareOnLinkedIn = () => {
    const url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
      currentUrl
    )}&title=${encodeURIComponent(details?.jobTitle)}`;
    window.open(url, "_blank");
  };

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(
      currentUrl
    )}`;
    window.open(url, "_blank");
  };

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      currentUrl
    )}&text=${encodeURIComponent(details?.jobTitle)}`;
    window.open(url, "_blank");
  };

  const shareOnWhatsApp = () => {
    const url = `whatsapp://send?text=${encodeURIComponent(
      `${details?.jobTitle} ${currentUrl}`
    )}`;
    window.location.href = url;
  };

  const shareOnMessenger = () => {
    const url = `https://www.messenger.com/share.php?u=${encodeURIComponent(
      currentUrl
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {detailLoading === false && detailerror === null ? (
        <div style={{ backgroundColor: "white" }} className="p-5">
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <h5
              style={{
                color: "#244a59",
                fontWeight: "bolder",
                marginRight: left,
              }}
            >
              {details?.jobInfo?.companyName}
            </h5>
            <Col
              md={15}
              xl={17}
              className="d-flex"
              style={{ justifyContent: "center" }}
            >
              <Card
                style={{
                  boxShadow: "none",
                  border: "1px solid #e0e0e0",
                  borderRadius: "0.8rem",
                  width: "86.1%",
                }}
                className="mt-5"
              >
                <CardBody style={{ padding: "" }}>
                  <div className="p-4">
                    <Col xl={10} md={15} xs={20} sm={20}>
                      <div className="avatar-xl mb-4">
                        <div className="avatar-title bg-light" style={{}}>
                          <img
                            src={
                              "https://108.166.181.225:5050/uploads/image/logos/" +
                              details?.companyLogo
                            }
                            alt=""
                            className="avatar-xxl img-fluid"
                          />
                        </div>
                      </div>
                      <Link to="#!">
                        <h5 style={{ color: "#244a59", fontWeight: "bolder" }}>
                          {details?.jobTitle}
                        </h5>
                      </Link>

                      <p className="fw-bold mt-4" style={{ color: "#244a59" }}>
                        {" "}
                        <i className="ri-building-4-line  me-1 align-bottom"></i>{" "}
                        {details?.companyName}
                      </p>
                      <p className="">
                        {" "}
                        <i className="bx bx-calendar me-1 align-bottom"></i>{" "}
                        {formatDate(details?.goLiveDate)}
                      </p>
                      <p className="">
                        {" "}
                        <i className="ri-briefcase-line  me-1 align-bottom"></i>{" "}
                        {details?.jobStatus}
                      </p>
                      <p className="">
                        {" "}
                        <i className="ri-map-pin-2-line me-1 align-bottom"></i>{" "}
                        {details?.jobLocation}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          gap: "1rem",
                          justifyContent: "left",
                          width: "100%",
                          flexWrap: "wrap",
                        }}
                        className="col-md-20 col-xs-20"
                      >
                        <Button
                          type="button"
                          // className="btn btn-icon btn-soft-light mt-3 p-4"
                          className={`btn btn-icon btn-soft-light mt-3 p-4 ${width}`}
                          data-bs-toggle="button"
                          aria-pressed="true"
                          style={{
                            width: "20%",
                            color: "black",
                            border: "1px solid #244a59",
                          }}
                          onClick={() => {
                            dispatch(saveJobs({ jobId: details?.jobId }));
                          }}
                        >
                          <i
                            className="mdi mdi-cards-heart fs-15"
                            style={{ color: "#244a59" }}
                          ></i>
                          <p className="m-1">Save</p>
                        </Button>
                        <Link
                          to="/app/apply"
                          className={` ${width}`}
                          style={{ width: "20%" }}
                        >
                          <Button
                            type="button"
                            className={`btn btn-icon btn-soft-light mt-3 p-4 ${width}`}
                            data-bs-toggle="button"
                            aria-pressed="true"
                            style={{
                              width: "100%",
                              backgroundColor: "#244a59",
                              color: "white",
                            }}
                          >
                            Apply
                          </Button>
                        </Link>
                        <Button
                          id="shareButton"
                          onClick={handleClick}
                          type="button"
                          className={`btn btn-icon btn-soft-light mt-3 p-4 ${width}`}
                          data-bs-toggle="button"
                          aria-pressed="true"
                          style={{
                            width: "20%",
                            color: "black",
                            border: "1px solid #244a59",
                          }}
                        >
                          <i
                            className="las la-share-square fs-15"
                            style={{ color: "#244a59" }}
                          ></i>
                          <p className="m-1">Share</p>
                          <Popover
                            placement="bottom"
                            isOpen={popoverOpen}
                            target="shareButton"
                            toggle={togglePopover}
                          >
                            <PopoverHeader>Share URL</PopoverHeader>
                            <PopoverBody>
                              {sharedUrl && (
                                <>
                                  <div>{sharedUrl}</div>
                                  <button
                                    className="copy-button"
                                    data-clipboard-text={sharedUrl}
                                    onClick={copyToClipboard}
                                  >
                                    Copy URL
                                  </button>
                                </>
                              )}
                            </PopoverBody>
                          </Popover>
                        </Button>
                      </div>
                    </Col>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <div
            className="d-flex"
            style={{ justifyContent: "center", marginRight: "-0rem" }}
          >
            <Row
              style={{
                display: "flex",
                width: "87%",
                justifyContent: "center",
              }}
              className=""
            >
              <Col xs={20} xl={9} md={20}>
                <CardBody>
                  <Card
                    className=""
                    style={{
                      boxShadow: "none",
                      border: "1px solid #e0e0e0",
                      borderRadius: "0.8rem",
                      padding: "2rem",
                      paddingLeft: "2rem",
                    }}
                  >
                    <h5
                      className="mb-3 fw-bolder mt-3"
                      style={{ color: "#244a59" }}
                    >
                      Job Description
                    </h5>

                    <div
                      dangerouslySetInnerHTML={{
                        __html: decodeHTML(details?.jobDescription),
                      }}
                    ></div>

                    {/* <div>
                    <h5
                      className="mb-3 fw-bolder mt-5"
                      style={{ color: "#244a59" }}
                    >
                      Responsibilities
                    </h5>
                  
                    <ul className=" vstack gap-2">
                      <li>
                        To visualise and create drawings and design concepts to
                        determine the best product.
                      </li>
                      <li>
                        To present ideas and concepts to relevant team members
                        for brainstorming.
                      </li>
                      <li>
                        To employ design concepts into functional prototypes.
                      </li>
                      <li>
                        To analyse, modify and revise existing designs or
                        products and meet customer expectations.
                      </li>
                      <li>
                        To coordinate with team members and to ensure accurate
                        efficiency in the design phase.
                      </li>
                      <li>Excellent attention to detail</li>
                      <li>Meticulous and diligent</li>
                    </ul>
                  </div> */}

                    {/* <div>
                    <h5
                      className="mb-3 fw-bolder mt-5"
                      style={{ color: "#244a59" }}
                    >
                      Requirements
                    </h5>
                    <ul className=" vstack gap-2">
                      <li>Minimum of SHS qualification</li>
                      <li>A least 1-3 years experience</li>
                      <li>
                        Any additional qualificatio in a security related area
                        from a recadvantage
                      </li>
                      <li>Possess the necessary tact, respect and empathy</li>
                      <li>
                        Good interpersonal and communication skills (oral and
                        written)
                      </li>
                      <li>
                        Vigillant, alert and always aware of one’s surroundings
                      </li>
                      <li>Physical fit and with a healthy weight range</li>
                      <li>
                        Intergrity and the ability to act responsibly and
                        ethically
                      </li>
                    </ul>
                  </div> */}

                    {/* <div className="m-4">
                    <h4 className="fw-bolder" style={{ color: "#244a59" }}>
                      Note:
                    </h4>
                    <p>
                      Please not, employers receive numeros applications per
                      posting and will only shortlist the most qualified
                      candidates. Also Jobsinghana.com is not involved in any
                      decision made by an employer/recruiter and therefore does
                      not guarantee that applications sent result in a candidate
                      being shortlisted/selected for that position
                    </p>
                  </div> */}

                    <div className="m-4">
                      <Link
                        to="/app/apply"
                        className="text-center"
                        style={{ width: "100%" }}
                      >
                        <Button
                          className="btn btn-dark p-3"
                          style={{ width: "100%", backgroundColor: "#244a59" }}
                        >
                          Apply
                        </Button>
                      </Link>
                    </div>

                    <p className="text-center text-muted fw-bolder mt-4">
                      Share this job with your friends
                    </p>

                    <ul className="list-inline mb-0 text-center mt-2">
                      <li className="list-inline-item">
                        <button
                          className="btn btn-icon p-4"
                          style={{
                            borderRadius: "2rem",
                            backgroundColor: "#4477BB",
                          }}
                          onClick={shareOnLinkedIn}
                        >
                          <i
                            className="ri-linkedin-line fs-20"
                            style={{ color: "white" }}
                          ></i>
                        </button>
                      </li>
                      <li className="list-inline-item">
                        <button
                          className="btn btn-icon p-4"
                          style={{
                            borderRadius: "2rem",
                            backgroundColor: "#405189",
                          }}
                          onClick={shareOnFacebook}
                        >
                          <i
                            className="ri-facebook-line fs-20"
                            style={{ color: "white" }}
                          ></i>
                        </button>
                      </li>
                      <li className="list-inline-item">
                        <button
                          className="btn btn-icon btn-soft-success p-4"
                          style={{
                            borderRadius: "2rem",
                            backgroundColor: "#299CDB",
                          }}
                          onClick={shareOnTwitter}
                        >
                          <i
                            className="ri-twitter-line fs-20"
                            style={{ color: "white" }}
                          ></i>
                        </button>
                      </li>
                      <li className="list-inline-item">
                        <button
                          className="btn btn-icon btn-soft-secondary p-4"
                          style={{
                            borderRadius: "2rem",
                            backgroundColor: "#5CCD5A",
                          }}
                          onClick={shareOnWhatsApp}
                        >
                          <i
                            className="ri-whatsapp-line fs-20"
                            style={{ color: "white" }}
                          ></i>
                        </button>
                      </li>
                      <li className="list-inline-item">
                        <button
                          className="btn btn-icon btn-soft-danger p-4"
                          style={{
                            borderRadius: "2rem",
                            backgroundColor: "#3D7DDC",
                          }}
                          onClick={shareOnMessenger}
                        >
                          <i
                            className="ri-messenger-line fs-20"
                            style={{ color: "white" }}
                          ></i>
                        </button>
                      </li>
                    </ul>
                  </Card>
                </CardBody>
              </Col>
              <Col xs={15} xl={3}>
                <Row>
                  <Card
                    style={{
                      boxShadow: "none",
                      border: "1px solid #e0e0e0",
                      backgroundColor: "#F8FAFC",
                      borderRadius: "0.8rem",
                    }}
                    className="p-3"
                  >
                    <CardBody>
                      <div
                        className="p-2"
                        style={{ display: "grid", justifyContent: "center" }}
                      >
                        <p style={{ textAlign: "center" }}>
                          <i
                            className="mdi mdi-email-outline fw-bolder"
                            style={{ fontSize: "4rem" }}
                          ></i>
                        </p>
                        <h6
                          style={{ textAlign: "center", marginTop: "-1rem" }}
                          className="fw-bolder"
                        >
                          Get similar jobs by email
                        </h6>

                        <input
                          placeholder="Enter your email"
                          className="m-3 p-3"
                          style={{ border: "1px solid #e0e0e0" }}
                        ></input>

                        <h5 className="text-center ">
                          <Button className="btn btn-success p-2 w-50 ">
                            Create alert
                          </Button>
                        </h5>
                        <p style={{ textAlign: "center" }} className="mt-3">
                          * You can cancel this job alert at any time
                        </p>
                      </div>
                    </CardBody>
                  </Card>
                </Row>
                <Row>
                  <Card
                    style={{
                      backgroundColor: "#F8FAFC",
                      boxShadow: "none",
                      border: "none",
                    }}
                  >
                    <CardBody>
                      <div className="p-3">
                        <h4 className="fw-bolder" style={{ color: "#244a59" }}>
                          Similar Jobs
                        </h4>

                        {details?.similarjobs?.map((job) => (
                          <div key={job?.id}>
                            <hr />
                            <h5
                              className="p-2 fw-bolder"
                              style={{ color: "#244a59", cursor: 'pointer' }}
                              onClick={()=>{
                                dispatch(
                                  findJob({
                                    jobId: job?.jobId,
                                  })
                                );
                                navigate(
                                  `/job-details?.title=B&id=${job?.jobId}`
                                );
                              }}
                            >
                              {job?.jobTitle}
                            </h5>
                            <p className="p-2 fw-bolder">{job?.companyName}</p>
                            <p className="p-2 mt-3  text-muted">
                              {job?.jobLocation}
                            </p>
                          </div>
                        ))}
                        <hr />

                        <Button
                          style={{ width: "100%", border: "1px solid #244a59" }}
                          className="btn btn-light p-3 mt-3"
                          onClick={() => {
                            dispatch(searchJob(details?.jobInfo?.jobCategory));
                            navigate("/job-list");
                          }}
                        >
                          See all similar Offers
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      ) : (
        <div className="d-flex align-items-center justify-content-center">
          {detailLoading === true ? (
            <>
              <Spinner
                size="lg"
                className="me-2 mt-5"
                style={{ color: "#244a59" }}
              ></Spinner>
            </>
          ) : (
            <>
              <p className="fw-light mt-5">Error Loading Job detail</p>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default JobDetails;
