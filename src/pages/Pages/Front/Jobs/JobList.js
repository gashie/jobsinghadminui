import React, { useEffect, useState, useMemo } from "react";

import {
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Nav,
  NavItem,
  NavLink,
  UncontrolledCollapse,
  Row,
  Card,
  CardHeader,
  Col,
  Input,
  CardBody,
  CardFooter,
  Button,
  Collapse,
} from "reactstrap";
import classnames from "classnames";

import seaTech from "./seaTech.png";

// import buss from "./buss.png";
// import online from "./online.png";

import { toast, ToastContainer } from "react-toastify";

// RangeSlider
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import DeleteModal from "../../../../Components/Common/DeleteModal";

import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import TableContainer from "../../../../Components/Common/TableContainer";
// import { Rating, Published, Price } from "./EcommerceProductCol";
//Import data
import { productsData } from "../../../../common/data";

//Import actions
import {
  getProducts as onGetProducts,
  deleteProducts,
} from "../../../../store/ecommerce/action";
import { isEmpty } from "lodash";
import Select from "react-select";

//redux
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const SingleOptions = [
  { value: "Watches", label: "Watches" },
  { value: "Headset", label: "Headset" },
  { value: "Sweatshirt", label: "Sweatshirt" },
  { value: "20% off", label: "20% off" },
  { value: "4 star", label: "4 star" },
];

