import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import SimpleBar from "simplebar-react";
import { Link } from "react-router-dom";
import List from "list.js";
//Import Flatepicker
import Flatpickr from "react-flatpickr";

// Import Images
import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../../assets/images/users/avatar-5.jpg";

const ListTables = () => {
  const [modal_list, setmodal_list] = useState(false);
  function tog_list() {
    setmodal_list(!modal_list);
  }

  // const [modal_delete, setmodal_delete] = useState(false);
  // function tog_delete() {
  //     setmodal_delete(!modal_delete);
  // }

  useEffect(() => {
    const attroptions = {
      valueNames: [
        "name",
        "born",
        {
          data: ["id"],
        },
        {
          attr: "src",
          name: "image",
        },
        {
          attr: "href",
          name: "link",
        },
        {
          attr: "data-timestamp",
          name: "timestamp",
        },
      ],
    };
    // const attrList = new List('users', attroptions);
    // attrList.add({
    //     name: 'Leia',
    //     born: '1954',
    //     image: avatar5,
    //     id: 5,
    //     timestamp: '67893'
    // });

    // Existing List

    const existOptionsList = {
      valueNames: ["contact-name", "contact-message"],
    };

    new List("contact-existing-list", existOptionsList);

    // Fuzzy Search list
    // new List('fuzzysearch-list', {
    //     valueNames: ['name']
    // });

    // pagination list

    new List("pagination-list", {
      valueNames: ["pagi-list"],
      page: 3,
      pagination: true,
    });
  });

  document.title = "Listjs | Velzon - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* <BreadCrumb title="Listjs" pageTitle="Tables" /> */}
          <Row>
            <Col lg={12}>
              <Card>
                <CardHeader>
                  <h4 className="card-title mb-0">Employers</h4>
                </CardHeader>

                <CardBody>
                  <div id="customerList">
                    {/* <Row className="g-4 mb-3">
                      <Col className="col-sm">
                        <div className="d-flex justify-content-sm-end">
                          <div className="search-box ms-2">
                            <input
                              type="text"
                              className="form-control search"
                              placeholder="Search..."
                            />
                            <i className="ri-search-line search-icon"></i>
                          </div>
                        </div>
                      </Col>
                    </Row> */}

                    <div className="table-responsive table-card mt-3 mb-1">
                      <table
                        className="table align-middle table-nowrap"
                        id="customerTable"
                      >
                        <thead className="table-light">
                          <tr>
                            {/* <th scope="col" style={{ width: "50px" }}>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="checkAll" value="option" />
                                                            </div>
                                                        </th> */}
                            <th data-sort="customer_name">Customer</th>
                            <th data-sort="email">Email</th>
                            <th data-sort="phone">Phone</th>
                            <th data-sort="status">Delivery Status</th>
                            <th data-sort="date">Joining Date</th>

                            <th data-sort="action">Action</th>
                          </tr>
                        </thead>
                        <tbody className="list form-check-all">
                          <tr>
                            {/* <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="chk_child" value="option1" />
                                                            </div>
                                                        </th> */}
                            <td className="id" style={{ display: "none" }}>
                              <Link to="#" className="fw-medium link-primary">
                                #VZ2101
                              </Link>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 me-2">
                                  <img
                                    src={avatar2}
                                    alt=""
                                    className="avatar-xs rounded-circle"
                                  />
                                </div>
                                <div className="flex-grow-1">
                                  Gashie Technologies
                                </div>
                              </div>
                            </td>
                            <td className="email">marycousar@velzon.com</td>
                            <td className="phone">580-464-4694</td>
                            <td className="status">
                              <span className="badge badge-soft-success text-uppercase">
                                Active
                              </span>
                            </td>
                            <td className="date">06 Apr, 2021</td>
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
                                <div className="remove">
                                  <button
                                    className="btn btn-sm btn-danger remove-item-btn"
                                    data-bs-toggle="modal"
                                    data-bs-target="#deleteRecordModal"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="noresult" style={{ display: "none" }}>
                        <div className="text-center">
                          <lord-icon
                            src="https://cdn.lordicon.com/msoeawqm.json"
                            trigger="loop"
                            colors="primary:#121331,secondary:#08a88a"
                            style={{ width: "75px", height: "75px" }}
                          ></lord-icon>
                          <h5 className="mt-2">Sorry! No Result Found</h5>
                          <p className="text-muted mb-0">
                            We've searched more than 150+ Orders We did not find
                            any orders for you search.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* <div className="d-flex justify-content-end">
                                            <div className="pagination-wrap hstack gap-2">
                                                <Link className="page-item pagination-prev disabled" to="#">
                                                    Previous
                                                </Link>
                                                <ul className="pagination listjs-pagination mb-0"></ul>
                                                <Link className="page-item pagination-next" to="#">
                                                    Next
                                                </Link>
                                            </div>
                                        </div> */}
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default ListTables;
