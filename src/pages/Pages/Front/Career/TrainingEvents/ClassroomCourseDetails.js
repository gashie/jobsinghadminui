import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Row,
} from "reactstrap";
import online from "./online.png";
import classTrain from "./classTrain.png";
import cover from "./cover.png";
import "./events.css";
import download from "./download.png";
import logo from "./LOGO.png";
import { Link } from "react-router-dom";

import store from "./store.png";
import community from "./community.png";
import paper from "./paper.png";
import down from "./down.png";
import buss from "./buss.png";

const ClassroomCourseDetails = () => {
  return (
    <>
      <div
        className=""
        //   style={{ height: "60vh", position: 'absolute' }}
      >
        <div
          className="cover-train-container "
          style={{ height: "60vh", position: "relative", zIndex: "-1" }}
        >
          <img src={cover} alt="cover" className="img-fluid banner-cover"></img>
          <div
            className=""
            style={{
              position: "absolute",
              zIndex: "1",
              top: "6rem",
              padding: "2rem",
            }}
          >
            <h6 style={{ color: "white", fontWeight: "bolder" }}>
              An Intensive Professional Development Course on{" "}
            </h6>
            <h2
              style={{
                color: "white",
                marginTop: "2.5rem",
                fontWeight: "bolder",
              }}
            >
              Contract Management Principles & Practice
            </h2>
            <h5
              style={{
                color: "white",
                marginTop: "1.5rem",
                fontWeight: "bolder",
              }}
            >
              Getting a grip on Service Providers, Vendors & Contractors
            </h5>
          </div>
        </div>
        {/* <img src={cover} alt="cover" className="img-fluid banner-cover"></img> */}

        <Col
          xs={15}
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            flexDirection: "row-reverse",
            padding: "1rem",
          }}
        >
          {/* First Section Starts */}
          <Col md={5} xs={10} xl={3}>
            <Card style={{ position: "relative", top: "-8rem" }}>
              <Col>
                <div style={{ display: "grid" }}>
                  <CardHeader className="card-header-container">
                    <img
                      src={classTrain}
                      alt="train"
                      className="img-fluid"
                    ></img>
                  </CardHeader>

                  <div className="p-3">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h6>03-07 Jul 2023</h6>
                      <h6 style={{ fontWeight: "bolder" }}>$4,500</h6>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h6>Accra - GH</h6>
                      <Button
                        className="btn btn-dark"
                        style={{ backgroundColor: "#244a59 " }}
                      >
                        Register
                      </Button>
                    </div>
                    <hr />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h6>03-07 Jul 2023</h6>
                      <h6 style={{ fontWeight: "bolder" }}>$4,500</h6>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h6>Accra - GH</h6>
                      <Button
                        className="btn btn-dark"
                        style={{ backgroundColor: "#244a59 " }}
                      >
                        Register
                      </Button>
                    </div>
                    <hr />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h6>03-07 Jul 2023</h6>
                      <h6 style={{ fontWeight: "bolder" }}>$4,500</h6>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h6>Accra - GH</h6>
                      <Button
                        className="btn btn-dark"
                        style={{ backgroundColor: "#244a59 " }}
                      >
                        Register
                      </Button>
                    </div>
                    <hr />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h6>03-07 Jul 2023</h6>
                      <h6 style={{ fontWeight: "bolder" }}>$4,500</h6>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h6>Accra - GH</h6>
                      <Button
                        className="btn btn-dark"
                        style={{ backgroundColor: "#244a59 " }}
                      >
                        Register
                      </Button>
                    </div>
                    <hr />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h6>03-07 Jul 2023</h6>
                      <h6 style={{ fontWeight: "bolder" }}>$4,500</h6>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h6>Accra - GH</h6>
                      <Button
                        className="btn btn-dark"
                        style={{ backgroundColor: "#244a59 " }}
                      >
                        Register
                      </Button>
                    </div>
                    <hr />

                    <h4
                      className="mt-3"
                      style={{
                        color: "#244a59",
                        fontWeight: "bolder",
                        textAlign: "center",
                      }}
                    >
                      Also available in{" "}
                    </h4>
                    <h4
                      style={{
                        color: "#244a59",
                        fontWeight: "bolder",
                        textAlign: "center",
                      }}
                    >
                      Online - Virtual Course
                    </h4>
                    <p style={{ textAlign: "center" }}>
                      <Button
                        className="btn btn-dark"
                        style={{ backgroundColor: "#244a59" }}
                      >
                        View Virtual Course
                      </Button>
                    </p>
                  </div>

                  <CardFooter
                    style={{
                      backgroundColor: "#244a59",
                      display: "flex",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <div>
                      <img
                        src={download}
                        alt="download"
                        className="rounded avatar-lg"
                      ></img>
                    </div>
                    <div>
                      <h5 style={{ color: "white", fontWeight: "bolder" }}>
                        Download the
                      </h5>
                      <h5 style={{ color: "white", fontWeight: "bolder" }}>
                        Brochure
                      </h5>
                      <Button className="btn btn-light">Download</Button>
                    </div>
                  </CardFooter>
                </div>
              </Col>
            </Card>
          </Col>
          {/* Second Section Start Here */}
          <Col xs={9} className="mt-5" xl={4}>
            <h4 style={{ color: "#244a59", fontWeight: "bolder" }}>
              Why Choose this Training Course?
            </h4>

            <p className="mt-5 fs-20" style={{ lineHeight: "2rem" }}>
              Lorem ipsum dolor sit amet consectetur. Vitae dolor imperdiet
              tristique quam. Vitae purus diam montes convallis convallis. At
              feugiat nam id dictum semper. Tristique libero risus amet
              adipiscing aliquam turpis amet. Non arcu dui nulla bibendum
              vestibulum viverra in aliquam id. Viverra aliquet donec enim rutr.
              Tristique libero risus amet adipiscing aliquam turpis amet. Non
              arcu dui nulla bibendum vestibulum viverra in aliquam id. Viverra
              aliquet donec enim rutr. Tristique libero risus amet adipiscing
              aliquam turpis amet. Non arcu dui nulla bibendum vestibulum
              viverra in aliquam id. Viverra aliquet donec enim rutr.
            </p>

            <h5
              className="mt-5"
              style={{ color: "#244a59", fontWeight: "bolder" }}
            >
              This training course will feature:
            </h5>
            <ul
              style={{ color: "#244a59", lineHeight: "2rem" }}
              className="fs-20"
            >
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
            </ul>
          </Col>
        </Col>

        {/* THird Section */}
        <Col className="p-5" style={{ backgroundColor: "white" }}>
          <Col xs={9} className="mt-5 p-2" xl={4}>
            <h4 style={{ color: "#244a59", fontWeight: "bolder" }}>
              What are the Goals?
            </h4>

            <h5
              className="mt-5"
              style={{ color: "#244a59", fontWeight: "bolder" }}
            >
              By the end of this course, participants will be able to:
            </h5>
            <ul
              style={{ color: "#244a59", lineHeight: "2rem" }}
              className="fs-20"
            >
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
            </ul>

            <h4
              className="mt-5"
              style={{ color: "#244a59", fontWeight: "bolder" }}
            >
              Who is this Training Course for?
            </h4>

            <h5
              className="mt-4"
              style={{ color: "#244a59", fontWeight: "bolder" }}
            >
              This training course will be appropriate for a wide range of
              professionals but will greatly benefit:
            </h5>
            <ul
              style={{ color: "#244a59", lineHeight: "2rem" }}
              className="fs-20 mt-4"
            >
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
            </ul>
          </Col>
          <br />
          <br />
          <br />
          <br />
          <br />
        </Col>

        <Col md={7} xl={5} xs={8}>
          <Card
            style={{
              backgroundColor: "#f2f2f7",
              position: "relative",
              top: "-4rem",
              left: "3rem",
            }}
            className="p-3"
          >
            <CardBody>
              <h3
                style={{
                  color: "#244a59",
                  fontWeight: "bolder",
                  textAlign: "center",
                }}
              >
                How will this Training Course be Presented?
              </h3>
              <p className="mt-5 fs-15" style={{ lineHeight: "2rem" }}>
                Lorem ipsum dolor sit amet consectetur. Vitae dolor imperdiet
                tristique quam. Vitae purus diam montes convallis convallis. At
                feugiat nam id dictum semper. Tristique libero risus amet
                adipiscing aliquam turpis amet. Non arcu dui nulla bibendum
                vestibulum viverra in aliquam id. Viverra aliquet donec enim
                rutr. Tristique libero risus amet adipiscing aliquam turpis
                amet. Non arcu dui nulla bibendum vestibulum viverra in aliquam
                id. Viverra aliquet donec enim rutr. Tristique libero risus amet
                adipiscing aliquam turpis amet. Non arcu dui nulla bibendum
                vestibulum viverra in aliquam id. Viverra aliquet donec enim
                rutr.
              </p>
            </CardBody>
          </Card>
        </Col>

        {/* Fourth Section */}
        <Col className="p-5" style={{ backgroundColor: "white" }}>
          <Col xs={9} className="mt-5 p-2" xl={4}>
            <h4 style={{ color: "#244a59", fontWeight: "bolder" }}>
              The Course Content
            </h4>

            <h5
              className="mt-5"
              style={{ color: "#244a59", fontWeight: "bolder" }}
            >
              Day One: Introduction to Contract Management
            </h5>
            <ul
              style={{ color: "#244a59", lineHeight: "2rem" }}
              className="fs-20"
            >
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
            </ul>

            <h5
              className="mt-5"
              style={{ color: "#244a59", fontWeight: "bolder" }}
            >
              Day Two: Managing Contract Risk
            </h5>
            <ul
              style={{ color: "#244a59", lineHeight: "2rem" }}
              className="fs-20"
            >
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
            </ul>

            <h5
              className="mt-5"
              style={{ color: "#244a59", fontWeight: "bolder" }}
            >
              Day Three: Introduction to Contract Management
            </h5>
            <ul
              style={{ color: "#244a59", lineHeight: "2rem" }}
              className="fs-20"
            >
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
            </ul>
          </Col>

          <br />
          <br />
          <br />
          <br />
          <br />

          <h4 style={{ color: "#244a59", fontWeight: "bolder" }}>
            The Certificate
          </h4>
          <ul
            style={{ color: "#244a59", lineHeight: "2rem" }}
            className="fs-20"
          >
            <li>
              GTech Certificate of Completion for delegates attend and complete
              training course
            </li>
          </ul>

          <h4
            style={{ color: "#244a59", fontWeight: "bolder" }}
            className="mt-5"
          >
            In Partnership with
          </h4>

          <div
            style={{
              display: "grid",
              width: "max-content",
              height: "10rem",
              border: "1px solid #000000",
              borderRadius: "0.7rem",
              padding: "1rem",
            }}
          >
            <img src={logo} alt="logo" className="rounded avatar-xmd"></img>
            <Button
              className="btn btn-dark"
              style={{ backgroundColor: "#00D084" }}
            >
              View Results
            </Button>
          </div>
        </Col>

        <Col>
          <Container
            style={{ backgroundColor: "#244a59", color: "white" }}
            fluid
          >
            <Row className="justify-content-center mt-4">
              <Col lg={8}>
                <div className="text-center mb-5">
                  <h6
                    className="mb-3 fw-semibold text-capitalize lh-base p-3 mt-4"
                    style={{ color: "white" }}
                  >
                    {/* Our Latest <span className="text-primary">News</span> */}
                    Do you want to
                  </h6>
                  <h4
                    className="mb-3 fw-semibold text-capitalize lh-base p-3 mt-4"
                    style={{ color: "white" }}
                  >
                    {/* Our Latest <span className="text-primary">News</span> */}
                    Learn more about the Course?
                  </h4>
                  {/* <p className="text-muted mb-4">
                  We thrive when coming up with innovative ideas but also
                  understand that NavLink smart concept should be supported with
                  faucibus sapien odio measurable results.
                </p> */}
                </div>
              </Col>
            </Row>

            <Row className="" style={{ padding: "7rem" }}>
              <Col lg={3} md={3}>
                <p style={{ textAlign: "center" }}>
                  <img src={store} alt="" className="img-fluid rounded" />
                </p>
                <ul className="list-inline fs-14 text-muted "></ul>
                <Link to="#!">
                  <h5 style={{ color: "white", textAlign: "center" }}>
                    REQUEST FOR IN-HOUSE SOLUTIONS
                  </h5>
                </Link>
                <p className="fs-14" style={{ textAlign: "center" }}>
                  <Button
                    className="btn btn-light"
                    style={{ color: "#244a59" }}
                  >
                    Request Now
                  </Button>
                </p>
              </Col>
              <Col lg={3} md={3}>
                <p style={{ textAlign: "center" }}>
                  <img src={paper} alt="" className="img-fluid rounded" />
                </p>

                <ul className="list-inline fs-14 text-muted"></ul>
                <Link to="#!">
                  <h5 style={{ color: "white", textAlign: "center" }}>
                    REQUEST FOR MORE DETAILS
                  </h5>
                </Link>
                <p className="fs-14" style={{ textAlign: "center" }}>
                  <Button
                    className="btn btn-light"
                    style={{ color: "#244a59" }}
                  >
                    Request Now
                  </Button>
                </p>
              </Col>
              <Col lg={3} md={3}>
                <p style={{ textAlign: "center" }}>
                  <img src={community} alt="" className="img-fluid rounded" />
                </p>

                <ul className="list-inline fs-14 text-muted"></ul>
                <Link to="#!">
                  <h5 style={{ color: "white", textAlign: "center" }}>
                    SHARE THIS COURSE WITH A COLLEAGUE
                  </h5>
                </Link>
                <p className=" fs-14" style={{ textAlign: "center" }}>
                  <Button
                    className="btn btn-light"
                    style={{ color: "#244a59" }}
                  >
                    Share Now
                  </Button>
                </p>
              </Col>
              <Col lg={3} md={3}>
                <p style={{ textAlign: "center" }}>
                  <img src={down} alt="" className="img-fluid rounded" />
                </p>

                <ul className="list-inline fs-14 text-muted"></ul>
                <Link to="#!">
                  <h5 style={{ color: "white", textAlign: "center" }}>
                    DOWNLOAD THE COURSE BROCHURE
                  </h5>
                </Link>
                <p className=" fs-14" style={{ textAlign: "center" }}>
                  <Button
                    className="btn btn-light"
                    style={{ color: "#244a59" }}
                  >
                    Download
                  </Button>
                </p>
              </Col>
            </Row>
          </Container>
        </Col>

        {/* COurses */}
        <Col lg={20}>
          <div className="text-center mb-5">
            <h6
              className="mb-3 fw-semibold text-capitalize lh-base p-3 mt-4"
              style={{ color: "#244a59" }}
            >
              Upcoming
            </h6>
            <h4
              className="mb-3 fw-semibold text-capitalize lh-base p-3 mt-4"
              style={{ color: "#244a59" }}
            >
              Related Courses
            </h4>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Col xl={10}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  gap: "2rem",
                  flexWrap: "wrap",
                }}
              >
                <Col sm={6} xl={2} md={3}>
                  <Card style={{ borderBottomRightRadius: "2rem" }}>
                    <img
                      className="card-img-top img-fluid"
                      src={buss}
                      alt="Card cap"
                      style={{
                        filter: "brightness(50%)",
                      }}
                    />
                    <h5
                      style={{
                        textAlign: "center",
                        position: "absolute",
                        top: "3.5rem",
                        color: "white",
                        fontWeight: "bolder",
                        fontSize: "1rem",
                      }}
                    >
                      Contract Management Principles & practice
                    </h5>

                    <CardBody>
                      <h4
                        className="card-title mb-2"
                        style={{
                          textAlign: "center",
                          fontWeight: "bolder",
                        }}
                      >
                        03 - 07 Jul 2023
                      </h4>
                      <p
                        className="card-text"
                        style={{
                          textAlign: "center",
                          fontWeight: "bolder",
                        }}
                      >
                        ACCRA - GH
                      </p>
                      <p style={{ textAlign: "center" }}>
                        <i
                          className="bx bxs-caret-right-circle"
                          style={{
                            fontSize: "2rem",
                            padding: "0.5rem",
                            position: "relative",
                            top: "0.3rem",
                            color: "#244a59",
                          }}
                        ></i>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm={6} xl={2} md={3}>
                  <Card style={{ borderBottomRightRadius: "2rem" }}>
                    <img
                      className="card-img-top img-fluid"
                      src={buss}
                      alt="Card cap"
                      style={{
                        filter: "brightness(50%)",
                      }}
                    />
                    <h5
                      style={{
                        textAlign: "center",
                        position: "absolute",
                        top: "3.5rem",
                        color: "white",
                        fontWeight: "bolder",
                        fontSize: "1rem",
                      }}
                    >
                      Contract Management Principles & practice
                    </h5>

                    <CardBody>
                      <h4
                        className="card-title mb-2"
                        style={{
                          textAlign: "center",
                          fontWeight: "bolder",
                        }}
                      >
                        03 - 07 Jul 2023
                      </h4>
                      <p
                        className="card-text"
                        style={{
                          textAlign: "center",
                          fontWeight: "bolder",
                        }}
                      >
                        ACCRA - GH
                      </p>
                      <p style={{ textAlign: "center" }}>
                        <i
                          className="bx bxs-caret-right-circle"
                          style={{
                            fontSize: "2rem",
                            padding: "0.5rem",
                            position: "relative",
                            top: "0.3rem",
                            color: "#244a59",
                          }}
                        ></i>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm={6} xl={2} md={3}>
                  <Card style={{ borderBottomRightRadius: "2rem" }}>
                    <img
                      className="card-img-top img-fluid"
                      src={buss}
                      alt="Card cap"
                      style={{
                        filter: "brightness(50%)",
                      }}
                    />
                    <h5
                      style={{
                        textAlign: "center",
                        position: "absolute",
                        top: "3.5rem",
                        color: "white",
                        fontWeight: "bolder",
                        fontSize: "1rem",
                      }}
                    >
                      Contract Management Principles & practice
                    </h5>

                    <CardBody>
                      <h4
                        className="card-title mb-2"
                        style={{
                          textAlign: "center",
                          fontWeight: "bolder",
                        }}
                      >
                        03 - 07 Jul 2023
                      </h4>
                      <p
                        className="card-text"
                        style={{
                          textAlign: "center",
                          fontWeight: "bolder",
                        }}
                      >
                        ACCRA - GH
                      </p>
                      <p style={{ textAlign: "center" }}>
                        <i
                          className="bx bxs-caret-right-circle"
                          style={{
                            fontSize: "2rem",
                            padding: "0.5rem",
                            position: "relative",
                            top: "0.3rem",
                            color: "#244a59",
                          }}
                        ></i>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm={6} xl={2} md={3}>
                  <Card style={{ borderBottomRightRadius: "2rem" }}>
                    <img
                      className="card-img-top img-fluid"
                      src={buss}
                      alt="Card cap"
                      style={{
                        filter: "brightness(50%)",
                      }}
                    />
                    <h5
                      style={{
                        textAlign: "center",
                        position: "absolute",
                        top: "3.5rem",
                        color: "white",
                        fontWeight: "bolder",
                        fontSize: "1rem",
                      }}
                    >
                      Contract Management Principles & practice
                    </h5>

                    <CardBody>
                      <h4
                        className="card-title mb-2"
                        style={{
                          textAlign: "center",
                          fontWeight: "bolder",
                        }}
                      >
                        03 - 07 Jul 2023
                      </h4>
                      <p
                        className="card-text"
                        style={{
                          textAlign: "center",
                          fontWeight: "bolder",
                        }}
                      >
                        ACCRA - GH
                      </p>
                      <p style={{ textAlign: "center" }}>
                        <i
                          className="bx bxs-caret-right-circle"
                          style={{
                            fontSize: "2rem",
                            padding: "0.5rem",
                            position: "relative",
                            top: "0.3rem",
                            color: "#244a59",
                          }}
                        ></i>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </div>
            </Col>
          </div>
        </Col>

        {/* Course Finder */}
        <Col>
          <Col className="mt-4 p-5" style={{ backgroundColor: "white" }}>
            <h5
              className="mt-5"
              style={{
                textAlign: "center",
                fontWeight: "bolder",
                color: "#244a59",
              }}
            >
              USE THE COURSE FINDER TO
            </h5>
            <h4
              className="mt-3"
              style={{
                textAlign: "center",
                fontWeight: "bolder",
                color: "#244a59",
              }}
            >
              BROWSE OVER 400 COURSES
            </h4>

            <p style={{ textAlign: "center" }} className="mt-4">
              <Button
                className="btn btn-dark"
                style={{ backgroundColor: "#244a59", width: "10rem" }}
              >
                Course Finder{" "}
                <i
                  className=" ri-zoom-in-line"
                  style={{ position: "relative", top: "0.15rem" }}
                ></i>
              </Button>
            </p>
          </Col>
        </Col>

        <Col>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.2rem",
              backgroundColor: "#244a59",
            }}
            className=""
          >
            <div>
              <img src={online} alt="online-img" className="img-fluid"></img>
            </div>
            <div style={{ marginTop: "5rem" }}>
              <h6 style={{ fontWeight: "bolder", color: "white" }}>
                DISCOVER OUR
              </h6>
              <h4 style={{ fontWeight: "bolder", color: "white" }}>
                ONLINE TRAINING
              </h4>
              <h4 style={{ fontWeight: "bolder", color: "white" }}>COURSES</h4>
            </div>
            <div>
              <i
                className="bx bxs-caret-right-circle"
                style={{
                  fontSize: "2rem",
                  padding: "0.5rem",
                  position: "relative",
                  top: "5.5rem",
                  color: "white",
                  cursor: "pointer",
                }}
              ></i>
            </div>
          </div>
        </Col>
      </div>
    </>
  );
};

export default ClassroomCourseDetails;
