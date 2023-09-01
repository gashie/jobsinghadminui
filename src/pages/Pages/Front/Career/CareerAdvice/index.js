import { useEffect, useState } from "react";
import "./CareerAdvice.css";
import { Container, Row, Col, Button, CardBody, Card } from "reactstrap";
import { Link } from "react-router-dom";
import bg from "../../../../../assets/images/jobsinghana/bg1.png";
import car from "./CareerImages/car.png";
import ent from "./CareerImages/ent.png";
import health from "./CareerImages/heath.png";
import jsearch from "./CareerImages/jsearch.png";
import sal from "./CareerImages/salary.png";
import workplace from "./CareerImages/workplace.png";

const CareerAdvice = () => {
  const [width, setWidth] = useState("");
  const [left, setLeft] = useState("");
  const updateWindowSize = () => {
    const newWindowSize = document.documentElement.clientWidth;
    if (newWindowSize <= 375) {
      setWidth("10rem");
      setLeft("11rem");
    } else if (newWindowSize <= 1200) {
      setWidth("");
    } else if (newWindowSize >= 1200) {
      setWidth("40rem");

      setLeft("");
    } else if (newWindowSize > 375) {
      setWidth("");
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
      <div></div>

      <Row className="justify-content-center">
        <Col
          xl={20}
          xs={10}
          md={20}
          className="text-bg-size banner-container text-bg-size"
        >
          {/* <img src={bg} className="text-bg" alt="bg"></img> */}
          {/* <Container className=""> */}
          <div className="green-circle" ></div>
          <div className="white-circle"></div>

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
                width: "max-content",
              }}
            >
              <Row>
                <Col md={20} style={{ display: "grid", gap: "2rem" }}>
                  <Button
                    style={{
                      color: "white",
                      backgroundColor: "#355765B5",
                      border: "1px solid white",
                      padding: "1rem",
                      width: width,
                      position: "relative",
                      left: left,
                    }}
                    className="btn"
                  >
                    Career Development
                  </Button>
                  <Button
                    style={{
                      color: "white",
                      backgroundColor: "#355765B5",
                      border: "1px solid white",
                      padding: "1rem",
                      width: width,
                      position: "relative",
                      left: left,
                    }}
                    className="btn"
                  >
                    Salary/Benefits
                  </Button>
                  <Button
                    style={{
                      color: "white",
                      backgroundColor: "#355765B5",
                      border: "1px solid white",
                      padding: "1rem",
                      width: width,
                      position: "relative",
                      left: left,
                    }}
                    className="btn"
                  >
                    Job Search
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col md={20} style={{ display: "grid", gap: "2rem" }}>
                  <Button
                    style={{
                      color: "white",
                      backgroundColor: "#355765B5",
                      border: "1px solid white",
                      padding: "1rem",
                      width: width,
                      position: "relative",
                      right: left,
                    }}
                    className="btn"
                  >
                    Health & Safety
                  </Button>
                  <Button
                    style={{
                      color: "white",
                      backgroundColor: "#355765B5",
                      border: "1px solid white",
                      padding: "1rem",
                      width: width,
                      position: "relative",
                      right: left,
                    }}
                    className="btn"
                  >
                    Entrepreneurship
                  </Button>
                  <Button
                    style={{
                      color: "white",
                      backgroundColor: "#355765B5",
                      border: "1px solid white",
                      padding: "1rem",
                      width: width,
                      position: "relative",
                      right: left,
                    }}
                    className="btn"
                  >
                    Jobplace
                  </Button>
                </Col>
              </Row>
            </Col>
          </div>
        </Col>
      </Row>

      <Container>
        <Col xl={20}>
          <div
            style={{
              display: "flex",
              gap: "5rem",
              flexWrap: "wrap",
              width: "100%",
              justifyContent: "center",
            }}
            className="mt-5"
          >
            <Col sm={6} xl={5}>
              <div>
                <img
                  className="card-img-top img-fluid"
                  src={car}
                  alt="Card cap"
                />
                <div className="p-3">
                  <h4
                    style={{ color: "#244a59", fontWeight: "bolder" }}
                    className="card-title mb-2"
                  >
                    Career Development
                  </h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur. Vitae dolor
                    imperdiet tristique quam. Vitae purus diam montes convallis
                    convallis. At feugiat nam id dictum semper. Tristique libero
                    risus amet adipiscing aliquam turpis amet. Non arcu dui
                    nulla bibendum vestibulum viverra in aliquam id. Viverra
                    aliquet donec enim rutr.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={6} xl={5} md={5}>
              <div>
                <img
                  className="card-img-top img-fluid"
                  src={ent}
                  alt="Card cap"
                />
                <div className="p-3">
                  <h4
                    style={{ color: "#244a59", fontWeight: "bolder" }}
                    className="card-title mb-2"
                  >
                    {" "}
                    Entrepreneurship
                  </h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur. Vitae dolor
                    imperdiet tristique quam. Vitae purus diam montes convallis
                    convallis. At feugiat nam id dictum semper. Tristique libero
                    risus amet adipiscing aliquam turpis amet. Non arcu dui
                    nulla bibendum vestibulum viverra in aliquam id. Viverra
                    aliquet donec enim rutr.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={6} xl={5} md={5}>
              <div>
                <img
                  className="card-img-top img-fluid"
                  src={health}
                  alt="Card cap"
                />
                <div className="p-3">
                  <h4
                    style={{ color: "#244a59", fontWeight: "bolder" }}
                    className="card-title mb-2"
                  >
                    {" "}
                    Health & Safety
                  </h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur. Vitae dolor
                    imperdiet tristique quam. Vitae purus diam montes convallis
                    convallis. At feugiat nam id dictum semper. Tristique libero
                    risus amet adipiscing aliquam turpis amet. Non arcu dui
                    nulla bibendum vestibulum viverra in aliquam id. Viverra
                    aliquet donec enim rutr.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={6} xl={5} md={5}>
              <div>
                <img
                  className="card-img-top img-fluid"
                  src={jsearch}
                  alt="Card cap"
                />
                <div className="p-3">
                  <h4
                    style={{ color: "#244a59", fontWeight: "bolder" }}
                    className="card-title mb-2"
                  >
                    Job Search
                  </h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur. Vitae dolor
                    imperdiet tristique quam. Vitae purus diam montes convallis
                    convallis. At feugiat nam id dictum semper. Tristique libero
                    risus amet adipiscing aliquam turpis amet. Non arcu dui
                    nulla bibendum vestibulum viverra in aliquam id. Viverra
                    aliquet donec enim rutr.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={6} xl={5} md={5}>
              <div>
                <img
                  className="card-img-top img-fluid"
                  src={sal}
                  alt="Card cap"
                />
                <div className="p-3">
                  <h4
                    style={{ color: "#244a59", fontWeight: "bolder" }}
                    className="card-title mb-2"
                  >
                    {" "}
                    Salary / Benefits
                  </h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur. Vitae dolor
                    imperdiet tristique quam. Vitae purus diam montes convallis
                    convallis. At feugiat nam id dictum semper. Tristique libero
                    risus amet adipiscing aliquam turpis amet. Non arcu dui
                    nulla bibendum vestibulum viverra in aliquam id. Viverra
                    aliquet donec enim rutr.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={6} xl={5} md={5}>
              <div>
                <img
                  className="card-img-top img-fluid"
                  src={workplace}
                  alt="Card cap"
                />
                <div className="p-3">
                  <h4
                    style={{ color: "#244a59", fontWeight: "bolder" }}
                    className="card-title mb-2"
                  >
                    {" "}
                    Workplace
                  </h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur. Vitae dolor
                    imperdiet tristique quam. Vitae purus diam montes convallis
                    convallis. At feugiat nam id dictum semper. Tristique libero
                    risus amet adipiscing aliquam turpis amet. Non arcu dui
                    nulla bibendum vestibulum viverra in aliquam id. Viverra
                    aliquet donec enim rutr.
                  </p>
                </div>
              </div>
            </Col>
          </div>
        </Col>
      </Container>
    </>
  );
};

export default CareerAdvice;
