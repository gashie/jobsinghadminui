import React, { useEffect, useState } from "react";
import {
  Collapse,
  Container,
  NavbarToggler,
  NavLink as TabLink,
  Row,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Input,
  Button,
  NavLink,
} from "reactstrap";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Import Images
import logodark from "../../../assets/images/logo-dark.png";
import logolight from "../../../assets/images/logo-light.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../store/actions";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [navClass, setNavClass] = useState("");

  const toggle = () => setIsOpenMenu(!isOpenMenu);

  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true);
  });

  const isLoggedIn = useSelector((state) => state.Login.isloggedIn);
  const userInfo = useSelector((state) => state.Login.userInfo);

  function scrollNavigation() {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > 50) {
      setNavClass("is-sticky");
    } else {
      setNavClass("is-sticky");
    }
  }

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const [space, setSpace] = useState("");
  const [spaceLeft, setSpaceLeft] = useState("");
  const [relative, setRelative] = useState("");

  const updateWindowSize = () => {
    const newWindowSize = document.documentElement.clientWidth;
    if (newWindowSize <= 375) {
      setSpace("0rem");
    } else if (newWindowSize <= 1200) {
      setSpace("25rem");
    } else if (newWindowSize >= 1200) {
      setSpace("75rem");
    } else if (newWindowSize > 375) {
      setSpace("0rem");
    }

    if (newWindowSize <= 1100) {
      setRelative("");
    } else if (newWindowSize <= 1200) {
      setRelative("absolute");
    } else if (newWindowSize >= 1200) {
      setRelative("absolute");
    } else if (newWindowSize > 375) {
      setRelative("");
    }

    if (newWindowSize <= 375) {
      setSpaceLeft("0rem");
    } else if (newWindowSize <= 1200) {
      setSpaceLeft("5rem");
    } else if (newWindowSize >= 1200) {
      setSpaceLeft("0rem");
    } else if (newWindowSize > 375) {
      setSpaceLeft("0rem");
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

  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Row>
        <nav
          className={
            "navbar navbar-expand-lg navbar-landing fixed-top " + "is-sticky"
          }
          id="navbar"
          style={{
            borderStyle: "solid",
            borderTop: "0px",
            borderColor: "#244A59",
            borderRight: "0px",
            width: "100%",

            zIndex: "999",
          }}
        >
          <Container fluid className="htsack justify-content-center col-xl-10">
            <div className="d-flex justify-content-between align-items-center w-100">
              <Link className="navbar-brand" to="/home">
                <h2
                  style={{
                    fontFamily: "impact",
                    color: "#244A59",
                    position: "relative",
                    left: spaceLeft,
                  }}
                >
                  JobsinGhana
                </h2>
              </Link>

              <NavbarToggler
                className="navbar-toggler py-0 fs-20 text-body"
                onClick={toggle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="mdi mdi-menu"></i>
              </NavbarToggler>
            </div>

            <Collapse
              className="navbar-collapse"
              id="navbarSupportedContent"
              isOpen={isOpenMenu}
              // style={{
              //   // left: space,
              //   position: "relative",
              // }}
            >
              <Scrollspy
                offset={-18}
                items={[
                  "hero",
                  "process",
                  "categories",
                  "findJob",
                  "candidates",
                  "blog",
                ]}
                currentClassName="active"
                className="navbar-nav ml-auto"
                id="navbar-example"
              >
                <li className="nav-item">
                  <NavLink
                    className="fs-14"
                    onClick={() => navigate("/home")}
                    style={{ cursor: "pointer" }}
                    // style={{
                    // backgroundColor: window.location.pathname === "/home" ? '#244a59': "",
                    // color: window.location.pathname === "/home" && "white",
                    // padding:window.location.pathname === "/home" && '0.2rem'}}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="fs-14"
                    onClick={() => navigate("/job-list")}
                    style={{ cursor: "pointer" }}
                  >
                    Jobs
                  </NavLink>
                </li>
                <li className="nav-item">
                  <Dropdown nav isOpen={dropdownOpen} toggle={toggleDropdown}>
                    <DropdownToggle
                      nav
                      caret
                      className="fs-14"
                      style={{ cursor: "pointer" }}
                    >
                      Career Resources
                    </DropdownToggle>
                    <DropdownMenu
                      style={{ position: "absolute", zIndex: "999" }}
                    >
                      <DropdownItem
                        onClick={() => navigate("/career-advice")}
                        style={{ cursor: "pointer" }}
                      >
                        Career Advice
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => navigate("/latest-news")}
                        style={{ cursor: "pointer" }}
                      >
                        HR News
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => navigate("/training-events")}
                        style={{ cursor: "pointer" }}
                      >
                        TrainingEvents
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="fs-14"
                    onClick={() => navigate("/services")}
                    style={{ cursor: "pointer" }}
                  >
                    Services
                  </NavLink>
                </li>

                {isLoggedIn && userInfo?.userInfo?.roleid === 2 && (
                  <>
                    <li
                      className="nav-item mx-1"
                      onClick={() => navigate("/app/job-seeker-dashboard")}
                      style={{ marginTop: "0.5rem", cursor: "pointer" }}
                    >
                      <Link
                        className="fs-12 btn btn-success"
                        style={{ cursor: "pointer" }}
                      >
                        Jobseekers
                      </Link>
                    </li>
                  </>
                )}
                {isLoggedIn && userInfo?.userInfo?.roleid === 3 && (
                  <>
                    <li
                      className="nav-item"
                      style={{ marginTop: "0.5rem", cursor: "pointer" }}
                    >
                      <Link
                        className="fs-12 btn btn-success"
                        to="/app/employer-dashboard"
                      >
                        Employers
                      </Link>
                    </li>
                  </>
                )}

                {isLoggedIn && (
                  <>
                    <li
                      className="nav-item"
                      style={{ marginTop: "0.5rem", cursor: "pointer" }}
                    >
                      <Link
                        className="fs-12 btn btn-dark"
                        to="/login"
                        style={{ backgroundColor: "#244a59" }}
                        onClick={()=>{
                          dispatch(logout())
                        }}
                      >
                        Logout
                      </Link>
                    </li>
                  </>
                )}

                {!isLoggedIn && (
                  <>
                    <li
                      className="nav-item"
                      onClick={() => navigate("/app/job-seeker-dashboard")}
                    >
                      <NavLink className="fs-14" style={{ cursor: "pointer" }}>
                        Jobseekers
                      </NavLink>
                    </li>

                    <li
                      className="nav-item"
                      style={{ marginTop: "0.5rem", cursor: "pointer" }}
                    >
                      <Link
                        className="fs-12 btn btn-success"
                        to="/app/employer-dashboard"
                      >
                        Employers
                      </Link>
                    </li>
                  </>
                )}
              </Scrollspy>
            </Collapse>
          </Container>
        </nav>
      </Row>

      {/* <div className="d-flex justify-content-end px-4">
        <Link
          to="/auth-signin-basic"
          className="btn btn-soft-primary me-2"
        >
          <i className="ri-user-3-line align-bottom me-1"></i> Login & Register
        </Link>
        <Link to="/employer-dashboard" className="btn btn-success">
          Employers
        </Link>
      </div> */}
    </React.Fragment>
  );
};

export default Navbar;
