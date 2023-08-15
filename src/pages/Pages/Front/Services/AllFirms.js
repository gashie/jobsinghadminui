import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Container,
  NavLink,
  NavItem,
  TabPane,
  TabContent,
  Nav,
  Form,
  UncontrolledDropdown,
  Input,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  CardHeader,
} from "reactstrap";
import { Link } from "react-router-dom";
import { jobGrid } from "../../../../common/data/appsJobs";
import classnames from "classnames";
import Flatpickr from "react-flatpickr";
import Select from "react-select";
import { jobList } from "../../../../common/data/appsJobs";
import img10 from "../../../../assets/images/small/img-10.jpg";
import img7 from "../../../../assets/images/companies/img-7.png";
import OA from "./OA.png";
import OA1 from './OA1.png'
import OA2 from './OA2.png'
import splace from "./splace.png";

import SimpleBar from "simplebar-react";

const FeaturedJobs = () => {
  const status = [
        { label: "Verified", value: "Verified" },
        { label: "Source Partner", value: "Source Partner" },
  ];

  const seats = [
   
        { label: "10,000 +", value: "10,000 +" },
        { label: "5,000 - 9,999", value: "5,000 - 9,999" },
        { label: "1000 - 4,999", value: "1000 - 4,999" },
        { label: "500 - 999", value: "500 - 999" },
        { label: "250 - 499", value: "250 - 499" },
        { label: "100 - 249", value: "100 - 249" },
        { label: "50 - 99", value: "50 - 99" },
        { label: "20 - 49", value: "20 - 49" },
        { label: "10 - 19", value: "10 - 19" },
        { label: "5 - 9", value: "5 - 9" },
        { label: "5 - 4", value: "5 - 4" },
   
  ];

  const associations = [
    { label: "CCAP", value: "CCAP" },
    { label: "IBPAP", value: "IBPAP"},
  ];

  const [arrowNavTab, setarrowNavTab] = useState("1");
  const arrowNavToggle = (tab) => {
    if (arrowNavTab !== tab) {
      setarrowNavTab(tab);
    }
  };

  const [customActiveTab, setcustomActiveTab] = useState("1");
  const toggleCustom = (tab) => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab);
    }
  };

  return (
    <>
      <Container fluid className="col-md-10 col-xxl-20">
        {/* Browse Jobs */}
        <Row>
          <Col xxl={20}>
            <h5
              className="mb-0 mt-0 p-4"
              style={{
                fontWeight: "bolder",
                marginTop: "10rem",
                backgroundColor: "#F2F4F5",
                color: '#244a59'
              }}
            >
             Outsourcing Directory
            </h5>
            <Nav
              tabs
              className="nav nav-tabs nav-tabs-custom nav-justified mb-3 p-0"
            >
              <NavItem>
                <NavLink
                  style={{ cursor: "pointer", padding: "" }}
                  className={classnames({
                    active: customActiveTab === "1",
                  })}
                  onClick={() => {
                    toggleCustom("1");
                  }}
                >
                  All Firms
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ cursor: "pointer" }}
                  className={classnames({
                    active: customActiveTab === "2",
                  })}
                  onClick={() => {
                    toggleCustom("2");
                  }}
                >
                  OA 500
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ cursor: "pointer" }}
                  className={classnames({
                    active: customActiveTab === "3",
                  })}
                  onClick={() => {
                    toggleCustom("3");
                  }}
                >
                 Source Partners
                </NavLink>
              </NavItem>
            </Nav>

            <TabContent
              activeTab={customActiveTab}
              className="text-muted d-flex justify-content-center"
            >
              <TabPane tabId="1" id="home1">
                <div className="d-flex">
                  <div className="">
                    <div>
                      <Container style={{ padding: "2rem" }}>
                        <Row>
                          <Col xl={20}>
                            <Card>
                              <CardBody className="bg-soft-light">
                                <Form>
                                  <Row className="g-3">
                                    <Col xxl={2}>
                                      <div className="search-box">
                                        <Input
                                          type="text"
                                          className="form-control search bg-light border-light"
                                          id="searchJob"
                                          autoComplete="off"
                                          placeholder="Search for companies..."
                                        />
                                        <i className="ri-search-line search-icon"></i>
                                      </div>
                                    </Col>                       

                                    <Col xxl={2} sm={4}>
                                      <div className="input-light">
                                        <Select
                                          className="js-example-basic-single mb-0"
                                          options={status}
                                        ></Select>
                                      </div>
                                    </Col>
                                  
                                    <Col xxl={2} sm={4}>
                                      <div className="input-light">
                                        <Select
                                          className="js-example-basic-single mb-0"
                                          options={seats}
                                        ></Select>
                                      </div>
                                    </Col>

                                    <Col xxl={2} sm={4}>
                                      <div className="input-light">
                                        <Select
                                          className="js-example-basic-single mb-0"
                                          options={associations}
                                        ></Select>
                                      </div>
                                    </Col>

                                    

                                  
                                  </Row>
                                </Form>
                              </CardBody>
                            </Card>
                          </Col>
                        </Row>
                      </Container>
                    
                      {/* Part 1  */}
                      <Container style={{ marginRight: "-1rem" }}>
                        <Row>
                          <Col xl={20}>
                            <div id="job-list">
                              {jobList.map((item, key) => (
                                <Card className="" key={key}>
                                  <CardBody>
                                    <Col xl={20}> 
                                    <div className="d-flex mb-4">
                                      <div className="avatar-xl">
                                        <div className="avatar-title bg-light rounded">
                                          <img
                                            src={splace}
                                            alt=""
                                            className="avatar-xxl companyLogo-img"
                                          />
                                        </div>
                                      </div>

                                      <div
                                        style={{
                                          display: "flex",
                                          flexWrap: "wrap",
                                          
                                        }}
                                      >
                                        {/* Part1 */}
                                        <Col xl={4}>
                                          <div className="ms-3 flex-grow-1">
                                            <img
                                              src={item.coverImg}
                                              alt=""
                                              className="d-none cover-img"
                                            />
                                            <NavLink to="#!">
                                              <h5 className="job-title" style={{fontWeight: 'bolder'}}>
                                                Splace<i className="bx bxs-badge-check" style={{color: '#00D084'}}></i>
                                              </h5>
                                            </NavLink>
                                            <p className="company-name text-muted mb-0">
                                              <span
                                                className="badge badge-soft-light me-1"
                                                style={{
                                                  backgroundColor: "#244a59",
                                                }}
                                              >
                                                CCPA
                                              </span>
                                              <span
                                                className="badge badge-soft-light me-1"
                                                style={{
                                                  backgroundColor: "gray",
                                                }}
                                              >
                                                SP
                                              </span>
                                            </p>
                                            <p className="text-muted job-description">
                                              Splace is business process
                                              outsourcing company composed of
                                              highly trained, top-rated
                                              experienced, talented.........
                                            </p>
                                          </div>
                                        </Col>

                                        {/* Middle */}
                                        <Col xl={3}>
                                          <div className="ms-3 flex-grow-1">
                                            <div className="avatar-xxl">
                                              <img
                                                src={OA}
                                                alt=""
                                                className="avatar-xxl companyLogo-img img-fluid"
                                              />
                                            </div>
                                            <div
                                              className="mt-2"
                                              style={{ width: "15rem" }}
                                            >
                                              <div
                                                style={{
                                                  display: "flex",
                                                  justifyContent:
                                                    "space-between",
                                                }}
                                              >

                                                <p>
                                                    <i className=" bx bx-user-circle" style={{fontSize: '1rem', position: 'relative', top: '0.2rem'}}></i>
                                                    Seat:</p>
                                                <p>51 - 200</p>
                                              </div>
                                              <div
                                                style={{
                                                  display: "flex",
                                                  justifyContent:
                                                    "space-between",
                                                }}
                                              >
                                                <p>
                                                <i className=" lab las la-yin-yang" style={{fontSize: '1rem', position: 'relative', top: '0rem'}}></i>
                                                    DA:
                                                    <i className=" ri-question-fill" style={{fontSize: '1rem', position: 'relative', top: '0.2rem', color: "#244a59 "}}></i>
                                                    </p>
                                                <p>9</p>
                                              </div>
                                              <div
                                                style={{
                                                  display: "flex",
                                                  justifyContent:
                                                    "space-between",
                                                }}
                                              >
                                                <p>
                                                <i className=" bx bx-dollar-circle" style={{fontSize: '1rem', position: 'relative', top: '0.2rem'}}></i>Revenue:</p>
                                                <p>$1.5 Million</p>
                                              </div>
                                              <div
                                                style={{
                                                  display: "flex",
                                                  justifyContent:
                                                    "space-between",
                                                }}
                                              >
                                                <p> <i className="bx bx-time-five" style={{fontSize: '1rem', position: 'relative', top: '0.2rem'}}></i>Founded:</p>
                                                <p>2019</p>
                                              </div>
                                              <div
                                                style={{
                                                  display: "flex",
                                                  justifyContent:
                                                    "space-between",
                                                }}
                                              >
                                                <p><i className=" ri-map-pin-line" style={{fontSize: '1rem', position: 'relative', top: '0.2rem'}}></i>Locations:</p>
                                                <p>1</p>
                                              </div>
                                            </div>
                                          </div>
                                        </Col>

                                        {/* Part2 */}
                                        <Col xl={4} className="ms-5">
                                          <div
                                            style={{
                                              display: "grid",
                                              gap: "1rem",
                                            }}
                                          >
                                            <Button
                                              className="btn btn-dark"
                                              style={{
                                                backgroundColor: "#244a59",
                                              }}
                                            >
                                              View profile
                                            </Button>
                                            <Button
                                              className="btn btn-light"
                                              style={{
                                                border: "1px solid #244a59",
                                              }}
                                            >
                                              Visit website
                                            </Button>
                                            <Button
                                              className="btn btn-light"
                                              style={{
                                                border: "1px solid #244a59",
                                              }}
                                            >
                                              Book a call
                                            </Button>
                                          </div>
                                        </Col>
                                      </div>
                                    </div>

                                    <div>
                                      <div
                                        style={{
                                          display: "flex",
                                          justifyContent: "left",
                                          gap: '2rem'
                                        }}
                                      >
                                        <div>
                                        <h6 style={{fontWeight: "bolder"}}>Sectors</h6>
                                        <span className="badge badge-soft-primary me-1" style={{backgroundColor: "gary", color: "black"}}>
                                        {item.tags[0]}
                                      </span>
                                      <span className="badge badge-soft-primary me-1" style={{backgroundColor: "gary", color: "black"}}>
                                        {item.tags[1]}
                                      </span>
                                      <span className="badge badge-soft-primary me-1" style={{backgroundColor: "gary", color: "black"}}>
                                        {item.tags[2]}
                                      </span>
                                      <span className="badge badge-soft-primary me-1" style={{backgroundColor: "gary", color: "black"}}>
                                        {item.tags[3]}
                                      </span>
                                        </div>
                                        
                                        <div>
                                        <h6 style={{fontWeight: "bolder"}}>Glassdoor rating</h6>
                                        <span> <i className=" ri-star-s-fill" style={{color: 'gold'}}></i>5/5</span>
                                        </div>
                                      </div>

                                     
                                    </div>
                                    </Col>
                                  </CardBody>
                                </Card>
                              ))}
                            </div>

                            <Row
                              className="g-0 justify-content-end mb-4"
                              id="pagination-element"
                            >
                              <Col sm={6}>
                                <div className="pagination-block pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
                                  <div className="page-item">
                                    <NavLink
                                      to=""
                                      className="page-link"
                                      id="page-prev"
                                    >
                                      Previous
                                    </NavLink>
                                  </div>
                                  <span
                                    id="page-num"
                                    className="pagination"
                                  ></span>
                                  <div className="page-item">
                                    <NavLink
                                      to=""
                                      className="page-link"
                                      id="page-next"
                                    >
                                      Next
                                    </NavLink>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Container>

                      {/* Part 1 end */}
                    </div>
                  </div>
                </div>
              </TabPane>

              {/* Part 2 */}
              <TabPane tabId="2">
              <div className="d-flex">
                  <div className="">
                    <div>
                      <Container style={{ padding: "2rem" }}>
                        <Row>
                          <Col xl={20}>
                            <Card>
                              <CardBody className="bg-soft-light">
                                <Form>
                                  <Row className="g-3">
                                    <Col xxl={2}>
                                      <div className="search-box">
                                        <Input
                                          type="text"
                                          className="form-control search bg-light border-light"
                                          id="searchJob"
                                          autoComplete="off"
                                          placeholder="Search for companies..."
                                        />
                                        <i className="ri-search-line search-icon"></i>
                                      </div>
                                    </Col>                       

                                    <Col xxl={2} sm={4}>
                                      <div className="input-light">
                                        <Select
                                          className="js-example-basic-single mb-0"
                                          options={status}
                                        ></Select>
                                      </div>
                                    </Col>
                                  
                                    <Col xxl={2} sm={4}>
                                      <div className="input-light">
                                        <Select
                                          className="js-example-basic-single mb-0"
                                          options={seats}
                                        ></Select>
                                      </div>
                                    </Col>

                                    <Col xxl={2} sm={4}>
                                      <div className="input-light">
                                        <Select
                                          className="js-example-basic-single mb-0"
                                          options={associations}
                                        ></Select>
                                      </div>
                                    </Col>

                                    

                                  
                                  </Row>
                                </Form>
                              </CardBody>
                            </Card>
                          </Col>
                        </Row>
                      </Container>
                    
                      {/* Part 1  */}
                      <Container style={{ marginRight: "-1rem" }}>
                        <Row>
                          <Col xl={20}>
                            <div id="job-list">
                              {jobList.map((item, key) => (
                                <Card className="" key={key}>
                                  <CardBody>
                                    <Col xl={20}> 
                                    <div className="d-flex mb-4">
                                      <div className="avatar-xl">
                                        <div className="avatar-title bg-light rounded">
                                          <img
                                            src={splace}
                                            alt=""
                                            className="avatar-xxl companyLogo-img"
                                          />
                                        </div>
                                      </div>

                                      <div
                                        style={{
                                          display: "flex",
                                          flexWrap: "wrap",
                                          
                                        }}
                                      >
                                        {/* Part1 */}
                                        <Col xl={4}>
                                          <div className="ms-3 flex-grow-1">
                                            <img
                                              src={item.coverImg}
                                              alt=""
                                              className="d-none cover-img"
                                            />
                                            <NavLink to="#!">
                                              <h5 className="job-title" style={{fontWeight: 'bolder'}}>
                                                Splace<i className="bx bxs-badge-check" style={{color: 'gray'}}></i>
                                              </h5>
                                            </NavLink>
                                            <p className="company-name text-muted mb-0">
                                              <span
                                                className="badge badge-soft-light me-1"
                                                style={{
                                                  backgroundColor: "#244a59",
                                                }}
                                              >
                                                CCPA
                                              </span>
                                              <span
                                                className="badge badge-soft-light me-1"
                                                style={{
                                                  backgroundColor: "gray",
                                                }}
                                              >
                                                SP
                                              </span>
                                            </p>
                                            <p className="text-muted job-description">
                                              Splace is business process
                                              outsourcing company composed of
                                              highly trained, top-rated
                                              experienced, talented.........
                                            </p>
                                          </div>
                                        </Col>

                                        {/* Middle */}
                                        <Col xl={3}>
                                          <div className="ms-3 flex-grow-1">
                                            <div className="avatar-xxl">
                                              <img
                                                src={OA1}
                                                alt=""
                                                className="avatar-xxl companyLogo-img img-fluid"
                                              />
                                            </div>
                                            <div
                                              className="mt-2"
                                              style={{ width: "15rem" }}
                                            >
                                              <div
                                                style={{
                                                  display: "flex",
                                                  justifyContent:
                                                    "space-between",
                                                }}
                                              >

                                                <p>
                                                    <i className=" bx bx-user-circle" style={{fontSize: '1rem', position: 'relative', top: '0.2rem'}}></i>
                                                    Seat:</p>
                                                <p>51 - 200</p>
                                              </div>
                                              <div
                                                style={{
                                                  display: "flex",
                                                  justifyContent:
                                                    "space-between",
                                                }}
                                              >
                                                <p>
                                                <i className=" lab las la-yin-yang" style={{fontSize: '1rem', position: 'relative', top: '0rem'}}></i>
                                                    DA:
                                                    <i className=" ri-question-fill" style={{fontSize: '1rem', position: 'relative', top: '0.2rem', color: "#244a59 "}}></i>
                                                    </p>
                                                <p>9</p>
                                              </div>
                                              <div
                                                style={{
                                                  display: "flex",
                                                  justifyContent:
                                                    "space-between",
                                                }}
                                              >
                                                <p>
                                                <i className=" bx bx-dollar-circle" style={{fontSize: '1rem', position: 'relative', top: '0.2rem'}}></i>Revenue:</p>
                                                <p>$1.5 Million</p>
                                              </div>
                                              <div
                                                style={{
                                                  display: "flex",
                                                  justifyContent:
                                                    "space-between",
                                                }}
                                              >
                                                <p> <i className="bx bx-time-five" style={{fontSize: '1rem', position: 'relative', top: '0.2rem'}}></i>Founded:</p>
                                                <p>2019</p>
                                              </div>
                                              <div
                                                style={{
                                                  display: "flex",
                                                  justifyContent:
                                                    "space-between",
                                                }}
                                              >
                                                <p><i className=" ri-map-pin-line" style={{fontSize: '1rem', position: 'relative', top: '0.2rem'}}></i>Locations:</p>
                                                <p>1</p>
                                              </div>
                                            </div>
                                          </div>
                                        </Col>

                                        {/* Part2 */}
                                        <Col xl={4} className="ms-5">
                                          <div
                                            style={{
                                              display: "grid",
                                              gap: "1rem",
                                            }}
                                          >
                                            <Button
                                              className="btn btn-dark"
                                              style={{
                                                backgroundColor: "#244a59",
                                              }}
                                            >
                                              View profile
                                            </Button>
                                            <Button
                                              className="btn btn-light"
                                              style={{
                                                border: "1px solid #244a59",
                                              }}
                                            >
                                              Visit website
                                            </Button>
                                            <Button
                                              className="btn btn-light"
                                              style={{
                                                border: "1px solid #244a59",
                                              }}
                                            >
                                              Book a call
                                            </Button>
                                          </div>
                                        </Col>
                                      </div>
                                    </div>

                                    <div>
                                      <div
                                        style={{
                                          display: "flex",
                                          justifyContent: "left",
                                          gap: '2rem'
                                        }}
                                      >
                                        <div>
                                        <h6 style={{fontWeight: "bolder"}}>Sectors</h6>
                                        <span className="badge badge-soft-primary me-1" style={{backgroundColor: "gary", color: "black"}}>
                                        {item.tags[0]}
                                      </span>
                                      <span className="badge badge-soft-primary me-1" style={{backgroundColor: "gary", color: "black"}}>
                                        {item.tags[1]}
                                      </span>
                                      <span className="badge badge-soft-primary me-1" style={{backgroundColor: "gary", color: "black"}}>
                                        {item.tags[2]}
                                      </span>
                                      <span className="badge badge-soft-primary me-1" style={{backgroundColor: "gary", color: "black"}}>
                                        {item.tags[3]}
                                      </span>
                                        </div>
                                        
                                        <div>
                                        <h6 style={{fontWeight: "bolder"}}>Glassdoor rating</h6>
                                        <span> <i className=" ri-star-s-fill" style={{color: 'gold'}}></i>5/5</span>
                                        </div>
                                      </div>

                                     
                                    </div>
                                    </Col>
                                  </CardBody>
                                </Card>
                              ))}
                            </div>

                            <Row
                              className="g-0 justify-content-end mb-4"
                              id="pagination-element"
                            >
                              <Col sm={6}>
                                <div className="pagination-block pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
                                  <div className="page-item">
                                    <NavLink
                                      to=""
                                      className="page-link"
                                      id="page-prev"
                                    >
                                      Previous
                                    </NavLink>
                                  </div>
                                  <span
                                    id="page-num"
                                    className="pagination"
                                  ></span>
                                  <div className="page-item">
                                    <NavLink
                                      to=""
                                      className="page-link"
                                      id="page-next"
                                    >
                                      Next
                                    </NavLink>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Container>

                     
                    </div>
                  </div>
                </div>
              </TabPane>

