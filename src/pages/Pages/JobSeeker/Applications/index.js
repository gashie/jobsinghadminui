import { Link } from "react-router-dom";
import { Col, Row, Table } from "reactstrap";
import data from "./data";

const Applications = () => {
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
                <th scope="col">Job inserted </th>
                <th scope="col">Applied on</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((a, key) => (
                <tr key={key}>
                  <th scope="row">
                    <Link to="#" className="fw-medium">
                      {a.jobTitle}
                    </Link>
                  </th>
                  <td>{a.companyName}</td>
                  <td>{a.jobInserted}</td>
                  <td>{a.appliedOn}</td>
                  <td>
                    <p
                      style={{
                        color:
                          a.status === "Rejected"
                            ? "red"
                            : a.status === "Pending"
                            ? "#244a59"
                            : a.status === "Shortlisted"
                            ? "#00d084"
                            : null,
                      }}
                    >
                      {a.status}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Col>
     
    </>
  );
};

export default Applications;
