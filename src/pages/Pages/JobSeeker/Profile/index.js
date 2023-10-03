import { useState, useEffect } from "react";
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
  Spinner,
} from "reactstrap";
import classnames from "classnames";
import img1 from "../../../../assets/images/jobsinghana/seatec.png";

import profile from "../profile.png";
import EditProfile from "../EditProfile";
import ChangePassword from "../ChangePassword";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = () => {
  const [justifyTab, setjustifyTab] = useState("1");
  const justifyToggle = (tab) => {
    if (justifyTab !== tab) {
      setjustifyTab(tab);
    }
  };

  const { userInfo, loading, error } = useSelector((state) => ({
    loading: state.Login.loading,
    error: state.Login.error,
    userInfo: state.Login.userInfo,
  }));


  const handleEditProfile = () =>{
    justifyToggle("2");
  }
  // useEffect(() => {
  //   if (window.location.pathname === "/job-seeker-change-password") {
  //     setjustifyTab("3");
  //   } else if (window.location.pathname === "/job-seeker-edit-profile") {
  //     setjustifyTab("2");
  //   } else setjustifyTab("1");
  // });

  const [edit, setEdit] = useState(false);
  return (
    <>
      <Row>
        <Col
          xxl={11}
          // className="m-0"
          md={13}
          sm={20}
          style={{ position: "relative", top: "1rem" }}
        >
          <Card style={{ border: "none", boxShadow: "0px 0px 0px white" }}>
            <CardBody>
              <Nav tabs className="nav-tabs nav-justified mb-3">
                <NavItem>
                  <Link to="/job-seeker-profile">
                    <NavLink
                      style={{ cursor: "pointer", color: "black" }}
                      className={classnames({ active: justifyTab === "1" })}
                      onClick={() => {
                        justifyToggle("1");
                      }}
                    >
                      Profile
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/job-seeker-edit-profile">
                    <NavLink
                      style={{ cursor: "pointer", color: "black" }}
                      className={classnames({ active: justifyTab === "2" })}
                      onClick={() => {
                        justifyToggle("2");
                      }}
                    >
                      Edit your profile
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/job-seeker-change-password">
                    <NavLink
                      style={{ cursor: "pointer", color: "black" }}
                      className={classnames({ active: justifyTab === "3" })}
                      onClick={() => {
                        justifyToggle("3");
                      }}
                    >
                      Change password
                    </NavLink>
                  </Link>
                </NavItem>
              </Nav>

              <TabContent activeTab={justifyTab} className="text-muted">
                <TabPane
                  tabId="1"
                  id="base-justified-home"
                  style={{
                    height: "700px",
                    position: "relative",
                    overflow: "scroll",
                  }}
                  className="scroll-change"
                >
                  <div className="d-flex p-3 justify-content-center">
                    <Col xxl={10} xs={12} md={12}>
                      <Card
                        style={{
                          border: "none",
                          boxShadow: "0px 0px 0px white",
                        }}
                      >
                        <CardBody
                          style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                          }}
                        >
                          <Row>
                            <Col>
                              <div className="d-flex justify-content-center">
                                <img
                                  src={profile}
                                  alt="company-logo"
                                  className="avatar-xxl"
                                />
                              </div>
                              <h5
                                style={{
                                  textAlign: "center",
                                  marginTop: "1rem",
                                }}
                              >
                                {userInfo?.userInfo?.fullName}
                              </h5>
                            </Col>

                            <Col>
                              <div
                                style={{
                                  borderLeft: "1px dashed black",
                                  height: "100%",
                                }}
                              ></div>
                            </Col>
                            {loading === false && error === false ? (
                             
                                <Col
                                  style={{ display: "grid", gap: "2rem" }}
                                 
                                >
                                  <div
                                    style={{ display: "flex", gap: "0.4rem" }}
                                  >
                                    <h5 className="fw-bolder">Username:</h5>
                                    <h5>{userInfo?.userInfo?.username}</h5>
                                  </div>
                                  <div
                                    style={{ display: "flex", gap: "0.4rem" }}
                                  >
                                    <h5 className="fw-bolder">Phone:</h5>
                                    <h5>{userInfo?.userInfo?.phone}</h5>
                                  </div>
                                  <div
                                    style={{ display: "flex", gap: "0.4rem" }}
                                  >
                                    <h5 className="fw-bolder">Email:</h5>
                                    <h5>{userInfo?.userInfo?.email}</h5>
                                  </div>
                                  {/* <div
                                    style={{ display: "flex", gap: "0.4rem" }}
                                  >
                                    <h5>Birthday:</h5>
                                    <h5>{""}</h5>
                                  </div> */}
                                  <div
                                    style={{ display: "flex", gap: "0.4rem" }}
                                  >
                                    <h5 className="fw-bolder">Country:</h5>
                                    <h5>Ghana</h5>
                                  </div>
                                  {/* <div
                                    style={{ display: "flex", gap: "0.4rem" }}
                                  >
                                    <h6>Gender:</h6>
                                    <h6>Male</h6>
                                  </div> */}
                                </Col>
                           
                            ) : (
                              <tr>
                              <td colSpan="7" className="text-center mt-5">
                                <div className="d-flex align-items-center justify-content-center">
                                  {loading === true ? (
                                    <>
                                      <Spinner
                                        size="lg"
                                        className="me-2 mt-5"
                                        style={{ color: "#244a59" }}
                                      ></Spinner>
                                    </>
                                  ) : (
                                    <>
                                      <p className="fw-light mt-5">
                                        You don't have any Service inquiries at the
                                        moment.
                                      </p>
                                    </>
                                  )}
                                </div>
                              </td>
                            </tr>
                            )}
                          </Row>

                          {/* Move the pen icon to the top right */}
                          <p
                            style={{
                              position: "absolute",
                              top: "0",
                              right: "0",
                              margin: "0.5rem",
                            }}
                          >
                            <i
                              className="bx bxs-pencil"
                              style={{
                                backgroundColor: "#dbdbdb",
                                borderRadius: "50%",
                                padding: "0.4rem",
                                color: "gray",
                                cursor: "pointer",
                              }}
                              onClick={handleEditProfile}
                            ></i>
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                  </div>
                </TabPane>

                <TabPane
                  tabId="2"
                  id="product"
                  style={{
                    height: "700px",
                    position: "relative",
                    overflow: "scroll",
                  }}
                  className="scroll-change"
                >
                  <EditProfile  handleEditProfile={handleEditProfile} />
                </TabPane>

                <TabPane
                  tabId="3"
                  id="base-justified-messages"
                  style={{
                    height: "700px",
                    position: "relative",
                    overflow: "scroll",
                  }}
                  className="scroll-change"
                >
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
      </Row>
    </>
  );
};

export default Profile;
