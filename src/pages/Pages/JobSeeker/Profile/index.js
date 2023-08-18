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
import profile from "../profile.png";
import EditProfile from "../EditProfile";
import ChangePassword from "../ChangePassword";

const Profile = () => {
  const [justifyTab, setjustifyTab] = useState("1");
  const justifyToggle = (tab) => {
    if (justifyTab !== tab) {
      setjustifyTab(tab);
    }
  };

  const [edit, setEdit] = useState(false)
  return (
    <>
      <Col xxl={11} className="m-5 ">
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
                  Profile
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
                   Edit your profile
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
                  Change password
                </NavLink>
              </NavItem>
             
            </Nav>

            <TabContent activeTab={justifyTab} className="text-muted">
              <TabPane tabId="1" id="base-justified-home">
            
                <Col xxl={10} xs={12} md={12}>
                  <Card
                    style={{ border: "none", boxShadow: "0px 0px 0px white" }}
                  >
                    <CardBody
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >

                       
                      <Row>
                        <Col>
                          <img src={profile} alt="profile-img"></img>
                          <h5
                            style={{ textAlign: "center", marginTop: "1rem" }}
                          >
                            Mathias Lawson
                          </h5>
                          <p style={{ textAlign: "center", color: "gray" }}>
                            Web Developer
                          </p>
                        </Col>

                        <Col>
                          <div
                            style={{
                              borderLeft: "1px dashed black",
                              height: "100%",
                            }}
                          ></div>
                        </Col>

                        <Col style={{ display: "grid", gap: "0.4rem" }}>
                          <div style={{ display: "flex", gap: "0.4rem" }}>
                            <h6>Phone:</h6>
                            <h6>+233559690060</h6>
                          </div>
                          <div style={{ display: "flex", gap: "0.4rem" }}>
                            <h6>Email:</h6>
                            <h6>mathiaslawson70@gmail.com</h6>
                          </div>
                          <div style={{ display: "flex", gap: "0.4rem" }}>
                            <h6>Birthday:</h6>
                            <h6>Labone, Silver Lave</h6>
                          </div>
                          <div style={{ display: "flex", gap: "0.4rem" }}>
                            <h6>Country:</h6>
                            <h6>Ghana</h6>
                          </div>
                          <div style={{ display: "flex", gap: "0.4rem" }}>
                            <h6>Gender:</h6>
                            <h6>Male</h6>
                          </div>
                        </Col>
                      </Row>

                      <p>
                            <i className="bx bxs-pencil" style={{backgroundColor: "#dbdbdb", borderRadius: '50%', padding: "0.4rem", color: "gray", cursor: "pointer"}}></i>
                        </p>
                    </CardBody>
                  </Card>
                </Col>
              </TabPane>

              <TabPane tabId="2" id="product">
                <EditProfile />
              </TabPane>

              <TabPane tabId="3" id="base-justified-messages">
                <ChangePassword />
              </TabPane>
{/* 
              <TabPane tabId="4" id="base-justified-settings">
                <SavedJobs />
              </TabPane> */}
            </TabContent>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Profile;
