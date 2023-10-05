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

import { useDispatch, useSelector } from "react-redux";
import { viewCv, viewResume } from "../../../../store/actions";

const Resume = () => {
  const [justifyTab, setjustifyTab] = useState("1");
  const justifyToggle = (tab) => {
    if (justifyTab !== tab) {
      setjustifyTab(tab);
    }
  };

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch((viewCv()))
    dispatch((viewResume()))
  }, [dispatch]);

  

  const handleAddCoverLetter = () =>{
    justifyToggle("3")
    if (window.location.pathname === "/job-seeker-add-cover-letter") {
      setjustifyTab("3");
    } 
  }
  const handleEditCoverLetter = () =>{
    justifyToggle("4")
  }
  const handleViewCoverLetter = (data) =>{
    justifyToggle("5")
  }

  const handleCoverLetters = () =>{
    justifyToggle("2")
  }

  

  const [letter, setLetter] = useState("")

  
const handleLetter = (data) =>{
   setLetter(data)
}




  return (
    <>
   
     <Col
           xxl={11}
           // className="m-0"
           md={13}
           sm={20}
           style={{ position: "relative", top: "1rem" }}
        >
    
        <Card style={{ border: "none", boxShadow: "0px 0px 0px white"}}>
          <CardBody>
            <Nav tabs className="nav-tabs nav-justified mb-3">
              <NavItem>
                <Link to="/app/job-seeker-resume" >
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
                <Link to="/app/job-seeker-my-cover-letters" >
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
                <Link to="/app/job-seeker-add-cover-letter" >
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
                <Link to="/app/job-seeker-edit-cover-letter" >
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
                <Link to="/app/job-seeker-view-cover-letter" >
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
              <TabPane tabId="1" id="base-justified-home" 
                 style={{ height: "700px", position: "relative", overflow: "scroll" }}
                 className="scroll-change"
              >
            
                <MyResume />
              </TabPane>

              <TabPane tabId="2" id="product"
               style={{ height: "700px", position: "relative", overflow: "scroll" }}
               className="scroll-change"
              >
                <CoverLetters 
                handleAddCoverLetter={handleAddCoverLetter}
                handleEditCoverLetter={handleEditCoverLetter}
                handleViewCoverLetter={handleViewCoverLetter}
                Letter={handleLetter}
                />
              </TabPane>

              <TabPane tabId="3" id="base-justified-messages"
               style={{ height: "700px", position: "relative", overflow: "scroll" }}
               className="scroll-change"
              >
                <AddCoverLetters  handleCoverLetters={handleCoverLetters}/>
              </TabPane>

              <TabPane tabId="4" id="base-justified-settings"
               style={{ height: "700px", position: "relative", overflow: "scroll" }}
               className="scroll-change"
              >
                <EditCoverLetter data={letter} handleCoverLetters={handleCoverLetters}/>
              </TabPane>

              <TabPane tabId="5" id="base-justified-settings"
               style={{ height: "700px", position: "relative", overflow: "scroll" }}
               className="scroll-change"
              >
                <ViewCoverLetter data={letter}/>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Col>
    
    </>
  );
};

export default Resume;
