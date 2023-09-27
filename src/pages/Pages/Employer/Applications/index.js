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
import Approved from "./Approved";
import Rejected from "./Rejected";
import Pending from "./Pending";



const EmployerApplications = () => {
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
           style={{ position: "relative", top: "1rem", marginLeft: '1rem' }}
        >
          <Card style={{ border: "none", boxShadow: "0px 0px 0px white", overflow: 'scroll', height: "90vh" }} className="scroll-change">
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
                    Applications pending approval
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
                  Approved applications
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
                  Rejected applications
                  </NavLink>
                </NavItem>
               
             
              </Nav>

              <TabContent activeTab={justifyTab} className="text-muted">
                <TabPane tabId="1" id="base-justified-home" style={{ height: "700px", position: "relative", overflow: "scroll" }}
              className="scroll-change">
               <Pending />
                </TabPane>

                <TabPane tabId="2" id="product" style={{ height: "700px", position: "relative", overflow: "scroll" }}
              className="scroll-change">
                 <Approved />
                </TabPane>
                <TabPane tabId="3" id="product"  style={{ height: "700px", position: "relative", overflow: "scroll" }}
              className="scroll-change">
                 <Rejected />
                </TabPane>

            

              </TabContent>
            </CardBody>
          </Card>
        </Col>
     
    </>
  );
};

export default EmployerApplications;
