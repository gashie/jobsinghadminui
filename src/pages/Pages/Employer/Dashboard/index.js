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

  const [modal_list, setmodal_list] = useState(false);
  function tog_list() {
    setmodal_list(!modal_list);
  }

  const [height, setHeight] = useState("");

  const updateWindowSize = () => {
    const newWindowSize = document.documentElement.clientWidth;
    if (newWindowSize <= 375) {
      setHeight("150vh");
    } else if (newWindowSize <= 1200) {
      setHeight("150vh");
    } else if (newWindowSize >= 1200) {
      setHeight("150vh");
    } else if (newWindowSize > 375) {
      setHeight("150vh");
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
              overflow: "scroll",
            }}
            className="p-3 scroll-change"
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
                            <div className="table-responsive table-card mt-3 mb-1">
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
                                    <th className="sort" data-sort="applicants">
                                      Applicants
                                    </th>
                                    <th className="sort" data-sort="action">
                                      Action
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className="list form-check-all">
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
                                        <select
                                          className="select"
                                          style={{ borderRadius: "0.5rem" }}
                                        >
                                          <option value="option1">
                                            <div>
                                              <i
                                                className="bx bx-radio-circle-marked"
                                                style={{ color: "red" }}
                                              ></i>
                                            </div>
                                          </option>
                                        </select>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="d-flex gap-2">
                                        <div className="edit">
                                          <button
                                            className="btn btn-sm btn-success edit-item-btn"
                                            data-bs-toggle="modal"
                                            data-bs-target="#showModal"
                                          >
                                            2 Candidates
                                          </button>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="d-flex gap-2">
                                        <div className="edit">
                                          <button
                                            className="btn btn-sm btn-success edit-item-btn"
                                            data-bs-toggle="modal"
                                            data-bs-target="#showModal"
                                          >
                                            Edit
                                          </button>
                                        </div>
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
