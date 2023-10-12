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
  Spinner,
} from "reactstrap";
import {
  generalJobs,
  jobs,
  category as catAction,
  saveJobs,
  fullJobDetails,
  findJob,
} from "../../../../store/actions";
import classnames from "classnames";

import seaTech from "./seaTech.png";
import { useSelector, useDispatch } from "react-redux";

// import buss from "./buss.png";
// import online from "./online.png";

import { toast, ToastContainer } from "react-toastify";
import placesData from "../../../../common/data/cities.json";
import catData from "../../../../common/data/categories.json";

import "nouislider/distribute/nouislider.css";
import { formatDate } from "../../../../Components/Hooks/formatDate";
import { useNavigate } from "react-router-dom";

const JobList = (props) => {
  const dispatch = useDispatch();

  const [showAll, setShowAll] = useState(false);

  const { searchData } = useSelector((state) => ({
    searchData: state.Jobs.search,
  }));

  // Displat Delete Button
  const [dele, setDele] = useState(0);

  const JobType = [
    { name: "Permanent" },
    { name: "Contract" },
    { name: "Internship" },
    { name: "Part Time" },
    { name: "Learnership" },
  ];

  const navigate = useNavigate();

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

  const [locations, setLocations] = useState(false);
  const [vetCategory, setVetCategory] = useState(false);
  const [type, setType] = useState(false);
  const [level, setLevel] = useState(false);
  const [companyType, setCompanyType] = useState(false);
  const [salary, setSalary] = useState(false);

  const [jobTitle, setJobTitle] = useState(searchData || "");
  const [location, setLocation] = useState("Select Location");
  const [category, setCategory] = useState("Select Category");

  const toggleLocations = () => {
    setLocations(!locations);
  };
  const toggleCategory = () => {
    setVetCategory(!vetCategory);
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

  const decodeHTML = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
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

  useEffect(() => {
    dispatch(generalJobs({ viewAction: "" }));
  }, [dispatch]);

  const { loading, error, jobsInfo } = useSelector((state) => ({
    loading: state.Jobs.generalJobsLoaing,
    error: state.Jobs.generalJobsError,
    jobsInfo: state.Jobs.generalJobs,
  }));

  const { catLoading, catError, categoryInfo } = useSelector((state) => ({
    catLoading: state.Industry.loading,
    catError: state.Industry.error,
    categoryInfo: state.Industry.categoryInfo,
  }));

  useEffect(() => {
    dispatch(catAction({ viewAction: "" }));
  }, [dispatch]);

  const [likedJobs, setLikedJobs] = useState({});

  // Function to toggle the liked status for a specific job
  const toggleLike = (jobId) => {
    setLikedJobs((prevLikedJobs) => ({
      ...prevLikedJobs,
      [jobId]: !prevLikedJobs[jobId], // Toggle the liked status
    }));
  };

  const [jobsData, setJobsData] = useState(jobsInfo);
  const [selectedLocation, setSelectedLocation] = useState(null); // To store the selected location

  useEffect(()=>(
   setJobsData(jobsInfo) 
  ), [jobsInfo])

  // Function to handle location button click
  const handleLocationClick = (location) => {
    // Set the selected location
    setSelectedLocation(location);

    // Filter jobs based on the selected location
    const filteredJobs = jobsData?.filter(
      (job) => job.jobLocation === location
    );

    // Update the Redux state to show only the filtered jobs
    // dispatch(setJobsData(filteredJobs));
    setJobsData(filteredJobs);
  };

  // Reset the location filter
  const resetLocationFilter = () => {
    setSelectedLocation(null);
    setJobsData(jobsInfo);
    // Reset the Redux state to the original job data
    // dispatch(setJobsData([...]); // Set the original job data here
  };

  const [selectedCategory, setSelectedCategory] = useState(categoryInfo); // Initialize with null

  // Function to handle category button click
  const handleCategoryClick = (categoryName) => {
    // Set the selected category
    setSelectedCategory(categoryName);

    // Filter jobs based on the selected category
    const filteredJobs = jobsData.filter(
      (job) => job.jobCategoryName === categoryName
    );

    // Update the job data to show only the filtered jobs
    setJobsData(filteredJobs);
  };

  // Reset the category filter
  const resetCategoryFilter = () => {
    setSelectedCategory(null); // Reset to null
    // Restore the original job data
    setJobsData(jobsInfo); // Set the original job data here
  };

  const [selectedJobType, setSelectedJobType] = useState(JobType);

  // Function to handle job type filter click
  const handleJobTypeClick = (jobType) => {
    setSelectedJobType(jobType);

    // Filter jobs based on the selected job type
    const filteredJobs = jobsData.filter((job) => job.jobStatus === jobType);

    // Update the job data to show only the filtered jobs
    setJobsData(filteredJobs);
  };

  // Reset the job type filter
  const resetJobTypeFilter = () => {
    setSelectedJobType(null);
    // Restore the original job data
    setJobsData(jobsInfo);
  };

  const [jobTitleInput, setJobTitleInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const [filteredJobData, setFilteredJobData] = useState([]);
  //const [jobData, setJobData] = useState([]);  // This should contain your data

  useEffect(() => {
    // Load your data here. Replace this with your data loading logic.
    // Example: fetch("your_api_endpoint").then(response => setData(response.data));
  }, []);

  const handleSearchClick = () => {
    // Filter the data based on the selected values.
    const filtered = jobsData.filter((item) => {
      const titleMatch = jobTitleInput
        ? item.jobTitle.toLowerCase().includes(jobTitleInput.toLowerCase())
        : true;
      const locationMatch = locationInput
        ? item.jobLocation === locationInput
        : true;
      const categoryMatch = categoryInput
        ? item.jobCategoryName === categoryInput
        : true;

      return titleMatch && locationMatch && categoryMatch;
    });

    setJobsData(filtered);
  };

  return (
    <>
      <Row
        className="d-flex p-5"
        style={{ justifyContent: "center", backgroundColor: "#244a59" }}
      >
        <Row
          style={{ backgroundColor: "#244a59", height: "30vh" }}
          className="text-light align-items-center justify-content-center d-flex mx-5"
          xl={6}
        >
          <Col lg={3} className="m-1">
            <Input
              type="text"
              style={{
                borderBottom: "2px solid white",
                background: "none",
                color: "white",
                borderRadius: "5px",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
              }}
              placeholder="Job title, skills or company"
              className="p-3"
              value={jobTitleInput}
              onChange={(e) => setJobTitleInput(e.target.value)}
            />
          </Col>

          <Col lg={3} className="m-1">
            <select
              style={{
                borderBottom: "2px solid white",
                background: "none",
                color: "white",
                borderRadius: "5px",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                backgroundColor: "#244a59",
              }}
              className="p-3 w-100"
              value={locationInput}
              onChange={(e) => setLocationInput(e.target.value)}
            >
              <option  value="">Select Location</option>
              {Object.entries(placesData).map(([region, cities], index) => (
                <optgroup key={index} label={region}>
                  {cities.map((city, cityIndex) => (
                    <option key={cityIndex} value={city}>
                      {city}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </Col>

          <Col lg={3} className="m-1">
            <select
              style={{
                borderBottom: "2px solid white",
                background: "none",
                color: "white",
                borderRadius: "5px",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                backgroundColor: "#244a59",
              }}
              className="p-3 w-100"
              value={categoryInput}
              onChange={(e) => setCategoryInput(e.target.value)}
            >
              <option value="">Select Category</option>
              {catLoading === false && catError === false ? (
                categoryInfo?.map((item, key) => (
                  <option key={key} value={item?.jobCategoryId}>
                    {item?.jobCategoryName}
                  </option>
                ))
              ) : (
                <option>loading categories...</option>
              )}
            </select>
          </Col>

          <Col xs={3} className="m-1">
            <Button
              style={{ backgroundColor: "#00d084", border: "none" }}
              className="btn p-3 w-100"
               onClick={handleSearchClick}
            >
              Search
            </Button>
          </Col>
        </Row>
      </Row>

      <div className="page-content">
        <ToastContainer closeButton={false} limit={1} />
        {/* <DeleteModal
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
        /> */}

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
                            <NavLink onClick={toggleLocations}>
                              <div
                                className="d-flex"
                                style={{
                                  justifyContent: "space-between",
                                  color: "black",
                                }}
                              >
                                <div>
                                  <h4 style={{}} className="fw-bolder">
                                    Locations
                                  </h4>
                                </div>

                                <div
                                  style={{
                                    cursor: "pointer",
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
                                      .map((location, index) => {
                                        // Determine if this location is currently selected
                                        const isSelected =
                                          selectedLocation === location;
                                        // Calculate the job count for the current location
                                        const jobCount = jobsInfo.filter(
                                          (job) => job.jobLocation === location
                                        ).length;
                                        // Determine if this location is currently selected

                                        return (
                                          <div
                                            key={index}
                                            className="d-flex gap-1"
                                          >
                                            <button
                                              onClick={() => {
                                                if (isSelected) {
                                                  resetLocationFilter();
                                                } else {
                                                  handleLocationClick(location);
                                                }
                                              }}
                                              style={{
                                                padding: "0.7rem",
                                                backgroundColor: isSelected
                                                  ? "#e0e0e0"
                                                  : "#ebeff0",
                                                color: isSelected
                                                  ? "black"
                                                  : "gray",
                                                borderRadius: "0.5rem",
                                                width: "85%",
                                                border: 'none'
                                              }}
                                              className="mt-1"
                                            >
                                              <div
                                                className="d-flex"
                                                style={{
                                                  justifyContent:
                                                    "space-between",
                                                }}
                                              >
                                                <span>{location}</span>
                                                <span>({jobCount})</span>
                                                {isSelected && (
                                                  <i className="bx bx-check fs-16 fw-bolder"></i>
                                                )}
                                              </div>
                                            </button>

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
                                              <p
                                                style={{ textAlign: "center" }}
                                              >
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
                                    {/* Your "Show More" logic here */}
                                  </div>
                                ))}
                              </Nav>
                            </Collapse>
                          </NavItem>
                        </Nav>
                        <Nav vertical>
                          <NavItem>
                            <NavLink onClick={toggleCategory}>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  cursor: "pointer",
                                  color: "black",
                                }}
                              >
                                <div>
                                  <h4 className="fw-bolder">Category</h4>
                                </div>

                                <div
                                  style={{
                                    cursor: "pointer",
                                  }}
                                >
                                  {vetCategory ? (
                                    <i className="bx bxs-chevron-up fs-16 fw-bolder"></i>
                                  ) : (
                                    <i className="bx bxs-chevron-down fs-16 fw-bolder"></i>
                                  )}
                                </div>
                              </div>
                            </NavLink>
                            <Collapse isOpen={vetCategory} className="ml-4">
                              <Nav vertical>
                                {categoryInfo?.map((category, index) => {
                                  // Calculate the job count for the current category
                                  const jobCount = jobsData.filter(
                                    (job) =>
                                      job.jobCategoryName ===
                                      category.jobCategoryName
                                  ).length;

                                  return (
                                    <div key={index} className="d-flex gap-1">
                                      <button
                                        onClick={() => {
                                          if (
                                            selectedCategory ===
                                            category.jobCategoryName
                                          ) {
                                            resetCategoryFilter();
                                          } else {
                                            handleCategoryClick(
                                              category.jobCategoryName
                                            );
                                          }
                                        }}
                                        style={{
                                          padding: "0.7rem",
                                          backgroundColor:
                                            selectedCategory ===
                                            category.jobCategoryName
                                              ? "#e0e0e0"
                                              : "#ebeff0",
                                          color:
                                            selectedCategory ===
                                            category.jobCategoryName
                                              ? "black"
                                              : "gray",
                                          borderRadius: "0.5rem",
                                          width: "85%",
                                          border: 'none'
                                        }}
                                        className="mt-1"
                                      >
                                        <div
                                          className="d-flex"
                                          style={{
                                            justifyContent: "space-between",
                                          }}
                                        >
                                          <span>
                                            {category?.jobCategoryName}
                                          </span>
                                         ({jobCount})
                                          {selectedCategory ===
                                            category.jobCategoryName && (
                                            <i className="bx bx-check fs-16 fw-bolder"></i>
                                          )}
                                        </div>
                                      </button>

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
                            <NavLink onClick={toggleType}>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",

                                  color: "black",
                                  cursor: "pointer",
                                }}
                              >
                                <div>
                                  <h4 className="fw-bolder">Job Type</h4>
                                </div>

                                <div
                                  style={{
                                    cursor: "pointer",
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
                                {JobType.map((jobType, index) => {
                                  // Calculate the job count for the current job type
                                  const jobCount = jobsData.filter(
                                    (job) => job.jobStatus === jobType.name
                                  ).length;

                                  return (
                                    <div key={index} className="d-flex gap-1">
                                      <button
                                        onClick={() => {
                                          if (
                                            selectedJobType === jobType.name
                                          ) {
                                            resetJobTypeFilter();
                                          } else {
                                            handleJobTypeClick(jobType.name);
                                          }
                                        }}
                                        style={{
                                          padding: "0.7rem",
                                          backgroundColor:
                                            selectedJobType === jobType.name
                                              ? "#e0e0e0"
                                              : "#ebeff0",
                                          color:
                                            selectedJobType === jobType.name
                                              ? "black"
                                              : "gray",
                                          borderRadius: "0.5rem",
                                          width: "85%",
                                          border: 'none'
                                        }}
                                        className="mt-1"
                                      >
                                        <div
                                          className="d-flex"
                                          style={{
                                            justifyContent: "space-between",
                                          }}
                                        >
                                          <span>{jobType.name}</span>
                                         ({jobCount})
                                          {selectedJobType === jobType.name && (
                                            <i className="bx bx-check fs-16 fw-bolder"></i>
                                          )}
                                        </div>
                                      </button>

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
                            <NavLink onClick={toggleLevel}>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",

                                  color: "black",
                                  cursor: "pointer",
                                }}
                              >
                                <div>
                                  <h4 className="fw-bolder">Job Level</h4>
                                </div>

                                <div
                                  style={{
                                    cursor: "pointer",
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
                            <NavLink onClick={toggleCompanyType}>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",

                                  color: "black",
                                  cursor: "pointer",
                                }}
                              >
                                <div>
                                  <h4 className="fw-bolder">Company Type</h4>
                                </div>

                                <div
                                  style={{
                                    cursor: "pointer",
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
                              {jobsData?.length} Results Found
                            </h5>
                          </div>
                        </div>

                        {loading === false && error === false ? (
                          jobsData?.map((item) => (
                            <>
                              <Card
                                style={{
                                  border: "1px solid #ebeff0",
                                  boxShadow: "none",
                                }}
                                className="p-2"
                              >
                                <CardBody>
                                  <Row className="align-items-center">
                                    <Col md={8}>
                                      <div className="d-flex flex-column">
                                        <h4
                                          style={{
                                            fontWeight: "bold",
                                            color: "#244a59",
                                            cursor: "pointer",
                                          }}
                                          onClick={() => {
                                            dispatch(
                                              findJob({
                                                jobId: item?.jobId,
                                              })
                                            );
                                            navigate(
                                              `/job-details?.title=B&id=${item?.jobId}`
                                            );
                                          }}
                                        >
                                          {item?.jobTitle}
                                        </h4>
                                        <h4
                                          style={{
                                            fontWeight: "bold",
                                            color: "#244a59",
                                          }}
                                          className="fs-15"
                                        >
                                          {item?.companyName}
                                        </h4>
                                        <p>{item?.jobLocation}</p>
                                        <div className="d-flex align-items-center">
                                          <i className="bx bx-calendar p-1">
                                            {" "}
                                          </i>{" "}
                                          Expired
                                          <p className="mx-2 mt-3">
                                            {formatDate(item?.goLiveDate)}
                                          </p>
                                        </div>
                                        <p
                                          className="mt-3"
                                          style={{ width: "80%" }}
                                        >
                                          <div
                                            dangerouslySetInnerHTML={{
                                              __html: decodeHTML(
                                                item?.jobDescription.substring(
                                                  0,
                                                  100
                                                ) +
                                                  (item?.jobDescription.length >
                                                  100
                                                    ? "..."
                                                    : "")
                                              ),
                                            }}
                                          ></div>
                                        </p>
                                      </div>
                                    </Col>
                                    <Col
                                      md={4}
                                      className="d-flex flex-column align-items-end"
                                    >
                                      <div className="logo-container">
                                        <img
                                          src={
                                            "https://108.166.181.225:5050/uploads/image/logos/" +
                                            item?.companyLogo
                                          }
                                          alt=""
                                          style={{
                                            maxWidth: "80px",
                                            maxHeight: "60px",
                                          }}
                                        />
                                      </div>
                                      <Button
                                        type="button"
                                        className="btn btn-dark btn-soft-primary"
                                        style={{
                                          backgroundColor: "white",
                                          boxShadow: "none",
                                          marginTop: "5rem",
                                          position: "relative",
                                          left: "-1rem",
                                        }}
                                        onClick={() => {
                                          dispatch(
                                            saveJobs({ jobId: item?.jobId })
                                          );
                                          toggleLike(item.jobId);
                                        }}
                                      >
                                        <i
                                          className={`bx bx-heart fs-20 fw-bolder ${
                                            likedJobs[item.jobId]
                                              ? "bx bxs-heart"
                                              : ""
                                          }`}
                                          style={{ color: "#244a59" }}
                                        ></i>
                                      </Button>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                            </>
                          ))
                        ) : (
                          <div className="d-flex align-items-center justify-content-center">
                            {loading === true ? (
                              <>
                                <p className="d-flex hstack justify-content-center">
                                  <Spinner
                                    size="lg"
                                    className="me-2 mt-5"
                                    style={{ color: "#244a59" }}
                                  ></Spinner>
                                </p>
                              </>
                            ) : (
                              <>
                                <p className="fw-light mt-5">
                                  Job list information not available
                                </p>
                              </>
                            )}
                          </div>
                        )}
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
