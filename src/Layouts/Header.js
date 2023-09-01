import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  Form,
  NavLink,
  NavbarToggler,
  Row,
  Container,
  Collapse,
  Input,
  DropdownItem
} from "reactstrap";
import Scrollspy from "react-scrollspy";

//import images
import logoSm from "../assets/images/logo-sm.png";
import logoDark from "../assets/images/logo-dark.png";
import logoLight from "../assets/images/logo-light.png";

//import Components
import SearchOption from "../Components/Common/SearchOption";
import LanguageDropdown from "../Components/Common/LanguageDropdown";
import WebAppsDropdown from "../Components/Common/WebAppsDropdown";
import MyCartDropdown from "../Components/Common/MyCartDropdown";
import FullScreenDropdown from "../Components/Common/FullScreenDropdown";
import NotificationDropdown from "../Components/Common/NotificationDropdown";
import ProfileDropdown from "../Components/Common/ProfileDropdown";
import LightDark from "../Components/Common/LightDark";

import { changeSidebarVisibility } from "../store/actions";
import { useSelector, useDispatch } from "react-redux";

const Header = ({ onChangeLayoutMode, layoutModeType, headerClass }) => {
  const [search, setSearch] = useState(false);
  const toogleSearch = () => {
    setSearch(!search);
  };

  const dispatch = useDispatch();
  const { sidebarVisibilitytype } = useSelector((state) => ({
    sidebarVisibilitytype: state.Layout.sidebarVisibilitytype,
  }));

  const [isOpenMenu, setisOpenMenu] = useState(false);
  const [navClass, setnavClass] = useState("");

  const toggle = () => setisOpenMenu(!isOpenMenu);

  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true);
  });

  function scrollNavigation() {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > 50) {
      setnavClass("is-sticky");
    } else {
      setnavClass("is-sticky");
    }
  }

  const toogleMenuBtn = () => {
    var windowSize = document.documentElement.clientWidth;
    dispatch(changeSidebarVisibility("show"));
    if (windowSize > 767)
      document.querySelector(".hamburger-icon").classList.toggle("open");
    //For collapse horizontal menu
    if (document.documentElement.getAttribute("data-layout") === "horizontal") {
      document.body.classList.contains("menu")
        ? document.body.classList.remove("menu")
        : document.body.classList.add("menu");
    }
    //For collapse vertical and semibox menu
    if (
      sidebarVisibilitytype === "show" &&
      (document.documentElement.getAttribute("data-layout") === "vertical" ||
        document.documentElement.getAttribute("data-layout") === "semibox")
    ) {
      if (windowSize < 1025 && windowSize > 767) {
        document.body.classList.remove("vertical-sidebar-enable");
        document.documentElement.getAttribute("data-sidebar-size") === "sm"
          ? document.documentElement.setAttribute("data-sidebar-size", "")
          : document.documentElement.setAttribute("data-sidebar-size", "sm");
      } else if (windowSize > 1025) {
        document.body.classList.remove("vertical-sidebar-enable");
        document.documentElement.getAttribute("data-sidebar-size") === "lg"
          ? document.documentElement.setAttribute("data-sidebar-size", "sm")
          : document.documentElement.setAttribute("data-sidebar-size", "lg");
      } else if (windowSize <= 767) {
        document.body.classList.add("vertical-sidebar-enable");
        document.documentElement.setAttribute("data-sidebar-size", "lg");
      }
    }
    //Two column menu
    if (document.documentElement.getAttribute("data-layout") === "twocolumn") {
      document.body.classList.contains("twocolumn-panel")
        ? document.body.classList.remove("twocolumn-panel")
        : document.body.classList.add("twocolumn-panel");
    }

    
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
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
            borderLeft: "0px",
            borderWidth: "2px",
            position: "relative",
            zIndex: "1",
            width: "100%",
          }}
        >
          <Container>
            <button
              onClick={toogleMenuBtn}
              type="button"
              className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger shadow-none"
              id="topnav-hamburger-icon"
              style={{ display: "none" }}
            >
              <span className="hamburger-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>

            <div></div>

            <Link className="navbar-brand" to="/index">
              <h2
                style={{
                  fontFamily: "impact",
                  color: "#244A59",
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

            <Collapse
              isOpen={isOpenMenu}
              className="navbar-collapse"
              id="navbarSupportedContent"
            >
              <Scrollspy
                offset={-18}
                items={[
                  "hero",
                  "services",
                  "features",
                  "plans",
                  "reviews",
                  "team",
                  "contact",
                ]}
                currentClassName="active"
                className="navbar-nav mx-auto mt-2 mt-lg-0"
                id="navbar-example"
              >
                <li className="nav-item">
                  <NavLink className="fs-14" href="/home">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="fs-14" href="/job-list">
                    Jobs
                  </NavLink>
                </li>
                <li className="nav-item">
                  <Dropdown nav isOpen={dropdownOpen} toggle={toggleDropdown}>
                    <DropdownToggle nav caret className="fs-14">
                      Career Resources
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem href="/career-advice">
                        Career Advice
                      </DropdownItem>
                      <DropdownItem href="/latest-news">HR News</DropdownItem>
                      <DropdownItem href="/training-events">
                        TrainingEvents
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </li>
                <li className="nav-item">
                  <NavLink className="fs-14" href="/services">
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="fs-14" href="/job-seeker-dashboard">
                    Jobseekers
                  </NavLink>
                </li>
                <li className="nav-item" style={{ marginTop: "0.5rem" }}>
                  <Link
                    className="fs-12 btn btn-success"
                    to="/employer-dashboard"
                  >
                    Employers
                  </Link>
                </li>
              </Scrollspy>
            </Collapse>
          </Container>
        </nav>

        {/* Search */}
        <div className="">
          <div className="card crm-widget">
            <div className="card-body p-0">
              <div
                className="row row-cols-xxl-5 row-cols-md-3 row-cols-1 g-0 p-4 "
                style={{
                  backgroundColor: "#244A59",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  className="col-auto"
                  style={{
                    backgroundColor: "white",
                    padding: "2rem",
                    borderRadius: "0.7rem",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "1rem",
                    width: "100rem",
                    alignContent: "center",
                  }}
                >
                  <div className="col-md-10">
                    <Input
                      type="text"
                      className="form-control form-control-lg bg-light border-light"
                      placeholder="Search for jobs of companies"
                    />
                  </div>
                  <div className="col-md-2">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg waves-effect waves-light"
                      style={{
                        backgroundColor: "#244A59",
                        fontSize: "0.8rem",
                      
                      }}
                    >
                      {" "}
                      Find a Job
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </React.Fragment>
  );
};

export default Header;
