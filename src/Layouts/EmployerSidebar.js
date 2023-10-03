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
import { useDispatch } from "react-redux";
import { logout } from "../store/actions";

const EmployerSidebar = () => {
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

  const dispatch = useDispatch()


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
    dispatch(logout())
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
      // window.location.href = "/login"
    }
  };


  

  const sidebarItems = [
    {
      icon: "bx bx-home",
      label: "Home",
      link: "/employer-dashboard",
      toggle: toggleLink,
    },
    {
      icon: "bx bx-user",
      label: "Profile",
      link: "/employer-profile",
    //   link1: "/job-seeker-edit-profile",
    //   link2: "/job-seeker-change-password",
      toggle: toggleProfile,
    },
    {
      icon: "bx bx-briefcase",
      label: "Jobs",
      link: "/employer-jobs",
    //   link1: "/job-seeker-my-cover-letters",
    //   link2: "/job-seeker-add-cover-letter",
    //   link3: "/job-seeker-edit-cover-letter",
    //   link4: "/job-seeker-view-cover-letter",
      toggle: toggleResume,
    },
    {
      icon: "ri-checkbox-circle-line",
      label: "Applications",
      link: "/employer-applications",
      toggle: toggleApplications,
    },
    {
      icon: "las la-graduation-cap",
      label: "Courses",
      link: "/employer-courses",
      toggle: toggleAlerts,
    },
    {
      icon: "ri-file-text-line",
      label: "Transactions",
      link: "/employer-transactions",
      toggle: toggleJobs,
    },
    // {
    //   icon: "ri-settings-5-line",
    //   label: "Logout",
    //   link: "/settings",
    //   toggle: toggleAccount,
    // },
    { icon: "bx bx-left-arrow-circle", label: "Logout", link: "/settings", toggle: toggleLogout },
  ];

  return (
    <>
      <div style={{ marginTop: "4rem", height: "" }}>
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
                top: "-7.2rem",
                zIndex: "9999",
                boxShadow: "none",
                // backgroundColor: "#e0e0e0",
                textAlign: "right",
                right: "-3rem",
                color: "white",
                border: "none",
              }}
            >
              <i className= {isOpen ? `bx bx-menu-alt-left` : `bx bx-menu`}></i>
            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar>
              <Nav
                className="mr-auto scroll-change"
                navbar
                style={{
                  display: "flex",
                  flexDirection: "column",
                  position: "absolute",
                  top: "-4.0rem",
                  left: "0rem",
                  zIndex: "1",
                  backgroundColor: "#244a59",

                  height: "max-content",
                }}
              >
                {sidebarItems.map((item, index) => (
                  <div key={index}>
                    <div
                      style={{
                        backgroundColor:
                        window.location.pathname === item.link ||
                        window.location.pathname === item?.link1 ||
                        window.location.pathname === item?.link2 ||
                        window.location.pathname === item?.link3 ||
                        window.location.pathname === item?.link4
                        ? "#3f494c"
                        : "",
                      height: "23px",
                      width: "100%",
                      borderTop: "1px solid white",
                      cursor: "pointer",
                      }}
                      onMouseLeave={removetoggles}
                    ></div>
                    <NavItem
                      className="sidebar-item p-3"
                      style={{
                        padding: "0",
                        // borderBottom: "1px solid white",
                        cursor: "pointer",
                        backgroundColor:
                          window.location.pathname === item.link ||
                          window.location.pathname === item?.link1 ||
                          window.location.pathname === item?.link2 ||
                          window.location.pathname === item?.link3 ||
                          window.location.pathname === item?.link4
                            ? "#3f494c"
                            : "",
                      }}
                      onClick={item.toggle}
                      onMouseEnter={item.toggle}
                    >
                      <Link className="sidebar-link" to={item.link}>
                        <div className="menu-box">
                          <p style={{ textAlign: "center" }}>
                            <i
                              className={item.icon}
                              style={{ color: "white", fontSize: "1rem" }}
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
                    top: "-4.9rem",
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
                      <p className="fs-15 m-3 fw-bolder">Home</p>
                      <hr />
                      {/* <Link to="/job-seeker-dashboard" style={{pointer: 'cursor'}}>
                      <p className="fs-12 text-light">Dashboard</p>
                      </Link> */}
                    </Container>
                  ) : null}
                  {isProfile === true ? (
                    <Container fluid>
                      <p className="fs-15 m-3 fw-bolder">Profile</p>
                      <hr />
                      {/* <Link to="/job-seeker-edit-profile" style={{pointer: 'cursor'}}>
                      <p className="fs-12 text-light">Edit profile</p>
                      </Link>
                      <Link to="/job-seeker-change-password" style={{pointer: 'cursor'}}>
                      <p className="fs-12 text-light">Change password</p>
                      </Link> */}
                    </Container>
                  ) : null}
                  {isResume === true ? (
                    <Container fluid>
                      <p className="fs-15 m-3">Jobs</p>
                      <hr />
                       {/* <Link to="/job-seeker-resume" style={{pointer: 'cursor'}}>
                      <p className="fs-12 text-light"></p>
                      </Link>
                      <Link to="/job-seeker-my-cover-letters" style={{pointer: 'cursor'}}>
                      <p className="fs-12 text-light"></p>
                      </Link> */}
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
                      <p className="fs-15 m-3">Courses</p>
                      <hr />
                    </Container>
                  ) : null}
                  {isJobs === true ? (
                    <Container fluid>
                      <p className="fs-15 m-3">Transactions</p>
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

export default EmployerSidebar;
