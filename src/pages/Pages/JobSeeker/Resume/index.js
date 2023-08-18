import { useState } from "react";
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
import img1 from "../../../../assets/images/jobsinghana/seatec.png";
import Applications from "../Applications";
import Alerts from "../Alerts";
import SavedJobs from "../SavedJobs";
import profile from "../profile.png";
import EditProfile from "../EditProfile";
import ChangePassword from "../ChangePassword";
import MyResume from '../MyResume'
import CoverLetters from "../CoverLetters";
import AddCoverLetters from "../AddCoverLetters";
import EditCoverLetter from "../EditCoverLetter";
import ViewCoverLetter from "../ViewCoverLetter";

const Resume = () => {
  const [justifyTab, setjustifyTab] = useState("1");
  const justifyToggle = (tab) => {
    if (justifyTab !== tab) {
      setjustifyTab(tab);
    }
  };

  const handleAddCoverLetter = () =>{
    justifyToggle("3")
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
      <Col xxl={11} className="m-5 ">
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
                  Resume
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
                   My cover letters
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
                  Add cover letter
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
                  Edit your letter
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ cursor: "pointer" }}
                  className={classnames({ active: justifyTab === "5" })}
                  onClick={() => {
                    justifyToggle("5");
                  }}
                >
                  View cover letter
                </NavLink>
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
    </>
  );
};

export default Resume;
