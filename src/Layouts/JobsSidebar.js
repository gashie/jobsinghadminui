import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Col,
  Container,
} from "reactstrap";
//import { FaHome, FaUser, FaCog, FaBars } from "react-icons/fa";
import Footer from "../pages/Pages/JobSeeker/footer";
import SimpleBar from "simplebar-react";
import "./Sidebar.css";

const Sidebar = () => {
  const [color, setColor] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSide, setIsSide] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const [isResume, setIsResume] = useState(false);
  const [isApplications, setIsApplications] = useState(false);
  const [isAlerts, setIsAlerts] = useState(false);
  const [isJobs, setIsJobs] = useState(false);
  const [isAccount, setisAccount] = useState(false);
  const [isLogout, setLogout] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleLink = () => {
    setIsSide(!isSide);
  };

  const toggleProfile = () => {
    setIsProfile(!isProfile);
  };

  const toggleResume = () => {
    setIsResume(!isResume);
  };
  const toggleApplications = () => {
    setIsApplications(!isApplications);
  };
  const toggleAlerts = () => {
    setIsAlerts(!isAlerts);
  };
  const toggleJobs = () => {
    setIsJobs(!isJobs);
  };
  const toggleAccount = () => {
    setisAccount(!isAccount);
  };
  const toggleLogout = () => {
    setLogout(!isLogout);
    setColor(true);
  };

  const removetoggles = () => {
    if (isSide === true) {
      toggleLink();
    }
    if (isProfile === true) {
      toggleProfile();
    }

    if (isResume === true) {
      toggleResume();
    }
    if (isApplications === true) {
      toggleApplications();
    }
    if (isAlerts === true) {
      toggleAlerts();
    }
    if (isJobs === true) {
      toggleJobs();
    }
    if (isAccount === true) {
      toggleAccount();
    }
    if (isLogout === true) {
      toggleLogout();
    }
  };

  const sidebarItems = [
    { icon: "", label: "Home", link: "/", toggle: toggleLink },
    { icon: "", label: "Profile", link: "/profile", toggle: toggleProfile },
    { icon: "", label: "CV/Resume", link: "/settings", toggle: toggleResume },
    {
      icon: "",
      label: "Applications",
      link: "/settings",
      toggle: toggleApplications,
    },
    { icon: "", label: "Alerts", link: "/settings", toggle: toggleAlerts },
    { icon: "", label: "Saved Jobs", link: "/settings", toggle: toggleJobs },
    {
      icon: "",
      label: "Account Settings",
      link: "/settings",
      toggle: toggleAccount,
    },
    { icon: "", label: "Logout", link: "/settings", toggle: toggleLogout },
  ];

  return (
    <>
      <div style={{ marginTop: "2.5rem", height: "" }}>
        <div
          className=""
          style={{ backgroundColor: "red", width: "max-content" }}
          //   onMouseLeave={removetoggles}
        >
          <Navbar color="light" light expand="md" className="sidebar-navbar">
            <NavbarToggler
              className="navbar-toggler py-0 fs-20 text-body"
              onClick={toggle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{
                position: "absolute",
                top: "-19rem",
                zIndex: "1",
                boxShadow: "none",
              }}
            >
              <i className="mdi mdi-menu"></i>
            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar>
              <Nav
                className="mr-auto scroll-change"
                navbar
                style={{
                  display: "flex",
                  flexDirection: "column",
                  position: "absolute",
                  top: "-5.5rem",
                  left: "0rem",
                  zIndex: "1",
                  backgroundColor: "#244a59",
                 
                  height: "max-content",
                }}
                
              >
                {sidebarItems.map((item, index) => (
                  <div key={index}>
                    <div
                      style={{ border: "10px solid #244a59" }}
                      onMouseLeave={removetoggles}
                    ></div>
                    <NavItem
                      className="sidebar-item p-4"
                      style={{
                        padding: "0",
                        borderTop: "1px solid white",
                        cursor: "pointer",
                      }}
                      onClick={item.toggle}
                      onMouseEnter={item.toggle}
                    >
                      <Link className="sidebar-link">
                        <div className="menu-box">
                          <p style={{ textAlign: "center" }}>
                            <i
                              className="bx bx-tachometer"
                              style={{ color: "white", fontSize: "1.5rem" }}
                            ></i>
                          </p>
                          <h5 style={{ textAlign: "center" }}>
                            <span
                              className="menu-label"
                              style={{ color: "white" }}
                            >
                              {item.label}
                            </span>
                          </h5>
                        </div>
                      </Link>
                    </NavItem>
                  </div>
                ))}
              </Nav>
            </Collapse>
          </Navbar>
        </div>

        {/* Menus */}
        <div className="sidebar">
          <Navbar
            color="light"
            light
            expand="md"
            className="sidebar-navbar"
            style={{
              display:
                isSide === true ||
                isProfile === true ||
                isResume === true ||
                isApplications === true ||
                isAlerts === true ||
                isAccount === true ||
                isJobs === true ||
                isLogout === true
                  ? ""
                  : "none",
            }}
          >
            <Collapse isOpen={isSide} navbar>
              <Col md={20}>
                <div
                  className="mr-auto"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    top: "-5rem",
                    zIndex: "1",
                    backgroundColor: "#3f494c",
                    left: "8.4rem",
                    width: "20rem",
                    height: "78vh",
                    color: "white",
                  }}
                  onMouseLeave={removetoggles}
                >
                  {isSide === true ? (
                    <Container fluid>
                      <p className="fs-15 m-3">Home</p>
                      <hr />
                    </Container>
                  ) : null}
                  {isProfile === true ? (
                    <Container fluid>
                      <p className="fs-15 m-3">Profile</p>
                      <hr />
                    </Container>
                  ) : null}
                  {isResume === true ? (
                    <Container fluid>
                      <p className="fs-15 m-3">Resume/CV</p>
                      <hr />
                    </Container>
                  ) : null}
                  {isApplications === true ? (
                    <Container fluid>
                      <p className="fs-15 m-3">Applications</p>
                      <hr />
                    </Container>
                  ) : null}
                  {isAlerts === true ? (
                    <Container fluid>
                      <p className="fs-15 m-3">Alerts</p>
                      <hr />
                    </Container>
                  ) : null}
                  {isJobs === true ? (
                    <Container fluid>
                      <p className="fs-15 m-3">Jobs</p>
                      <hr />
                    </Container>
                  ) : null}
                  {isAccount === true ? (
                    <Container fluid>
                      <p className="fs-15 m-3">Account Settings</p>
                      <hr />
                    </Container>
                  ) : null}
                  {isLogout === true ? (
                    <Container fluid>
                      <p className="fs-15 m-3">Logout</p>
                      <hr />
                    </Container>
                  ) : null}
                </div>
              </Col>
            </Collapse>
          </Navbar>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
