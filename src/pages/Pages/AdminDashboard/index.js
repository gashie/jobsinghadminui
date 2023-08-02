import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Table,
  Progress,
} from "reactstrap";
import { projectsWidgets, projectsWidgets0 } from "../../../common/data";
import CountUp from "react-countup";
import { recentApplicants } from "../../../common/data/dashboardJobs";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import ListTable from "./ListTable";

function AdminDashboard() {
  return (
    <>
      <div className="page-content">
        <Container fluid>
          <div className="d-flex align-items-lg-center flex-lg-row flex-column">
            <div className="flex-grow-1">
              <h4 className="fs-16 mb-1" style={{
                fontWeight: 'bold'
              }}>WELCOME ADMIN</h4>
              <p className="text-muted mb-0">
                Dashboard
              </p>
            </div>
          </div>
          <Row className="project-wrapper mt-4">
            <Col xxl={10} style={{ width: "100%" }}>
              {/* <Widgets /> */}
              <Row>
                {(projectsWidgets || []).map((item, key) => (
                  <Col xl={3} key={key} sm={6}>
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
              {/* Part 2 */}
              <Row>
                {(projectsWidgets0 || []).map((item, key) => (
                  <Col xl={4} key={key} sm={12}>
                    <Card className="card-animate">
                      <CardBody style={{ height: "10rem" }}>
                        <div className="d-flex align-items-center">
                          {/* <div className="avatar-sm flex-shrink-0">
                            <span
                              className={`avatar-title bg-${item.feaIconClass} rounded-2 fs-2`}
                            >
                              <FeatherIcon icon={item.feaIcon} />
                            </span>
                          </div> */}
                          <div className="flex-grow-1 overflow-hidden ms-3">
                            <p className="text-uppercase fw-medium text-muted text-truncate mb-3">
                              {item.label}
                            </p>

                            <div className="d-flex align-items-center mb-3">
                              <h4 className="fs-4 flex-grow-1 mb-0">
                                {item.subCounter.map((item, key) => (
                                  <span
                                    className="counter-value me-1"
                                    data-target="825"
                                    key={key}
                                  >
                                    {item.cash === true ? (
                                      <>
                                      <div className="d-flex">
                                        <div>
                                        <p>$</p>
                                        </div>
                                        <div>
                                        <CountUp
                                          start={0}
                                          suffix={item.suffix}
                                          separator={item.separator}
                                          end={item.counter}
                                          duration={4}
                                        />
                                         </div>
                                        </div>
                                      </>
                                    ) : (
                                      <CountUp
                                        start={0}
                                        suffix={item.suffix}
                                        separator={item.separator}
                                        end={item.counter}
                                        duration={4}
                                      />
                                    )}

                                    <div
                                      className="mb-4 "
                                      style={{
                                        position: "relative",
                                        top: "1.5rem",
                                      }}
                                    >
                                      <Progress value={45} color="primary" />
                                    </div>
                                  </span>
                                ))}
                              </h4>

                              <span
                                // className={
                                //   "fs-12 badge badge-soft-" + item.badgeClass
                                // }
                                style={{
                                  position: "relative",
                                  top: "-2rem",
                                  color: "red",
                                }}
                              >
                                <i
                                  className={
                                    "fs-13 align-middle me-1 " + item.icon
                                  }
                                ></i>
                                {item.percentage}
                              </span>
                            </div>
                            <p
                              className="text-muted text-truncate mb-0"
                              style={{
                                marginTop: "-2rem",
                              }}
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
            </Col>
          </Row>
          <Row>
            {/* Recent Applicants */}
            <Col xxl={6}>
              <Card>
                <CardHeader className="align-items-center d-flex">
                  <h4 className="card-title mb-0 flex-grow-1">Invoices</h4>
                  {/* <div className="flex-shrink-0">
                    <button type="button" className="btn btn-soft-info btn-sm">
                      <i className="ri-file-list-3-line align-bottom"></i>{" "}
                      Generate Report
                    </button>
                  </div> */}
                </CardHeader>

                <CardBody>
                  <div className="table-responsive table-card">
                    <Table className="table table-borderless table-centered align-middle table-nowrap mb-0">
                      <thead className="text-muted table-light">
                        <tr>
                          <th scope="col">Invoice ID</th>
                          <th scope="col">Employers Name</th>
                          <th scope="col">Due Date</th>
                          <th scope="col">Total</th>
                          {/* <th scope="col">Location</th> */}
                          <th scope="col">Status</th>
                          {/* <th scope="col">Rating</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {recentApplicants.map((item, key) => (
                          <tr key={key}>
                            <td>
                              <Link
                                href="#!"
                                className="fw-medium link-primary"
                              >
                                {item.no}
                              </Link>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 me-2">
                                  {/* <img
                                    src={item.img}
                                    alt=""
                                    className="avatar-xs rounded-circle"
                                  /> */}
                                </div>
                                <div className="flex-grow-1">{item.name}</div>
                              </div>
                            </td>
                            <td>{item.designation}</td>
                            <td>
                              <span className="text-success">{item.rate}</span>
                            </td>
                            {/* <td>{item.city}</td> */}
                            <td>
                              <span
                                className={"badge badge-soft-" + item.typeColor}
                              >
                                {item.type}
                              </span>
                            </td>
                            {/* <td>
                        <h5 className="fs-14 fw-medium mb-0">
                          {item.rate}
                          <span className="text-muted fs-11 ms-1">
                            {item.rating}
                          </span>
                        </h5>
                      </td> */}
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    <Table className="table table-borderless table-centered align-middle table-nowrap mb-0">
                       <thead className="table-light" style={{
                        backgroundColor: '#f3f6f9',
                        width: '100%', 
                        cursor: 'pointer'
                       }}>
                                 <p style={{textAlign: 'center', padding: '0.4rem', marginTop: '1rem'}}>View all Invoices</p>
                       </thead>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
            {/* Payments */}
            <Col xxl={6}>
              <Card>
                <CardHeader className="align-items-center d-flex">
                  <h4 className="card-title mb-0 flex-grow-1">Payments</h4>
                  {/* <div className="flex-shrink-0">
                    <button type="button" className="btn btn-soft-info btn-sm">
                      <i className="ri-file-list-3-line align-bottom"></i>{" "}
                      Generate Report
                    </button>
                  </div> */}
                </CardHeader>

                <CardBody>
                  <div className="table-responsive table-card">
                    <Table className="table table-borderless table-centered align-middle table-nowrap mb-0">
                      <thead className="text-muted table-light">
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Candidate Name</th>
                          <th scope="col">Designation</th>
                          <th scope="col">Rate/hr</th>
                          <th scope="col">Location</th>
                          {/* <th scope="col">Type</th> */}
                          {/* <th scope="col">Rating</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {recentApplicants.map((item, key) => (
                          <tr key={key}>
                            <td>
                              <Link
                                href="#!"
                                className="fw-medium link-primary"
                              >
                                {item.no}
                              </Link>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                {/* <div className="flex-shrink-0 me-2">
                                  <img
                                    src={item.img}
                                    alt=""
                                    className="avatar-xs rounded-circle"
                                  />
                                </div> */}
                                <div className="flex-grow-1">{item.name}</div>
                              </div>
                            </td>
                            <td>{item.designation}</td>
                            <td>
                              <span className="text-success">{item.rate}</span>
                            </td>
                            <td>{item.city}</td>
                            {/* <td>
                              <span
                                className={"badge badge-soft-" + item.typeColor}
                              >
                                {item.type}
                              </span>
                            </td> */}
                            {/* <td>
                        <h5 className="fs-14 fw-medium mb-0">
                          {item.rate}
                          <span className="text-muted fs-11 ms-1">
                            {item.rating}
                          </span>
                        </h5>
                      </td> */}
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    <Table className="table table-borderless table-centered align-middle table-nowrap mb-0">
                       <thead className="table-light" style={{
                        backgroundColor: '#f3f6f9',
                        width: '100%', 
                        cursor: 'pointer'
                       }}>
                                 <p style={{textAlign: 'center', padding: '0.4rem', marginTop: '1rem'}}>View all Payments</p>
                       </thead>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          {/* Last Part */}
          <Row>
            <ListTable />
            {/* <TeamMembers />
                        <Chat />
                        <ProjectsStatus /> */}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AdminDashboard;
