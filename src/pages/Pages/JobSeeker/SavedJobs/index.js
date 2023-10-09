import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Col,
  Row,
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Label,
  InputGroupText,
  Card,
  Input,
  Spinner,
} from "reactstrap";
import data from "./data";
import SeaTech from "../../../../assets/images/jobsinghana/seatec.png";
import img1 from "./img1.png";
import {
  fullJobDetails,
  jobEditCloneData,
  updateSavedJobs,
  viewSavedJobs,
} from "../../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import JobDetails from "./JobDetails";
import Questionnaire from "./Questionnaire";
import Apply from "./Apply";

const SavedJobs = () => {
  const { userInfo } = useSelector((state) => ({
    userInfo: state.Login.userInfo,
  }));

  const [applyInfo, setApplyInfo] = useState({});

  useEffect(() => {
    setApplyInfo(userInfo?.userInfo);
  }, [userInfo?.userInfo]);

  const [modal_standard, setmodal_standard] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const [infoModal, setInfoModal] = useState(false);

  function tog_standard() {
    setmodal_standard(!modal_standard);
  }
  function tog_success() {
    setSuccessModal(!successModal);
  }

  function tog_info() {
    setInfoModal(!infoModal);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(viewSavedJobs({ viewAction: "" }));
  }, [dispatch]);

  const { savedJobsInfo, loading, error, details, detailLoading, detailerror } =
    useSelector((state) => ({
      loading: state.JobAlerts.savedJobsLoading,
      error: state.JobAlerts.savedJobsError,
      savedJobsInfo: state.JobAlerts.savedJobs,
      details: state.JobAlerts.fullJobDetails,
      detailLoading: state.JobAlerts.fullJobDetailsLoading,
      detailerror: state.JobAlerts.fullJobDetailsError,
    }));

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

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

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

  const [jobInfo, setJobInfo] = useState({});
  const [questionInfo, setQuestionInfo] = useState({});

  const handleFullInfo = (item) => {
    dispatch(fullJobDetails({ jobId: item }));
  };

  useEffect(() => {
    setJobInfo(details?.jobInfo);
    setQuestionInfo(details?.Questions);
  }, [details?.jobInfo, details?.Questions]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the current page of items
  const currentJobs = savedJobsInfo?.slice(startIndex, endIndex);

  // Function to handle page changes
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Determine if "Previous" and "Next" links should be disabled
  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = endIndex >= savedJobsInfo?.length;

  const navigate = useNavigate();

  return (
    <>
      <div className="mt-5">
        <h5
          style={{ fontWeight: "bolder", color: "#244a59" }}
          className="mt-3 mx-5 px-2"
        >
          List of saved jobs
        </h5>

        <Col className="m-5">
          <div className="table-responsive">
            <Table className="align-middle table-nowrap mb-0">
              <thead>
                <tr>
                  <th scope="col">Job title</th>
                  <th scope="col">Company Name</th>
                  <th scope="col">Advertised on </th>
                  <th scope="col">Expired on</th>
                  <th scope="col">Delete</th>
                  {/* <th scope="col">Full job Info</th> */}
                  <th scope="col">Apply</th>
                </tr>
              </thead>
              <tbody>
                {loading === false && error === false ? (
                  currentJobs?.map((item, key) => (
                    <tr key={key}>
                      <td >
                        <Link
                         to={`/job-details?.title=B&id=${item?.jobId}`}
                          className="fw-bolder"
                          style={{ color: "#244a50" }}
                          onClick={() => {
                            //handleFullInfo(item?.jobId);
                            // navigate('/admin/job-details')
                          }}
                        >
                          {item?.jobTitle}
                        </Link>
                      </td>
                      <td>{item?.companyName}</td>
                      <td>{formatDate(item?.createdAt)}</td>
                      <td>{formatDate(item?.createdAt)}</td>
                      <td
                        style={{
                          color: "red",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          dispatch(
                            updateSavedJobs({
                              deleterecord: true,
                              restore: 0,
                              savedJobsId: item?.savedJobsId,
                              patch: false,
                              patchData: {
                                jobTitle: item?.jobTitle,
                                companyName: item?.companyName,
                              },
                            })
                          );
                        }}
                      >
                        Delete
                      </td>
                      {/* <td
                      style={{
                        color: "black",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        handleFullInfo(item?.jobId);
                        tog_info();
                      }}
                    >
                      Full job info
                    </td> */}
                      {/* <td
                        style={{ color: "#244A59", cursor: "pointer" }}
                        onClick={() => tog_standard()}
                      > */}
                       <td >
                        <Link
                          to={`/app/apply`}
                          className="fw-medium"
                          style={{ color: "#244a50" }}
                          onClick={() => {
                            // handleFullInfo(item?.jobId);
                            // navigate('/admin/job-details')
                            dispatch(fullJobDetails({jobId: item?.jobId}))
                          //  navigate(`/job-details?.title=B&id=${item?.jobId}`);
                          }}
                        >
                          Apply
                        </Link>
                      </td>
                      {/* </td> */}
                    </tr>
                  ))
                ) : savedJobsInfo?.length < 1 ? (
                  <p>No Data</p>
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
                              You don't have any Saved jobs at the moment.
                            </p>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
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
      </div>

      <Modal
        id="myModal"
        size="xl"
        className="modal-fullscreen"
        isOpen={modal_standard}
        toggle={() => {
          tog_standard();
        }}
      >
        <ModalHeader>
          {/* <h5 className="modal-title" id="myModalLabel">
            Modal Heading
          </h5> */}
          <Button
            type="button"
            className="btn-close"
            onClick={() => {
              setmodal_standard(false);
            }}
            aria-label="Close"
          ></Button>
        </ModalHeader>
        <ModalBody>
          <Apply questionInfo={questionInfo} jobInfo={jobInfo} />
        </ModalBody>
        <ModalFooter>
          <Button
            color="light"
            onClick={() => {
              tog_standard();
            }}
          >
            Close
          </Button>
          {/* <Button color="primary">Save changes</Button> */}
        </ModalFooter>
      </Modal>

      <Modal
        isOpen={successModal}
        toggle={() => {
          tog_success();
        }}
        backdrop={"static"}
        id="staticBackdrop"
        centered
      >
        <ModalHeader>
          {/* <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5> */}
          <Button
            type="button"
            className="btn-close"
            onClick={() => {
              setSuccessModal(false);
            }}
            aria-label="Close"
          ></Button>
        </ModalHeader>
        <ModalBody className="text-center p-5">
          <img src={img1} alt="img1" className="img-fluid"></img>

          <div className="mt-4">
            <h4 className="mb-3">Successful</h4>
            <p className="text-muted mb-4">
              {" "}
              Your application has been submitted successfully
            </p>
            <div className="hstack gap-2 justify-content-center">
              {/* <Button to="/job-seeker-dashboard" className="btn btn-success">Home</Button> */}
            </div>
          </div>
        </ModalBody>
      </Modal>

      {/* FUll job Details */}
      <Modal
        isOpen={infoModal}
        toggle={() => {
          tog_info();
        }}
        className="modal-fullscreen"
        size="xl"
        backdrop={"static"}
        id="staticBackdrop"
        centered
      >
        <ModalHeader>
          {/* <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5> */}
          <Button
            type="button"
            className="btn-close"
            onClick={() => {
              setInfoModal(false);
            }}
            aria-label="Close"
          ></Button>
        </ModalHeader>
        <ModalBody>
          {detailLoading === false && detailerror === false ? (
            <p>
              <JobDetails jobInfo={jobInfo} />
            </p>
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
                  <p className="fw-light mt-5">
                    You don't have any Service inquiries at the moment.
                  </p>
                </>
              )}
            </div>
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export default SavedJobs;
