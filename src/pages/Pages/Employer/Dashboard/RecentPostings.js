import React, { useState, useEffect } from "react";
import {
  Col,
  Row,
  CardBody,
  Card,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  approveJobs,
  employers,
  jobEditCloneData,
  jobs,
  updateJob,
} from "../../../../store/actions";
import { formatDate } from "../../../../Components/Hooks/formatDate";
import { Spinner } from "reactstrap";
import EditJobs from "./EditJobs";
import RepostJob from "../Jobs/RepostJob";
import RenewJob from "../Jobs/RenewJob";

const RecentPostings = () => {
  const [isOpenAction, setIsOpenAction] = useState({});

  const handleStatusClick = (label, item, icon, check) => {
    setSelectedStatus({
      ...selectedStatus,
      [item.jid]: { label, icon: check },
    });
    console.log(check);

    if (check === "close") {
      dispatch(
        approveJobs({
          jobId: item?.jobId,
          jobState: "declined",
        })
      );
    }
    if (check === "open") {
      dispatch(
        approveJobs({
          jobId: item?.jobId,
          jobState: "approved",
        })
      );
    }
  };

   const [repostIsOpen, setRepostIsOpen] = useState(false);

  const toggleRepostModal = () => {
    setRepostIsOpen(!repostIsOpen);
  };

  const [renewIsOpen, setRenewIsOpen] = useState(false);

  const toggleRenewModal = () => {
    setRenewIsOpen(!renewIsOpen);
  };

  const handleMenuOption = (item, check) => {
    // Handle the selected menu option here
    // You can perform actions based on the selected option, if needed
    console.log(`Selected option for jobId ${item.jobId}: ${check}`);
    toggleMenu(item.jobId); // Close the dropdown after selection if desired

    if (check === "Approve") {
      // dispatch(
      //   approveRateCard({
      //     rateId: item?.rateId,
      //     status: true,
      //   })
      // );
      dispatch(
        approveJobs({
          jobId: item?.jobId,
          jobState: "approved",
        })
      );
    }

    if (check === "Delete") {
      const patch = {
        deleterecord: true,
        restore: 0,
        patch: false,
        jobId: item?.jobId,
        patchData: {
          jobCategoryId: item?.jobCategoryId,
          jobTitle: item?.jobTitle,
          jobLocation: item?.jobLocation,
          jobSalaryAmount: item?.jobSalaryAmount,
          companyId: "",
          isCompanyConfidential: "",
          jobDescription: item?.jobDescription,
          jobSkillsId: item?.jobSkillsId,
          jobSalaryCurrency: "Ghc",
          jobStatusId: item?.jobStatusId,
          applyMode: "",
          applyLink: "",
        },
      };

      console.log("delete");
      dispatch(updateJob(patch));
    }

    

    if (check === "edit") {
      setEditData(item);
      // console.log("edit");
      toggleModal();
      dispatch(jobEditCloneData(item));
    }

    if (check === "repost") {
      setEditData(item);
      // navigate("/renew-job");
      // toggleModal();
       dispatch(jobEditCloneData(item));
       toggleRepostModal()
    }

    if (check === "renewPosting") {
      setEditData(item);
      // navigate("/renew-job");
      // toggleModal();
       dispatch(jobEditCloneData(item));
       toggleRenewModal()
    }

    if (check === "clone") {
      // setEditData(item);
      // navigate("/edit-job");
      // toggleModal();

      const cloneData = {
        jobTitle: item?.jobTitle,
        jobCategoryId: 1,
        jobLocation: [
          {
            locationName: item?.jobLocation,
          },
        ],
        jobSalaryAmount: 200.0,
        companyId: 2,
        isCompanyConfidential: "no",
        jobDescription: item?.jobDescription,
        jobSkillsId: item?.jobSkills,
        jobSalaryCurrency: "Ghc",
        jobStatusId: item?.jobStatus,
        applyMode: "tracker",
        applyLink: "",
      };

      // dispatch(createJob(cloneData));
    }

 

    // if(check === "viewApplicants"){
    //   handleApplicant()
    //   dispatch(employerApplications({jobId: item?.jobId}))
    // }
  };


 
  const handleCloseRenew = () => {
    toggleRenewModal();
  };
  const handleCloseRepost = () => {
    toggleRepostModal();
  };
 

  const [isOpenActions, setIsOpenActions] = useState({});
  const toggleAction = (feedId) => {
    setIsOpenActions({
      ...isOpenActions,
      [feedId]: !isOpenActions[feedId],
    });
  };

  const actionList = [
    {
      label: "Approve ",
      color: "black",
      icon: "bx bx-pencil",
      check: "Approve",
    },
    {
      label: "Edit",
      color: "black",
      icon: "ri-delete-bin-fill",
      check: "Edit",
    },
    {
      label: "Delete",
      color: "black",
      icon: "ri-delete-bin-fill",
      check: "Delete",
    },
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const options = [
    { label: "Option 1", color: "red", icon: "bx bx-radio-circle-marked" },
    { label: "Option 2", color: "green", icon: "bx bx-radio-circle-marked" },
    { label: "Option 3", color: "blue", icon: "bx bx-radio-circle-marked" },
    { label: "Option 4", color: "orange", icon: "bx bx-radio-circle-marked" },
  ];

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

  const toggleStatus = (feedId) => {
    setIsOpenStatus({
      ...isOpenStatus,
      [feedId]: !isOpenStatus[feedId],
    });
  };

  // const handleOptionClick = (option) => {
  //   setSelectedOption(option); // Set the selected option in the state
  //   setIsOpen(false); // Close the dropdown menu when an option is clicked
  // };

  const dispatch = useDispatch();

  const [editData, setEditData] = useState({});

  useEffect(() => {
    dispatch(jobs({ viewAction: "" }));
  }, [dispatch]);

  const { loading, error, jobsInfo } = useSelector((state) => ({
    loading: state.Jobs.infoLoading,
    error: state.Jobs.infoError,
    jobsInfo: state.Jobs.jobsInfo,
  }));

  const handleCloseHandle = () => {
    toggleModal();
  };

  const [isMenu, setIsMenu] = useState({});

  const toggleMenu = (jobId) => {
    setIsMenu({
      ...isMenu,
      [jobId]: !isMenu[jobId],
    });
  };

  const handleOptionClick = (action, item, check) => {
    if (check === "Approve") {
      // dispatch(
      //   approveRateCard({
      //     rateId: item?.rateId,
      //     status: true,
      //   })
      // );
      dispatch(
        approveJobs({
          jobId: item?.jobId,
          jobState: "approved",
        })
      );
    }

    if (check === "Delete") {
      const patch = {
        deleterecord: true,
        restore: 0,
        patch: false,
        jobId: item?.jobId,
        patchData: {
          jobCategoryId: item?.jobCategoryId,
          jobTitle: item?.jobTitle,
          jobLocation: item?.jobLocation,
          jobSalaryAmount: item?.jobSalaryAmount,
          companyId: "",
          isCompanyConfidential: "",
          jobDescription: item?.jobDescription,
          jobSkillsId: item?.jobSkillsId,
          jobSalaryCurrency: "Ghc",
          jobStatusId: item?.jobStatusId,
          applyMode: "",
          applyLink: "",
        },
      };

      console.log("delete");
      dispatch(updateJob(patch));
    }

    if (check === "Edit") {
      setEditData(item);
      console.log("edit");
      toggleModal();
    }
  };

  const actionList2 = [
    {
      label: "Close",
      color: "#EB596B",
      icon: "ri-radio-button-line",
      check: "close",
    },
    {
      label: "Open",
      color: "#00D084",
      icon: "ri-radio-button-line",
      check: "open",
    },
  ];

  const actionList3 = [
    {
      label: "Edit",
      color: "black",
      icon: "bx bx-pencil",
      check: "edit",
    },
    // {
    //   label: "Clone",
    //   color: "black",
    //   icon: "bx bx-block",
    //   check: "clone",
    // },
    {
      label: "Repost",
      color: "black",
      icon: "bx bx-trending-up",
      check: "repost",
    },
    {
      label: "Renew Posting",
      color: "black",
      icon: "bx bx-trending-down",
      check: "renewPosting",
    },

    // {
    //   label: "View Applicants",
    //   color: "black",
    //   icon: "bx bx-eye",
    //   check: "viewApplicants",
    // },
  ];

  const [showEntries, setShowEntries] = useState(2);

  const handleShowEntriesChange = (e) => {
    setShowEntries(e.target.value);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = showEntries;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the current page of items
  const filter =
    loading === false &&
    error === false &&
    jobsInfo?.slice(startIndex, endIndex);

  // Function to handle page changes
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Determine if "Previous" and "Next" links should be disabled
  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = endIndex >= jobsInfo?.length;

  return (
    <>
      <div className="p-2">
        <div>
          <Row>
            <Col lg={12} className="mt-2">
              <div id="customerList">
                <div
                  className="table-responsive table-card mt-3 mb-1"
                  style={{ height: "40vh" }}
                >
                  <table
                    className="table align-middle table-nowrap"
                    id="customerTable"
                  >
                    <thead className="table-light">
                      <tr>
                        <th data-sort="location">Job Title</th>
                        <th data-sort="startDate">Location</th>
                        <th data-sort="expDate">Start Date</th>
                        <th data-sort="jobType">Expire Date</th>
                        <th data-sort="jobType">Job Type</th>
                        <th data-sort="jobType">Status</th>

                        <th data-sort="jobType">Applications</th>
                        <th data-sort="jobType">Action</th>
                        {/* <th  data-sort="jobType">
                              Job Type
                            </th>

                            <th  data-sort="jobType">
                              Applicants
                            </th>
                            <th data-sort="jobType">Action</th> */}
                      </tr>
                    </thead>
                    <tbody className="list form-check-all">
                      {loading === false && error === false ? (
                        filter?.map((item, key) => (
                          <tr key={key}>
                            <td className="customer_name">{item?.jobTitle}</td>
                            <td className="location">
                              {item?.jobLocation === ""
                                ? "-"
                                : item?.jobLocation}
                            </td>
                            <td className="startDate">
                              {formatDate(item?.goLiveDate)}
                            </td>
                            <td className="startDate">
                              {item?.goLiveDate && (
                                <span>
                                  {" "}
                                  {formatDate(
                                    new Date(
                                      new Date(item?.goLiveDate).getTime() +
                                        30 * 24 * 60 * 60 * 1000
                                    )
                                  )}
                                </span>
                              )}
                            </td>

                            {/* <td className="status">
                                  <p
                                    style={{
                                      backgroundColor:
                                        item?.jobState === "approved"
                                          ? "#e7f8f5"
                                          : "#fef8ed ",
                                      color:
                                        item?.jobState === "approved"
                                          ? "#00d084"
                                          : "#F7B84B",
                                      borderRadius: "5px",
                                      width: "max-content",
                                    }}
                                    className="p-1 mt-3"
                                  >
                                    {item?.jobState}
                                  </p>
                                </td> */}

<td>
                              <Dropdown
                                isOpen={isOpenActions[item.jobId] || false}
                                toggle={() => toggleAction(item.jobId)}
                              >
                                <DropdownToggle
                                  tag="p"
                                  onClick={() => toggleAction(item.jobId)}
                                  style={{
                                    cursor: "pointer",
                                    marginTop: "1rem",
                                  }}
                                >
                                  <div
                                    style={{
                                      border: "1px solid #e0e0e0",
                                      borderRadius: "40px",
                                      width: "max-content",
                                      justifyContent: "space-between",
                                    }}
                                    className="p-2 d-flex"
                                  >
                                    <div
                                      className="d-flex gap-2"
                                      style={{ width: "max-width" }}
                                    >
                                      <i
                                        className="ri-radio-button-line"
                                        style={{
                                          // color: selectedActions[item.jobId]
                                          //   ? selectedActions[item.jobId]
                                          //       .label === "Full Time"
                                          //     ? "#EB596B"
                                          //     : "#00d084"
                                          //   : "#EB596B",
                                          color:
                                            item?.jobStatus === "Contract"
                                              ? "#244A59"
                                              : item?.jobStatus === "Internship"
                                              ? "#706548"
                                              : item?.jobStatus === "Part Time"
                                              ? "#F7B84B"
                                              : item?.jobStatus === "Part Time"
                                              ? "0#0D084"
                                              : "black",
                                        }}
                                      ></i>
                                      {/* {selectedActions[item.jobId]
                                            ? selectedActions[item.jobId].label
                                            : actionList[0].label}{" "} */}

                                      {item?.jobStatus === null
                                        ? "Not Set"
                                        : item?.jobStatus}
                                      {/* Display selected label or default text */}
                                    </div>
                                    {/* <i className="ri-arrow-down-s-fill fw-bolder"></i> */}
                                  </div>
                                </DropdownToggle>
                                {/* <DropdownMenu>
                                      {actionList.map((action) => (
                                        <DropdownItem
                                          key={action.label}
                                          onClick={() => {
                                            handleOptionClick(
                                              action.label,
                                              item,
                                              action.icon
                                            );
                                          }}
                                          style={{
                                            cursor: "pointer",
                                            // color: action.color,
                                          }}
                                        >
                                          <i
                                            className={action.icon}
                                            style={{ color: action.color }}
                                          ></i>{" "}
                                          {action.label}
                                        </DropdownItem>
                                      ))}
                                    </DropdownMenu> */}
                              </Dropdown>
                            </td>
                            <td>
                              <Dropdown
                                isOpen={isOpenStatus[item.jobId] || false}
                                toggle={() => toggleStatus(item.jobId)}
                              >
                                <DropdownToggle
                                  tag="p"
                                  onClick={() => toggleStatus(item.jobId)}
                                  style={{
                                    cursor: "pointer",
                                    marginTop: "1rem",
                                  }}
                                >
                                  <div
                                    style={{
                                      border: "1px solid #e0e0e0",
                                      borderRadius: "40px",
                                      width: "max-content",
                                      justifyContent: "space-between",
                                    }}
                                    className="p-2 d-flex"
                                  >
                                    <div
                                      className="d-flex gap-2"
                                      style={{ width: "max-width" }}
                                    >
                                      <i
                                        className="ri-radio-button-line"
                                        // style={{
                                        //   color: selectedStatus[item.jobId]
                                        //     ? selectedStatus[item.jobId]
                                        //         .label === "Close"
                                        //       ? "#EB596B"
                                        //       : "#00d084"
                                        //     : "#EB596B",
                                        // }}
                                        style={{
                                          color:
                                            item?.jobState === "approved"
                                              ? "#00d084"
                                              : "#EB596B",
                                        }}
                                      ></i>
                                      {/* {selectedStatus[item.jobId]
                                            ? selectedStatus[item.jobId].label
                                            : actionList2[0].label}{" "} */}

                                      {/* Display selected label or default text */}
                                      {item?.jobState === "approved"
                                        ? "Open"
                                        : "Close"}
                                    </div>
                                    <i className="ri-arrow-down-s-fill fw-bolder"></i>
                                  </div>
                                </DropdownToggle>
                                <DropdownMenu>
                                  {actionList2.map((action) => (
                                    <DropdownItem
                                      key={action.label}
                                      onClick={() => {
                                        handleStatusClick(
                                          action.label,
                                          item,
                                          action.icon,
                                          action.check
                                        );
                                      }}
                                      style={{
                                        cursor: "pointer",
                                        // color: action.color,
                                      }}
                                    >
                                      <i
                                        className={action.icon}
                                        style={{ color: action.color }}
                                      ></i>{" "}
                                      {action.label}
                                    </DropdownItem>
                                  ))}
                                </DropdownMenu>
                              </Dropdown>
                            </td>

                            <td className="location">
                              <Button
                                className="btn"
                                style={{
                                  backgroundColor: "#00d084",
                                  border: "none",
                                }}
                              >
                                {" "}
                                {item?.applicantCount?.map((count) => {
                                  return count?.totalApplicants;
                                })}{" "}
                                Candidates
                              </Button>
                            </td>

                            <td>
                              <Dropdown
                                isOpen={isMenu[item?.jobId] || false}
                                toggle={() => toggleMenu(item?.jobId)}
                              >
                                <DropdownToggle
                                  tag="p"
                                  onClick={() => toggleMenu(item?.jobId)}
                                  style={{
                                    cursor: "pointer",
                                    marginTop: "1rem",
                                  }}
                                >
                                  <i className="bx bx-dots-vertical-rounded fs-20"></i>{" "}
                                </DropdownToggle>
                                <DropdownMenu>
                                  {actionList3.map((action) => (
                                    <DropdownItem
                                      key={action.label}
                                      onClick={() =>
                                        handleMenuOption(item, action.check)
                                      }
                                      style={{
                                        cursor: "pointer",
                                        color: action.color,
                                      }}
                                    >
                                      <i className={action.icon}></i>{" "}
                                      {action.label}
                                    </DropdownItem>
                                  ))}
                                </DropdownMenu>
                              </Dropdown>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="7" className="text-center mt-5">
                            <div className="d-flex align-items-center justify-content-center">
                              {loading === true ? (
                                <>
                                  <Spinner
                                    size="lg"
                                    className="me-2 mt-5"
                                    style={{ color: "#244a59" }}
                                  ></Spinner>
                                </>
                              ) : (
                                <>
                                  <p className="fw-light mt-5">
                                    You don't have any Jobs Setup at the moment.
                                  </p>
                                </>
                              )}
                            </div>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* <div className="d-flex justify-content-end">
                      <div className="pagination-wrap hstack gap-2">
                        <Link
                          className={`page-item pagination-prev ${
                            isPrevDisabled ? "disabled" : ""
                          }`}
                          to="#"
                          onClick={() =>
                            !isPrevDisabled && handlePageChange(currentPage - 1)
                          }
                        >
                          Previous
                        </Link>
                        <span
                          className="page-number p-2 px-3 text-light"
                          style={{ backgroundColor: "#244a59" }}
                        >
                          {" "}
                          {currentPage}
                        </span>
                        <ul className="pagination listjs-pagination mb-0"></ul>
                        <Link
                          className={`page-item pagination-next ${
                            isNextDisabled ? "disabled" : ""
                          }`}
                          to="#"
                          onClick={() =>
                            !isNextDisabled && handlePageChange(currentPage + 1)
                          }
                        >
                          Next
                        </Link>
                      </div>
                    </div> */}
              </div>
            </Col>
          </Row>
        </div>
      </div>

     
      <Modal isOpen={modalIsOpen} toggle={toggleModal} size="lg">
        <ModalHeader toggle={toggleModal}>Edit Job</ModalHeader>
        <ModalBody>
          <EditJobs data={editData} handleCloseHandle={handleCloseHandle} />
        </ModalBody>
      </Modal>

      <Modal isOpen={repostIsOpen} toggle={toggleRepostModal} size="lg">
        <ModalHeader toggle={toggleRepostModal}>Repost Job</ModalHeader>
        <ModalBody>
          <RepostJob data={editData} handleCloseRepost={handleCloseRepost} />
        </ModalBody>
      </Modal>

      <Modal isOpen={renewIsOpen} toggle={toggleRenewModal} size="lg">
        <ModalHeader toggle={toggleRenewModal}>Renew Job</ModalHeader>
        <ModalBody>
          <RenewJob data={editData} handleCloseRenew={handleCloseRenew} />
        </ModalBody>
      </Modal>
    </>
  );
};

export default RecentPostings;
