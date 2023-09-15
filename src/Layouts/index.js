import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import withRouter from "../Components/Common/withRouter";
import { Container, Row, Col } from 'reactstrap'

//import Components
//import Header from "./Header";

import Sidebar from "./Sidebar";
//import Footer from "./Footer";
import RightSidebar from "../Components/Common/RightSidebar";

import Navbar from "../pages/Pages/JobSeeker/navbar";
import Footer from "../pages/Pages/JobSeeker/footer";
import JobsSidebar from "./JobsSidebar";

//import actions
import {
  changeLayout,
  changeSidebarTheme,
  changeLayoutMode,
  changeLayoutWidth,
  changeLayoutPosition,
  changeTopbarTheme,
  changeLeftsidebarSizeType,
  changeLeftsidebarViewType,
  changeSidebarImageType,
  changeSidebarVisibility,
} from "../store/actions";

//redux
import { useSelector, useDispatch } from "react-redux";
import EmployerSidebar from "./EmployerSidebar";

const Layout = (props) => {
  const [headerClass, setHeaderClass] = useState("");
  const dispatch = useDispatch();
  const {
    layoutType,
    leftSidebarType,
    layoutModeType,
    layoutWidthType,
    layoutPositionType,
    topbarThemeType,
    leftsidbarSizeType,
    leftSidebarViewType,
    leftSidebarImageType,
    sidebarVisibilitytype,
  } = useSelector((state) => ({
    layoutType: state.Layout.layoutType,
    leftSidebarType: state.Layout.leftSidebarType,
    layoutModeType: state.Layout.layoutModeType,
    layoutWidthType: state.Layout.layoutWidthType,
    layoutPositionType: state.Layout.layoutPositionType,
    topbarThemeType: state.Layout.topbarThemeType,
    leftsidbarSizeType: state.Layout.leftsidbarSizeType,
    leftSidebarViewType: state.Layout.leftSidebarViewType,
    leftSidebarImageType: state.Layout.leftSidebarImageType,
    sidebarVisibilitytype: state.Layout.sidebarVisibilitytype,
  }));

  /*
    layout settings
    */
  useEffect(() => {
    if (
      layoutType ||
      leftSidebarType ||
      layoutModeType ||
      layoutWidthType ||
      layoutPositionType ||
      topbarThemeType ||
      leftsidbarSizeType ||
      leftSidebarViewType ||
      leftSidebarImageType ||
      sidebarVisibilitytype
    ) {
      window.dispatchEvent(new Event("resize"));
      dispatch(changeLeftsidebarViewType(leftSidebarViewType));
      dispatch(changeLeftsidebarSizeType(leftsidbarSizeType));
      dispatch(changeSidebarTheme(leftSidebarType));
      dispatch(changeLayoutMode(layoutModeType));
      dispatch(changeLayoutWidth(layoutWidthType));
      dispatch(changeLayoutPosition(layoutPositionType));
      dispatch(changeTopbarTheme(topbarThemeType));
      dispatch(changeLayout(layoutType));
      dispatch(changeSidebarImageType(leftSidebarImageType));
      dispatch(changeSidebarVisibility(sidebarVisibilitytype));
    }
  }, [
    layoutType,
    leftSidebarType,
    layoutModeType,
    layoutWidthType,
    layoutPositionType,
    topbarThemeType,
    leftsidbarSizeType,
    leftSidebarViewType,
    leftSidebarImageType,
    sidebarVisibilitytype,
    dispatch,
  ]);

  // useEffect(() => {
  //   if (
  //     sidebarVisibilitytype === "show" ||
  //     layoutType === "vertical" ||
  //     layoutType === "twocolumn"
  //   ) {
  //     document.querySelector(".hamburger-icon").classList.remove("open");
  //   } else {
  //     document.querySelector(".hamburger-icon").classList.add("open");
  //   }
  // }, [sidebarVisibilitytype, layoutType]);

  // /*
  //   call dark/light mode
  //   */
  // const onChangeLayoutMode = (value) => {
  //   if (changeLayoutMode) {
  //     dispatch(changeLayoutMode(value));
  //   }
  // };

  // class add remove in header
  // useEffect(() => {
  //   window.addEventListener("scroll", scrollNavigation, true);
  // });
  // function scrollNavigation() {
  //   var scrollup = document.documentElement.scrollTop;
  //   if (scrollup > 50) {
  //     setHeaderClass("topbar-shadow");
  //   } else {
  //     setHeaderClass("");
  //   }
  // }

  return (
    <React.Fragment>
      <Navbar />
      <div id="layout-wrapper">
        <Row>
          <Row>
            {window.location.pathname === "/employer-dashboard" ||
             window.location.pathname === "/employer-profile" ||
             window.location.pathname === "/employer-jobs" ||
             window.location.pathname === "/employer-applications" ||
             window.location.pathname === "/employer-courses" ||
             window.location.pathname === "/employer-transactions" ? (
               <Col md="2">
                 <EmployerSidebar />
               </Col>
             ) : (
               <Col md="2">
                 <JobsSidebar />
               </Col>
             )}
            <Col md="10">
              {props.children}
            </Col>
          </Row>
        </Row>
      </div>
      <Footer />
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.object,
};

export default withRouter(Layout);
