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
  jobs,
  updateJob,
} from "../../../../store/actions";
import { formatDate } from "../../../../Components/Hooks/formatDate";
import { Spinner } from "reactstrap";
import EditJobs from "./EditJobs";

const ManageJobs = () => {
  const [isOpenAction, setIsOpenAction] = useState({});

  const toggleAction = (industryId) => {
    const newIsOpenAction = { ...isOpenAction };

    newIsOpenAction[industryId] = !newIsOpenAction[industryId];

    setIsOpenAction(newIsOpenAction);
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

  const toggleStatus = () => {
    setIsOpenStatus(!isOpenStatus);
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

  return (
    <>
      <div className="p-2">
       
        <div>
          <Row>
            <Col lg={12} className="mt-2">
              <Card>
                <CardBody>
                  <div id="customerList">
                    <div
                      className="table-responsive table-card mt-3 mb-1"
                      style={{ height: "50vh" }}
                    >
                      <table
                        className="table align-middle table-nowrap"
                        id="customerTable"
                      >
                        <thead className="table-light">
                          <tr>
                            <th data-sort="location">Job Title</th>
                            <th data-sort="startDate">Location</th>
                            <th data-sort="expDate">Created At</th>
                            <th data-sort="jobType">Updated At</th>
                            {/* <th  data-sort="jobType">
                              Job Type
                            </th> */}
                            <th data-sort="jobType">Status</th>
                            {/* <th  data-sort="jobType">
                              Applicants
                            </th> */}
                            <th data-sort="jobType">Action</th>
                          </tr>
                        </thead>
                        <tbody className="list form-check-all">
                          {loading === false && error === false ? (
                            jobsInfo?.map((item, key) => (
                              <tr key={key}>
                                <td className="customer_name">
                                  {item?.jobTitle}
                                </td>
                                <td className="location">{item?.jobLocation}</td>
                                <td className="startDate">
                                  {formatDate(item?.createdAt)}
                                </td>
                                <td className="expDate">
                                  {" "}
                                  {item?.updatedAt === null
                                    ? "No updates made yet"
                                    : formatDate(item?.updatedAt)}
                                </td>
                                <td className="status">
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
                                </td>

                                <td>
                                  <Dropdown
                                    isOpen={isOpenAction[item?.jobId] || false}
                                    toggle={() => toggleAction(item?.jobId)}
                                  >
                                    <DropdownToggle
                                      tag="p"
                                      onClick={() => toggleAction(item?.jobId)}
                                      style={{
                                        cursor: "pointer",
                                        marginTop: "1rem",
                                      }}
                                    >
                                      <i className="bx bx-dots-vertical-rounded fs-20"></i>{" "}
                                    </DropdownToggle>
                                    <DropdownMenu>
                                      {actionList.map((action) => (
                                        <DropdownItem
                                          key={action.label}
                                          onClick={() => {
                                            handleOptionClick(
                                              action.label,
                                              item,
                                              action.check
                                            );
                                            //  action.label === "Approve" ? ApproveCourse(item?.courseId) : <p>s</p>
                                          }}
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
                                  {jobsInfo?.length > 1 ? (
                                    <Spinner
                                      size="lg"
                                      className="me-2 mt-5"
                                      style={{ color: "#244a59" }}
                                    >
                                      Loading...
                                    </Spinner>
                                  ) : (
                                    <p className="fw-light mt-5">
                                      No Job Status set up Yet
                                    </p>
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
                          className="page-item pagination-prev disabled"
                          to="#"
                        >
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
        </div>
      </div>

      <Modal isOpen={modalIsOpen} toggle={toggleModal} size="lg">
        <ModalHeader toggle={toggleModal}>Edit Job</ModalHeader>
        <ModalBody>
          <EditJobs data={editData} handleCloseHandle={handleCloseHandle} />
        </ModalBody>
        {/* <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
          <Button color="primary" onClick={toggleModal}>
            Confirm
          </Button>
        </ModalFooter> */}
      </Modal>
    </>
  );
};

export default ManageJobs;
