import React from "react";
import {Row, Col, CardBody, Card} from 'reactstrap'
import CountUp from "react-countup";
import { projectsWidgets, projectsWidgets0 } from "../../../common/data";
import img from './img.png'

function Dashboard() {
  return (
    <>
      <Row>
        {(projectsWidgets || []).map((item, key) => (
          <Col xl={3} key={key} sm={6} md={6}>
            <Card className="card-animate">
              <CardBody>
                <div className="d-flex align-items-center">
                  <div className="avatar-sm flex-shrink-0">
                    <span
                      className={`avatar-title  rounded-2 fs-2`}
                      style={{
                        backgroundColor: "white",
                      }}
                    >
                      <img src={item.icon} alt="img" width="120%"></img>
                    </span>
                  </div>
                  <div className="flex-grow-1 overflow-hidden ms-3">
                    {/* <p className="text-uppercase fw-medium text-muted text-truncate mb-3">
                              {item.label}
                            </p> */}
                    <div
                      style={{
                        padding: "0.6rem",
                      }}
                    >
                      <h4
                        className="fs-4 flex-grow-1 mb-0"
                        style={{
                          textAlign: "right",
                        }}
                      >
                        {item.subCounter.map((item, key) => (
                          <span
                            className="counter-value me-1"
                            data-target="825"
                            key={key}
                          >
                            <CountUp
                              start={0}
                              suffix={item.suffix}
                              separator={item.separator}
                              end={item.counter}
                              duration={4}
                            />
                          </span>
                        ))}
                      </h4>
                    </div>
                    <p
                      className="text-muted mb-0 "
                      style={{ textAlign: "right" }}
                    >
                      {item.caption}
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>

      <Row>
           <Col>
           <Card>
            <CardBody>
                <h4>Recommended For You</h4>
                <p>Based on your profile and search history</p>
                <hr />
                <div style={{padding: '1rem'}}>
                    <div style={{display: 'flex', justifyContent: "space-between"}}>
                    <h4>Security Officer</h4>
                    <p>
                        <img src={img} alt="job_logo"></img>
                    </p>
                    </div>

                    <div >
                        <p style={{color: 'gray'}}>
                            <i className=" bx bx-store" style={{fontSize: '1.2rem'}}></i> Lash........................................
                        </p>
                        <p style={{color: 'gray'}}>
                            <i className=" bx bx-map" style={{fontSize: '1.2rem'}}></i> Accra
                        </p>
                        <p style={{color: 'gray'}}>
                            <i className=" bx bx-calendar" style={{fontSize: '1.2rem'}}></i> Expires Jul 25, 2023
                        </p>
                        
                    </div>
                
                </div>
                <hr />
                <div style={{padding: '1rem'}}>
                    <div style={{display: 'flex', justifyContent: "space-between"}}>
                    <h4>Security Officer</h4>
                    <p>
                        <img src={img} alt="job_logo"></img>
                    </p>
                    </div>

                    <div >
                        <p style={{color: 'gray'}}>
                            <i className=" bx bx-store" style={{fontSize: '1.2rem'}}></i> Lash........................................
                        </p>
                        <p style={{color: 'gray'}}>
                            <i className=" bx bx-map" style={{fontSize: '1.2rem'}}></i> Accra
                        </p>
                        <p style={{color: 'gray'}}>
                            <i className=" bx bx-calendar" style={{fontSize: '1.2rem'}}></i> Expires Jul 25, 2023
                        </p>
                        
                    </div>
                
                </div>
                <hr />
                <div style={{padding: '1rem'}}>
                    <div style={{display: 'flex', justifyContent: "space-between"}}>
                    <h4>Security Officer</h4>
                    <p>
                        <img src={img} alt="job_logo"></img>
                    </p>
                    </div>

                    <div >
                        <p style={{color: 'gray'}}>
                            <i className=" bx bx-store" style={{fontSize: '1.2rem'}}></i> Lash........................................
                        </p>
                        <p style={{color: 'gray'}}>
                            <i className=" bx bx-map" style={{fontSize: '1.2rem'}}></i> Accra
                        </p>
                        <p style={{color: 'gray'}}>
                            <i className=" bx bx-calendar" style={{fontSize: '1.2rem'}}></i> Expires Jul 25, 2023
                        </p>
                        
                    </div>
                
                </div>
                <h5 style={{textAlign: 'center'}}>Show All</h5>
            </CardBody>
           </Card>
           </Col>
      </Row>
    </>
  );
}

export default Dashboard;
