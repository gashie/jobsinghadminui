import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  Input,
  Button,
} from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import classnames from "classnames";

import { pricing1, pricing2, pricing3 } from "../../../../common/data";
import logo1 from "./logo1.png";
import logo2 from "./logo2.png";
import logo3 from "./logo3.png";
import logo4 from "./logo4.png";
import logo5 from "./logo5.png";

import Rating from "react-rating";

const Advertising = () => {
  //Tab
  const [activeTab, setActiveTab] = useState("1");
  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const [defaultCounter, setdefaultCounter] = useState(5);

  function countUP(id, prev_data_attr) {
    id(prev_data_attr + 1);
  }

  function countDown(id, prev_data_attr) {
    id(prev_data_attr - 1);
  }

  document.title = "Pricing | Velzon - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content" style={{ backgroundColor: "white" }}>
        <Container fluid>
          <h4>Advertise a Job</h4>
          <hr />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{display: "flex", gap: "0.3rem", flexWrap: 'wrap'}}>
                <p>Great</p>
              <div id="rater-unlimitedstar" dir="ltr">
                <Rating
                  stop={5}
                  emptySymbol="mdi mdi-star-outline text-muted fa-1x"
                  fullSymbol="mdi mdi-star text-warning"
                  initialRating={5}
                  readonly
                />
              </div>
              <p><b>12,000 reviews on   Jobsinghana</b></p>
            </div>
            <div>
              <p>Questions? Call us: <b>+233595632552</b></p>
            </div>
          </div>

          <Row
            className="justify-content-center mt-5"
            style={{ backgroundColor: "#F2F4F5" }}
          >
            <Col lg={5}>
              <div
                className="text-center mb-4 pb-2"
                style={{
                  display: "flex",
                  padding: "2rem",
                  justifyContent: "space-evenly",
                }}
              >
                <h6 className="fw-semibold" style={{ color: "#244a59" }}>
                  Never posted a job with Jobsinghana? Get your first advert for
                  $8999+VAT
                </h6>
                <Button
                  style={{ border: "1px solid #244a59" }}
                  className="btn btn-light"
                >
                  Get the offer
                </Button>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col xl={9} className="mt-5">
              <Row>
                <Col lg={4}>
                  <Card className="pricing-box ribbon-box right" style={{boxShadow: 'none', border: "1px solid black"}}>
                    <CardHeader style={{ backgroundColor: "#244a59" }}>
                      <h5 style={{ color: "white", textAlign: "center" }}>
                        1. Start with a premium job advert
                      </h5>
                    </CardHeader>
                    <CardBody className="p-4 m-2">
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <h5
                            className="mb-1 fw-semibold"
                            style={{
                              textAlign: "center",
                              fontWeight: "bolder",
                            }}
                          >
                            Premium job advert
                          </h5>
                          {/* <p className="text-muted mb-0">{price2.purpose}</p> */}
                        </div>
                      </div>
                      <div className="pt-4">
                        <h2 style={{ textAlign: "center" }}>
                          <sup>
                            <small>$ </small>
                          </sup>
                          300
                          <span
                            className="fs-13"
                            style={{ color: "#244a59", fontWeight: "bolder" }}
                          >
                            +VAT
                          </span>
                        </h2>
                        <div className="flex-grow-1">
                          <h5
                            className="mb-1 fw-semibold"
                            style={{
                              textAlign: "center",
                              fontWeight: "bolder",
                              color: "#244a59",
                            }}
                          >
                            Preview premium job advert
                          </h5>
                        </div>
                      </div>

                      <div>
                        <ul className="list-unstyled text-muted vstack gap-3">
                          <li>
                            <p
                              className="d-flex"
                              style={{ textAlign: "center" }}
                            >
                              <div className="flex-grow-1 mt-5">
                                <i
                                  className="bx bx-check fs-15 align-middle"
                                  style={{
                                    color: "#00d084",
                                    fontWeight: "bolder",
                                  }}
                                ></i>{" "}
                                Use anytime withing 12 months
                              </div>
                            </p>
                          </li>
                          <li>
                            <p
                              className="d-flex"
                              style={{ textAlign: "center" }}
                            >
                              <div className="flex-grow-1">
                                <i
                                  className="bx bx-check fs-15 align-middle"
                                  style={{
                                    color: "#00d084",
                                    fontWeight: "bolder",
                                  }}
                                ></i>{" "}
                                Your advert is live up to six weeks
                              </div>
                            </p>
                          </li>
                          <li>
                            <p
                              className="d-flex"
                              style={{ textAlign: "center" }}
                            >
                              <div className="flex-grow-1">
                                <i
                                  className="bx bx-check fs-15 align-middle"
                                  style={{
                                    color: "#00d084",
                                    fontWeight: "bolder",
                                  }}
                                ></i>{" "}
                                Applications sent straight to your inbox
                              </div>
                            </p>
                          </li>
                          <li>
                            <p
                              className="d-flex"
                              style={{ textAlign: "center" }}
                            >
                              <div className="flex-grow-1">
                                <i
                                  className="bx bx-check fs-15 align-middle"
                                  style={{
                                    color: "#00d084",
                                    fontWeight: "bolder",
                                  }}
                                ></i>{" "}
                                Your advert in job alert email to candidates
                              </div>
                            </p>
                          </li>
                          <li>
                            <p
                              className="d-flex"
                              style={{ textAlign: "center" }}
                            >
                              <div className="flex-grow-1">
                                <i
                                  className="bx bx-check fs-15 align-middle"
                                  style={{
                                    color: "#00d084",
                                    fontWeight: "bolder",
                                  }}
                                ></i>{" "}
                                Customised company profile
                              </div>
                            </p>
                          </li>
                          <li>
                            <p
                              className="d-flex"
                              style={{ textAlign: "center" }}
                            >
                              <div className="flex-grow-1 ">
                                <i
                                  className="bx bx-check fs-15 align-middle"
                                  style={{
                                    color: "#00d084",
                                    fontWeight: "bolder",
                                  }}
                                ></i>{" "}
                                Use screening questions to filter application
                                faster
                              </div>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </CardBody>
                  </Card>
                </Col>

                {/* Part 2 */}
                <Col lg={4}>
                  <Card className="pricing-box ribbon-box right" style={{boxShadow: 'none', border: "1px solid black"}}>
                    <CardHeader style={{ backgroundColor: "#244a59" }}>
                      <h5 style={{ color: "white", textAlign: "center" }}>
                        2. Select an add on
                      </h5>
                    </CardHeader>
                    <CardBody className="p-4 m-2">
                      <div className="d-flex align-items-center">
                        <div
                          className="flex-grow-1"
                          style={{
                            border: "2.5px solid black",
                            borderRadius: "1rem",
                            padding: "1rem",
                          }}
                        >
                          <h5
                            className="mb-1 fw-semibold"
                            style={{
                              textAlign: "left",
                              fontWeight: "bolder",
                            }}
                          >
                            Premium job advert
                          </h5>
                          {/* <p className="text-muted mb-0">{price2.purpose}</p> */}
                        </div>
                      </div>

                      <div>
                        <ul className="list-unstyled text-muted vstack gap-3 mt-5">
                          <li
                            style={{
                              border: "1px solid black",
                              borderRadius: "1rem",
                            }}
                          >
                            <div className="pt-4">
                              <div className="flex-grow-1">
                                <h5
                                  className="mb-1 fw-semibold"
                                  style={{
                                    textAlign: "center",
                                    fontWeight: "bolder",
                                    color: "#244a59",
                                  }}
                                >
                                  Premium+ Job
                                </h5>
                              </div>
                            </div>

                            <p
                              className="d-flex"
                              style={{ textAlign: "center" }}
                            >
                              <div className="flex-grow-1 ">
                                <i
                                  className="bx bx-check fs-15 align-middle"
                                  style={{
                                    color: "#00d084",
                                    fontWeight: "bolder",
                                  }}
                                ></i>{" "}
                                Email job to up to 100 of th ebest-matching
                                candidates
                              </div>
                            </p>
                            <h2 style={{ textAlign: "center" }}>
                              <sup>
                                <small>$ </small>
                              </sup>
                              300
                              <span
                                className="fs-13"
                                style={{
                                  color: "#244a59",
                                  fontWeight: "bolder",
                                }}
                              >
                                +VAT
                              </span>
                            </h2>
                          </li>

                          <li
                            style={{
                              border: "1px solid black",
                              borderRadius: "1rem",
                            }}
                          >
                            <div className="pt-4">
                              <div className="flex-grow-1">
                                <h5
                                  className="mb-1 fw-semibold"
                                  style={{
                                    textAlign: "center",
                                    fontWeight: "bolder",
                                    color: "#244a59",
                                  }}
                                >
                                  Featured Job
                                </h5>
                              </div>
                            </div>

                            <p
                              className="d-flex"
                              style={{ textAlign: "center" }}
                            >
                              <div className="flex-grow-1 ">
                                <i
                                  className="bx bx-check fs-15 align-middle"
                                  style={{
                                    color: "#00d084",
                                    fontWeight: "bolder",
                                  }}
                                ></i>{" "}
                                Email job to up to 250 of th ebest-matching
                                candidates
                              </div>
                            </p>
                            <p
                              className="d-flex"
                              style={{ textAlign: "center" }}
                            >
                              <div className="flex-grow-1 ">
                                <i
                                  className="bx bx-check fs-15 align-middle"
                                  style={{
                                    color: "#00d084",
                                    fontWeight: "bolder",
                                  }}
                                ></i>{" "}
                                Add branding to your job advert
                                <b>Preview featured job advert</b>
                              </div>
                            </p>
                            <p
                              className="d-flex"
                              style={{ textAlign: "center" }}
                            >
                              <div className="flex-grow-1 ">
                                <i
                                  className="bx bx-check fs-15 align-middle"
                                  style={{
                                    color: "#00d084",
                                    fontWeight: "bolder",
                                  }}
                                ></i>{" "}
                                Promote job advert in rotation at the top of
                                search results
                              </div>
                            </p>
                            <h2 style={{ textAlign: "center" }}>
                              <sup>
                                <small>$ </small>
                              </sup>
                              400
                              <span
                                className="fs-13"
                                style={{
                                  color: "#244a59",
                                  fontWeight: "bolder",
                                }}
                              >
                                +VAT
                              </span>
                            </h2>
                          </li>
                        </ul>
                      </div>
                    </CardBody>
                  </Card>
                </Col>

                {/* Part 3 */}
                <Col lg={4}>
                  <Card className="pricing-box ribbon-box right" style={{boxShadow: 'none', border: "1px solid black"}}>
                    <CardHeader style={{ backgroundColor: "#244a59" }}>
                      <h5 style={{ color: "white", textAlign: "center" }}>
                        3. See how much you could save
                      </h5>
                    </CardHeader>
                    <CardBody className="p-4 m-2">
                      <div className="d-flex align-items-center">
                        <div
                          className="flex-grow-1"
                          style={{
                            borderRadius: "1rem",
                            padding: "1rem",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <h5
                            className="mb-1 fw-semibold"
                            style={{
                              textAlign: "left",
                              fontWeight: "bolder",
                            }}
                          >
                            Quantity
                          </h5>
                          <div className="input-step">
                            <button
                              type="button"
                              className="minus"
                              onClick={() => {
                                countDown(setdefaultCounter, defaultCounter);
                              }}
                            >
                              –
                            </button>
                            <Input
                              type="number"
                              className="product-quantity"
                              value={defaultCounter}
                              min="0"
                              max="100"
                              readOnly
                            />
                            <button
                              type="button"
                              className="plus"
                              onClick={() => {
                                countUP(setdefaultCounter, defaultCounter);
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      <h5
                        className="mb-1 fw-semibold"
                        style={{
                          textAlign: "center",
                          fontWeight: "bolder",
                          color: "#00d084",
                        }}
                      >
                        Save with multiple adverts
                      </h5>
                      <hr />
                      <div
                        className="mt-4"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <h5
                          className="mb-1 fw-semibold"
                          style={{
                            textAlign: "center",
                            fontWeight: "bolder",
                          }}
                        >
                          Total
                        </h5>
                        <h2 style={{ textAlign: "center" }}>
                          <sup>
                            <small>$ </small>
                          </sup>
                          300
                          <span
                            className="fs-13"
                            style={{
                              color: "#244a59",
                              fontWeight: "bolder",
                            }}
                          >
                            +VAT
                          </span>
                        </h2>
                      </div>

                      <h4 style={{ textAlign: "center" }} className="mt-4">
                        <Button
                          className="btn btn-dark"
                          style={{ backgroundColor: "#244a59", width: "100%" }}
                        >
                          Buy now
                        </Button>
                      </h4>
                    </CardBody>
                  </Card>
                  {/* Last Segment */}
                  <Row>
                    <Col>
                      <Card style={{boxShadow: 'none', border: "1px solid black"}}>
                        <CardBody className="p-5">
                          <h5
                            style={{ fontWeight: "bolder", color: "#244a59" }}
                          >
                            Never posted a job with Jobsinghana before?
                          </h5>
                          <p>
                            Get you first job plus the <b>Premium+</b> add-on
                            for{" "}
                          </p>
                          <h2 style={{ textAlign: "center" }}>
                            <sup>
                              <small>$ </small>
                            </sup>
                            400
                            <span
                              className="fs-13"
                              style={{
                                color: "#244a59",
                                fontWeight: "bolder",
                              }}
                            >
                              +VAT
                            </span>
                          </h2>
                          <h4 style={{ textAlign: "center" }} className="mt-4">
                            <Button
                              className="btn btn-light"
                              style={{
                                width: "100%",
                                border: "1px solid #244a59",
                              }}
                            >
                              Buy now
                            </Button>
                          </h4>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
              {/* Part 2 */}
              <Row>
                <Col>
                  <Card style={{boxShadow: 'none', border: "1px solid black"}}>
                    <CardHeader style={{ backgroundColor: "#244a59" }}>
                      <h5 style={{ color: "white", textAlign: "center" }}>
                        4. Increase your reach and applications with Boost
                        Bronze
                      </h5>
                    </CardHeader>
                    <CardBody>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          flexWrap: "wrap",
                        }}
                      >
                        {/*  */}
                        <div>
                          <h5
                            style={{ fontWeight: "bolder", color: "#244a59" }}
                          >
                            Boost Bronze job advert
                          </h5>

                          <h2 style={{ textAlign: "left" }} className="mt-5">
                            <sup>
                              <small>$ </small>
                            </sup>
                            600
                            <span
                              className="fs-13"
                              style={{
                                color: "#244a59",
                                fontWeight: "bolder",
                              }}
                            >
                              +VAT
                            </span>
                          </h2>

                          <p>Questions? Call us on</p>
                          <p>+233595632552</p>
                        </div>
                        {/*  */}
                        <div>
                          <p className="d-flex" style={{ textAlign: "center" }}>
                            <div className="flex-grow-1 ">
                              <i
                                className="bx bx-check fs-15 align-middle"
                                style={{
                                  color: "#00d084",
                                  fontWeight: "bolder",
                                }}
                              ></i>{" "}
                              Get <b>increased exposure</b> through our
                              distribution partners
                            </div>
                          </p>
                          <p className="d-flex" style={{ textAlign: "center" }}>
                            <div className="flex-grow-1 ">
                              <i
                                className="bx bx-check fs-15 align-middle"
                                style={{
                                  color: "#00d084",
                                  fontWeight: "bolder",
                                }}
                              ></i>{" "}
                              Receive up to{" "}
                              <b>2x* more applications and reviews</b>compared
                              to a Featured job
                            </div>
                          </p>
                          <p className="d-flex" style={{ textAlign: "center" }}>
                            <div className="flex-grow-1 ">
                              <i
                                className="bx bx-check fs-15 align-middle"
                                style={{
                                  color: "#00d084",
                                  fontWeight: "bolder",
                                }}
                              ></i>{" "}
                              Your job will be <b>optimised in real-time</b> to
                              boosts its performance
                            </div>
                          </p>
                        </div>
                        {/*  */}
                        <div>
                          <h4 style={{ textAlign: "center" }} className="mt-4">
                            <Button
                              className="btn btn-dark"
                              style={{
                                width: "100%",
                                backgroundColor: "#244a59",
                              }}
                            >
                              Buy now
                            </Button>
                          </h4>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <p style={{ fontWeight: "bolder", color: "#244a59" }}>
                    *Actual results may vary based on title, sector, salary or
                    location.
                  </p>

                  <h4 style={{ textAlign: "center" }} className="mt-5">
                    <Button
                      className="btn btn-light"
                      style={{
                        width: "70%",
                        border: "1px solid #244a59",
                        padding: "1.5rem",
                      }}
                    >
                      See new customer offer
                    </Button>
                  </h4>

                  <h4
                    style={{
                      fontWeight: "bolder",
                      color: "#244a59",
                      textAlign: "center",
                      marginTop: "8rem",
                    }}
                  >
                    More brands that post job adverts with us
                  </h4>
                  <Card >
                    <CardBody>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          marginTop: "2rem",
                        }}
                      >
                        <div>
                          <img src={logo1} alt="" className="img-fluid"></img>
                        </div>
                        <div>
                          <img src={logo2} alt="" className="img-fluid"></img>
                        </div>
                        <div>
                          <img src={logo3} alt="" className="img-fluid"></img>
                        </div>
                        <div>
                          <img src={logo4} alt="" className="img-fluid"></img>
                        </div>
                        <div>
                          <img src={logo5} alt="" className="img-fluid"></img>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Advertising;
