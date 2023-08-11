import "./CareerAdvice.css";
import { Container, Row, Col, Button, CardBody, Card } from "reactstrap";
import { Link } from "react-router-dom";
import bg from "../../../../assets/images/jobsinghana/bg1.png";
import car from './CareerImages/car.png'
import ent from './CareerImages/ent.png'
import health from './CareerImages/heath.png'
import jsearch from './CareerImages/jsearch.png'
import sal from './CareerImages/salary.png'
import workplace from './CareerImages/workplace.png'

const CareerAdvice = () => {
  return (
    <>
      <div></div>

      <Row className="justify-content-center">
        <Col xl={20} xs={10} md={20} className="text-bg-size">
          <img src={bg} className="text-bg" alt="bg"></img>

          <div
            className="m-5 mt-5"
            style={{ display: "grid", justifyContent: "center" }}
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
                <Col md={20} style={{ display: "grid", gap: "2rem" }}>
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
                    Career Development
                  </Button>
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
                    Salary/Benefits
                  </Button>
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
                      width: "20rem",
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
                      width: "20rem",
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
                      width: "20rem",
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

     
        <Col xl={20}>
          <div style={{ display: "flex", gap: '5rem', flexWrap: 'wrap', width: '100%', justifyContent: 'center' }} className="mt-5" >
            <Col sm={6} xl={5}>
              <div>
                <img
                  className="card-img-top img-fluid"
                  src={car}
                  alt="Card cap"
                />
                <div className="p-3">
                  <h4 style={{color: '#244a59', fontWeight: 'bolder'}} className="card-title mb-2">Career Development</h4>
                  <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur. Vitae dolor imperdiet tristique quam. Vitae purus diam montes convallis convallis. At feugiat nam id dictum semper. Tristique libero risus amet adipiscing aliquam turpis amet. Non arcu dui nulla bibendum vestibulum viverra in aliquam id. Viverra aliquet donec enim rutr.
                  </p>
                 
                </div>
              </div>
            </Col>
            <Col sm={6} xl={5}  md={5}>
              <div>
                <img
                  className="card-img-top img-fluid"
                  src={ent}
                  alt="Card cap"
                />
                <div className="p-3">
                  <h4 style={{color: '#244a59', fontWeight: 'bolder'}} className="card-title mb-2"> Entrepreneurship</h4>
                  <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur. Vitae dolor imperdiet tristique quam. Vitae purus diam montes convallis convallis. At feugiat nam id dictum semper. Tristique libero risus amet adipiscing aliquam turpis amet. Non arcu dui nulla bibendum vestibulum viverra in aliquam id. Viverra aliquet donec enim rutr.
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
                  <h4 style={{color: '#244a59', fontWeight: 'bolder'}} className="card-title mb-2"> Health & Safety</h4>
                  <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur. Vitae dolor imperdiet tristique quam. Vitae purus diam montes convallis convallis. At feugiat nam id dictum semper. Tristique libero risus amet adipiscing aliquam turpis amet. Non arcu dui nulla bibendum vestibulum viverra in aliquam id. Viverra aliquet donec enim rutr.
                  </p>
                 
                </div>
              </div>
            </Col>
            <Col sm={6} xl={5}  md={5}>
              <div>
                <img
                  className="card-img-top img-fluid"
                  src={jsearch}
                  alt="Card cap"
                />
                <div className="p-3">
                  <h4 style={{color: '#244a59', fontWeight: 'bolder'}} className="card-title mb-2">Job Search</h4>
                  <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur. Vitae dolor imperdiet tristique quam. Vitae purus diam montes convallis convallis. At feugiat nam id dictum semper. Tristique libero risus amet adipiscing aliquam turpis amet. Non arcu dui nulla bibendum vestibulum viverra in aliquam id. Viverra aliquet donec enim rutr.
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
                  <h4 style={{color: '#244a59', fontWeight: 'bolder'}} className="card-title mb-2"> Salary / Benefits</h4>
                  <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur. Vitae dolor imperdiet tristique quam. Vitae purus diam montes convallis convallis. At feugiat nam id dictum semper. Tristique libero risus amet adipiscing aliquam turpis amet. Non arcu dui nulla bibendum vestibulum viverra in aliquam id. Viverra aliquet donec enim rutr.
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
                  <h4 style={{color: '#244a59', fontWeight: 'bolder'}} className="card-title mb-2"> Workplace</h4>
                  <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur. Vitae dolor imperdiet tristique quam. Vitae purus diam montes convallis convallis. At feugiat nam id dictum semper. Tristique libero risus amet adipiscing aliquam turpis amet. Non arcu dui nulla bibendum vestibulum viverra in aliquam id. Viverra aliquet donec enim rutr.
                  </p>
                 
                </div>
              </div>
            </Col>
            
          </div>
        </Col>
     
    </>
  );
};

export default CareerAdvice;
