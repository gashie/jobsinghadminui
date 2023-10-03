import { useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  Spinner,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  employerApplications,
  jobseekerApplications,
} from "../../../../store/actions";
import { formatDate } from "../../../../Components/Hooks/formatDate";

const Pending = () => {
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
    dispatch(jobseekerApplications({ viewAction: "" }));
  }, [dispatch]);

  const { loading, error, details } = useSelector((state) => ({
    loading: state.Jobs.employerApplicationsLoading,
    error: state.Jobs.employerApplicationsError,
    details: state.Jobs.employerApplications,
  }));

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
                        {/* <th>Action</th> */}
                      </tr>
                    </thead>
                    <tbody
                      className="list form-check-all"
                      style={{ backgroundColor: "white" }}
                    >
                      {loading === false && error === null ? (
                        details
                          ?.filter(
                            (item) => item.applicationStatus === "pending"
                          )
                          .map((item, key) => (
                            <tr key={key}>
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
                                      : item?.applicationStatus === "pending"
                                      ? "#c89b51"
                                      : "red",
                                  borderRadius: "0px",
                                  width: "max-content",
                                }}
                              >
                                {item?.applicationStatus}
                              </td>
                              <td className="status">
                                {item?.appliedAt === null
                                  ? "No updates made yet"
                                  : formatDate(item?.appliedAt)}
                              </td>
                            </tr>
                          ))
                      ) : (
                        <tr>
                          <td colSpan="7" className="text-center mt-5">
                            <div className="d-flex align-items-center justify-content-center flex-column">
                              {loading === true ? (
                                <>
                                  <Spinner
                                    size="lg"
                                    className="me-2 mt-5"
                                    style={{ color: "#244a59" }}
                                  ></Spinner>
                                  <p className="mt-2">Loading...</p>
                                </>
                              ) : (
                                <>
                                  <p className="fw-light mt-5">
                                    {details?.every(
                                      (item) =>
                                        item.applicationStatus !== "pending"
                                    )
                                      ? "No rejected applications found."
                                      : "An error occurred while loading data."}
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

export default Pending;
