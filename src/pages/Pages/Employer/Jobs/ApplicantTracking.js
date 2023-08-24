import { useState, useEffect } from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

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
                        {/* <th scope="col" style={{ width: "50px" }}>
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          id="checkAll"
                                          value="option"
                                        />
                                      </div>
                                    </th> */}
                        <th>#</th>
                        <th>Applicant Name</th>
                        <th>Position</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Date Applied</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody className="list form-check-all">
                      <tr>
                        <td className="id">
                          <Link to="#" className="fw-medium link-primary">
                            1
                          </Link>
                        </td>
                        <td className="customer_name">Kofi Kwame</td>
                        <td className="customer_name">Warehouse Clerck</td>

                        <td className="startDate">kofi@gmail.com</td>
                        <td className="startDate">0553368892</td>
                        <td className="startDate">20th May, 2023</td>
                        <td className="startDate">
                          <p
                            style={{
                              cursor: "pointer",
                              color:
                                takeAction === "Reject"
                                  ? "red"
                                  : takeAction === "Approve"
                                  ? "#00D084"
                                  : takeAction === "Pending"
                                  ? "#E79637"
                                  : "a",
                            }}
                            onClick={() => {
                              setAction(!action);
                            }}
                          >
                            {takeAction === "Reject"
                              ? "Rejected"
                              : takeAction === "Approve"
                              ? "Approve"
                              : takeAction === "Pending"
                              ? "Pending approval"
                              : "a"}
                          </p>
                          <Card
                            style={{
                              position: "absolute",
                              padding: "1rem",
                              marginLeft: margin,
                              display: action === false ? "none" : "block",
                            }}
                          >
                            <p
                              style={{ color: "red", cursor: "pointer" }}
                              onClick={() => {
                                setTakeAction("Reject");
                                setAction(!action);
                              }}
                            >
                              Reject
                            </p>
                            <p
                              style={{ color: "#00D084", cursor: "pointer" }}
                              onClick={() => {
                                setTakeAction("Approve");
                                setAction(!action);
                              }}
                            >
                              Approve
                            </p>
                            <p
                              style={{ color: "#E79637", cursor: "pointer" }}
                              onClick={() => {
                                setTakeAction("Pending");
                                setAction(!action);
                              }}
                            >
                              Pending
                            </p>
                          </Card>
                        </td>
                      </tr>
                      <tr>
                        <td className="id">
                          <Link to="#" className="fw-medium link-primary">
                            1
                          </Link>
                        </td>
                        <td className="customer_name">Kofi Kwame</td>
                        <td className="customer_name">Warehouse Clerck</td>

                        <td className="startDate">kofi@gmail.com</td>
                        <td className="startDate">0553368892</td>
                        <td className="startDate">20th May, 2023</td>
                        <td className="startDate">
                          <p
                            style={{
                              cursor: "pointer",
                              color:
                                takeAction === "Reject"
                                  ? "red"
                                  : takeAction === "Approve"
                                  ? "#00D084"
                                  : takeAction === "Pending"
                                  ? "#E79637"
                                  : "a",
                            }}
                            onClick={() => {
                              setAction(!action);
                            }}
                          >
                            {takeAction === "Reject"
                              ? "Rejected"
                              : takeAction === "Approve"
                              ? "Approve"
                              : takeAction === "Pending"
                              ? "Pending approval"
                              : "a"}
                          </p>
                          <Card
                            style={{
                              position: "absolute",
                              padding: "1rem",
                              marginLeft: margin,
                              display: action === false ? "none" : "block",
                            }}
                          >
                            <p
                              style={{ color: "red", cursor: "pointer" }}
                              onClick={() => {
                                setTakeAction("Reject");
                                setAction(!action);
                              }}
                            >
                              Reject
                            </p>
                            <p
                              style={{ color: "#00D084", cursor: "pointer" }}
                              onClick={() => {
                                setTakeAction("Approve");
                                setAction(!action);
                              }}
                            >
                              Approve
                            </p>
                            <p
                              style={{ color: "#E79637", cursor: "pointer" }}
                              onClick={() => {
                                setTakeAction("Pending");
                                setAction(!action);
                              }}
                            >
                              Pending
                            </p>
                          </Card>
                        </td>
                      </tr>
                      <tr>
                        <td className="id">
                          <Link to="#" className="fw-medium link-primary">
                            1
                          </Link>
                        </td>
                        <td className="customer_name">Kofi Kwame</td>
                        <td className="customer_name">Warehouse Clerck</td>

                        <td className="startDate">kofi@gmail.com</td>
                        <td className="startDate">0553368892</td>
                        <td className="startDate">20th May, 2023</td>
                        <td className="startDate">
                          <p
                            style={{
                              cursor: "pointer",
                              color:
                                takeAction === "Reject"
                                  ? "red"
                                  : takeAction === "Approve"
                                  ? "#00D084"
                                  : takeAction === "Pending"
                                  ? "#E79637"
                                  : "a",
                            }}
                            onClick={() => {
                              setAction(!action);
                            }}
                          >
                            {takeAction === "Reject"
                              ? "Rejected"
                              : takeAction === "Approve"
                              ? "Approve"
                              : takeAction === "Pending"
                              ? "Pending approval"
                              : "a"}
                          </p>
                          <Card
                            style={{
                              position: "absolute",
                              padding: "1rem",
                              marginLeft: margin,
                              display: action === false ? "none" : "block",
                            }}
                          >
                            <p
                              style={{ color: "red", cursor: "pointer" }}
                              onClick={() => {
                                setTakeAction("Reject");
                                setAction(!action);
                              }}
                            >
                              Reject
                            </p>
                            <p
                              style={{ color: "#00D084", cursor: "pointer" }}
                              onClick={() => {
                                setTakeAction("Approve");
                                setAction(!action);
                              }}
                            >
                              Approve
                            </p>
                            <p
                              style={{ color: "#E79637", cursor: "pointer" }}
                              onClick={() => {
                                setTakeAction("Pending");
                                setAction(!action);
                              }}
                            >
                              Pending
                            </p>
                          </Card>
                        </td>
                      </tr>
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