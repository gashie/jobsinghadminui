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
  CardHeader,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import classnames from "classnames";
// import img1 from "../../../assets/images/jobsinghana/seatec.png";
import Applications from "../../JobSeeker/Applications";
import Alerts from "../../JobSeeker/Alerts";
import SavedJobs from "../../JobSeeker/SavedJobs";
import JobsSidebar from "../../../../Layouts/JobsSidebar";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import RecentPostings from "./RecentPostings";

const EmployerDashboard = () => {
  const [justifyTab, setjustifyTab] = useState("1");
  const justifyToggle = (tab) => {
    if (justifyTab !== tab) {
      setjustifyTab(tab);
    }
  };

  const [action, setAction] = useState(false);
  const [takeAction, setTakeAction] = useState("");

  const [status, setStatus] = useState(false);
  const [takeStatus, setTakeStatus] = useState("");

  const [modal_list, setmodal_list] = useState(false);
  function tog_list() {
    setmodal_list(!modal_list);

  
  }

  const options = [
    { label: "Edit", color: "black", icon: "bx bx-pencil" },
    { label: "Clone", color: "black", icon: "bx bx-no-entry" },
    { label: "Repost", color: "black", icon: "mdi mdi-trending-up" },
    { label: "Renew Posting", color: "black", icon: "mdi mdi-trending-down" },
  ];

  const takeActions = ["Part Time", "Internship", "Temporary", "Other"];

  const [selectedStatus2, setSelectedStatus2] = useState("Select Status");

  const statuses2 = ["Status A", "Status B", "Status C"];

  const statusOptions = [
    { label: "Open", color: "green", icon: "bx bx-check-circle" },
    { label: "Closed", color: "red", icon: "bx bx-x-circle" },
    { label: "Cancelled", color: "gray", icon: "bx bx-ban" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenStatus, setIsOpenStatus] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [selectedStatus, setSelectedStatus] = useState(statusOptions[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle the dropdown menu's visibility
  };

  const toggleStatus = () => {
    setIsOpenStatus(!isOpenStatus);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option); // Set the selected option in the state
    setIsOpen(false); // Close the dropdown menu when an option is clicked
  };

  const handleStatusClick = (status) => {
    setSelectedStatus(status);
    setIsOpenStatus(false);
  };

  const {loading, error, userInfo} = useSelector((state)=>({
    loading: state.Login.loading, 
    error: state.Login.error, 
    userInfo: state.Login.userInfo
  }))

  


  const [height, setHeight] = useState("");
  const [margin, setMargin] = useState("");

  const updateWindowSize = () => {
    const newWindowSize = document.documentElement.clientWidth;
    if (newWindowSize <= 375) {
      setMargin("-25rem");
    } else if (newWindowSize <= 1200) {
      setMargin("");
    } else if (newWindowSize >= 1200) {
      setMargin("");
    } else if (newWindowSize > 375) {
      setMargin("");
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
    <>
  
        <Col
            xxl={11}
            // className="m-0"
            md={11}
            sm={20}
            style={{ position: "relative", top: "1rem", marginLeft: '1rem',  }}
        >
          <Card
            style={{
              border: "none",
              boxShadow: "0px 0px 0px white",
             
              // overflow: "scroll",
            }}
            className="p-3"
          >
            <CardBody>
              <Nav tabs className="nav-tabs nav-justified mb-3">
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer", width: '10rem', padding: '20px' }}
                    className={classnames({ active: justifyTab === "1" })}
                    onClick={() => {
                      justifyToggle("1");
                    }}
                  >
                    Dashboard
                  </NavLink>
                </NavItem>
              </Nav>

              <TabContent activeTab={justifyTab}
               style={{ height: "700px", position: "relative", overflow: "scroll" }}
               className="scroll-change"
              >
                <TabPane tabId="1" id="base-justified-home">
                  <h5 style={{ fontWeight: "bolder" }} className="mt-4">
                   {
                      loading === false && error === false ? `Welcome, ${userInfo?.userInfo?.fullName}` : ""
                    },
                  </h5>

                  <div className="d-flex mt-5 gap-2">
                    <div>
                      <i
                        className="bx bx-briefcase"
                        style={{
                          fontSize: "2rem",
                          position: "relative",
                          top: "0.6rem",
                          backgroundColor: "#00d084",
                          color: "white",
                          padding: "1rem",
                          borderRadius: "0.2rem",
                        }}
                      ></i>
                    </div>

                    <div style={{ display: "grid" }}>
                      <h5
                        style={{
                          position: "relative",
                          top: "2rem",
                          color: "#244a59",
                          fontWeight: "bolder",
                        }}
                      >
                        Recent Postings
                      </h5>
                      {/* <p style={{ color: "#244a59", fontWeight: "lighter" }}>
                      Based on your current search
                    </p> */}
                    </div>
                  </div>
                          {/* Recent Posting Part */}
                          <RecentPostings />
              

                  {/* <p style={{ textAlign: "center" }} className="mt-5">
                    <Button
                      className="btn btn-light"
                      style={{ border: "1px solid #244a59" }}
                    >
                      View More
                    </Button>
                  </p> */}

                  <div className="d-flex mt-5 gap-2">
                    <div>
                      <i
                        className="bx bx-check-circle"
                        style={{
                          fontSize: "2rem",
                          position: "relative",
                          top: "0.6rem",
                          backgroundColor: "#00d084",
                          color: "white",
                          padding: "1rem",
                          borderRadius: "0.2rem",
                        }}
                      ></i>
                    </div>

                    <div style={{ display: "grid" }}>
                      <h5
                        style={{
                          position: "relative",
                          top: "2rem",
                          color: "#244a59",
                          fontWeight: "bolder",
                        }}
                      >
                        Recent Applications
                      </h5>
                      {/* <p style={{ color: "#244a59", fontWeight: "lighter" }}>
                      Based on your current search
                    </p> */}
                    </div>
                  </div>
                  <Row>
                    <Col lg={12} className="mt-4">
                      <Card>
                        <CardBody>
                          <div id="customerList">
                            <div className="table-responsive table-card mt-3 mb-1">
                              <table
                                className="table align-middle table-nowrap"
                                id="customerTable"
                                style={{ backgroundColor: "#ebeff0" }}
                              >
                                <thead className="table-light">
                                  <tr>
                                    {/* <th scope="col" style={{ width: "50px" }}>
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          id="checkAll"
                                          value="option"
                                        />
                                      </div>
                                    </th> */}
                                    <th>Applicant Name</th>
                                    <th>Position</th>
                                    <th>Date Applied</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody className="list form-check-all">
                                  <tr>
                                    <td className="id">
                                      <Link
                                        to="#"
                                        className="fw-medium link-primary"
                                      >
                                        Kofi Kwame
                                      </Link>
                                    </td>
                                    <td className="customer_name">
                                      Warehouse Clerck
                                    </td>

                                    <td className="startDate">06 Apr, 2021</td>

                                    <td className="expDate">
                                      <select className="form-select mb-3">
                                        <option>
                                          Shortlisted, meets role requirements
                                        </option>
                                        <option>
                                          Not considered, does not meet all role
                                          requirements
                                        </option>
                                      </select>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              {/* <div
                                className="noresult"
                                style={{ display: "none" }}
                              >
                                <div className="text-center">
                                  <lord-icon
                                    src="https://cdn.lordicon.com/msoeawqm.json"
                                    trigger="loop"
                                    colors="primary:#121331,secondary:#08a88a"
                                    style={{ width: "75px", height: "75px" }}
                                  ></lord-icon>
                                  <h5 className="mt-2">
                                    Sorry! No Result Found
                                  </h5>
                                  <p className="text-muted mb-0">
                                    We've searched more than 150+ Orders We did
                                    not find any orders for you search.
                                  </p>
                                </div>
                              </div> */}
                            </div>

                            {/* <div className="d-flex justify-content-end">
                              <div className="pagination-wrap hstack gap-2">
                                <Link
                                  className="page-item pagination-prev disabled"
                                  to="#"
                                >
                                  Previous
                                </Link>
                                <ul className="pagination listjs-pagination mb-0"></ul>
                                <Link
                                  className="page-item pagination-next"
                                  to="#"
                                >
                                  Next
                                </Link>
                              </div>
                            </div> */}
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
     
    </>
  );
};

export default EmployerDashboard;
