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
import img1 from './img1.png'
import EditProfile from "./EditProfile"
import ChangePassword from "./ChangePassword";
import Logo from './Logo'

const EmployerProfile = () => {
  const [justifyTab, setjustifyTab] = useState("1");
  const justifyToggle = (tab) => {
    if (justifyTab !== tab) {
      setjustifyTab(tab);
    }
  };

  const [edit, setEdit] = useState(false);
  return (
    <>
      <Row style={{ height: "120vh" }}>
        <Col
          xxl={11}
          className="m-0"
          md={10}
          xs={15}
          style={{ position: "relative", top: "-3rem" }}
        >
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
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({ active: justifyTab === "4" })}
                    onClick={() => {
                      justifyToggle("4");
                    }}
                  >
                    Logo
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
                          justifyContent: "center",
                        }}
                      >
                        <Row>
                            <h4>Company's Profile</h4>
                          <Col style={{position: "relative", left: "6rem", marginTop: "10rem"}}>
                            <p style={{textAlign: 'center'}}>
                            <img src={img1} alt="profile-img" className="img-fluid avatar-xxl"></img>
                            </p>
                            <h5
                              style={{ textAlign: "center", marginTop: "1rem" }}
                            >
                             Gashie Technologies
                            </h5>
                           
                          </Col>

                          <Col>
                            <div
                              style={{
                                borderLeft: "1px dashed black",
                                height: "100%",
                               position: 'relative', 
                               left: '12rem'
                              }}
                            ></div>
                          </Col>

                          <Col style={{ display: "grid", gap: "2rem" }}>
                            <div style={{ display: "flex", gap: "0.4rem" }}>
                              <h6 style={{color: '#244a59'}}>Phone:</h6>
                              <h6>+233559690060</h6>
                            </div>
                            <div style={{ display: "flex", gap: "0.4rem" }}>
                              <h6 style={{color: '#244a59'}}>Email:</h6>
                              <h6 style={{color: '#244a59'}}>mickbrown@gmail.com</h6>
                            </div>
                            <div style={{ display: "flex", gap: "0.4rem" }}>
                              <h6 style={{color: '#244a59'}}>Date Establised:</h6>
                              <h6>30th August, 1992</h6>
                            </div>
                            <div style={{ display: "flex", gap: "0.4rem" }}>
                              <h6 style={{color: '#244a59'}}>Address:</h6>
                              <h6>Labone, Silver Lave</h6>
                            </div>
                            <div style={{ display: "flex", gap: "0.4rem" }}>
                              <h6 style={{color: '#244a59'}}>Country:</h6>
                              <h6>Ghana</h6>
                            </div>
                            <div style={{ display: "flex", gap: "0.4rem" }}>
                              <h6 style={{color: '#244a59'}}>Website:</h6>
                              <h6 style={{color: '#244a59'}}>ghashietechnologie.net</h6>
                            </div>
                            <div style={{ display: "flex", gap: "0.4rem" }}>
                              <h6 style={{color: '#244a59'}}>Facebook Page Url:</h6>
                              <h6 style={{color: '#244a59'}}>ghashietechnologie.net</h6>
                            </div>
                            <div style={{ display: "flex", gap: "0.4rem" }}>
                              <h6 style={{color: '#244a59'}}>Instagram Page Url:</h6>
                              <h6 style={{color: '#244a59'}}>ghashietechnologie.net</h6>
                            </div>
                            <div style={{ display: "flex", gap: "0.4rem" }}>
                              <h6 style={{color: '#244a59'}}>Twitter Page Url:</h6>
                              <h6 style={{color: '#244a59'}}>ghashietechnologie.net</h6>
                            </div>
                            <div style={{ display: "flex", gap: "0.4rem" }}>
                              <h6 style={{color: '#244a59'}}>LinkedIn Page Url:</h6>
                              <h6 style={{color: '#244a59'}}>ghashietechnologie.net</h6>
                            </div>
                            <div style={{ display: "flex", gap: "0.4rem" }}>
                              <h6 style={{color: '#244a59'}}> Company Description:</h6>
                              <h6>Lorem ipsum dolor sit amet consectetur. Quisque sapien amet quam id eget vestibulum. Aenean interdum porttitor est id integer urna. A odio vestibulum mi ac lorem mi tellus tortor. Sit at nunc consequat eu eget dictum.</h6>
                            </div>
                          </Col>
                        </Row>

                        <p>
                          <i
                            className="bx bxs-pencil"
                            style={{
                              backgroundColor: "#dbdbdb",
                              borderRadius: "50%",
                              padding: "0.4rem",
                              color: "gray",
                              cursor: "pointer",
                            }}
                          ></i>
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
                
              <TabPane tabId="4" id="base-justified-settings">
                 <Logo />
              </TabPane>

              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default EmployerProfile;
