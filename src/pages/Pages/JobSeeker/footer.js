import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

// Import Images
import logolight from "../../../assets/images/logo-light.png";

const Footer = () => {
  return (
    <React.Fragment>

      <footer className="custom-footer bg-light py-5  position-relative">
        <Container fluid 
        style={{padding: "4rem", paddingLeft: "10rem" }}
        >
          <Row >
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

            <Col lg={12} className="ms-lg-auto" >
                <hr />
              <Row xl={20}>
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
               
            </Col>
          

            <h5 className="fw-bolder text-center">Stay Connected</h5>
            <ul className="list-inline mb-0 text-center mt-2 p-4">
                  
                  <li className="list-inline-item">
                    <Link to="#!" className="btn btn-icon p-4" style={{borderRadius: "2rem", backgroundColor: '#4477BB'}}>
                      <i className="ri-linkedin-line fs-20" style={{color: 'white'}}></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#!" className="btn btn-icon p-4" style={{borderRadius: "2rem", backgroundColor: '#405189'}}>
                      <i className="ri-facebook-line fs-20" style={{color: 'white'}}></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#!" className="btn btn-icon btn-soft-success p-4" style={{borderRadius: "2rem", backgroundColor: '#299CDB'}}>
                      <i className="ri-twitter-line fs-20" style={{color: 'white'}}></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#!" className="btn btn-icon btn-soft-success p-4" style={{borderRadius: "2rem", backgroundColor: 'black'}}>
                      <i className="ri-github-line fs-20" style={{color: 'white'}}></i>
                    </Link>
                  </li>
                
                </ul>
            <hr />
            <div>
                <p className="copy-rights mb-0 text-center text-muted">
                  {/* {new Date().getFullYear()} */}
                   © 2005 - 2023 Jobsinghana.com, LLC. All rights reserved
                </p>
              </div>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