{/* Part 3 */}
              <TabPane tabId="3">
              <div className="d-flex">
                  <div className="">
                    <div>
                      <Container style={{ padding: "2rem" }}>
                        <Row>
                          <Col xl={20}>
                            <Card>
                              <CardBody className="bg-soft-light">
                                <Form>
                                  <Row className="g-3">
                                    <Col xxl={2}>
                                      <div className="search-box">
                                        <Input
                                          type="text"
                                          className="form-control search bg-light border-light"
                                          id="searchJob"
                                          autoComplete="off"
                                          placeholder="Search for companies..."
                                        />
                                        <i className="ri-search-line search-icon"></i>
                                      </div>
                                    </Col>                       

                                    <Col xxl={2} sm={4}>
                                      <div className="input-light">
                                        <Select
                                          className="js-example-basic-single mb-0"
                                          options={status}
                                        ></Select>
                                      </div>
                                    </Col>
                                  
                                    <Col xxl={2} sm={4}>
                                      <div className="input-light">
                                        <Select
                                          className="js-example-basic-single mb-0"
                                          options={seats}
                                        ></Select>
                                      </div>
                                    </Col>

                                    <Col xxl={2} sm={4}>
                                      <div className="input-light">
                                        <Select
                                          className="js-example-basic-single mb-0"
                                          options={associations}
                                        ></Select>
                                      </div>
                                    </Col>

                                    

                                  
                                  </Row>
                                </Form>
                              </CardBody>
                            </Card>
                          </Col>
                        </Row>
                      </Container>
                    
                      {/* Part 1  */}
                      <Container style={{ marginRight: "-1rem" }}>
                        <Row>
                          <Col xl={20}>
                            <div id="job-list">
                              {jobList.map((item, key) => (
                                <Card className="" key={key}>
                                  <CardBody>
                                    <Col xl={20}> 
                                    <div className="d-flex mb-4">
                                      <div className="avatar-xl">
                                        <div className="avatar-title bg-light rounded">
                                          <img
                                            src={splace}
                                            alt=""
                                            className="avatar-xxl companyLogo-img"
                                          />
                                        </div>
                                      </div>

                                      <div
                                        style={{
                                          display: "flex",
                                          flexWrap: "wrap",
                                          
                                        }}
                                      >
                                        {/* Part1 */}
                                        <Col xl={4}>
                                          <div className="ms-3 flex-grow-1">
                                            <img
                                              src={item.coverImg}
                                              alt=""
                                              className="d-none cover-img"
                                            />
                                            <NavLink to="#!">
                                              <h5 className="job-title" style={{fontWeight: 'bolder'}}>
                                                Splace<i className="bx bxs-badge-check" style={{color: '#00D084'}}></i>
                                              </h5>
                                            </NavLink>
                                            <p className="company-name text-muted mb-0">
                                              <span
                                                className="badge badge-soft-light me-1"
                                                style={{
                                                  backgroundColor: "#244a59",
                                                }}
                                              >
                                                CCPA
                                              </span>
                                              <span
                                                className="badge badge-soft-light me-1"
                                                style={{
                                                  backgroundColor: "gray",
                                                }}
                                              >
                                                SP
                                              </span>
                                            </p>
                                            <p className="text-muted job-description">
                                              Splace is business process
                                              outsourcing company composed of
                                              highly trained, top-rated
                                              experienced, talented.........
                                            </p>
                                          </div>
                                        </Col>

                                        {/* Middle */}
                                        <Col xl={3}>
                                          <div className="ms-3 flex-grow-1">
                                            <div className="avatar-xxl">
                                              <img
                                                src={OA2}
                                                alt=""
                                                className="avatar-xxl companyLogo-img img-fluid"
                                              />
                                            </div>
                                            <div
                                              className="mt-2"
                                              style={{ width: "15rem" }}
                                            >
                                              <div
                                                style={{
                                                  display: "flex",
                                                  justifyContent:
                                                    "space-between",
                                                }}
                                              >

                                                <p>
                                                    <i className=" bx bx-user-circle" style={{fontSize: '1rem', position: 'relative', top: '0.2rem'}}></i>
                                                    Seat:</p>
                                                <p>51 - 200</p>
                                              </div>
                                              <div
                                                style={{
                                                  display: "flex",
                                                  justifyContent:
                                                    "space-between",
                                                }}
                                              >
                                                <p>
                                                <i className=" lab las la-yin-yang" style={{fontSize: '1rem', position: 'relative', top: '0rem'}}></i>
                                                    DA:
                                                    <i className=" ri-question-fill" style={{fontSize: '1rem', position: 'relative', top: '0.2rem', color: "#244a59 "}}></i>
                                                    </p>
                                                <p>9</p>
                                              </div>
                                              <div
                                                style={{
                                                  display: "flex",
                                                  justifyContent:
                                                    "space-between",
                                                }}
                                              >
                                                <p>
                                                <i className=" bx bx-dollar-circle" style={{fontSize: '1rem', position: 'relative', top: '0.2rem'}}></i>Revenue:</p>
                                                <p>$1.5 Million</p>
                                              </div>
                                              <div
                                                style={{
                                                  display: "flex",
                                                  justifyContent:
                                                    "space-between",
                                                }}
                                              >
                                                <p> <i className="bx bx-time-five" style={{fontSize: '1rem', position: 'relative', top: '0.2rem'}}></i>Founded:</p>
                                                <p>2019</p>
                                              </div>
                                              <div
                                                style={{
                                                  display: "flex",
                                                  justifyContent:
                                                    "space-between",
                                                }}
                                              >
                                                <p><i className=" ri-map-pin-line" style={{fontSize: '1rem', position: 'relative', top: '0.2rem'}}></i>Locations:</p>
                                                <p>1</p>
                                              </div>
                                            </div>
                                          </div>
                                        </Col>

                                        {/* Part2 */}
                                        <Col xl={4} className="ms-5">
                                          <div
                                            style={{
                                              display: "grid",
                                              gap: "1rem",
                                            }}
                                          >
                                            <Button
                                              className="btn btn-dark"
                                              style={{
                                                backgroundColor: "#244a59",
                                              }}
                                            >
                                              View profile
                                            </Button>
                                            <Button
                                              className="btn btn-light"
                                              style={{
                                                border: "1px solid #244a59",
                                              }}
                                            >
                                              Visit website
                                            </Button>
                                            <Button
                                              className="btn btn-light"
                                              style={{
                                                border: "1px solid #244a59",
                                              }}
                                            >
                                              Book a call
                                            </Button>
                                          </div>
                                        </Col>
                                      </div>
                                    </div>

                                    <div>
                                      <div
                                        style={{
                                          display: "flex",
                                          justifyContent: "left",
                                          gap: '2rem'
                                        }}
                                      >
                                        <div>
                                        <h6 style={{fontWeight: "bolder"}}>Sectors</h6>
                                        <span className="badge badge-soft-primary me-1" style={{backgroundColor: "gary", color: "black"}}>
                                        {item.tags[0]}
                                      </span>
                                      <span className="badge badge-soft-primary me-1" style={{backgroundColor: "gary", color: "black"}}>
                                        {item.tags[1]}
                                      </span>
                                      <span className="badge badge-soft-primary me-1" style={{backgroundColor: "gary", color: "black"}}>
                                        {item.tags[2]}
                                      </span>
                                      <span className="badge badge-soft-primary me-1" style={{backgroundColor: "gary", color: "black"}}>
                                        {item.tags[3]}
                                      </span>
                                        </div>
                                        
                                        <div>
                                        <h6 style={{fontWeight: "bolder"}}>Glassdoor rating</h6>
                                        <span> <i className=" ri-star-s-fill" style={{color: 'gold'}}></i>5/5</span>
                                        </div>
                                      </div>

                                     
                                    </div>
                                    </Col>
                                  </CardBody>
                                </Card>
                              ))}
                            </div>

                            <Row
                              className="g-0 justify-content-end mb-4"
                              id="pagination-element"
                            >
                              <Col sm={6}>
                                <div className="pagination-block pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
                                  <div className="page-item">
                                    <NavLink
                                      to=""
                                      className="page-link"
                                      id="page-prev"
                                    >
                                      Previous
                                    </NavLink>
                                  </div>
                                  <span
                                    id="page-num"
                                    className="pagination"
                                  ></span>
                                  <div className="page-item">
                                    <NavLink
                                      to=""
                                      className="page-link"
                                      id="page-next"
                                    >
                                      Next
                                    </NavLink>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Container>

                    
                    </div>
                  </div>
                </div>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
        <br />
        <br />
        <br />
      </Container>
    </>
  );
};

export default FeaturedJobs;
