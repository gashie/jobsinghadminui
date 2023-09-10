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
} from "reactstrap";
import classnames from "classnames";
import jobCategoriesData from "../../../../../common/data/categories.json";
import locations from "../../../../../common/data/cities.json";

import buss from "./buss.png";
import online from "./online.png";

import { toast, ToastContainer } from "react-toastify";

// RangeSlider
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import DeleteModal from "../../../../../Components/Common/DeleteModal";

import BreadCrumb from "../../../../../Components/Common/BreadCrumb";
import TableContainer from "../../../../../Components/Common/TableContainer";
// import { Rating, Published, Price } from "./EcommerceProductCol";
//Import data
import { productsData } from "../../../../../common/data";

//Import actions
import {
  getProducts as onGetProducts,
  deleteProducts,
} from "../../../../../store/ecommerce/action";
import { isEmpty } from "lodash";
import Select from "react-select";

//redux
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CategoryFilter from "./CategoryFilter";
import MonthFilter from "./MonthFilter";

const SingleOptions = [
  { value: "Watches", label: "Watches" },
  { value: "Headset", label: "Headset" },
  { value: "Sweatshirt", label: "Sweatshirt" },
  { value: "20% off", label: "20% off" },
  { value: "4 star", label: "4 star" },
];

const TrainingEvents = (props) => {
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

  const [showAllLocations, setShowAllLocations] = useState(false);

  const displayCount = showAllLocations ? locations.length : 5;

  const [selectedLocations, setSelectedLocations] = useState([]);

  function handleLocationChange(region, location) {
    if (selectedLocations.includes(`${region} - ${location}`)) {
      setSelectedLocations(
        selectedLocations.filter((item) => item !== `${region} - ${location}`)
      );
    } else {
      setSelectedLocations([...selectedLocations, `${region} - ${location}`]);
    }
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

  const [showAll, setShowAll] = useState(false);
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

  const [selectedCategories, setSelectedCategories] = useState([]);

  const CourseList = [
    {
      name: "Contract Management Principles & practice",
      date: "03-07 Jul 2023",
      location: "Accra - GH",
      category: 'Accounting'
    },
    {
      name: "Contract Management Principles & practice",
      date: "03-07 Jul 2023",
      location: "Accra - GH",
      category: 'Accounting'
    },
    {
      name: "Contract Management Principles & practice",
      date: "03-07 Jul 2023",
      location: "Accra - GH",
       category: 'Policy'
    },
    {
      name: "Contract Management Principles & practice",
      date: "03-07 Jul 2023",
      location: "Accra - GH",
      category: 'Science'
    },
    {
      name: "Contract Management Principles & practice",
      date: "03-07 Jul 2023",
      location: "Accra - GH",
      category: 'Science'
    },
  ];

  const filteredItemList = selectedCategories.length === 0
  ? CourseList
  : CourseList.filter(item => selectedCategories.includes(item.category));

  document.title = "Training Events | JobsInGhana";

  const [eventView, setEventView] = useState("list");

  // filter logic
 


  return (
    <>
      <div className="page-content" style={{ backgroundColor: "white" }}>
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
        <div className="col-xl-20" style={{ marginRight: "-2rem" }}>
          <Container fluid style={{ width: "86%" }}>
            {/* <BreadCrumb title="Products" pageTitle="Ecommerce" /> */}
            <h5 className="fw-bolder" style={{ color: "#244a59" }}>
              Training Events
            </h5>
            <hr />
            <Row>
              <Col xl={3} lg={4} className="mt-3">
                <Card
                  style={{
                    border: "1px solid #e0e0e0",
                    borderRadius: "0.8rem",
                  }}
                >
                  <CardHeader style={{ backgroundColor: "#244a59" }}>
                    <div className="d-flex mb-3">
                      <div className="flex-grow-1">
                        <h5 className="fs-16" style={{ color: "white" }}>
                          Filters
                        </h5>
                      </div>
                      <div className="flex-shrink-0">
                        {/* <Link to="#" className="text-decoration-underline">
                      Clear All
                    </Link> */}
                      </div>
                    </div>

                    <div className="filter-choices-input">
                      <Input placeholder="Search courses by title" />
                    </div>
                  </CardHeader>

                  <div className="accordion accordion-flush">
                    <div className="card-body border-bottom">
                      <div>
                        <h4
                          className="text-uppercase fs-12 fw-medium mb-2 mt-4"
                          style={{ color: "#244a59", fontWeight: "bolder" }}
                        >
                          FILTER COURSES
                        </h4>
                        <h4
                          className="text-uppercase fs-16 fw-medium mb-2"
                          style={{ color: "#244a59", fontWeight: "bolder" }}
                        >
                          By Categories
                        </h4>

                        <CategoryFilter 
                        selectedCategories={selectedCategories}
                        setSelectedCategories={setSelectedCategories}
                        />

                        <div className="d-flex flex-column gap-2 mt-3">
                         
                        </div>
                        <h4
                          className="text-uppercase fs-12 fw-medium mb-2 mt-4"
                          style={{ color: "#244a59", fontWeight: "bolder" }}
                        >
                          FILTER COURSES
                        </h4>
                        <h4
                          className="text-uppercase fs-16 fw-medium mb-2"
                          style={{ color: "#244a59", fontWeight: "bolder" }}
                        >
                          By Months
                        </h4>

                        <div className="d-flex flex-column gap-2 mt-3">
                          <MonthFilter />

                          {/* <div>
                            <p className="text-decoration-none fw-medium p-0">
                              Show More
                            </p>
                          </div> */}
                        </div>
                        <h4
                          className="text-uppercase fs-12 fw-medium mb-2 mt-4"
                          style={{ color: "#244a59", fontWeight: "bolder" }}
                        >
                          FILTER Year
                        </h4>
                        <h4
                          className="text-uppercase fs-16 fw-medium mb-2"
                          style={{ color: "#244a59", fontWeight: "bolder" }}
                        >
                          By Categories
                        </h4>

                        <div className="d-flex flex-column gap-2 mt-3">
                          <Row>
                            <Col>
                              {" "}
                              <div className="form-check">
                                <input
                                  style={{ backgroundColor: "#244a59" }}
                                  className="form-check-input"
                                  type="checkbox"
                                  id="productBrandRadio5"
                                  defaultChecked
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="productBrandRadio5"
                                >
                                  2023
                                </label>
                              </div>
                            </Col>
                            <Col>
                              {" "}
                              <div className="form-check">
                                <input
                                  style={{ backgroundColor: "#244a59" }}
                                  className="form-check-input"
                                  type="checkbox"
                                  id="productBrandRadio5"
                                  defaultChecked
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="productBrandRadio5"
                                >
                                  2024
                                </label>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <h4
                          className="text-uppercase fs-12 fw-medium mb-2 mt-5"
                          style={{ color: "#244a59", fontWeight: "bolder" }}
                        >
                          Discover
                        </h4>
                        <h4
                          className="text-uppercase fs-16 fw-medium mb-2"
                          style={{ color: "#244a59", fontWeight: "bolder" }}
                        >
                          Other Venues
                        </h4>

                        <div className="d-flex flex-column gap-2 mt-3">
                          <Row>
                            <div>
                              {Object.keys(locations).map((region) => (
                                <div key={region}>
                                  <h6 className="mt-2">{region}</h6>

                                  {locations[region]
                                    .slice(
                                      0,
                                      showAll ? locations[region].length : 5
                                    )
                                    .map((location, index) => (
                                      <div key={index} className="d-flex gap-1">
                                        <div className="form-check">
                                          <input
                                            style={{
                                              backgroundColor: "#244a59",
                                            }}
                                            className="form-check-input"
                                            type="checkbox"
                                            id={`locationCheckbox${region}${index}`}
                                            defaultChecked
                                            onChange={() =>
                                              handleLocationChange(
                                                region,
                                                location
                                              )
                                            }
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor={`locationCheckbox${region}${index}`}
                                          >
                                            {`${region} - ${location}`}
                                          </label>
                                        </div>
                                      </div>
                                    ))}
                                </div>
                              ))}

                              {Object.keys(locations).some(
                                (region) => locations[region].length > 5
                              ) && (
                                <button
                                  onClick={() => setShowAll(!showAll)}
                                  className="btn"
                                >
                                  {showAllLocations ? "Show Less" : "Show More"}
                                </button>
                              )}

                              {/* Display the selected locations */}
                              <div>
                                {/* <h6 className="mt-2">Selected Locations:</h6> */}
                                {/* <ul>
          {selectedLocations.map((selected, index) => (
            <li key={index}>{selected}</li>
          ))}
        </ul> */}
                              </div>
                            </div>
                          </Row>
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

                      <Nouislider
                        range={{ min: 0, max: 2000 }}
                        start={[0, 2000]}
                        connect
                        onSlide={onUpdate}
                        data-slider-color="primary"
                        id="product-price-range"
                      />
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

                  <div className="p-4">
                    <h4 style={{ color: "#00D084" }}>
                      Clear Filter <i className="bx bx-refresh "></i>
                    </h4>
                  </div>

                  <CardFooter
                    style={{
                      backgroundColor: "#244a59",
                      display: "grid",
                      justifyContent: "center",
                    }}
                  >
                    <h5 style={{ textAlign: "center", color: "white" }}>
                      Do you need more
                    </h5>
                    <h3 style={{ textAlign: "center", color: "white" }}>
                      Filter Options?
                    </h3>
                    <Button
                      style={{
                        backgroundColor: "white",
                        color: "#244a59",
                        alignItems: "center",
                      }}
                      className="btn btn-light"
                    >
                      Course Finder
                    </Button>
                  </CardFooter>
                </Card>
              </Col>

              <div className="col-xl-9 col-lg-8">
                <div>
                  <div className="card" style={{ boxShadow: "none" }}>
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
                                {filteredItemList.length} Results Found
                              </h5>
                            </div>

                            <div className="d-grid gap-2">
                              <div
                                style={{ marginTop: "0.3rem" }}
                                className="text-end"
                              >
                                <select
                                  type="select"
                                  style={{
                                    borderRadius: "0.5rem",
                                    border: "1px solid #e0e0e0",
                                  }}
                                  className="btn"
                                  placeholder="Sort by"
                                >
                                  <option>Sorted by:</option>
                                  <option>Date</option>
                                  <option>Title</option>
                                </select>
                              </div>

                              <div>
                                <div style={{ display: "flex", gap: "0.5rem" }}>
                                  <div style={{ marginTop: "0.3rem" }}>
                                    <button
                                      className="btn btn-light"
                                      type="button"
                                      style={{
                                        borderRadius: "0.5rem",
                                        padding: "0.5rem",
                                        border: "1px solid #e0e0e0",
                                      }}
                                      placeholder="Sort by"
                                    >
                                      <i className="ri-download-2-line "></i>{" "}
                                      Download Excel
                                    </button>
                                  </div>
                                  <div style={{ marginTop: "0.3rem" }}>
                                    <button
                                      type="button"
                                      className="btn btn-light"
                                      style={{
                                        borderRadius: "0.5rem",
                                        padding: "0.5rem",
                                        border: "1px solid #e0e0e0",
                                      }}
                                      placeholder="Sort by"
                                    >
                                      <i className="ri-download-2-line "></i>{" "}
                                      Download Excel
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div id="selection-element">
                            <div className="my-n1 d-flex align-items-center text-muted">
                              Select{" "}
                              <div
                                id="select-content"
                                className="text-body fw-semibold px-1"
                              >
                                {dele}
                              </div>{" "}
                              Result{" "}
                              <button
                                type="button"
                                className="btn btn-link link-danger p-0 ms-3"
                                onClick={() => setDeleteModalMulti(true)}
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body pt-0">
                      {eventView === "list" ? (
                        <>
                          {filteredItemList.map((data) => (
                            <>
                              <Card>
                                <CardBody>
                                  <Col>
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                      }}
                                    >
                                      <h5
                                        className="fs-13"
                                        style={{
                                          fontWeight: "bolder",
                                          marginTop: "1rem",
                                        }}
                                      >
                                        {data.name}
                                      </h5>
                                      <div
                                        style={{
                                          height: "2rem",
                                          backgroundColor: "black",
                                          width: "1px",
                                          marginTop: "1rem",
                                          marginRight: "1.5rem",
                                        }}
                                      ></div>
                                      <h5
                                        className="fs-13"
                                        style={{
                                          fontWeight: "bolder",
                                          marginTop: "01rem",
                                          marginRight: "2rem",
                                        }}
                                      >
                                       {data.date}
                                      </h5>
                                      <div
                                        style={{
                                          height: "2rem",
                                          backgroundColor: "black",
                                          width: "1px",
                                          marginTop: "1rem",
                                          marginRight: "2rem",
                                        }}
                                      ></div>

                                      <h5
                                        className="fs-13"
                                        style={{
                                          fontWeight: "bolder",
                                          marginTop: "0.4rem",
                                          width: "max-content",
                                          marginRight: "2rem",
                                        }}
                                      >
                                        {data.location}
                                        <Link to="/course-details">
                                          <i
                                            className="bx bxs-chevron-right-circle"
                                            style={{
                                              fontSize: "1.5rem",
                                              padding: "0.5rem",
                                              position: "relative",
                                              top: "0.3rem",
                                              color: "#244a59",
                                            }}
                                          ></i>
                                        </Link>
                                      </h5>
                                    </div>
                                  </Col>
                                </CardBody>
                              </Card>
                            </>
                          ))}
                        </>
                      ) : (
                        // Grid view
                        <div>
                          <Col>
                            <Card>
                              <CardBody>
                                <Row style={{ display: "flex" }}>
                                  <Col sm={6} xl={3} md={5}>
                                    <Card
                                      style={{
                                        borderBottomRightRadius: "2rem",
                                      }}
                                    >
                                      <img
                                        className="card-img-top img-fluid"
                                        src={buss}
                                        alt="Card cap"
                                        style={{
                                          filter: "brightness(50%)",
                                        }}
                                      />
                                      <h5
                                        style={{
                                          position: "absolute",
                                          top: "4rem",
                                          zIndex: "1",
                                          color: "white",
                                          fontWeight: "bolder",
                                        }}
                                        className="text-center p-2 fs-17"
                                      >
                                        Contract Management Principles &
                                        practice
                                      </h5>

                                      <CardBody>
                                        <h4
                                          className="card-title mb-2"
                                          style={{
                                            textAlign: "center",
                                            fontWeight: "bolder",
                                          }}
                                        >
                                          03 - 07 Jul 2023
                                        </h4>
                                        <p
                                          className="card-text"
                                          style={{
                                            textAlign: "center",
                                            fontWeight: "bolder",
                                          }}
                                        >
                                          ACCRA - GH
                                        </p>
                                        <p style={{ textAlign: "center" }}>
                                          <Link to="/course-details">
                                            <i
                                              className="bx bxs-chevron-right-circle"
                                              style={{
                                                fontSize: "1.5rem",
                                                padding: "0.5rem",
                                                position: "relative",
                                                top: "0.3rem",
                                                color: "#244a59",
                                              }}
                                            ></i>
                                          </Link>
                                        </p>
                                      </CardBody>
                                    </Card>
                                  </Col>
                                </Row>
                              </CardBody>
                            </Card>
                          </Col>
                        </div>
                      )}
                    </div>

                    {/* <div className="card-body">
                  <TabContent className="text-muted">
                    <TabPane>
                      <div
                        id="table-product-list-all"
                        className="table-card gridjs-border-none pb-2"
                      >
                      </div>
                    </TabPane>
                  </TabContent>
                </div> */}
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1.2rem",
          backgroundColor: "#244a59",
        }}
        className="mt-5"
      >
        <div>
          <img src={online} alt="online-img" className="img-fluid"></img>
        </div>
        <div className="p-3">
          <div style={{ marginTop: "5rem" }}>
            <h6 style={{ fontWeight: "bolder", color: "white" }}>
              DISCOVER OUR
            </h6>
            <h4 style={{ fontWeight: "bolder", color: "white" }}>
              ONLINE TRAINING
            </h4>
            <h4 style={{ fontWeight: "bolder", color: "white" }}>COURSES</h4>
          </div>
          <div>
            <Link to="/course-details">
              <i
                className="bx bxs-chevron-right-circle"
                style={{
                  fontSize: "1.5rem",
                  padding: "0.5rem",
                  position: "relative",
                  top: "0.3rem",
                  color: "#244a59",
                }}
              ></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainingEvents;
