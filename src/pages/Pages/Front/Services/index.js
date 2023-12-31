import { useState, useEffect } from "react";
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

import ServicesComp from "./Services";
import JobPosting from "./JobPosting";
import Outsourcing from "./Outsourcing";
import PayrollManagement from "./PayrollManagement";

const Services = () => {
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

  const [width, setWidth] = useState("");
  const [left, setLeft] = useState("");
  const updateWindowSize = () => {
    const newWindowSize = document.documentElement.clientWidth;
    if (newWindowSize <= 375) {
      setWidth("100%");
      setLeft("11rem");
    } else if (newWindowSize >= 1200) {
      setWidth("400px");

      setLeft("");
    } else if (newWindowSize > 375) {
      setWidth("400px");
      setLeft("");
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

  

  const buttonStyle = {
    color: "white",
    backgroundColor: "#355765B5",
    border: "1px solid white",
    padding: "1rem",
    width: width, // Set a specific width for the buttons
  };

  return (
    <>
      <Row className="justify-content-center">
        <Col
          xl={20}
          xs={10}
          md={20}
          className="text-bg-size banner-container text-bg-size"
          style={{ height: "max-content" }}
        >
          <div
            className="white-circle"
            style={{
              right: "0.5%",
              top: "80%",
              width: "300px",
              height: "300px",
            }}
          ></div>

          {/* </Container> */}

          <div
            className="m-5 mt-5"
            style={{
              display: "grid",
              justifyContent: "center",
              zIndex: "99",
              position: "relative",
            }}
          >
            <h4 style={{ textAlign: "center", color: "white" }}>
              Career Advice
            </h4>
            <p style={{ textAlign: "center", color: "white" }}>
              Finding jobseeking tips you can actually use.
            </p>
          </div>

          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                zIndex: "99",
                position: "relative",
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
                  width: "auto",
                }}
              >
                <Row>
                  <Col md={20} style={{ display: "grid", gap: "2rem" }}>
                    <Link to="/services" className="text-light">
                      <Button
                        style={{
                          ...buttonStyle,
                          position: "relative",
                          left: "0",
                        }}
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
                          ...buttonStyle,
                          position: "relative",
                          left: "0",
                        }}
                      >
                        Payroll Management
                      </Button>
                    </Link>
                  </Col>
                </Row>
                <Row>
                  <Col md={20} style={{ display: "grid", gap: "2rem" }}>
                    <Link to="/services-outsourcing" className="text-light">
                      <Button
                        style={{
                          ...buttonStyle,
                          position: "relative",
                          right: "0",
                        }}
                      >
                        Outsourcing
                      </Button>
                    </Link>
                    <Link to="/services-job-posting" className="text-light">
                      <Button
                        style={{
                          ...buttonStyle,
                          position: "relative",
                          right: "0",
                        }}
                      >
                        Job Posting
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </Col>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="">
        <Col>
          {window.location.pathname === "/services" ? (
            <ServicesComp />
          ) : window.location.pathname === "/services-job-posting" ? (
            <JobPosting />
          ) : window.location.pathname === "/services-payroll-management" ? (
            <PayrollManagement />
          ) : window.location.pathname === "/services-outsourcing" ? (
            <Outsourcing />
          ) : (
            <p>Page Does Not Exist</p>
          )}
        </Col>
      </Row>
    </>
  );
};

export default Services;
