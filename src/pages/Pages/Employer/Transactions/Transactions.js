import { useState, useEffect } from "react";
import { Row, Col, Card, CardBody, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Transactions = () => {
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

    <h4 className="m-5" style={{color: "#244a59"}}>
        List of transactions
    </h4>
      <Row>
        <Col lg={12} className="mt-3">
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
                        <th>Date/Time</th>
                        <th>Transaction ID</th>
                        <th>Jobs Posted</th>
                        <th>Amount Due</th>
                        <th>Payment Amount</th>
                        <th>Cash Balance</th>
                        <th>Generate</th>
                      </tr>
                    </thead>
                    <tbody className="list form-check-all">
                      <tr>
                        <td className="id">
                          <Link to="#" className="fw-medium link-primary">
                            20th May, 2023
                          </Link>
                        </td>
                        <td className="customer_name">11345678</td>
                        <td className="customer_name">10</td>

                        <td className="startDate">11345678</td>
                        <td className="startDate">GHS1000</td>
                        <td className="startDate">0</td>
                        <td className="startDate">
                          <Button
                            className="btn btn-dark"
                            style={{ backgroundColor: "#EB596B", border: "none" }}
                          >
                            View Receipt
                          </Button>
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

export default Transactions;
