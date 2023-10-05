import React, { useState, useEffect } from "react";
import {
  Col,
  Row,
  CardBody,
  Card,
  Button,
  Label,
  Input,
  Container,
  Form,
  FormGroup,
  Spinner,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { jobEditCloneData, transactions } from "../../../../store/actions";
import { formatDate } from "../../../../Components/Hooks/formatDate";
import { invoices, makeInvoicePayment } from "../../../../store/invoice/action";

const Transactions = ({ viewReceipt }) => {
  const [action, setAction] = useState(false);
  const [takeAction, setTakeAction] = useState("");

  const [margin, setMargin] = useState("");

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

  // Define state variables for start and end
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const dispatch = useDispatch();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // You can perform further actions with the start and end values here
    console.log("Start:", start);
    console.log("End:", end);
  };

  useEffect(() => {
    dispatch(invoices({ viewAction: "" }));
  }, [dispatch]);

  const { invoiceInfo, loading, error } = useSelector((state) => ({
    error: state.Invoice.invoiceError,
    loading: state.Invoice.invoiceLoading,
    invoiceInfo: state.Invoice.invoice,
  }));

  return (
    <>
      <div>
        <h4>List of transactions</h4>
        {/* <Container  className="d-flex" style={{justifyContent: 'right'}} fluid>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <label>From</label>
              <Input
                type="date"
                id="startInput"
                placeholder="Enter start value"
                className="w-100"
                value={start}
                onChange={(e) => setStart(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <label>To</label>
              <Input
                type="date"
                id="endInput"
                placeholder="Enter end value"
                className="w-100"
                value={end}
                onChange={(e) => setEnd(e.target.value)}
                required
              />
            </FormGroup>
            <Button className="btn btn-dark text-end w-100" type="submit" style={{backgroundColor: '#00d084'}}>
              Veiw Transactions
            </Button>
          </Form>
        </Container> */}

        <Row>
          <Col lg={12} className="mt-4">
            <Card>
              <CardBody>
                <div id="customerList">
                  <div className="table-responsive table-card mt-3 mb-1">
                    <table
                      className="table align-middle table-nowrap"
                      id="customerTable"
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
                          <th data-sort="title">Date/Time</th>
                          <th data-sort="location">Transaction ID</th>
                          <th data-sort="startDate">Jobs Posted</th>
                          <th data-sort="expDate">Amount Due</th>
                          <th data-sort="expDate">Payment Amount</th>
                          <th data-sort="expDate">Cash Balance</th>
                          <th data-sort="jobType">Generate Receipt</th>
                          <th data-sort="jobType">Pay</th>

                          {/* <th className="sort" data-sort="jobType">
                            Status
                          </th>
                          <th className="sort" data-sort="applicants">
                            Applicants
                          </th>
                          <th className="sort" data-sort="action">
                            Action
                          </th> */}
                        </tr>
                      </thead>
                      <tbody className="list form-check-all">
                        {loading === false && error === false ? (
                          invoiceInfo?.map((item, key) => (
                            <tr key={key}>
                              <td className="id">
                                <Link to="#" className="fw-medium link-primary">
                                  {formatDate(item?.createdAt)}
                                </Link>
                              </td>
                              <td className="customer_name">
                                {item?.counter === "null" ? "-" : item?.counter}
                              </td>
                              <td className="location">{" - "}</td>
                              <td className="location">
                                &#x20B5;{item?.grandTotal}
                              </td>
                              <td className="location">{" - "}</td>
                              <td className="location">{" - "}</td>
                              <td className="location">
                                <Button
                                  color="danger"
                                  onClick={() => {
                                    viewReceipt();
                                    dispatch(jobEditCloneData(item));
                                  
                                  }}
                                >
                                  View receipt
                                </Button>
                              </td>
                              <td className="location">
                                <Button
                                  color="danger"
                                  onClick={() => {
                                    // viewReceipt();
                                    // dispatch(jobEditCloneData(item));
                                    dispatch(makeInvoicePayment({
                                      invoiceId: item?.invoiceId
                                    }))
                                  }}
                                >
                                  Pay
                                </Button>
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
                                    >
                                      Loading...
                                    </Spinner>
                                  </>
                                ) : (
                                  <>
                                    <p className="fw-light mt-5">
                                      You currently don't have transactions.
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

                  {/* <div className="d-flex justify-content-end">
                    <div className="pagination-wrap hstack gap-2">
                      <Link
                        className="page-item pagination-prev disabled"
                        to="#"
                      >
                        Previous
                      </Link>
                      <ul className="pagination listjs-pagination mb-0"></ul>
                      <Link className="page-item pagination-next" to="#">
                        Next
                      </Link>
                    </div>
                  </div> */}
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Transactions;
