import { Link } from "react-router-dom";
import { Row, Col, Card, CardBody, Container } from "reactstrap";
import rib from "./rib.png";
import sun from "./sun.png";
import mail from "./mail.png";

const Services = () => {
  return (
    <>
      <Container style={{ backgroundColor: "#244a59", color: "white" }} fluid>
        <Row className="justify-content-center mt-4">
          <Col lg={8}>
            <div className="text-center mb-5">
              <h1
                className="mb-3 fw-semibold text-capitalize lh-base p-3 mt-4"
                style={{ color: "white" }}
              >
                {/* Our Latest <span className="text-primary">News</span> */}
                How we can help
              </h1>
              {/* <p className="text-muted mb-4">
                  We thrive when coming up with innovative ideas but also
                  understand that NavLink smart concept should be supported with
                  faucibus sapien odio measurable results.
                </p> */}
            </div>
          </Col>
        </Row>

        <Row className="" style={{padding: '7rem'}}>
          <Col xl={4} md={4}>
            <img src={rib} alt="" className="img-fluid rounded" />

            <ul className="list-inline fs-14 text-muted "></ul>
            <Link to="#!">
              <h5 style={{ color: "white" }}>Career Advice</h5>
            </Link>
            <p className="text-muted fs-14">
              One disadvantage of Lorum Ipsum is that in Latin layouts certain
              letters appear more frequently than others.
            </p>
          </Col>
          <Col lg={4} md={4}>
            <img src={sun} alt="" className="img-fluid rounded" />

            <ul className="list-inline fs-14 text-muted"></ul>
            <Link to="#!">
              <h5 style={{ color: "white" }}>Services</h5>
            </Link>
            <p className="text-muted fs-14">
              One disadvantage of Lorum Ipsum is that in Latin layouts certain
              letters appear more frequently than others.
            </p>
          </Col>
          <Col lg={4} md={4}>
            <img src={mail} alt="" className="img-fluid rounded" />

            <ul className="list-inline fs-14 text-muted"></ul>
            <Link to="#!">
              <h5 style={{ color: "white" }}>Job Alerts</h5>
            </Link>
            <p className="text-muted fs-14" >
              One disadvantage of Lorum Ipsum is that in Latin layouts certain
              letters appear more frequently than others.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Services;
