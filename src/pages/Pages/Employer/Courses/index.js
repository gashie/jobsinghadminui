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

import { Link } from "react-router-dom";
import Courses from "./Courses";
import PostCourse from "./PostCourse";

const EmployerCourses = () => {
  const [justifyTab, setjustifyTab] = useState("1");
  const justifyToggle = (tab) => {
    if (justifyTab !== tab) {
      setjustifyTab(tab);
    }
  };

  const handleCourse = () =>{
    justifyToggle("2")
  }

  const handleBack = () =>{
    justifyToggle("1")
  }

  const [edit, setEdit] = useState(false);
  return (
    <>
   
   <Col
        xxl={11}
        // className="m-0"
        md={11}
        sm={20}
        style={{ position: "relative", top: "1rem", marginLeft: "1rem" }}
      >
          <Card
            style={{
              border: "none",
              boxShadow: "0px 0px 0px white",
              overflow: "scroll",
            
            }}
            className="scroll-change"
          >
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
                    Courses
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
                    Post a course
                  </NavLink>
                </NavItem>
              </Nav>

              <TabContent activeTab={justifyTab} className="text-muted">
                <TabPane tabId="1" id="base-justified-home"   style={{ height: "800px", position: "relative", overflow: "scroll" }}
               className="scroll-change">
                  <Courses handleCourse={handleCourse}/>
                </TabPane>

                <TabPane tabId="2" id="product"   style={{ height: "800px", position: "relative", overflow: "scroll" }}
               className="scroll-change">
                  <PostCourse handleBack={handleBack}/>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
     
    </>
  );
};

export default EmployerCourses;
