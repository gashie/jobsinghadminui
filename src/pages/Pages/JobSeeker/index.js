import React, { useState } from "react";

import Navbar from "./navbar";
import Footer from "./footer";
import {
  Container,
  Row,
  Col,
  DropdownItem,
  Dropdown,
  Card,
  CardHeader,
  UncontrolledDropdown,
  DropdownToggle,
  Input,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import DashboardSeeker from "./DashboardSeeker";
import Profile from "./Profiles";
import ChangePassword from "./ChangePasswords";
import MyResume from "./MyResume";
import MyCoverLetters from "./MyCoverLetters";

const Index = () => {
  document.title = " Job Seeker | Admin Dashboard";

  window.onscroll = function () {
    scrollFunction();
  };

  const scrollFunction = () => {
    const element = document.getElementById("back-to-top");
    if (element) {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isAccount, setIsAccount] = useState(false);
  const [isResume, setIsResume] = useState(false)

  const [view , setView] = useState("My Account")

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleAccount = () => {
    setIsAccount(!isAccount);
  };

  const toggleResume = () =>{
    setIsResume(!isResume)
  }

  const toTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <React.Fragment>
      <div className="layout-wrapper landing" style={{marginRight: '0rem'}}>
       
        {/* Search Bar */}
        <div className="page-content">
          <Container fluid>
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "-1.5rem",
              }}
            >
              <div className="col-xl-8 col-md-10">
                <div className="card crm-widget">
                  <div className="card-body p-0">
                    <div
                      className="row row-cols-xxl-5 row-cols-md-3 row-cols-1 g-0 p-4 "
                      style={{
                        backgroundColor: "#244A59",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        className="col-auto"
                        style={{
                          backgroundColor: "white",
                          padding: "2rem",
                          borderRadius: "0.7rem",
                          display: "flex",
                          justifyContent: "space-between",
                          gap: "1rem",
                          width: "100rem",
                          alignContent: "center",
                        }}
                      >
                        <div className="col-md-10">
                          <Input
                            type="text"
                            className="form-control form-control-lg bg-light border-light"
                            placeholder="Search for jobs of companies"
                          />
                        </div>
                        <div className="col-md-2">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg waves-effect waves-light"
                            style={{
                              backgroundColor: "#244A59",
                              fontSize: "0.8rem",
                            }}
                          >
                            {" "}
                            Find a Job
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
            {/* Side bar */}
            <Row className="mt-3" style={{
                position: 'relative', 
                left: "5rem"
            }}>
              <Col xxl={2} md={4} sm={4} xs={9}>
                <Card>
                  <div className="card-body pb-0">
                    <div
                      id="sales-forecast-chart"
                      className="apex-charts"
                      dir="ltr"
                    >
                      <Nav vertical className="">
                        <NavItem>
                          <NavLink
                            onClick={toggleAccount}
                            className="d-flex align-items-center"
                          >
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                gap: "6rem",
                                color: "black",
                                cursor: "pointer",
                              }}
                              onClick={
                                ()=>{
                                    setView('My Account')
                                }
                              }
                            >
                              <div>
                                <i
                                  className="bx bx-user"
                                  style={{
                                    fontSize: "1.3rem",
                                    display: "flex",
                                  }}
                                >
                                  <h5 style={{ marginLeft: "0.5rem", width: 'max-content', fontSize: '0.8rem' }}>
                                    My Account
                                  </h5>
                                 
                                </i>
                              </div>
                             
                              <div style={{
                                position: 'relative', left: "-1.5rem"
                              }}>
                                {isAccount ? (
                                  <i className="bx bxs-chevron-up"></i>
                                ) : (
                                  <i className="bx bxs-chevron-down"></i>
                                )}
                              </div>
                            </div>
                          </NavLink>
                          <Collapse isOpen={isAccount} className="ml-4">
                            <Nav vertical>
                              <NavItem>
                                <NavLink href="#" style={{color: view === 'Profile' ? 'black' : 'gray', fontSize: '0.8rem'}} onClick={
                                    ()=>{
                                        setView('Profile')
                                    }
                                }>Edit Profile</NavLink>
                              </NavItem>
                              <NavItem
                               onClick={
                                ()=>{
                                    setView('Change Password')
                                }
                               }
                              >
                                <NavLink href="#" style={{color: view === 'Change Password' ? 'black' : 'gray', fontSize: '0.8rem'}}>Change Password</NavLink>
                              </NavItem>
                            </Nav>
                          </Collapse>
                          <hr  style={{width: '14rem'}}/>
                        </NavItem>


                        <NavItem>
                          <NavLink
                            onClick={toggleResume}
                            className="d-flex align-items-center"
                          >
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                gap: "6rem",
                                color: "black",
                                cursor: "pointer",
                              }}
                           
                            >
                              <div>
                                <i
                                  className="bx bx-user"
                                  style={{
                                    fontSize: "1.3rem",
                                    display: "flex",
                                  }}
                                >
                                  <h5 style={{ marginLeft: "0.5rem", width: 'max-content', fontSize: '0.8rem', color: 'gray' }}>
                                    Resume Manager
                                  </h5>
                                 
                                </i>
                              </div>
                             
                              <div style={{
                                position: 'relative', left: "-2.2rem"
                              }}>
                                {isResume ? (
                                  <i className="bx bxs-chevron-up"></i>
                                ) : (
                                  <i className="bx bxs-chevron-down"></i>
                                )}
                              </div>
                            </div>
                          </NavLink>
                          <Collapse isOpen={isResume} className="ml-4">
                            <Nav vertical>
                              <NavItem>
                                <NavLink href="#" style={{color: view === 'My Resume' ? 'black' : 'gray', fontSize: '0.8rem'}} onClick={
                                    ()=>{
                                        setView('My Resume')
                                    }
                                }>My Resume</NavLink>
                              </NavItem>
                              <NavItem
                               onClick={
                                ()=>{
                                    setView('My Cover Letters')
                                }
                               }
                              >
                                <NavLink href="#" style={{color: view === 'My Cover Letters' ? 'black' : 'gray', fontSize: '0.8rem'}}>My cover letters</NavLink>
                              </NavItem>
                            </Nav>
                          </Collapse>
                        
                        </NavItem>

                       

                        <NavItem>
                          <NavLink
                            onClick={toggle}
                            className="d-flex align-items-center"
                          >
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                gap: "6rem",
                                color: "gray",
                                cursor: "pointer",
                              }}
                            >
                              <div>
                                <i
                                  className="bx bx-briefcase-alt-2"
                                  style={{
                                    fontSize: "1.3rem",
                                    display: "flex",
                                    color: 'gray'
                                  }}
                                >
                                  <h5 style={{ marginLeft: "0.5rem", color: 'gray', fontSize: '0.8rem' }}>
                                    My Jobs
                                  </h5>
                                </i>
                              </div>
                              <div style={{
                                 position: 'relative', left: "1.2rem"
                              }}>
                                {isOpen ? (
                                  <i className="bx bxs-chevron-up"></i>
                                ) : (
                                  <i className="bx bxs-chevron-down"></i>
                                )}
                              </div>
                            </div>
                          </NavLink>
                          <Collapse isOpen={isOpen} className="ml-4">
                            <Nav vertical>
                              <NavItem>
                                <NavLink href="#" style={{color: 'gray', fontSize: '0.8rem'}}>Saved Jobs</NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#" style={{color: 'gray', fontSize: '0.8rem'}}>My Applications</NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#" style={{color: 'gray', fontSize: '0.8rem'}}>Job Alerts</NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="#" style={{color: 'gray', fontSize: '0.8rem'}}>Job Search</NavLink>
                              </NavItem>
                            </Nav>
                          </Collapse>
                        </NavItem>

                        <NavItem style={{marginTop: '-0rem'}}>
                          <NavLink href="#">
                          <i
                                  className="bx bx-file"
                                  style={{
                                    fontSize: "1.3rem",
                                    display: "flex",
                                    color: 'gray', 
                                   
                                  }}
                                >
                                  <h5 style={{ marginLeft: "0.5rem", color: 'gray', fontSize: "0.8rem" }}>
                                    My Alerts / Saved search
                                  </h5>
                                </i>
                          </NavLink>
                        </NavItem>

                        <NavItem>
                        <hr  style={{width: '14rem'}}/>
                          <NavLink href="#" style={{marginTop: '-0.5rem'}}>
                          <i
                                  className="bx bx-left-arrow-circle"
                                  style={{
                                    fontSize: "1.3rem",
                                    display: "flex",
                                    color: 'gray', 
                                   
                                  }}
                                >
                                  <h5 style={{ marginLeft: "0.5rem", color: 'gray', fontSize: '0.8rem' }}>
                                    Sign Out
                                  </h5>
                                </i>
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                  </div>
                </Card>
              </Col>

              {/* Main Content */}
              <Col xxl={9} md={6}>
                 {view === 'My Account' && <DashboardSeeker />}
                 {view === 'Profile' && <Profile />}
                 {view === 'Change Password' && <ChangePassword />}
                 {view === 'My Resume' && <MyResume />}
                 {view === 'My Cover Letters' && <MyCoverLetters />}
              </Col>
            </Row>
          </Container>
        </div>
        <br />
        <br />
        <br />
        {/* <Footer /> */}
        <button
          onClick={() => toTop()}
          className="btn btn-danger btn-icon landing-back-top"
          id="back-to-top"
        >
          <i className="ri-arrow-up-line"></i>
        </button>
      </div>
    </React.Fragment>
  );
};

export default Index;