const JobList = (props) => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => ({
    products: state.Ecommerce.products,
  }));

  const [productList, setProductList] = useState([]);
  const [activeTab, setActiveTab] = useState("1");
  const [selectedMulti, setselectedMulti] = useState(null);
  const [product, setProduct] = useState(null);

  function handleMulti(selectedMulti) {
    setselectedMulti(selectedMulti);
  }

  useEffect(() => {
    if (products && !products.length) {
      dispatch(onGetProducts());
    }
  }, [dispatch, products]);

  useEffect(() => {
    setProductList(products);
  }, [products]);

  useEffect(() => {
    if (!isEmpty(products)) setProductList(products);
  }, [products]);

  const toggleTab = (tab, type) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
      let filteredProducts = products;
      if (type !== "all") {
        filteredProducts = products.filter(
          (product) => product.status === type
        );
      }
      setProductList(filteredProducts);
    }
  };

  const [cate, setCate] = useState("all");

  const categories = (category) => {
    let filteredProducts = products;
    if (category !== "all") {
      filteredProducts = products.filter(
        (product) => product.category === category
      );
    }
    setProductList(filteredProducts);
    setCate(category);
  };

  useEffect(() => {
    onUpdate([0, 2000]);
  }, []);

  const onUpdate = (value) => {
    setProductList(
      productsData.filter(
        (product) => product.price >= value[0] && product.price <= value[1],
        (document.getElementById("minCost").value = value[0]),
        (document.getElementById("maxCost").value = value[1])
      )
    );
  };
  const [ratingvalues, setRatingvalues] = useState([]);
  /*
  on change rating checkbox method
  */
  const onChangeRating = (value) => {
    setProductList(productsData.filter((product) => product.rating >= value));

    var modifiedRating = [...ratingvalues];
    modifiedRating.push(value);
    setRatingvalues(modifiedRating);
  };

  const onUncheckMark = (value) => {
    var modifiedRating = [...ratingvalues];
    const modifiedData = (modifiedRating || []).filter((x) => x !== value);
    /*
    find min values
    */
    var filteredProducts = productsData;
    if (modifiedData && modifiedData.length && value !== 1) {
      var minValue = Math.min(...modifiedData);
      if (minValue && minValue !== Infinity) {
        filteredProducts = productsData.filter(
          (product) => product.rating >= minValue
        );
        setRatingvalues(modifiedData);
      }
    } else {
      filteredProducts = productsData;
    }
    setProductList(filteredProducts);
  };

  //delete order
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteModalMulti, setDeleteModalMulti] = useState(false);

  const onClickDelete = (product) => {
    setProduct(product);
    setDeleteModal(true);
  };

  const handleDeleteProduct = () => {
    if (product) {
      dispatch(deleteProducts(product._id));
      setDeleteModal(false);
    }
  };

  // Displat Delete Button
  const [dele, setDele] = useState(0);
  const displayDelete = () => {
    const ele = document.querySelectorAll(".productCheckBox:checked");
    const del = document.getElementById("selection-element");
    setDele(ele.length);
    if (ele.length === 0) {
      del.style.display = "none";
    } else {
      del.style.display = "block";
    }
  };

  const JobLocations = [
    { name: "Work From Home" },
    { name: "Accra" },
    { name: "Adenta" },
    { name: "Agbogba" },
    { name: "Cape Coast" },
    { name: "Dzowulu" },
    { name: "Labadi" },
  ];

  const JobCategories = [
    { name: "Banking", count: "0" },
    { name: "ICT", count: "2900" },
    { name: "Marketing", count: "20" },
    { name: "Health and Nutrition", count: "200" },
  ];

  const JobType = [
    { name: "Permanent", count: "0" },
    { name: "Contract", count: "2900" },
    { name: "Internship", count: "20" },
    { name: "Part Time", count: "200" },
    { name: "Learnership", count: "200" },
  ];

  const JobLevel = [
    { name: "Intermediate", count: "0" },
    { name: "Senior", count: "2900" },
    { name: "Management", count: "20" },
    { name: "Junior", count: "200" },
    { name: "Specialist", count: "200" },
    { name: "Executive", count: "200" },
    { name: "Student / ", count: "200" },
  ];

  const CompanyType = [
    { name: "Agency", count: "200" },
    { name: "Employer", count: "2900" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isAccount, setIsAccount] = useState(false);
  const [isResume, setIsResume] = useState(false);

  const [view, setView] = useState("My Account");

  const [locations, setLocations] = useState(false);
  const [category, setCategory] = useState(false);
  const [type, setType] = useState(false);
  const [level, setLevel] = useState(false);
  const [companyType, setCompanyType] = useState(false);
  const [salary, setSalary] = useState(false);

  const toggleLocations = () => {
    setLocations(!locations);
  };
  const toggleCategory = () => {
    setCategory(!category);
  };
  const toggleType = () => {
    setType(!type);
  };
  const toggleLevel = () => {
    setLevel(!level);
  };
  const toggleCompanyType = () => {
    setCompanyType(!companyType);
  };
  const toggleSalary = () => {
    setSalary(!salary);
  };

  document.title = "Training Events | Jobs in Ghane";

  const [eventView, setEventView] = useState("list");

  return (
    <>
      <div className="page-content">
        <ToastContainer closeButton={false} limit={1} />
        <DeleteModal
          show={deleteModal}
          onDeleteClick={handleDeleteProduct}
          onCloseClick={() => setDeleteModal(false)}
        />
        <DeleteModal
          show={deleteModalMulti}
          onDeleteClick={() => {
            setDeleteModalMulti(false);
          }}
          onCloseClick={() => setDeleteModalMulti(false)}
        />
        <Container fluid>
          <Row>
            <Col xl={3} lg={4}>
              <Card>
                <CardHeader style={{ backgroundColor: "#244a59" }}>
                  <div className="d-flex mb-3">
                    <div className="flex-grow-1">
                      <h5 className="fs-16" style={{ color: "white" }}>
                        Filters
                      </h5>
                    </div>
                  </div>

                  <div className="filter-choices-input">
                    <Input placeholder="Search courses by title" />
                  </div>
                </CardHeader>

                <div className="accordion accordion-flush">
                  <div className="card-body border-bottom">
                    <div>
                      <div className="d-flex flex-column gap-2 mt-3">
                        <Nav vertical>
                          <NavItem>
                            <NavLink
                              onClick={toggleLocations}
                              className="d-flex align-items-center"
                            >
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  gap: "6rem",
                                  color: "black",
                                  cursor: "pointer",
                                }}
                              >
                                <div>
                                  <h4
                                    style={{
                                      marginLeft: "0.5rem",
                                      width: "max-content",
                                    }}
                                    className="fw-bolder"
                                  >
                                    Locations
                                  </h4>
                                </div>

                                <div
                                  style={{
                                    position: "relative",
                                    left: "-1.5rem",
                                    top: "0.3rem",
                                  }}
                                >
                                  {locations ? (
                                    <i className="bx bxs-chevron-up fs-16 fw-bolder"></i>
                                  ) : (
                                    <i className="bx bxs-chevron-down fs-16 fw-bolder"></i>
                                  )}
                                </div>
                              </div>
                            </NavLink>
                            <Collapse isOpen={locations} className="ml-4">
                              <Nav vertical>
                                {JobLocations.map((a, key) => {
                                  return (
                                    <div key={key} className=" d-flex gap-1">
                                      <NavItem
                                        style={{
                                          padding: "0.7rem",
                                          backgroundColor: "#ebeff0",
                                          borderRadius: "0.5rem",
                                          width: "85%",
                                        }}
                                        className="mt-1"
                                      >
                                        <div
                                          className="d-flex"
                                          style={{
                                            justifyContent: "space-between",
                                          }}
                                        >
                                          <NavLink
                                            href="#"
                                            style={{
                                              color: "gray",
                                              fontSize: "0.8rem",
                                            }}
                                          >
                                            {a.name}
                                          </NavLink>
                                        </div>
                                      </NavItem>

                                      <div
                                        style={{
                                          padding: "0.7rem",
                                          backgroundColor: "#ebeff0",
                                          borderRadius: "0.5rem",
                                          width: "15%",
                                          cursor: "pointer",
                                        }}
                                        className="mt-1"
                                      >
                                        <p style={{ textAlign: "center" }}>
                                          <i
                                            className="bx bx-plus fs-16 fw-bolder"
                                            style={{
                                              color: "244a59",
                                              textAlign: "center",
                                              position: "relative",
                                              top: "0.7rem",
                                            }}
                                          ></i>
                                        </p>
                                      </div>
                                    </div>
                                  );
                                })}
                              </Nav>
                            </Collapse>
                          </NavItem>
                        </Nav>
                        <Nav vertical>
                          <NavItem>
                            <NavLink
                              onClick={toggleCategory}
                              className="d-flex align-items-center"
                            >
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  gap: "6rem",
                                  color: "black",
                                  cursor: "pointer",
                                }}
                              >
                                <div>
                                  <h4
                                    style={{
                                      marginLeft: "0.5rem",
                                      width: "max-content",
                                    }}
                                    className="fw-bolder"
                                  >
                                    Category
                                  </h4>
                                </div>

                                <div
                                  style={{
                                    position: "relative",
                                    left: "-1.5rem",
                                    top: "0.3rem",
                                  }}
                                >
                                  {category ? (
                                    <i className="bx bxs-chevron-up fs-16 fw-bolder"></i>
                                  ) : (
                                    <i className="bx bxs-chevron-down fs-16 fw-bolder"></i>
                                  )}
                                </div>
                              </div>
                            </NavLink>
                            <Collapse isOpen={category} className="ml-4">
                              <Nav vertical>
                                {JobCategories.map((a, key) => {
                                  return (
                                    <div key={key} className=" d-flex gap-1">
                                      <NavItem
                                        style={{
                                          padding: "0.7rem",
                                          backgroundColor: "#ebeff0",
                                          borderRadius: "0.5rem",
                                          width: "85%",
                                        }}
                                        className="mt-1"
                                      >
                                        <div
                                          className="d-flex"
                                          style={{
                                            justifyContent: "space-between",
                                          }}
                                        >
                                          <NavLink
                                            href="#"
                                            style={{
                                              color: "gray",
                                              fontSize: "0.8rem",
                                            }}
                                          >
                                            {a.name} ({a.count})
                                          </NavLink>
                                        </div>
                                      </NavItem>

                                      <div
                                        style={{
                                          padding: "0.7rem",
                                          backgroundColor: "#ebeff0",
                                          borderRadius: "0.5rem",
                                          width: "15%",
                                          cursor: "pointer",
                                        }}
                                        className="mt-1"
                                      >
                                        <p style={{ textAlign: "center" }}>
                                          <i
                                            className="bx bx-plus fs-16 fw-bolder"
                                            style={{
                                              color: "244a59",
                                              textAlign: "center",
                                              position: "relative",
                                              top: "0.7rem",
                                            }}
                                          ></i>
                                        </p>
                                      </div>
                                    </div>
                                  );
                                })}
                              </Nav>
                            </Collapse>
                          </NavItem>
                        </Nav>

                        {/* Categories */}
                        <Nav vertical>
                          <NavItem>
                            <NavLink
                              onClick={toggleType}
                              className="d-flex align-items-center"
                            >
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  gap: "6rem",
                                  color: "black",
                                  cursor: "pointer",
                                }}
                              >
                                <div>
                                  <h4
                                    style={{
                                      marginLeft: "0.5rem",
                                      width: "max-content",
                                    }}
                                    className="fw-bolder"
                                  >
                                    Job Type
                                  </h4>
                                </div>

                                <div
                                  style={{
                                    position: "relative",
                                    left: "-1.5rem",
                                    top: "0.3rem",
                                  }}
                                >
                                  {type ? (
                                    <i className="bx bxs-chevron-up fs-16 fw-bolder"></i>
                                  ) : (
                                    <i className="bx bxs-chevron-down fs-16 fw-bolder"></i>
                                  )}
                                </div>
                              </div>
                            </NavLink>
                            <Collapse isOpen={type} className="ml-4">
                              <Nav vertical>
                                {JobType.map((a, key) => {
                                  return (
                                    <div key={key} className=" d-flex gap-1">
                                      <NavItem
                                        style={{
                                          padding: "0.7rem",
                                          backgroundColor: "#ebeff0",
                                          borderRadius: "0.5rem",
                                          width: "85%",
                                        }}
                                        className="mt-1"
                                      >
                                        <div
                                          className="d-flex"
                                          style={{
                                            justifyContent: "space-between",
                                          }}
                                        >
                                          <NavLink
                                            href="#"
                                            style={{
                                              color: "gray",
                                              fontSize: "0.8rem",
                                            }}
                                          >
                                            {a.name} ({a.count})
                                          </NavLink>
                                        </div>
                                      </NavItem>

                                      <div
                                        style={{
                                          padding: "0.7rem",
                                          backgroundColor: "#ebeff0",
                                          borderRadius: "0.5rem",
                                          width: "15%",
                                          cursor: "pointer",
                                        }}
                                        className="mt-1"
                                      >
                                        <p style={{ textAlign: "center" }}>
                                          <i
                                            className="bx bx-plus fs-16 fw-bolder"
                                            style={{
                                              color: "244a59",
                                              textAlign: "center",
                                              position: "relative",
                                              top: "0.7rem",
                                            }}
                                          ></i>
                                        </p>
                                      </div>
                                    </div>
                                  );
                                })}
                              </Nav>
                            </Collapse>
                          </NavItem>
                        </Nav>

                        {/* Job Type ENd*/}

                        {/* Job Level */}

                        <Nav vertical>
                          <NavItem>
                            <NavLink
                              onClick={toggleLevel}
                              className="d-flex align-items-center"
                            >
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  gap: "6rem",
                                  color: "black",
                                  cursor: "pointer",
                                }}
                              >
                                <div>
                                  <h4
                                    style={{
                                      marginLeft: "0.5rem",
                                      width: "max-content",
                                    }}
                                    className="fw-bolder"
                                  >
                                    Job Level
                                  </h4>
                                </div>

                                <div
                                  style={{
                                    position: "relative",
                                    left: "-1.5rem",
                                    top: "0.3rem",
                                  }}
                                >
                                  {level ? (
                                    <i className="bx bxs-chevron-up fs-16 fw-bolder"></i>
                                  ) : (
                                    <i className="bx bxs-chevron-down fs-16 fw-bolder"></i>
                                  )}
                                </div>
                              </div>
                            </NavLink>
                            <Collapse isOpen={level} className="ml-4">
                              <Nav vertical>
                                {JobType.map((a, key) => {
                                  return (
                                    <div key={key} className=" d-flex gap-1">
                                      <NavItem
                                        style={{
                                          padding: "0.7rem",
                                          backgroundColor: "#ebeff0",
                                          borderRadius: "0.5rem",
                                          width: "85%",
                                        }}
                                        className="mt-1"
                                      >
                                        <div
                                          className="d-flex"
                                          style={{
                                            justifyContent: "space-between",
                                          }}
                                        >
                                          <NavLink
                                            href="#"
                                            style={{
                                              color: "gray",
                                              fontSize: "0.8rem",
                                            }}
                                          >
                                            {a.name} ({a.count})
                                          </NavLink>
                                        </div>
                                      </NavItem>

                                      <div
                                        style={{
                                          padding: "0.7rem",
                                          backgroundColor: "#ebeff0",
                                          borderRadius: "0.5rem",
                                          width: "15%",
                                          cursor: "pointer",
                                        }}
                                        className="mt-1"
                                      >
                                        <p style={{ textAlign: "center" }}>
                                          <i
                                            className="bx bx-plus fs-16 fw-bolder"
                                            style={{
                                              color: "244a59",
                                              textAlign: "center",
                                              position: "relative",
                                              top: "0.7rem",
                                            }}
                                          ></i>
                                        </p>
                                      </div>
                                    </div>
                                  );
                                })}
                              </Nav>
                            </Collapse>
                          </NavItem>
                        </Nav>

                        {/* Job Level End */}

                        <Nav vertical>
                          <NavItem>
                            <NavLink
                              onClick={toggleCompanyType}
                              className="d-flex align-items-center"
                            >
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  gap: "6rem",
                                  color: "black",
                                  cursor: "pointer",
                                }}
                              >
                                <div>
                                  <h4
                                    style={{
                                      marginLeft: "0.5rem",
                                      width: "max-content",
                                    }}
                                    className="fw-bolder"
                                  >
                                    Company Type
                                  </h4>
                                </div>

                                <div
                                  style={{
                                    position: "relative",
                                    left: "-1.5rem",
                                    top: "0.3rem",
                                  }}
                                >
                                  {companyType ? (
                                    <i className="bx bxs-chevron-up fs-16 fw-bolder"></i>
                                  ) : (
                                    <i className="bx bxs-chevron-down fs-16 fw-bolder"></i>
                                  )}
                                </div>
                              </div>
                            </NavLink>
                            <Collapse isOpen={companyType} className="ml-4">
                              <Nav vertical>
                                {CompanyType.map((a, key) => {
                                  return (
                                    <div key={key} className=" d-flex gap-1">
                                      <NavItem
                                        style={{
                                          padding: "0.7rem",
                                          backgroundColor: "#ebeff0",
                                          borderRadius: "0.5rem",
                                          width: "85%",
                                        }}
                                        className="mt-1"
                                      >
                                        <div
                                          className="d-flex"
                                          style={{
                                            justifyContent: "space-between",
                                          }}
                                        >
                                          <NavLink
                                            href="#"
                                            style={{
                                              color: "gray",
                                              fontSize: "0.8rem",
                                            }}
                                          >
                                            {a.name}
                                          </NavLink>
                                        </div>
                                      </NavItem>

                                      <div
                                        style={{
                                          padding: "0.7rem",
                                          backgroundColor: "#ebeff0",
                                          borderRadius: "0.5rem",
                                          width: "15%",
                                          cursor: "pointer",
                                        }}
                                        className="mt-1"
                                      >
                                        <p style={{ textAlign: "center" }}>
                                          <i
                                            className="bx bx-plus fs-16 fw-bolder"
                                            style={{
                                              color: "244a59",
                                              textAlign: "center",
                                              position: "relative",
                                              top: "0.7rem",
                                            }}
                                          ></i>
                                        </p>
                                      </div>
                                    </div>
                                  );
                                })}
                              </Nav>
                            </Collapse>
                          </NavItem>
                        </Nav>
                      </div>
                    </div>
                  </div>

                  <div
                    className="card-body border-bottom"
                    style={{ display: "none" }}
                  >
                    <p className="text-muted text-uppercase fs-12 fw-medium mb-4">
                      Price
                    </p>

                    <div className="formCost d-flex gap-2 align-items-center mt-3">
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        id="minCost"
                        readOnly
                      />
                      <span className="fw-semibold text-muted">to</span>
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        id="maxCost"
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </Col>

            <div className="col-xl-9 col-lg-8">
              <div>
                <div className="card">
                  <div className="card-header border-0">
                    <div className="row align-items-center">
                      <div className="col">
                        <div
                          className=""
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div>
                            <h5
                              style={{
                                fontWeight: "bolder",
                                color: "#244a59",
                                padding: "1rem",
                              }}
                            >
                              400 Results Found
                            </h5>
                          </div>
                        </div>
                        <Card
                          style={{
                            border: "1px solid #ebeff0",
                            boxShadow: "none",
                          }}
                          className="p-2"
                        >
                          <CardBody>
                            <Col>
                              <div
                                className="d-flex"
                                style={{
                                  justifyContent: "space-between",
                                  width: "93%",
                                }}
                              >
                                <div>
                                  <h4
                                    style={{
                                      fontWeight: "bolder",
                                      color: "244a59",
                                    }}
                                  >
                                    Finance Officer
                                  </h4>
                                  <h4
                                    style={{
                                      fontWeight: "bolder",
                                      color: "244a59",
                                    }}
                                  >
                                    SupeTech Limited
                                  </h4>
                                  <p>Tema</p>
                                  <div className="d-flex">
                                    <i className="bx bx-calendar"></i> Expired
                                    Jul 25, 2023
                                  </div>
                                  <p className="mt-3">
                                    Lorem ipsum dolor sit amet consectetur.
                                    Turpis gravida quis quis nibh platea. Rutrum
                                    imperdiet faucibus faucibus pharetra nisl
                                    nulla pellentesque. Metus eget
                                    ..............
                                  </p>
                                </div>
                                <div></div>

                                <div
                                  className="d-flex"
                                  style={{
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    width: "5%",
                                  }}
                                >
                                  <div>
                                    <img
                                      src={seaTech}
                                      className="img-fluid avatar-xxl"
                                    ></img>
                                  </div>
                                  <div>
                                
                                      <i className="mdi mdi-cards-heart " style={{ cursor: 'pointer', color: 'red', fontSize: '2rem'}}></i>
                                   
                                  </div>
                                </div>
                              </div>
                            </Col>
                          </CardBody>
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default JobList;
