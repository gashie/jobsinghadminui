import React, { useState, useEffect } from "react";
import { Collapse, Container, NavbarToggler, NavLink , Row} from "reactstrap";
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

    return (
        <React.Fragment>
            <Row>
            <nav className={"navbar navbar-expand-lg navbar-landing fixed-top " + "is-sticky"} id="navbar" style={{borderStyle: 'solid', borderTop: '0px', borderColor: '#244A59'}}>
                <Container>
                    <Link className="navbar-brand" to="/index">
                        <h2
                        style={{
                            fontFamily: 'impact',
                    color: "#244A59"
                        }}
                        >JobsinGhana</h2>
                    </Link>

                    <NavbarToggler className="navbar-toggler py-0 fs-20 text-body" onClick={toggle} type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
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
                                <NavLink className="fs-14" href="#hero">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="fs-14" href="#services">Jobs</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="fs-14" href="#features">Carrer Resources</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="fs-14" href="#plans">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="fs-14" href="#plans">Jobseekers</NavLink>
                            </li>
                            <li className="nav-item" style={{marginTop: '0.5rem'}}>
                                <Link className="fs-12 btn btn-success" >Employers</Link>
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