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
} from "reactstrap";
import classnames from "classnames";
import img1 from "./img1.png";
import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePassword";
import Logo from "./Logo";
import { useSelector } from "react-redux";

const EmployerProfile = () => {
  const [justifyTab, setjustifyTab] = useState("1");
  const justifyToggle = (tab) => {
    if (justifyTab !== tab) {
      setjustifyTab(tab);
    }
  };

  const [display, setDisplay] = useState("");

  const updateWindowSize = () => {
    const newWindowSize = document.documentElement.clientWidth;
    if (newWindowSize <= 375) {
      setDisplay("none");
    } else if (newWindowSize <= 1200) {
      setDisplay("none");
    } else if (newWindowSize >= 1200) {
      setDisplay("");
    } else if (newWindowSize > 375) {
      setDisplay("");
    }
  };

  useEffect(() => {
    // Initial window size calculation
    updateWindowSize();

    // Event listener for window resize
    window.addEventListener("resize", updateWindowSize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  const { loading, error, userInfo } = useSelector((state) => ({
    loading: state.Login.loading,
    error: state.Login.error,
    userInfo: state.Login.userInfo,
  }));

  const toProfile = () => {
    justifyToggle("1");
  };

  return (
    <>
      <Col
        xxl={11}
        // className="m-0"
        md={11}
        sm={20}
        style={{ position: "relative", top: "1rem", marginLeft: "1rem" }}
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
                        <Col
                          style={{
                            position: "relative",
                            left: "6rem",
                            marginTop: "10rem",
                          }}
                          xl={3}
                          md={4}
                          xs={7}
                        >
                          <p style={{ textAlign: "center" }}>
                            <img
                              src={img1}
                              alt="profile-img"
                              className="img-fluid avatar-xxl"
                            ></img>
                          </p>
                          <h5
                            style={{ textAlign: "center", marginTop: "1rem" }}
                          >
                            {userInfo?.userInfo?.company?.companyName}
                          </h5>
                        </Col>

                        <Col>
                          <div
                            style={{
                              borderLeft: "1px dashed black",
                              height: "100%",
                              position: "relative",
                              left: "12rem",
                              display: display,
                            }}
                          ></div>
                        </Col>

                        <Col
                          style={{ display: "grid", gap: "2.5rem" , marginRight: '-4rem'}}
                          xl={6}
                          md={5}
                          xs={10}
                          className="mt-3 px-5"
                        >
                          <div
                            style={{
                              display: "flex",
                              gap: "1rem",
                              alignItems: "flex-start",
                            }}
                          >
                            <h6 style={{ color: "#244a59", flex: "0 0 30%" }}>
                              Phone:
                            </h6>
                            <h6 style={{ flex: "0 0 70%" }}>
                              {userInfo?.userInfo?.phone}
                            </h6>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              gap: "1rem",
                              alignItems: "flex-start",
                            }}
                          >
                            <h6 style={{ color: "#244a59", flex: "0 0 30%" }}>
                              Email:
                            </h6>
                            <h6 style={{ flex: "0 0 70%" }}>
                              {userInfo?.userInfo?.email}
                            </h6>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              gap: "1rem",
                              alignItems: "flex-start",
                            }}
                          >
                            <h6 style={{ color: "#244a59", flex: "0 0 30%" }}>
                              Date Established:
                            </h6>
                            <h6 style={{ flex: "0 0 70%" }}>
                              30th August, 1992
                            </h6>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              gap: "1rem",
                              alignItems: "flex-start",
                            }}
                          >
                            <h6 style={{ color: "#244a59", flex: "0 0 30%" }}>
                              Address:
                            </h6>
                            <h6 style={{ flex: "0 0 70%" }}>
                              {userInfo?.userInfo?.company?.location}
                            </h6>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              gap: "1rem",
                              alignItems: "flex-start",
                            }}
                          >
                            <h6 style={{ color: "#244a59", flex: "0 0 30%" }}>
                              Country:
                            </h6>
                            <h6 style={{ flex: "0 0 70%" }}>Ghana</h6>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              gap: "1rem",
                              alignItems: "flex-start",
                            }}
                          >
                            <h6 style={{ color: "#244a59", flex: "0 0 30%" }}>
                              Website:
                            </h6>
                            <h6 style={{ flex: "0 0 70%" }}>
                              ghashietechnologie.net
                            </h6>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              gap: "1rem",
                              alignItems: "flex-start",
                            }}
                          >
                            <h6 style={{ color: "#244a59", flex: "0 0 30%" }}>
                              Facebook Page Url:
                            </h6>
                            <h6 style={{ flex: "0 0 70%" }}>
                              ghashietechnologie.net
                            </h6>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              gap: "1rem",
                              alignItems: "flex-start",
                            }}
                          >
                            <h6 style={{ color: "#244a59", flex: "0 0 30%" }}>
                              Twitter Page Url:
                            </h6>
                            <h6 style={{ flex: "0 0 70%" }}>
                              ghashietechnologie.net
                            </h6>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              gap: "1rem",
                              alignItems: "flex-start",
                            }}
                          >
                            <h6 style={{ color: "#244a59", flex: "0 0 30%" }}>
                              LinkedIn Page Url:
                            </h6>
                            <h6 style={{ flex: "0 0 70%" }}>
                              ghashietechnologie.net
                            </h6>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              gap: "1rem",
                              alignItems: "flex-start",
                            }}
                          >
                            <h6 style={{ color: "#244a59", flex: "0 0 30%" }}>
                              Company Description:
                            </h6>
                            <h6 style={{ flex: "0 0 70%" }}>
                              {userInfo?.userInfo?.company?.companyProfile}
                            </h6>
                          </div>
                        </Col>
                      </Row>

                      {/* <p>
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
                        </p> */}
                    </CardBody>
                  </Card>
                </Col>
              </TabPane>

              <TabPane
                tabId="2"
                id="product"
                style={{
                  height: "740px",
                  position: "relative",
                  overflow: "scroll",
                }}
                className="scroll-change"
              >
                <EditProfile toProfile={toProfile} />
              </TabPane>

              <TabPane
                tabId="3"
                id="base-justified-messages"
                style={{
                  height: "800px",
                  position: "relative",
                  overflow: "scroll",
                }}
                className="scroll-change"
              >
                <ChangePassword />
              </TabPane>

              <TabPane
                tabId="4"
                id="base-justified-settings"
                style={{
                  height: "800px",
                  position: "relative",
                  overflow: "scroll",
                }}
                className="scroll-change"
              >
                <Logo />
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default EmployerProfile;
