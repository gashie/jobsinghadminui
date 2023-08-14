import React, {useState} from "react";
import { Row, Col, Card, CardBody, Button, Container, NavLink, NavItem, TabPane, TabContent, Nav } from "reactstrap";
import { Link } from "react-router-dom";
import { jobGrid } from "../../../../common/data/appsJobs";
import classnames from "classnames";

import SimpleBar from "simplebar-react";

const FeaturedJobs = () => {
  const sortbyname = [
    {
      options: [
        { label: "All", value: "All" },
        { label: "Today", value: "Today" },
        { label: "Yesterday", value: "Yesterday" },
        { label: "Last 7 Days", value: "Last 7 Days" },
        { label: "Last 30 Days", value: "Last 30 Days" },
        { label: "Thise Month", value: "Thise Month" },
        { label: "Last Year", value: "Last Year" },
      ],
    },
  ];
  const option = [
    {
      options: [
        { label: "All", value: "All" },
        { label: "Active", value: "Active" },
        { label: "New", value: "New" },
        { label: "Close", value: "Close" },
      ],
    },
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
      <Container fluid className="col-md-10 col-xxl-10">
        <Row>
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
            className="mt-5 p-4"
          >
            <h4>Featured Jobs</h4>
            <Button style={{ backgroundColor: "#244a59" }}>See all jobs</Button>
          </div>
        </Row>
        <Row id="job-list" className="p-3">
          {jobGrid.map((item, key) => (
            <Col xl={3} md={6} key={key} xs={15} >
              <Card className="">
                <CardBody>
                  <Button
                    type="button"
                    className="btn btn-icon btn-soft-primary float-end"
                    data-bs-toggle="button"
                    aria-pressed="true"
                  >
                    <i className="mdi mdi-cards-heart fs-16"></i>
                  </Button>
                  <div className="avatar-md mb-4">
                    <div className="">
                      <img
                        src={item.companyLogo}
                        alt=""
                        className="avatar-xxl"
                      />
                    </div>
                  </div>
                  <Link to="#!">
                    <h5>{item.jobTitle}</h5>
                  </Link>
                  {/* <p className="text-muted">{item.companyName} </p> */}
                  {/* <div className="d-flex gap-4 mb-3">
                      <div>
                        <i className="ri-map-pin-2-line text-primary me-1 align-bottom"></i>{" "}
                        {item.location}
                      </div>
                      <div>
                        <i className="ri-time-line text-primary me-1 align-bottom"></i>{" "}
                        {item.postDate}
                      </div>
                    </div> */}
                  <p className="text-muted mt-5">{item.description}</p>
                  <p className="text-muted">
                    {" "}
                    <i className="ri-map-pin-2-line text-primary me-1 align-bottom"></i>{" "}
                    {item.location}
                  </p>
                  <p className="text-muted">
                    {" "}
                    <i className="ri-map-pin-2-line text-primary me-1 align-bottom"></i>{" "}
                    {item.postDate}
                  </p>
                  {/* <div className="hstack gap-2">
                      {item.requirement.map((subitem, key) => (
                        <React.Fragment key={key}>
                          {subitem === "Full Time" ? (
                            <span className="badge badge-soft-success">
                              {subitem}
                            </span>
                          ) : subitem === "Freelance" ? (
                            <span className="badge badge-soft-primary">
                              {subitem}
                            </span>
                          ) : (
                            <span className="badge badge-soft-danger">
                              {subitem}
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div> */}
                  {/* <div className="mt-4 hstack gap-2">
                      <Link to="#!" className="btn btn-soft-primary w-100">
                        Apply Job
                      </Link>
                      <Link
                        to="/apps-job-details"
                        className="btn btn-soft-success w-100"
                      >
                        Overview
                      </Link>
                    </div> */}
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Browse Jobs */}
        <Row>
          <Col xxl={6}>
            <h5 className="mb-3 mt-5 p-4" style={{
                fontWeight: 'bolder', 
                marginTop: '10rem'
            }}>Browse Jobs</h5>           
                <Nav
                  tabs
                  className="nav nav-tabs nav-tabs-custom nav-justified mb-3 p-4"
                >
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer", padding: '' }}
                      className={classnames({
                        active: customActiveTab === "1",
                      })}
                      onClick={() => {
                        toggleCustom("1");
                      }}
                    >
                      By Categories
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
                      By Industry
                    </NavLink>
                  </NavItem>
                </Nav>

                <TabContent activeTab={customActiveTab} className="text-muted">
                  <TabPane tabId="1" id="home1">
                    <div className="d-flex">
                     
                      <div className="ms-2 p-3" style={{
                        display: "flex", gap: '2rem' 
                      }}>
                        <Col>
                        <p>Accounting</p>      
                        <p>Data Management</p>  
                        <p>Extractive</p>  
                        <p>Health and Nutrition</p>  
                        <p>Insurance</p>  
                        <p>Automotive/Machinery/Aviation</p>  
                        <p>Banking</p>  
                        <p>Policy</p>  
                        <p>Scince</p>  
                        </Col>
                        <Col>
                        <p>Accounting</p>      
                        <p>Agriculture</p>  
                        <p>Driving/Transportation</p>  
                        <p>Health and Nutrition</p>  
                        <p>Insurance</p>  
                        <p>Automotive/Machinery/Aviation</p>  
                        <p>Banking</p>  
                        <p>Policy</p>  
                        <p>Scince</p>  
                        </Col>
                        <Col>
                        <p>Accounting</p>      
                        <p>Data Management</p>  
                        <p>Extractive</p>  
                        <p>Health and Nutrition</p>  
                        <p>Insurance</p>  
                        <p>Automotive/Machinery/Aviation</p>  
                        <p>Banking</p>  
                        <p>Policy</p>  
                        <p>Scince</p>  
                        </Col>
                       
                      
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tabId="2" >
                    <div className="d-flex">
                     
                      <div className="ms-2 p-3" style={{
                        display: "flex", gap: '1rem' 
                      }}>
                        <Col>
                        <p>Administration</p>      
                        <p>Agriculture</p>  
                        <p>Driving/Transportation</p>  
                        <p>Health and Nutrition</p>  
                        <p>Insurance</p>  
                        <p>Automotive/Machinery/Aviation</p>  
                        <p>Banking</p>  
                        <p>Policy</p>  
                        <p>Scince</p>  
                        </Col>
                        <Col>
                        <p>Administration</p>      
                        <p>Agriculture</p>  
                        <p>Driving/Transportation</p>  
                        <p>Health and Nutrition</p>  
                        <p>Insurance</p>  
                        <p>Automotive/Machinery/Aviation</p>  
                        <p>Banking</p>  
                        <p>Policy</p>  
                        <p>Scince</p>  
                        </Col>
                        <Col>
                        <p>Administration</p>      
                        <p>Agriculture</p>  
                        <p>Driving/Transportation</p>  
                        <p>Health and Nutrition</p>  
                        <p>Insurance</p>  
                        <p>Automotive/Machinery/Aviation</p>  
                        <p>Banking</p>  
                        <p>Policy</p>  
                        <p>Scince</p>  
                        </Col>
                        <Col>
                        <p>Accounting</p>      
                        <p>Agriculture</p>  
                        <p>Driving/Transportation</p>  
                        <p>Health and Nutrition</p>  
                        <p>Insurance</p>  
                        <p>Automotive/Machinery/Aviation</p>  
                        <p>Banking</p>  
                        <p>Policy</p>  
                        <p>Scince</p>  
                        </Col>
                      
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
