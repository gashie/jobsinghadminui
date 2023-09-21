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
// import img1 from './img1.png'
import PostJob from "./PostJob";
import ApplicantTracking from "./ApplicantTracking";
import { Link } from "react-router-dom";

const EmployerJobs = () => {
  const [justifyTab, setjustifyTab] = useState("1");
  const justifyToggle = (tab) => {
    if (justifyTab !== tab) {
      setjustifyTab(tab);
    }
  };

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
            height: "90vh",
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
                  Post a job
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
                  Applicant tracking
                </NavLink>
              </NavItem>
            </Nav>

            <TabContent activeTab={justifyTab} className="text-muted">
              <TabPane
                tabId="1"
                id="base-justified-home"
                style={{
                  height: "600px",
                  position: "relative",
                  overflow: "scroll",
                }}
                className="scroll-change"
              >
                <PostJob />
              </TabPane>

              <TabPane
                tabId="2"
                id="product"
                style={{
                  height: "700px",
                  position: "relative",
                  overflow: "scroll",
                }}
                className="scroll-change"
              >
                <ApplicantTracking />
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default EmployerJobs;
