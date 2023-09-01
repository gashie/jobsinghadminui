import React, { useState, useEffect } from "react";
import { Collapse, Container, NavbarToggler, NavLink, Row, Dropdown, DropdownToggle, DropdownItem, DropdownMenu } from "reactstrap";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";

// Import Images
import logodark from "../../../assets/images/logo-dark.png";
import logolight from "../../../assets/images/logo-light.png";

const Navbar = () => {
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

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };


  const [space, setSpace] = useState("")
  const [spaceLeft, setSpaceLeft] = useState("")
  const [relative, setRelative] = useState("")

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


    if (newWindowSize <= 1100 ) {
       setRelative('')
    } else if (newWindowSize <= 1200) {
      setRelative('absolute')
    } else if (newWindowSize >= 1200) {
      setRelative('absolute')
    } else if (newWindowSize > 375) {
      setRelative('')
    }

   


    if (newWindowSize <= 375) {
      setSpaceLeft("0rem");
    } else if (newWindowSize <= 1200) {
      setSpaceLeft("2rem");
    } else if (newWindowSize >= 1200) {
      setSpaceLeft("-14rem");
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
            borderRight: '0px',
            width: '100%'
          }}
        >
          <Container >
            <Link className="navbar-brand" to="/home">
              <h2
                style={{
                  fontFamily: "impact",
                  color: "#244A59",
                 position:'relative', 
                 left: spaceLeft
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
              style={{left: space, position: relative}}
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
                      <DropdownItem href="/career-advice">Career Advice</DropdownItem>
                      <DropdownItem href="/latest-news">HR News</DropdownItem>
                      <DropdownItem href="/training-events">TrainingEvents</DropdownItem>
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

              {/* <div className="">
                            <Link to="/login" className="btn btn-link fw-medium text-decoration-none text-dark">
                                JobSeekers</Link>
                            <Link to="/register" className="btn btn-primary">Employers</Link>
                        </div> */}
            </Collapse>
          </Container>
        </nav>
      </Row>
    </React.Fragment>
  );
};

export default Navbar;
