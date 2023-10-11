import { useEffect, useState } from "react";
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

  const [left, setLeft] = useState("");
  const [display, setDisplay] = useState("")
  const [top, setTop] = useState("");
  const [createLeft, setCreateLeft] = useState("");
  const [checkTop, setCheckTop] = useState("");
  const [lineLeft, setLineLeft] = useState("")
  const [gap, setGap] = useState("")
  const [width, setWidth] = useState("")
  const updateWindowSize = () => {
    const newWindowSize = window.innerWidth;

    if (newWindowSize <= 576) {
      // for sm screens
      setLeft("0.7rem");
      setDisplay('none')
      setGap("2rem")
      // setTop("10rem");
      // setCreateLeft("");
      // setCheckTop("10rem");
    } else if (newWindowSize <= 992) {
      // for md screens
      setLeft("0vh");
      setDisplay('block')
      setGap("2rem")
      setWidth("100%")
      // setTop("10rem");
      // setCreateLeft("");
      // setCheckTop("");
    } else {
      // for xl screens
      setLeft("-4rem");
      setDisplay('block')
      setGap("3rem")
      setWidth("96%")
      // setTop("-7rem");
      // setCreateLeft("20rem");
      // setCreateLeft("20rem");
      // setCheckTop("-2rem");
    }
  };

  useEffect(() => {
    updateWindowSize(); // Call on initial component mount
    window.addEventListener("resize", updateWindowSize); // Add listener for window resize
    return () => {
      window.removeEventListener("resize", updateWindowSize); // Clean up the listener on component unmount
    };
  }, []);

  return (
    <>
     
     <Col
           xxl={11}
           // className="m-0"
           md={11}
           sm={20}
           style={{ position: "relative", top: "1rem", marginLeft: left, width: width }}
        >
          <Card style={{ border: "none", boxShadow: "0px 0px 0px white", overflow: 'scroll' }} className="scroll-change">
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
                <TabPane tabId="1" id="base-justified-home" style={{ height: "690px", position: "relative", overflow: "scroll" }}
              className="scroll-change">
               <Pending />
                </TabPane>

                <TabPane tabId="2" id="product" style={{ height: "690px", position: "relative", overflow: "scroll" }}
              className="scroll-change">
                 <Approved />
                </TabPane>
                <TabPane tabId="3" id="product"  style={{ height: "690px", position: "relative", overflow: "scroll" }}
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
