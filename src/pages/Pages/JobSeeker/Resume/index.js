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
import MyResume from '../MyResume'
import CoverLetters from "../CoverLetters";
import AddCoverLetters from "../AddCoverLetters";
import EditCoverLetter from "../EditCoverLetter";
import ViewCoverLetter from "../ViewCoverLetter";
import {Link} from 'react-router-dom'

const Resume = () => {
  const [justifyTab, setjustifyTab] = useState("1");
  const justifyToggle = (tab) => {
    if (justifyTab !== tab) {
      setjustifyTab(tab);
    }
  };

  useEffect(() => {
    // if (window.location.pathname === "/job-seeker-my-cover-letters") {
    //   setjustifyTab("2");
    // } else if (window.location.pathname === "/job-seeker-add-cover-letter") {
    //   setjustifyTab("3");
    // } else if (window.location.pathname === "/job-seeker-edit-cover-letter") {
    //   setjustifyTab("4");
    // } else if (window.location.pathname === "/job-seeker-view-cover-letter") {
    //   setjustifyTab("5");
    // } else setjustifyTab("1");
  });

  const handleAddCoverLetter = () =>{
    justifyToggle("3")
    if (window.location.pathname === "/job-seeker-add-cover-letter") {
      setjustifyTab("3");
    } 
  }
  const handleEditCoverLetter = () =>{
    justifyToggle("4")
  }
  const handleViewCoverLetter = () =>{
    justifyToggle("5")
  }

  const [edit, setEdit] = useState(false)
  return (
    <>
      <Row style={{ height: "120vh" }}>
     <Col
          xxl={11}
          className="m-0"
          md={10}
          xs={15}
          style={{ position: "relative", top: "-3rem" }}
        >
    
        <Card style={{ border: "none", boxShadow: "0px 0px 0px white"}}>
          <CardBody>
            <Nav tabs className="nav-tabs nav-justified mb-3">
              <NavItem>
                <Link to="/job-seeker-resume" >
                <NavLink
                  style={{ cursor: "pointer", color: "black" }}
                  className={classnames({ active: justifyTab === "1" })}
                  onClick={() => {
                    justifyToggle("1");
                  }}
                >
                  Resume
                </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/job-seeker-my-cover-letters" >
                <NavLink
                  style={{ cursor: "pointer", color: "black" }}
                  className={classnames({ active: justifyTab === "2" })}
                  onClick={() => {
                    justifyToggle("2");
                  }}
                >
                   My cover letters
                </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/job-seeker-add-cover-letter" >
                <NavLink
                  style={{ cursor: "pointer", color: "black" }}
                  className={classnames({ active: justifyTab === "3" })}
                  onClick={() => {
                    justifyToggle("3");
                  }}
                >
                  Add cover letter
                </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/job-seeker-edit-cover-letter" >
                <NavLink
                  style={{ cursor: "pointer", color: "black" }}
                  className={classnames({ active: justifyTab === "4" })}
                  onClick={() => {
                    justifyToggle("4");
                  }}
                >
                  Edit your letter
                </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/job-seeker-view-cover-letter" >
                <NavLink
                  style={{ cursor: "pointer", color: "black" }}
                  className={classnames({ active: justifyTab === "5" })}
                  onClick={() => {
                    justifyToggle("5");
                  }}
                >
                  View cover letter
                </NavLink>
                </Link>
              </NavItem>
             
            </Nav>

            <TabContent activeTab={justifyTab} className="text-muted">
              <TabPane tabId="1" id="base-justified-home">
            
                <MyResume />
              </TabPane>

              <TabPane tabId="2" id="product">
                <CoverLetters 
                handleAddCoverLetter={handleAddCoverLetter}
                handleEditCoverLetter={handleEditCoverLetter}
                handleViewCoverLetter={handleViewCoverLetter}
                />
              </TabPane>

              <TabPane tabId="3" id="base-justified-messages">
                <AddCoverLetters />
              </TabPane>

              <TabPane tabId="4" id="base-justified-settings">
                <EditCoverLetter />
              </TabPane>

              <TabPane tabId="5" id="base-justified-settings">
                <ViewCoverLetter />
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Col>
      </Row>
    </>
  );
};

export default Resume;
