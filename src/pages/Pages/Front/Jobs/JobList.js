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
import placesData from "../../../../common/data/cities.json";
import catData from "../../../../common/data/categories.json";
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

  // const [locations, setLocations] = useState()

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

  const [showAll, setShowAll] = useState(false);

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

  const [places, setPlaces] = useState(placesData);

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

  var [width, setWidth] = useState("");

  const [showAllPlaces, setShowAllPlaces] = useState(false);

  const updateWindowSize = () => {
    const newWindowSize = document.documentElement.clientWidth;
    if (newWindowSize <= 375) {
      setWidth("100%");
    } else if (newWindowSize <= 1200) {
      setWidth("95%");
    } else if (newWindowSize >= 1200) {
      setWidth("87%");
    } else if (newWindowSize > 375) {
      setWidth("100%");
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

        <Container fluid style={{ width: "85%" }}>
          <Row>
            <Col xl={3} lg={4} md={15}>
              <Card>
                <CardHeader style={{ backgroundColor: "#244a59" }}>
                  <div className="d-flex mb-3">
                    <div className="flex-grow-1">
                      <h1
                        className="fs-16"
                        style={{
                          color: "white",
                          position: "relative",
                          top: "2rem",
                        }}
                      >
                        REFINE YOUR SEARCH
                      </h1>
                    </div>
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
                              
                            >
                              <div
                               className="d-flex" style={{justifyContent: "space-between", color: "black"}}
                              >
                                <div>
                                  <h4
                                    style={{
                                    
                                    }}
                                    className="fw-bolder"
                                  >
                                    Locations
                                  </h4>
                                </div>

                                <div
                                  style={{
                                   cursor: 'pointer'
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
                                {Object.keys(placesData).map((region) => (
                                  <div key={region}>
                                    <h6 className="mt-2">{region}</h6>

                                    {placesData[region]
                                      .slice(
                                        0,
                                        showAllPlaces
                                          ? placesData[region].length
                                          : 5
                                      )
                                      .map((location, index) => (
                                        <div
                                          key={index}
                                          className="d-flex gap-1"
                                        >
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
                                                {location}
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
                                      ))}

                                    {placesData[region].length > 2 && (
                                      <button
                                        onClick={() =>
                                          setShowAllPlaces(!showAllPlaces)
                                        }
                                        style={{
                                          marginTop: "10px",
                                          color: "black",
                                        }}
                                        className="btn btn-light"
                                      >
                                        {showAllPlaces
                                          ? "Show Less"
                                          : "Show More"}
                                          <i className="bx bx-chevron-down"></i>
                                      </button>
                                    )}
                                  </div>
                                ))}
                              </Nav>
                            </Collapse>
                          </NavItem>
                        </Nav>
                        <Nav vertical>
                          <NavItem>
                            <NavLink
                              onClick={toggleCategory}
                             
                            >
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  cursor: "pointer",
                                  color: "black"
                                }}
                              >
                                <div>
                                  <h4
                                  
                                    className="fw-bolder"
                                  >
                                    Category
                                  </h4>
                                </div>

                                <div
                                  style={{
                                  cursor: "pointer"
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
                                {catData.categories
                                  .slice(
                                    0,
                                    showAll ? catData.categories.length : 5
                                  )
                                  .map((category, index) => (
                                    <div key={index} className="d-flex gap-1">
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
                                            {category}
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
                                  ))}

                                {catData.categories.length > 5 && (
                                  <button onClick={() => setShowAll(!showAll)}
                                  className="btn btn-light mt-2 w-50"
                                  >
                                    {showAll ? "Show Less" : "Show More"}
                                    <i className="bx bx-chevron-down"></i>
                                  </button>
                                )}
                              </Nav>
                            </Collapse>
                          </NavItem>
                        </Nav>

                        {/* Categories */}
                        <Nav vertical>
                          <NavItem>
                            <NavLink
                              onClick={toggleType}
                            
                            >
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                
                                  color: "black",
                                  cursor: "pointer",
                                }}
                              >
                                <div>
                                  <h4
                                  
                                    className="fw-bolder"
                                  >
                                    Job Type
                                  </h4>
                                </div>

                                <div
                                  style={{
                                   cursor: "pointer"
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
                            
                            >
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                
                                  color: "black",
                                  cursor: "pointer",
                                }}
                              >
                                <div>
                                  <h4
                                 
                                    className="fw-bolder"
                                  >
                                    Job Level
                                  </h4>
                                </div>

                                <div
                                  style={{
                                   cursor:"pointer"
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
                                {JobLevel.map((a, key) => {
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
                             
                            >
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                
                                  color: "black",
                                  cursor: "pointer",
                                }}
                              >
                                <div>
                                  <h4
                                 
                                    className="fw-bolder"
                                  >
                                    Company Type
                                  </h4>
                                </div>

                                <div
                                  style={{
                                   cursor: "pointer"
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
                                    <i
                                      className="bx bx-calendar p-1"
                                      style={{ marginTop: "0rem" }}
                                    >
                                      {" "}
                                    </i>{" "}
                                    Expired
                                    <p>Jul 25, 2023</p>
                                  </div>
                                  <p className="mt-3 " style={{ width: "80%" }}>
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
                                      alt="logo"
                                      className="img-fluid avatar-xxl"
                                    ></img>
                                  </div>
                                  <div>
                                    <i
                                      className="mdi mdi-cards-heart "
                                      style={{
                                        cursor: "pointer",
                                        color: "red",
                                        fontSize: "2rem",
                                        position: "relative",
                                        top: "-1rem",
                                      }}
                                    ></i>
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
