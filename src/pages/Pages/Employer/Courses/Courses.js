import { useState, useEffect } from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";


const Courses = () => {
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
                        <th scope="col" style={{ width: "50px" }}>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="checkAll"
                              value="option"
                            />
                            Title
                          </div>
                        </th>

                        <th>Status</th>
                        <th>Posted in </th>
                        <th>Modify</th>
                      </tr>
                    </thead>
                    <tbody className="list form-check-all">
                      <tr>
                        <td className="id">
                        <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="checkAll"
                              value="option"
                            />
                            <Link to="#" className="fw-medium link-primary">
                            Banking & Finance
                          </Link>
                          </div>
                            
                         
                        </td>
                        <td className="startDate">
                          <p
                            style={{
                              color: "#00d084",
                              position: "relative",
                              top: "0.5rem",
                            }}
                          >
                            Active
                          </p>
                        </td>
                        <td className="startDate">20th May, 2023</td>
                        <td className="customer_name">
                          <i
                            className="bx bx-pencil"
                            style={{ cursor: "pointer" }}
                          ></i>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="text-end mt-4">
                <button
                  type="submit"
                  className="btn btn-dark"
                  style={{ backgroundColor: "#244a59" }}
                >
                  Delete
                </button>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Courses;
