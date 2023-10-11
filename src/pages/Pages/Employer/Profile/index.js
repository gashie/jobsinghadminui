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

  

  
  const { loading, error, userInfo } = useSelector((state) => ({
    loading: state.Login.loading,
    error: state.Login.error,
    userInfo: state.Login.userInfo,
  }));

  const toProfile = () => {
    justifyToggle("1");
  };

  const [left, setLeft] = useState("");
  const [display, setDisplay] = useState("")
  const [top, setTop] = useState("");
  const [createLeft, setCreateLeft] = useState("");
  const [checkTop, setCheckTop] = useState("");
  const [lineLeft, setLineLeft] = useState("")
  const [gap, setGap] = useState("")
  const [width, setWidth] = useState("")
  const updateWindowSize = () => {
    const newWindowSize = window.innerWidth;

    if (newWindowSize <= 576) {
      // for sm screens
      setLeft("0.7rem");
      setDisplay('none')
      setGap("2rem")
      // setTop("10rem");
      // setCreateLeft("");
      // setCheckTop("10rem");
    } else if (newWindowSize <= 992) {
      // for md screens
      setLeft("0vh");
      setDisplay('block')
      setGap("2rem")
      setWidth("100%")
      // setTop("10rem");
      // setCreateLeft("");
      // setCheckTop("");
    } else {
      // for xl screens
      setLeft("-4rem");
      setDisplay('block')
      setGap("3rem")
      setWidth("96%")
      // setTop("-7rem");
      // setCreateLeft("20rem");
      // setCreateLeft("20rem");
      // setCheckTop("-2rem");
    }
  };

  useEffect(() => {
    updateWindowSize(); // Call on initial component mount
    window.addEventListener("resize", updateWindowSize); // Add listener for window resize
    return () => {
      window.removeEventListener("resize", updateWindowSize); // Clean up the listener on component unmount
    };
  }, []);

  return (
    <>
      <Col
        xl={11}
        // className="m-0"
        md={11}
        sm={20}
        style={{ position: "relative", top: "1rem", marginLeft: left, width: width }}
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
                <Col xl={12} xs={12} md={12} >
                  <Card
                    style={{ border: "none", boxShadow: "0px 0px 0px white" }}
                    className="px-3"
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
                            left: "1rem",
                            marginTop: "10rem",
                           
                          }}
                          xl={5}
                          md={3}
                          xs={6}
                        >
                          <p style={{ textAlign: "left" }}>
                            <img
                              src={"https://108.166.181.225:5050/uploads/image/logos/"+ userInfo?.userInfo?.company?.companyLogo}
                              alt="profile-img"
                              className="img-fluid avatar-xxl "
                              
                            ></img>
                          </p>
                          <h5
                            style={{ textAlign: "", marginTop: "1rem" }}
                            className="mx-3"
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
                              left: "2rem",
                              display: display
                            }}
                          ></div>
                        </Col>

                        <Col
                          style={{ display: "grid", gap: "2.5rem" , marginRight: '-4rem'}}
                          xl={6}
                          md={7}
                          xs={10}
                          className="mt-3 px-5"
                        >
                          <div
                            style={{
                              display: "flex",
                              gap: gap,
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
                              gap: gap,
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
                              gap: gap,
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
                              gap: gap,
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
                              gap: gap,
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
                              gap: gap,
                              alignItems: "flex-start",
                            }}
                          >
                            <h6 style={{ color: "#244a59", flex: "0 0 30%" }}>
                              Website:
                            </h6>
                            <h6 style={{ flex: "0 0 70%" }}>
                            {userInfo?.userInfo?.company?.website}
                            </h6>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              gap: gap,
                              alignItems: "flex-start",
                            }}
                          >
                            <h6 style={{ color: "#244a59", flex: "0 0 30%" }}>
                              Facebook Page Url:
                            </h6>
                            <h6 style={{ flex: "0 0 70%" }}>
                            {userInfo?.userInfo?.company?.facebook === null ? "-" :  userInfo?.userInfo?.company?.facebook}
                            </h6>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              gap: gap,
                              alignItems: "flex-start",
                            }}
                          >
                            <h6 style={{ color: "#244a59", flex: "0 0 30%" }}>
                              Twitter Page Url:
                            </h6>
                            <h6 style={{ flex: "0 0 70%" }}>
                            {userInfo?.userInfo?.company?.twitter === null ? "-" :  userInfo?.userInfo?.company?.twitter}
                            </h6>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              gap: gap,
                              alignItems: "flex-start",
                            }}
                          >
                            <h6 style={{ color: "#244a59", flex: "0 0 30%" }}>
                              LinkedIn Page Url:
                            </h6>
                            <h6 style={{ flex: "0 0 70%" }}>
                            {userInfo?.userInfo?.company?.linkedin === null ? "-" :  userInfo?.userInfo?.company?.linkedin}
                            </h6>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              gap: gap,
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
                  height: "720px",
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
                  height: "720px",
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
                  height: "720px",
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
