import "../Career/CareerAdvice/CareerAdvice.css";
import {
  Container,
  Row,
  Col,
  Button,
  CardBody,
  Card,
  Label,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";
import bg from "../../../../assets/images/jobsinghana/bg1.png";
import car from "../Career/CareerAdvice/CareerImages/car.png";
import ent from "../Career/CareerAdvice/CareerImages/ent.png";
import health from "../Career/CareerAdvice/CareerImages/heath.png";
import jsearch from "../Career/CareerAdvice/CareerImages/jsearch.png";
import sal from "../Career/CareerAdvice/CareerImages/salary.png";
import workplace from "../Career/CareerAdvice/CareerImages/workplace.png";
import img1 from "./img1.png";
import img2 from "./img2.jpg";
import icon1 from "./icon1.png";
import icon2 from "./icon2.png";
import icon3 from "./icon3.png";
import icon4 from "./icon4.png";
import icon5 from "./icon5.png";
import icon6 from "./icon6.png";
import icon7 from "./icon7.png";
import Rating from "react-rating";
import Flatpickr from "react-flatpickr";

const Outsourcing = () => {
  const iconList = [
    {
      icon: icon1,
      des: "Search by Job Title, Location, Skills and Keywords",
    },
    {
      icon: icon2,
      des: "Use activity filters to find fresh and active candidates",
    },
    {
      icon: icon3,
      des: "Layer multiple filters for the perfect matches",
    },
  ];
  const iconList2 = [
    {
      icon: icon4,
      des: "Select multiple candidates to create a talent pool",
    },
    {
      icon: icon5,
      des: "Unlock your best matches using CV Search Credit",
    },
  ];

  return (
    <>
      <div style={{ backgroundColor: "white" }}>
        {/* <Row className="justify-content-center">
          <Col xl={20} xs={10} md={20} className="text-bg-size">
            <img
              src={bg}
              className="text-bg"
              alt="bg"
              style={{ zIndex: "1" }}
            ></img>

            <div
              className="m-5 mt-5"
              style={{
                display: "grid",
                justifyContent: "center",
                zIndex: "99",
                position: "relative",
              }}
            >
              <h4 style={{ textAlign: "center", color: "white" }}>Services</h4>
              <p style={{ textAlign: "center", color: "white" }}>
                Finding jobseeking tips you can actually use.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Col
                md={20}
                xl={15}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "1rem",
                  border: "0px solid black",
                  padding: "1rem",
                  backgroundColor: "#355765B5",
                  borderRadius: "0.2rem",
                }}
              >
                <Row>
                  <Col
                    md={20}
                    style={{ display: "grid", gap: "2rem", zIndex: "1" }}
                  >
                    {" "}
                    <Link
                      to="/services"
                      className="text-light"
                    >
                      <Button
                        style={{
                          color: "white",
                          backgroundColor: "#355765B5",
                          border: "1px solid white",
                          padding: "1rem",
                          width: "20rem",
                        }}
                        className="btn"
                      >
                        Recruitment/Headhunting
                      </Button>
                    </Link>
                    <Link
                      to="/services-payroll-management"
                      className="text-light"
                    >
                      <Button
                        style={{
                          color: "white",
                          backgroundColor: "#355765B5",
                          border: "1px solid white",
                          padding: "1rem",
                          width: "20rem",
                        }}
                        className="btn"
                      >
                        Payroll Management
                      </Button>
                    </Link>
                  </Col>
                </Row>
                <Row>
                  <Col
                    md={20}
                    style={{ display: "grid", gap: "2rem", zIndex: "1" }}
                  >
                    <Link to="/services-outsourcing" className="text-light">
                      <Button
                        style={{
                          color: "white",
                          backgroundColor: "#355765B5",
                          border: "1px solid white",
                          padding: "1rem",
                          width: "20rem",
                        }}
                        className="btn"
                      >
                        Outsourcing
                      </Button>
                    </Link>
                    <Link to="/services-job-posting" className="text-light">
                      <Button
                        style={{
                          color: "white",
                          backgroundColor: "#355765B5",
                          border: "1px solid white",
                          padding: "1rem",
                          width: "20rem",
                        }}
                        className="btn"
                      >
                        Job Posting
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </Col>
            </div>
          </Col>
        </Row> */}

        <Row className="mt-5 p-5">
          <Col>
            <Container>
              <h4 style={{ fontWeight: "bolder", color: "#244a59" }}>
                Outsourcing
              </h4>
              <p className="mt-3">
                Use our state of the art technology to outsource the exact
                talent for your organisation and only interact with the
                candidates that best fit your requirements
              </p>
              <p className="mt-3">
                For more information, fill out the form below.
              </p>

              <Row>
                <div className="mb-3 col-xl-5 col-md-5 mt-5">
                  <Label
                    htmlFor="employeeName"
                    className="form-label"
                    style={{ fontSize: "0.8rem" }}
                  >
                    First Name:
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="employeeName"
                    placeholder=""
                  />
                </div>

                <div className="mb-3 col-xl-5 col-md-5 mt-5">
                  <Label
                    htmlFor="employeeUrl"
                    className="form-label"
                    style={{ fontSize: "0.8rem" }}
                  >
                    Last name:
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="employeeUrl"
                    placeholder=""
                  />
                </div>
              </Row>
              <Row>
                <div className="mb-3 col-xl-5 col-md-5 mt-5">
                  <Label
                    htmlFor="employeeName"
                    className="form-label"
                    style={{ fontSize: "0.8rem" }}
                  >
                    Company name:
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="employeeName"
                    placeholder=""
                  />
                </div>

                <div className="mb-3 col-xl-5 col-md-5 mt-5">
                  <Label
                    htmlFor="employeeUrl"
                    className="form-label"
                    style={{ fontSize: "0.8rem" }}
                  >
                    Phone number:
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="employeeUrl"
                    placeholder=""
                  />
                </div>
              </Row>
              <Row>
                <div className="mb-3 col-xl-5 col-md-5 mt-5">
                  <Label
                    htmlFor="employeeName"
                    className="form-label"
                    style={{ fontSize: "0.8rem" }}
                  >
                    Email address:
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="employeeName"
                    placeholder=""
                  />
                </div>

                <div className="mb-3 col-xl-5 col-md-5 mt-5">
                  <Label
                    htmlFor="employeeUrl"
                    className="form-label"
                    style={{ fontSize: "0.8rem" }}
                  >
                    Purpose of enquiry:
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="employeeUrl"
                    placeholder="Outsourcing"
                  />
                </div>
              </Row>

              <div className="text-start">
                <button
                  type="submit"
                  className="btn "
                  style={{
                    backgroundColor: "#244a59",
                    color: "white",
                  }}
                >
                  Talk to us
                </button>
              </div>
            </Container>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Outsourcing;
