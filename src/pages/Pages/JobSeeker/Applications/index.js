import { Link } from "react-router-dom";
import { Col, Row, Spinner, Table } from "reactstrap";
import data from "./data";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { jobseekerApplications } from "../../../../store/actions";
import { formatDate } from "../../../../Components/Hooks/formatDate";

const Applications = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(jobseekerApplications({ viewAction: "" }));
  }, [dispatch]);

  const { loading, error, details } = useSelector((state) => ({
    loading: state.Jobs.jobseekerApplicationsLoading,
    error: state.Jobs.jobseekerApplicationsError,
    details: state.Jobs.jobseekerApplications,
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the current page of items
  const currentJobs = details?.slice(startIndex, endIndex);

  // Function to handle page changes
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Determine if "Previous" and "Next" links should be disabled
  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = endIndex >= details?.length;

  return (
    <>
    <div  className="mt-5">
      <h5
        style={{ fontWeight: "bolder", color: "#244a59" }}
        className="mt-3 mx-5 px-2"
      >
        My Applications
      </h5>

      {/* <div className="d-flex" style={{ justifyContent: "space-between" }}>
          <div className="d-flex align-items-center p-3">
            <span style={{ marginRight: "0.5rem" }}>Show</span>
            <div style={{ marginRight: "0.5rem" }}>
              <Input
                style={{ width: "4rem" }}
                type="number"
                value={showEntries}
                onChange={handleShowEntriesChange}
              />
            </div>
            <span>entries</span>
          </div>
        </div> */}

      <Col className="m-5">
        <div className="table-responsive">
          <Table className="align-middle table-nowrap mb-0">
            <thead>
              <tr>
                <th scope="col">Job title</th>
                <th scope="col">Company Name</th>
                {/* <th scope="col">Status</th> */}
                <th scope="col">Applied on</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {loading === false && error === null ? (
                currentJobs?.map((item, key) => (
                  <tr key={key}>
                    <th scope="row">
                      <Link to="#" className="fw-medium">
                        {item.jobTitle}
                      </Link>
                    </th>
                    <td>{item.companyName}</td>

                    <td>{formatDate(item.appliedAt)}</td>
                    <td>
                      <p
                        style={{
                          marginTop: "0.3rem",
                          color:
                            item.applicationStatus === "rejected"
                              ? "red"
                              : item.applicationStatus === "pending"
                              ? "#c89b51"
                              : item.applicationStatus === "shortlisted"
                              ? "#00d084"
                              : null,
                        }}
                      >
                        {item.applicationStatus}
                      </p>
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
                            You don't have any Applications at the moment.
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
    </>
  );
};

export default Applications;
