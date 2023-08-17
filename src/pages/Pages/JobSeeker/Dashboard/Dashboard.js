import { useState } from "react";
import {
  NavItem,
  TabPane,
  NavLink,
  Card,
  CardBody,
  Nav,
  TabContent,
  Col,
  Row,
  Button,
} from "reactstrap";
import classnames from "classnames";
import img1 from "../../../../assets/images/jobsinghana/seatec.png";
import Applications from "../Applications";
import Alerts from "../Alerts";
import SavedJobs from "../SavedJobs";

const Dashboard = () => {
  const [justifyTab, setjustifyTab] = useState("1");
  const justifyToggle = (tab) => {
    if (justifyTab !== tab) {
      setjustifyTab(tab);
    }
  };
  return (
    <>
      <Col xxl={11} className="m-3">
     
        <Card style={{ border: "none", boxShadow: "0px 0px 0px white" }}>
          <CardBody>
            <Nav tabs className="nav-tabs nav-justified mb-3">
              <NavItem>
                <NavLink
                  style={{ cursor: "pointer" }}
                  className={classnames({ active: justifyTab === "1" })}
                  onClick={() => {
                    justifyToggle("1");
                  }}
                >
                  Dashboard
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ cursor: "pointer" }}
                  className={classnames({ active: justifyTab === "2" })}
                  onClick={() => {
                    justifyToggle("2");
                  }}
                >
                  Applications
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ cursor: "pointer" }}
                  className={classnames({ active: justifyTab === "3" })}
                  onClick={() => {
                    justifyToggle("3");
                  }}
                >
                  Alerts
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ cursor: "pointer" }}
                  className={classnames({ active: justifyTab === "4" })}
                  onClick={() => {
                    justifyToggle("4");
                  }}
                >
                  Saved jobs
                </NavLink>
              </NavItem>
            </Nav>

            <TabContent activeTab={justifyTab} className="text-muted">
              <TabPane tabId="1" id="base-justified-home">
                <h5 style={{ fontWeight: "bolder" }} className="mt-4">
                  Welcome John,
                </h5>

                <div className="d-flex mt-5 gap-2">
                  <div>
                    <i
                      className="ri-map-pin-line"
                      style={{
                        fontSize: "2rem",
                        position: "relative",
                        top: "0.6rem",
                        backgroundColor: "#00d084",
                        color: "white",
                        padding: "1rem",
                        borderRadius: "0.2rem",
                      }}
                    ></i>
                  </div>

                  <div style={{ display: "grid" }}>
                    <h5
                      style={{
                        position: "relative",
                        top: "0.6rem",
                        color: "#244a59",
                        fontWeight: "bolder",
                      }}
                    >
                      New recommended jobs
                    </h5>
                    <p style={{ color: "#244a59", fontWeight: "lighter" }}>
                      Based on your current search
                    </p>
                  </div>
                </div>

                {/* Company side */}
                <Col xl={5}>
                <div
                  className="d-flex mt-5 gap-2"
                  style={{
                    justifyContent: "space-between",
                    border: "1px solid #dbdbdb",
                    padding: "0.4rem",
                    borderRadius: "0.3rem",
                    display: "flex",
                   
                    flexWrap: 'wrap'
                  }}
                >
                  <div className="d-flex gap-2" >
                    <div>
                      <img
                        src={img1}
                        alt="logo"
                        className="img-fluid avatar-xxl"
                      ></img>
                    </div>

                    <div style={{ display: "grid" }}>
                      <h5
                        style={{
                          position: "relative",
                          top: "0.6rem",
                          color: "#244a59",
                          fontWeight: "bolder",
                        }}
                      >
                        Sahrenut Procument Officer
                      </h5>
                      <p style={{ color: "#244a59", fontWeight: "lighter" }}>
                        Seatech
                      </p>
                    </div>
                  </div>

                  <div>
                    <Button
                      className="btn btn-dark"
                      style={{
                        backgroundColor: "#244a59",
                        position: "relative",
                        top: "0.8rem",
                      }}
                    >
                      Quick Apply
                    </Button>
                  </div>
                </div>
                </Col>

                {/* New company */}
                <Col xl={5}>
                <div
                  className="d-flex mt-5 gap-2"
                  style={{
                    justifyContent: "space-between",
                    border: "1px solid #dbdbdb",
                    padding: "0.4rem",
                    borderRadius: "0.3rem",
                    display: "flex",
                   
                    flexWrap: 'wrap'
                  }}
                >
                  <div className="d-flex gap-2" >
                    <div>
                      <img
                        src={img1}
                        alt="logo"
                        className="img-fluid avatar-xxl"
                      ></img>
                    </div>

                    <div style={{ display: "grid" }}>
                      <h5
                        style={{
                          position: "relative",
                          top: "0.6rem",
                          color: "#244a59",
                          fontWeight: "bolder",
                        }}
                      >
                        Sahrenut Procument Officer
                      </h5>
                      <p style={{ color: "#244a59", fontWeight: "lighter" }}>
                        Seatech
                      </p>
                    </div>
                  </div>

                  <div>
                    <Button
                      className="btn btn-dark"
                      style={{
                        backgroundColor: "#244a59",
                        position: "relative",
                        top: "0.8rem",
                      }}
                    >
                      Quick Apply
                    </Button>
                  </div>
                </div>
                </Col>
                {/* End company */}

                <div>
                    <p style={{textAlign: 'center'}} className="mt-5">
                        <Button className="btn btn-light" style={{border: '1px solid #244a59', color: '#244a59'}}>View More</Button>
                    </p>
                </div>
      
                <div className="d-flex mt-5 gap-2">
                  <div>
                    <i
                      className="ri-map-pin-line"
                      style={{
                        fontSize: "2rem",
                        position: "relative",
                        top: "0.6rem",
                        backgroundColor: "#00d084",
                        color: "white",
                        padding: "1rem",
                        borderRadius: "0.2rem",
                      }}
                    ></i>
                  </div>
                  <div style={{ display: "grid" }}>
                    <h5
                      style={{
                        position: "relative",
                        top: "0.6rem",
                        color: "#244a59",
                        fontWeight: "bolder",
                      }}
                    >
                      You haven’t sent any applications yet
                    </h5>
                    <p style={{ color: "#244a59", fontWeight: "lighter" }}>
                    
                    Keep track of the current status of your applications.
                    </p>
                  </div>
                </div>

                <div className="d-flex mt-5 gap-2">
                  <div>
                    <i
                      className="ri-map-pin-line"
                      style={{
                        fontSize: "2rem",
                        position: "relative",
                        top: "0.6rem",
                        backgroundColor: "#00d084",
                        color: "white",
                        padding: "1rem",
                        borderRadius: "0.2rem",
                      }}
                    ></i>
                  </div>
                  <div style={{ display: "grid" }}>
                    <h5
                      style={{
                        position: "relative",
                        top: "0.6rem",
                        color: "#244a59",
                        fontWeight: "bolder",
                      }}
                    >
                     My job alerts
                    </h5>
                    <p style={{ color: "#244a59", fontWeight: "lighter" }}>
                    Discover jobs that match your job title preference and previous job searches
                    </p>
                  </div>
                </div>
              </TabPane>

              <TabPane tabId="2" id="product">
                <Applications />
              </TabPane>

              <TabPane tabId="3" id="base-justified-messages">
              
                <Alerts />
              </TabPane>

              <TabPane tabId="4" id="base-justified-settings">
               <SavedJobs />
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Dashboard;