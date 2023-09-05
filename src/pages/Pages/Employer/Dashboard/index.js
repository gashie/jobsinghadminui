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
      <Row style={{ height: "120vh" }}>
        <Col
          xxl={11}
          className="m-0"
          md={10}
          xs={15}
          style={{ position: "relative", top: "-3rem" }}
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
                    style={{ cursor: "pointer" }}
                    className={classnames({ active: justifyTab === "1" })}
                    onClick={() => {
                      justifyToggle("1");
                    }}
                  >
                    Dashboard
                  </NavLink>
                </NavItem>
              </Nav>

              <TabContent activeTab={justifyTab} className="text-muted">
                <TabPane tabId="1" id="base-justified-home">
                  <h5 style={{ fontWeight: "bolder" }} className="mt-4">
                    Welcome John,
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

                  <Row>
                    <Col lg={12} className="mt-4">
                      <Card>
                        <CardBody>
                          <div id="customerList">
                            <div className="table-responsive table-card mt-3 mb-1" style={{height: '27vh'}}>
                              <table
                                className="table align-middle table-nowrap"
                                id="customerTable"
                             
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
                                    <th className="sort" data-sort="title">
                                      Job Title
                                    </th>
                                    <th className="sort" data-sort="location">
                                      Location
                                    </th>
                                    <th className="sort" data-sort="startDate">
                                      Start Date
                                    </th>
                                    <th className="sort" data-sort="expDate">
                                      Expire Date
                                    </th>
                                    <th className="sort" data-sort="jobType">
                                      Job Type
                                    </th>
                                    <th className="sort" data-sort="jobType">
                                      Status
                                    </th>
                                    <th className="sort" data-sort="applicants">
                                      Applicants
                                    </th>
                                    <th className="sort" data-sort="action">
                                      Action
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className="list form-check-all" >
                                  <tr>
                                    {/* <th scope="row">
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          name="chk_child"
                                          value="option1"
                                        />
                                      </div>
                                    </th> */}
                                    <td
                                      className="id"
                                      style={{ display: "none" }}
                                    >
                                      <Link
                                        to="#"
                                        className="fw-medium link-primary"
                                      >
                                        Web Developer
                                      </Link>
                                    </td>
                                    <td className="customer_name">
                                      Web Developer
                                    </td>
                                    <td className="location">Accra</td>
                                    <td className="startDate">06 Apr, 2021</td>
                                    <td className="expDate">06 Apr, 2021</td>
                                    <td className="status">
                                      <div className="custom-dropdown">
                                        <p
                                          style={{
                                            cursor: "pointer",
                                            width: "max-content",
                                            backgroundColor: "#ebeff0",
                                            padding: "0.5rem",
                                            borderRadius: "1.5rem",
                                            border: "1px solid gray",
                                          }}
                                          onClick={() => {
                                            setAction(!action);
                                          }}
                                        >
                                          <i
                                            className="bx bx-radio-circle-marked fs-20"
                                            style={{
                                              color:
                                                takeAction === "Full Time"
                                                  ? "#EB596B"
                                                  : takeAction === "Part Time"
                                                  ? "#00D084"
                                                  : takeAction === "Internship"
                                                  ? "#244159"
                                                  : takeAction === "Temporary"
                                                  ? "#E79637"
                                                  : takeAction === "Other"
                                                  ? "#E79637"
                                                  : "black",
                                              position: "relative",
                                              top: "0.3rem",
                                            }}
                                          ></i>
                                          {takeAction === "Full Time"
                                            ? "Full Time"
                                            : takeAction === "Part Time"
                                            ? "Part Time"
                                            : takeAction === "Internship"
                                            ? "Internship"
                                            : takeAction === "Temporary"
                                            ? "Temporary"
                                            : takeAction === "Other"
                                            ? "Other"
                                            : "Select Job Type"}
                                          <i
                                            className="bx bx-caret-down"
                                            style={{ color: "black" }}
                                          ></i>
                                        </p>
                                        <Card
                                          style={{
                                            position: "absolute",
                                            padding: "1rem",
                                            marginLeft: margin,

                                            display:
                                              action === false
                                                ? "none"
                                                : "block",
                                          }}
                                        >
                                          <p
                                            style={{
                                              color: "red",
                                              cursor: "pointer",
                                            }}
                                            onClick={() => {
                                              setTakeAction("Full Time");
                                              setAction(!action);
                                            }}
                                          >
                                            <i
                                              className="bx bx-radio-circle-marked fs-20"
                                              style={{
                                                position: "relative",
                                                top: "0.3rem",
                                                color: "#EB596B",
                                              }}
                                            ></i>{" "}
                                            Full Time
                                          </p>
                                          <p
                                            style={{
                                              cursor: "pointer",
                                            }}
                                            onClick={() => {
                                              setTakeAction("Part Time");
                                              setAction(!action);
                                            }}
                                          >
                                            <i
                                              className="bx bx-radio-circle-marked fs-20"
                                              style={{
                                                position: "relative",
                                                top: "0.3rem",
                                                color: "#00D084",
                                              }}
                                            ></i>{" "}
                                            Part Time
                                          </p>
                                          <p
                                            style={{
                                              cursor: "pointer",
                                            }}
                                            onClick={() => {
                                              setTakeAction("Internship");
                                              setAction(!action);
                                            }}
                                          >
                                            <i
                                              className="bx bx-radio-circle-marked fs-20"
                                              style={{
                                                position: "relative",
                                                top: "0.3rem",
                                                color: "#244A59",
                                              }}
                                            ></i>{" "}
                                            Internship
                                          </p>
                                          <p
                                            style={{
                                              cursor: "pointer",
                                            }}
                                            onClick={() => {
                                              setTakeAction("Temporary");
                                              setAction(!action);
                                            }}
                                          >
                                            <i
                                              className="bx bx-radio-circle-marked fs-20"
                                              style={{
                                                position: "relative",
                                                top: "0.3rem",
                                                color: "#E79637",
                                              }}
                                            ></i>{" "}
                                            Temporary
                                          </p>
                                          <p
                                            style={{
                                              cursor: "pointer",
                                            }}
                                            onClick={() => {
                                              setTakeAction("Other");
                                              setAction(!action);
                                            }}
                                          >
                                            <i
                                              className="bx bx-radio-circle-marked fs-20"
                                              style={{
                                                position: "relative",
                                                top: "0.3rem",
                                                color: "#E79637",
                                              }}
                                            ></i>{" "}
                                            Other
                                          </p>
                                        </Card>
                                      </div>
                                    </td>

                                    <td className="status">
                                      <div className="custom-dropdown">
                                        <p
                                          style={{
                                            cursor: "pointer",
                                            width: "max-content",
                                            backgroundColor: "#ebeff0",
                                            padding: "0.5rem",
                                            borderRadius: "1.5rem",
                                            border: "1px solid gray",
                                           
                                          
                                          }}
                                          onClick={() => {
                                            setStatus(!status);
                                          }}
                                        >
                                          <i
                                            className="bx bx-radio-circle-marked fs-20"
                                            style={{
                                              color:
                                                takeStatus === "Open"
                                                  ? "#EB596B"
                                                  : takeStatus === "Closed"
                                                  ? "#00D084"
                                                  : takeStatus === "Cancelled"
                                                  ? "#E79637"
                                                  : "black",
                                              position: "relative",
                                              top: "0.3rem",
                                            }}
                                          ></i>
                                          {takeStatus === "Open"
                                            ? "Open"
                                            : takeStatus === "Closed"
                                            ? "Closed"
                                            : takeStatus === "Cancelled"
                                            ? "Cancelled"
                                            : "Select Status"}
                                          <i
                                            className="bx bx-caret-down"
                                            style={{ color: "black" }}
                                          ></i>
                                        </p>
                                        <Card
                                          style={{
                                            position: "absolute",
                                            padding: "1rem",
                                            marginLeft: margin,
                                            zIndex: '1',
                                            display:
                                              status === false
                                                ? "none"
                                                : "block",
                                          }}
                                        >
                                          <p
                                            style={{
                                              color: "red",
                                              cursor: "pointer",
                                            }}
                                            onClick={() => {
                                              setTakeStatus("Open");
                                              setStatus(!status);
                                            }}
                                          >
                                            <i
                                              className="bx bx-radio-circle-marked fs-20"
                                              style={{
                                                position: "relative",
                                                top: "0.3rem",
                                                color: "#EB596B",
                                              }}
                                            ></i>{" "}
                                            Open
                                          </p>
                                          <p
                                            style={{
                                              cursor: "pointer",
                                            }}
                                            onClick={() => {
                                              setTakeStatus("Closed");
                                              setStatus(!status);
                                            }}
                                          >
                                            <i
                                              className="bx bx-radio-circle-marked fs-20"
                                              style={{
                                                position: "relative",
                                                top: "0.3rem",
                                                color: "#00D084",
                                              }}
                                            ></i>{" "}
                                            Closed
                                          </p>
                                        
                                         
                                          <p
                                            style={{
                                              cursor: "pointer",
                                            }}
                                            onClick={() => {
                                              setTakeStatus("Cancelled");
                                              setStatus(!action);
                                            }}
                                          >
                                            <i
                                              className="bx bx-radio-circle-marked fs-20"
                                              style={{
                                                position: "relative",
                                                top: "0.3rem",
                                                color: "#E79637",
                                              }}
                                            ></i>{" "}
                                            Cancelled
                                          </p>
                                        </Card>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="d-flex gap-2">
                                        <div className="edit">
                                          <button
                                            className="btn btn-sm btn-success edit-item-btn p-2"
                                            data-bs-toggle="modal"
                                            data-bs-target="#showModal"
                                          >
                                            2 Candidates
                                          </button>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                    <div className="custom-dropdown">
                                <Dropdown
                                  isOpen={isOpen}
                                  toggle={toggleDropdown}
                                >
                                  <DropdownToggle
                                    tag="p"
                                    onClick={toggleDropdown}
                                    style={{
                                      cursor: "pointer",
                                    marginTop: '1rem'
                              
                                    }}
                                  >
                                    <i className="bx bx-dots-vertical-rounded fs-20"></i>{" "}
                                    
                                   
                                  </DropdownToggle>
                                  <DropdownMenu>
                                    {options.map((option) => (
                                      <DropdownItem
                                        key={option.label}
                                        onClick={() =>
                                          handleOptionClick(option)
                                        }
                                        style={{
                                          cursor: "pointer",
                                          color: option.color,
                                        }}
                                      >
                                        <i className={option.icon}></i>{" "}
                                        {option.label}
                                      </DropdownItem>
                                    ))}
                                  </DropdownMenu>
                                </Dropdown>
                              </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <div
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
                              </div>
                            </div>

                            <div className="d-flex justify-content-end">
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
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>

                  <p style={{ textAlign: "center" }} className="mt-5">
                    <Button
                      className="btn btn-light"
                      style={{ border: "1px solid #244a59" }}
                    >
                      View More
                    </Button>
                  </p>

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
      </Row>
    </>
  );
};

export default EmployerDashboard;
