import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

// Import Images
import logolight from "../../../assets/images/logo-light.png";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="custom-footer bg-light py-5 position-relative">
        <Container>
          <Row>
            {/* <Col lg={4} className="mt-4">
              <div>
                <div>
                  <h2
                    style={{
                      fontFamily: "impact",
                      color: "black",
                    }}
                  >
                    JobsinGhana
                  </h2>
                </div>
                <div className="mt-4">
                  <p>Premium Multipurpose Admin & Dashboard Template</p>
                  <p className="ff-secondary">
                    You can build any type of web application like eCommerce,
                    CRM, CMS, Project management apps, Admin Panels, etc using
                    Velzon.
                  </p>
                </div>
              </div>
            </Col> */}

            <Col lg={12} className="ms-lg-auto">
                <hr />
              <Row>
                <Col sm={4} className="mt-4">
                
                  <Link to="/pages-profile">
                          <h2
                            style={{
                              fontFamily: "impact",
                              color: "#244A59",
                            }}
                          >
                            JobsinGhana
                          </h2>
                        </Link>
             
                  <div className="text-muted mt-3">
                    <ul className="list-unstyled ff-secondary footer-list">
                     
                      <li>
                        <Link to="/pages-gallery">About Us</Link>
                      </li>
                      <li>
                        <Link to="/apps-projects-overview">Privacy and Policy</Link>
                      </li>
                      <li>
                        <Link to="/pages-timeline">Temrs & Conditions</Link>
                      </li>
                      <li>
                        <Link to="/pages-timeline">Services</Link>
                      </li>
                      <li>
                        <Link to="/pages-timeline">Disclaimer/Fraud Alert</Link>
                      </li>
                      <li>
                        <Link to="/pages-timeline">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col sm={4} className="mt-4">
                <Link to="/pages-profile">
                          <h2
                            style={{
                              
                              color: "#244A59",
                            }}
                          >
                            JOB SEEKERS
                          </h2>
                        </Link>
                  <div className="text-muted mt-3">
                    <ul className="list-unstyled ff-secondary footer-list">
                      <li>
                        <Link to="/pages-pricing">Find a Job</Link>
                      </li>
                      <li>
                        <Link to="/apps-mailbox">Create an Account</Link>
                      </li>
                      <li>
                        <Link to="/apps-chat">Carrer Advice</Link>
                      </li>
                      <li>
                        <Link to="/apps-crm-deals">Create an Alert</Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col sm={4} className="mt-4">
                <Link to="/pages-profile">
                          <h2
                            style={{
                           
                              color: "#244A59",
                            }}
                          >
                            FOR EMPLOYERS
                          </h2>
                        </Link>
                  <div className="text-muted mt-3">
                    <ul className="list-unstyled ff-secondary footer-list">
                      <li>
                        <Link to="/pages-faqs">Post a Job</Link>
                      </li>
                      <li>
                        <Link to="/pages-faqs">Create an Account</Link>
                      </li>
                      <li>
                        <Link to="/pages-faqs">Recruitment Solutions</Link>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="text-center text-sm-start align-items-center mt-5">
            <Col sm={6}>
              <div>
                <p className="copy-rights mb-0">
                  {new Date().getFullYear()} © JobsinGhana
                </p>
              </div>
            </Col>
            <Col sm={6}>
              <div className="text-sm-end mt-3 mt-sm-0">
                <ul className="list-inline mb-0 footer-social-link">
                  <li className="list-inline-item">
                    <Link to="#" className="avatar-xs d-block">
                      <div className="avatar-title rounded-circle">
                        <i className="ri-facebook-fill"></i>
                      </div>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#" className="avatar-xs d-block">
                      <div className="avatar-title rounded-circle">
                        <i className="ri-github-fill"></i>
                      </div>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#" className="avatar-xs d-block">
                      <div className="avatar-title rounded-circle">
                        <i className="ri-linkedin-fill"></i>
                      </div>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#" className="avatar-xs d-block">
                      <div className="avatar-title rounded-circle">
                        <i className="ri-google-fill"></i>
                      </div>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#" className="avatar-xs d-block">
                      <div className="avatar-title rounded-circle">
                        <i className="ri-dribbble-line"></i>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <hr />
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
