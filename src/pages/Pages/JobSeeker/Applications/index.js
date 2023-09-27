import { Link } from "react-router-dom";
import { Col, Row, Table } from "reactstrap";
import data from "./data";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
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

  return (
    <>
      <h5 style={{ fontWeight: "bolder", color: "#244a59" }} className="mt-3">
        My Applications
      </h5>

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
                details?.map((item, key) => (
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
                          marginTop: '0.3rem',
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
                <p>Loading</p>
              )}
            </tbody>
          </Table>
        </div>
      </Col>
    </>
  );
};

export default Applications;
