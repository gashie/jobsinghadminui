import React from "react";
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
  ModalBody,
  ModalHeader,
  Button,
  ModalFooter,
  Input,
  Label,
  Spinner,
  Form,
  FormFeedback,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { formatDate } from "../../../../Components/Hooks/formatDate";

import {
  approveCourse,
  course,
  courseContent,
  saveCourseContent,
  updateCourse,
  coursePartnership,
  courseSchedule,
  saveCoursePartnership,
  saveCourseSchedule,
  updateCourseContent,
  updateCoursePartnership,
  updateCourseSchedule,
} from "../../../../store/actions";
import AddContent from "./AddContent";
import EditCourse from "./EditCourse";

function Courses({ handleCourse }) {
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
    {
      label: "Add Content",
      color: "black",
      icon: "ri-delete-bin-fill",
      check: "Add Content",
    },
    {
      label: "Add Partnership",
      color: "black",
      icon: "ri-delete-bin-fill",
      check: "Add Partnership",
    },
    {
      label: "Add Schedule",
      color: "black",
      icon: "ri-delete-bin-fill",
      check: "Add Schedule",
    },
  ];

  const [isOpenAction, setIsOpenAction] = useState({});

  const toggleAction = (industryId) => {
    const newIsOpenAction = { ...isOpenAction };

    newIsOpenAction[industryId] = !newIsOpenAction[industryId];

    setIsOpenAction(newIsOpenAction);
  };

  const [addCategoryModal, setAddCategoryModal] = useState(false);
  const [addQuestionModal, setAddQuestionModal] = useState(false);

  const [addContentModal, setAddContentModal] = useState(false);
  const [addPartnershipModal, setAddPartnershipModal] = useState(false);
  const [addScheduleModal, setAddScheduleModal] = useState(false);

  const [viewPartnershipModal, setViewPartnershipModal] = useState(false);
  const [viewScheduleModal, setViewScheduleModal] = useState(false);

  function toggleAddCategory() {
    setAddCategoryModal(!addCategoryModal);
  }

  function toggleAddQuestion() {
    setAddQuestionModal(!addQuestionModal);
  }

  function toggleAddContentModal() {
    setAddContentModal(!addContentModal);
  }
  function toggleAddPartnershipModal() {
    setAddPartnershipModal(!addPartnershipModal);
  }
  function toggleScheduleModal() {
    setAddScheduleModal(!addScheduleModal);
  }
  function toggleViewPartnership() {
    setViewPartnershipModal(!viewPartnershipModal);
  }
  function toggleViewSchedule() {
    setViewScheduleModal(!viewScheduleModal);
  }

  const [selectFile, setFile] = useState();

  const { loading, error, courseInfo, content, schedule, partnership } =
    useSelector((state) => ({
      loading: state.Courses.loading,
      error: state.Courses.error,
      courseInfo: state.Courses.courseInfo,
      content: state.Courses.courseContent,
      schedule: state.Courses.courseSchedule,
      partnership: state.Courses.coursePartnership,
    }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(course({ viewAction: "" }));
  }, [dispatch]);

  const [editData, setEditData] = useState({});

  const handleOptionClick = (action, item, check) => {
    if (check === "Approve") {
      dispatch(
        approveCourse({
          courseId: item?.courseId,
          status: true,
        })
      );
    }

    if (check === "Edit") {
      toggleQuestionModal();
      setEditData(item);
    }

    if (check === "Add Content") {
      setAddContentModal(true);
      setEditContent("");
      console.log(item?.courseId);
    }

    if (check === "Add Partnership") {
      setEditContent("");
      setAddPartnershipModal(true);
    }

    if (check === "Add Schedule") {
      setEditContent("");
      setAddScheduleModal(true);
    }

    if (check === "Delete") {
      console.log(item);

      const deleteData = new FormData();

      deleteData.append("courseId", item?.courseId);
      // formData.append("patch", false);
      deleteData.append("deleterecord", true);
      // formData.append("restore", false);
      // formData.append("patchData", patchData);
      // formData.append("courseImage", item?.courseImage);
      // formData.append("courseVideoAd", item?.courseVideoAd);
      // formData.append("courseBrochure", item?.courseBrochure);

      dispatch(updateCourse(deleteData));
    }

    // if (action.label === `${action.label}`) {
    //   dispatch(
    //     approveCourse({
    //       courseId: item?.courseId,
    //       status: true,
    //     })
    //   );
    // }
  };

  const [presentId, setPresentId] = useState("");

  const [editContent, setEditContent] = useState("");
  const [editContentInfo, setEditContentInfo] = useState({});
  const [editPartInfo, setEditPartInfo] = useState({});
  const [editschInfo, setEditschInfo] = useState({});

  const handleContentEdit = (edit) => {
    setEditContent("edit");
    setEditContentInfo(edit);
    toggleAddContentModal();
  };

  const handleEditPart = (edit) => {
    setEditContent("edit");
    setEditPartInfo(edit);
    toggleAddPartnershipModal();
  };

  const handleEditSch = (edit) => {
    setEditContent("edit");
    setEditschInfo(edit);
    toggleScheduleModal();
  };

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      courseId: "",
      contentTitle: editContent === "edit" ? editContentInfo?.contentTitle : "",
      contentFile: "",
      contentDesc: editContent === "edit" ? editContentInfo?.contentDesc : "",
      contentLink: editContent === "edit" ? editContentInfo?.contentLink : "",
    },
    validateOnChange: true,

    onSubmit: (values) => {
      if (editContent !== "edit") {
        const saveData = new FormData();
        saveData.append("courseId", presentId);
        saveData.append("contentTitle", values.contentTitle);
        saveData.append("contentFile", selectFile);
        saveData.append("contentDesc", values.contentDesc);
        saveData.append("contentLink", values.contentLink);

        dispatch(saveCourseContent(saveData));
      }
      if (editContent === "edit") {
        const patchData = {
          courseId: presentId,
          contentTitle: values.contentTitle,
          contentFile: values.contentFile,
          contentDesc: values.contentDesc,
          contentLink: values.contentLink,
          contentId: editContentInfo?.contentId,
        };

        const saveDataPatch = new FormData();
        saveDataPatch.append("contentId", editContentInfo?.contentId);
        saveDataPatch.append("patch", "delete");
        saveDataPatch.append("restore", false);
        saveDataPatch.append("patchData", JSON.stringify(patchData));
        saveDataPatch.append("contentFile", selectFile);
        dispatch(updateCourseContent(saveDataPatch));
      }

      validation.resetForm();
      setAddContentModal(false);
    },
  });

  const [logo, setLogo] = useState();

  const partnershipValidation = useFormik({
    enableReinitialize: true,
    initialValues: {
      institutionName: "",
      institutionLogo: "",
    },
    validateOnChange: true,

    onSubmit: (values) => {
      const saveData = new FormData();

      if (editContent !== "edit") {
        saveData.append("courseId", presentId);
        saveData.append("institutionName", values.institutionName);
        saveData.append("institutionLogo", logo);

        dispatch(saveCoursePartnership(saveData));
      }

      if (editContent === "edit") {
        const patchData = {
          courseId: presentId,
          institutionName: values.institutionName,
        };

        const saveDataPatch = new FormData();
        saveDataPatch.append("patch", true);
        saveDataPatch.append("institutionLogo", logo);
        saveDataPatch.append("partnerId", editPartInfo?.partnerId);
        saveDataPatch.append("patchData", JSON.stringify(patchData));
        saveDataPatch.append("restore", false);
        dispatch(updateCoursePartnership(saveDataPatch));
      }

      validation.resetForm();
      setAddPartnershipModal(false);
    },
  });

  const scheduleValidation = useFormik({
    enableReinitialize: true,
    initialValues: {
      scheduleTitle: "",
      startTime: "",
      endTIme: "",
    },
    validateOnChange: true,

    onSubmit: (values) => {
      if (editContent === "edit") {
        const patchData = {
          deleterecord: false,
          restore: 0,
          scheduleId: editschInfo.scheduleId,
          patch: true,
          patchData: {
            courseId: presentId,
            scheduleTitle: values.scheduleTitle,
            startTime: values.startTime,
            endTime: values.endTIme,
          },
        };

        dispatch(updateCourseSchedule(patchData));
      }

      if (editContent !== "edit") {
        const saveData = {
          courseId: presentId,
          scheduleTitle: values.scheduleTitle,
          startTime: values.startTime,
          endTime: values.endTIme,
        };
        dispatch(saveCourseSchedule(saveData));
      }

      validation.resetForm();
      setAddScheduleModal(false);
    },
  });

  const [questionIsOpen, setQuestionIsOpen] = useState(false);

  const toggleQuestionModal = () => {
    setQuestionIsOpen(!questionIsOpen);
  };

  const handleEditModal = () => {
    toggleQuestionModal();
  };

  return (
    <>
      <div>
        <div className="m-2 p-2 mb-2">
          <div className="p-3" style={{ marginTop: "0rem" }}>
            <div className="d-flex" style={{ justifyContent: "right" }}>
              <div className="mt d-flex gap-2">
                <div>
                  
                </div>
                {/* <p className="text-end d-flex gap-1 mt-1">
                  <i
                    className="mdi mdi-view-headline fs-20 btn btn-icon btn-light"
                    onClick={() => setView("list")}
                  ></i>
                  <i
                    className="bx bxl-microsoft fs-20 btn btn-icon btn-light"
                    onClick={() => setView("grid")}
                  ></i>
                </p> */}
                <div className="d-flex" >
                  <div>
                    <button
                      className="btn btn-dark p-3"
                      onClick={() => {
                        handleCourse();
                      }}
                      style={{ backgroundColor: "#244a59" }}
                    >
                      Add New Course
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="m-2">
          <div className="p-3">
            <div className="d-flex" style={{ justifyContent: "space-between" }}>
              <div className="mt-">
                {/* <h4 className="fw-bolder mt-5">Interview Questions</h4>
                <p className="">
                  <b>Dashboard</b> / Interview Questions
                </p> */}
              </div>

              <div className="d-flex gap-2">
                {/* <p className="text-end ">
                  <select className="form-select p-3">
                    <option>Select Category </option>
                    <option>Salary/Benefits </option>
                    <option>Career Development </option>
                    <option>Entrepreneurship </option>
                    <option>Compensation </option>
                    <option>Diversity </option>
                    <option>Health & Safety </option>
                    <option>Ghana Labour Laws </option>
                    <option>Job Search </option>
                    <option>Leadership </option>
                    <option>Learning & Development </option>
                    <option>Workforce</option>
                    <option>Workplace</option>
                    <option>Performance </option>
                  </select>
                </p> */}
                {/* <p className="text-end ">
                  <button
                    className="btn btn-dark p-3"
                    style={{ backgroundColor: "#244a59" }}
                    // onClick={() => toggleAddQuestion()}
                  >
                    Search
                  </button>
                </p> */}
              </div>
            </div>
          </div>
        </div>

        <div className="p-2">
          <Row>
            <Col lg={12} className="mt-0">
              <Card>
                <CardBody>
                  <div id="customerList">
                    <div
                      className="table-responsive table-card mt-0 mb-1"
                      style={{ height: "50vh" }}
                    >
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

                            <th data-sort="location">Title</th>
                            <th data-sort="startDate">Organizer</th>
                            <th data-sort="expDate">Start Date</th>
                            <th data-sort="expDate">End Date</th>
                            <th data-sort="expDate">Course Content</th>
                            <th data-sort="expDate">Course Partnership</th>
                            <th data-sort="expDate">Course Schedule</th>

                            <th data-sort="jobType">Action</th>

                            {/* <th className="sort" data-sort="jobType">
                            Status
                          </th>
                          <th className="sort" data-sort="applicants">
                            Applicants
                          </th>
                          <th className="sort" data-sort="action">
                            Action
                          </th> */}
                          </tr>
                        </thead>
                        <tbody className="list form-check-all">
                          {loading === false && error === false ? (
                            courseInfo?.map((item, key) => (
                              <tr key={key}>
                                <td className="location">
                                  {item?.courseTitle}
                                </td>
                                <td className="startDate">
                                  {item?.courseOrganiser}
                                </td>
                                <td className="startDate">
                                  {formatDate(item?.courseStartDate)}
                                </td>
                                <td className="startDate">
                                  {formatDate(item?.courseEndDate)}
                                </td>
                                <td className="startDate">
                                  <Button
                                    className="btn btn-light"
                                    onClick={() => {
                                      toggleAddQuestion();
                                      dispatch(
                                        courseContent({ viewAction: "" })
                                      );
                                      setPresentId(item?.courseId);
                                    }}
                                  >
                                    View content
                                  </Button>
                                </td>
                                <td>
                                  <Button
                                    className="btn btn-light"
                                    onClick={() => {
                                      toggleViewPartnership();
                                      dispatch(
                                        coursePartnership({ viewAction: "" })
                                      );
                                      setPresentId(item?.courseId);
                                    }}
                                  >
                                    View partnership
                                  </Button>
                                </td>
                                <td className="startDate">
                                  <Button
                                    className="btn btn-light"
                                    onClick={() => {
                                      toggleViewSchedule();
                                      dispatch(
                                        courseSchedule({ viewAction: "" })
                                      );
                                      setPresentId(item?.courseId);
                                    }}
                                  >
                                    View schedule
                                  </Button>
                                </td>

                                <td>
                                  <Dropdown
                                    isOpen={
                                      isOpenAction[item?.courseId] || false
                                    }
                                    toggle={() => toggleAction(item?.courseId)}
                                  >
                                    <DropdownToggle
                                      tag="p"
                                      onClick={() =>
                                        toggleAction(item?.courseId)
                                      }
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
                                            setPresentId(item?.courseId);
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
                                  {loading === false ? (
                                    <>
                                      <p className="fw-light mt-5">
                                        You currently don't courses set up.
                                      </p>
                                    </>
                                  ) : (
                                    <>
                                      <Spinner
                                        size="lg"
                                        className="me-2 mt-5"
                                        style={{ color: "#244a59" }}
                                      ></Spinner>
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

      {/* Add Modal */}
      <Modal
        id="myModal"
        isOpen={addContentModal}
        toggle={() => {
          toggleAddContentModal();
        }}
      >
        <ModalBody>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              validation.handleSubmit();
              return false;
            }}
          >
            <p className="text-end text-light">
              <Button
                type="button"
                className="btn-close text-light p-2"
                style={{
                  backgroundColor: "#e0e0e0",
                  color: "white",
                  borderRadius: "2rem",
                }}
                onClick={() => {
                  setAddContentModal(false);
                }}
                aria-label="Close"
              ></Button>
            </p>

            <h5 className="text-center"> Content</h5>

            <Col lg={20} className="mb-3">
              <label>Title</label>
              <Input
                id="contentTitle"
                name="contentTitle"
                className="form-control p-3"
                placeholder="Enter Content Title"
                type="text"
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                value={validation.values.contentTitle || ""}
                invalid={
                  validation.touched.contentTitle &&
                  validation.errors.contentTitle
                    ? true
                    : false
                }
              />
            </Col>

            <Col lg={20} className="mb-3">
              <label>Description</label>
              <Input
                id="contentDesc"
                name="contentDesc"
                className="form-control p-3"
                placeholder="Enter Content Description"
                type="text"
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                value={validation.values.contentDesc || ""}
                invalid={
                  validation.touched.contentDesc &&
                  validation.errors.contentDesc
                    ? true
                    : false
                }
              />
            </Col>

            <Col lg={20} className="mb-3">
              <label>Content File</label>
              <Input
                id="contentFile"
                name="contentFile"
                className="form-control p-3"
                type="file"
                onChange={(e) => {
                  const selectedFile = e.target.files[0];
                  setFile(selectedFile);
                }}
                onBlur={validation.handleBlur}
              />
            </Col>

            <Col lg={20} className="mb-3">
              <label>Link</label>
              <Input
                id="contentLink"
                name="contentLink"
                className="form-control p-3"
                placeholder="Enter Link"
                type="text"
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                value={validation.values.contentLink || ""}
                invalid={
                  validation.touched.contentLink &&
                  validation.errors.contentLink
                    ? true
                    : false
                }
              />
            </Col>

            <div className="hstack justify-content-center">
              <div className="hstack gap-2 justify-content-center p-2 mt-4 mb-3 w-50">
                <Button
                  className="w-50"
                  type="submit"
                  style={{ backgroundColor: "#244a59" }}
                >
                  Add Content{" "}
                </Button>
                <Button
                  color="light"
                  onClick={() => {
                    toggleAddContentModal();
                  }}
                  className="w-50"
                  type="button"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </Form>
        </ModalBody>
      </Modal>

      {/* Add Partnerhip */}
      <Modal
        id="myModal"
        isOpen={addPartnershipModal}
        toggle={() => {
          toggleAddPartnershipModal();
        }}
      >
        <ModalBody>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              partnershipValidation.handleSubmit();
              return false;
            }}
          >
            <p className="text-end text-light">
              <Button
                type="button"
                className="btn-close text-light p-2"
                style={{
                  backgroundColor: "#e0e0e0",
                  color: "white",
                  borderRadius: "2rem",
                }}
                onClick={() => {
                  setAddPartnershipModal(false);
                }}
                aria-label="Close"
              ></Button>
            </p>

            <h5 className="text-center"> Partnership</h5>

            <Col lg={20} className="mb-3">
              <label>Institution Name</label>
              <Input
                id="institutionName"
                name="institutionName"
                className="form-control p-3"
                placeholder="Enter Content Title"
                type="text"
                onChange={partnershipValidation.handleChange}
                onBlur={partnershipValidation.handleBlur}
                value={partnershipValidation.values.institutionName || ""}
                invalid={
                  partnershipValidation.touched.institutionName &&
                  partnershipValidation.errors.institutionName
                    ? true
                    : false
                }
              />
            </Col>

            <Col lg={20} className="mb-3">
              <label>Institution Logo</label>
              <Input
                id="institutionLogo"
                name="institutionLogo"
                className="form-control p-3"
                type="file"
                onChange={(e) => {
                  const selectedFile = e.target.files[0];
                  setLogo(selectedFile);
                }}
                onBlur={partnershipValidation.handleBlur}
              />
            </Col>

            <div className="hstack justify-content-center">
              <div className="hstack gap-2 justify-content-center p-2 mt-4 mb-3 w-50">
                <Button
                  className=" btn btn-dark"
                  type="submit"
                  style={{ backgroundColor: "#244a59" }}
                >
                  Add Partnership{" "}
                </Button>
                <Button
                  color="light"
                  onClick={() => {
                    toggleAddPartnershipModal();
                  }}
                  className="w-50"
                  type="button"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </Form>
        </ModalBody>
      </Modal>

      {/* Add Schedule */}
      <Modal
        id="myModal"
        isOpen={addScheduleModal}
        toggle={() => {
          toggleScheduleModal();
        }}
      >
        <ModalBody>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              scheduleValidation.handleSubmit();
              return false;
            }}
          >
            <p className="text-end text-light">
              <Button
                type="button"
                className="btn-close text-light p-2"
                style={{
                  backgroundColor: "#e0e0e0",
                  color: "white",
                  borderRadius: "2rem",
                }}
                onClick={() => {
                  setAddContentModal(false);
                }}
                aria-label="Close"
              ></Button>
            </p>

            <h5 className="text-center">
              {editContent === "edit" ? "Add" : "Edit"} Content
            </h5>

            <Col lg={20} className="mb-3">
              <label>Schedule Title</label>
              <Input
                id="scheduleTitle"
                name="scheduleTitle"
                className="form-control p-3"
                placeholder="Enter Content Title"
                type="text"
                onChange={scheduleValidation.handleChange}
                onBlur={scheduleValidation.handleBlur}
                value={scheduleValidation.values.scheduleTitle || ""}
                invalid={
                  scheduleValidation.touched.scheduleTitle &&
                  scheduleValidation.errors.scheduleTitle
                    ? true
                    : false
                }
              />
            </Col>

            <Col lg={20} className="mb-3">
              <label>Start Time</label>
              <Input
                id="startTime"
                name="startTime"
                className="form-control p-3"
                placeholder="Enter Content Description"
                type="time"
                onChange={scheduleValidation.handleChange}
                onBlur={scheduleValidation.handleBlur}
                value={scheduleValidation.values.startTime || ""}
                invalid={
                  scheduleValidation.touched.startTime &&
                  scheduleValidation.errors.startTime
                    ? true
                    : false
                }
              />
            </Col>

            <Col lg={20} className="mb-3">
              <label>End Time</label>
              <Input
                id="endTIme"
                name="endTIme"
                className="form-control p-3"
                placeholder="Enter Link"
                type="time"
                onChange={scheduleValidation.handleChange}
                onBlur={scheduleValidation.handleBlur}
                value={scheduleValidation.values.endTIme || ""}
                invalid={
                  scheduleValidation.touched.endTIme &&
                  scheduleValidation.errors.endTIme
                    ? true
                    : false
                }
              />
            </Col>

            <div className="hstack justify-content-center">
              <div className="hstack gap-2 justify-content-center p-2 mt-4 mb-3 w-50">
                <Button
                  className="w-100"
                  type="submit"
                  style={{ backgroundColor: "#244a59" }}
                >
                  Add Schedule{" "}
                </Button>
                <Button
                  color="light"
                  onClick={() => {
                    toggleScheduleModal();
                  }}
                  className="w-50"
                  type="button"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </Form>
        </ModalBody>
      </Modal>

      {/* Content Modal */}
      <Modal
        id="myModal"
        isOpen={addQuestionModal}
        toggle={() => {
          toggleAddQuestion();
        }}
        size="lg"
      >
        <ModalBody>
          <h5 className="hstack justify-content-center">Course Content</h5>

          <div className="mt-5">
            {loading === false && error === false ? (
              content
                ?.filter((item) => presentId === item?.courseId)
                ?.map((item, key) => (
                  <>
                    <div
                      className="d-flex gap-2"
                      key={key}
                      style={{ justifyContent: "space-between" }}
                    >
                      <div className="d-flex">
                        <div>
                          <i className="bx bx-file-blank bx-md"></i>
                        </div>
                        <div>
                          <div>
                            <strong>{item?.contentTitle}</strong>
                          </div>
                          <div>
                            <p className="fs-10">
                              Created At: {item?.contentDesc} {"  "}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex gap-1">
                        <Button
                          className="btn btn-light"
                          style={{ border: "1px solid black" }}
                          onClick={() => {
                            handleContentEdit(item);
                          }}
                        >
                          Edit
                        </Button>
                        {/* <Button
                          className="btn btn-dark"
                          style={{ backgroundColor: "#244a59" }}
                        >
                          Delete
                        </Button> */}
                      </div>
                    </div>
                    <hr />
                  </>
                ))
            ) : (
              <p className="hstack justify-content-center">
                {error === false && content?.length < 0 ? (
                  <>
                    <p className="fw-light">No contents have been setup</p>
                  </>
                ) : (
                  <>
                    <Spinner
                      size="lg"
                      className="me-2 mt-5"
                      style={{ color: "#244a59" }}
                    ></Spinner>
                  </>
                )}
              </p>
            )}
          </div>
        </ModalBody>
      </Modal>

      {/* Partnership Modal */}
      <Modal
        id="myModal"
        isOpen={viewPartnershipModal}
        toggle={() => {
          toggleViewPartnership();
        }}
        size="lg"
      >
        <ModalBody>
          <h5 className="hstack justify-content-center">Course Partnership</h5>

          <div className="mt-5">
            {loading === false && error === false ? (
              partnership
                ?.filter((item) => presentId === item?.courseId)
                ?.map((item, key) => (
                  <>
                    <div
                      className="d-flex gap-2"
                      key={key}
                      style={{ justifyContent: "space-between" }}
                    >
                      <div className="d-flex">
                        <div>
                          <i className="bx bx-file-blank bx-md"></i>
                        </div>
                        <div>
                          <div>
                            <strong>{item?.institutionName}</strong>
                          </div>
                          <div>
                            <p className="fs-10">
                              Created At: {formatDate(item?.createdAt)} {"  "}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex gap-1">
                        <Button
                          className="btn btn-light"
                          style={{ border: "1px solid black" }}
                          onClick={() => {
                            handleEditPart(item);
                          }}
                        >
                          Edit
                        </Button>
                        {/* <Button
                          className="btn btn-dark"
                          style={{ backgroundColor: "#244a59" }}
                        >
                          Delete
                        </Button> */}
                      </div>
                    </div>
                    <hr />
                  </>
                ))
            ) : (
              <p className="hstack justify-content-center">
                {error === false && partnership?.length < 0 ? (
                  <>
                    <p className="fw-light">No partnerships have been setup</p>
                  </>
                ) : (
                  <>
                    <Spinner
                      size="lg"
                      className="me-2 mt-5"
                      style={{ color: "#244a59" }}
                    ></Spinner>
                  </>
                )}
              </p>
            )}

            <Button
              className="btn btn-dark"
              onClick={() => {
                toggleViewPartnership();
              }}
            >
              Close
            </Button>
          </div>
        </ModalBody>
      </Modal>

      {/* Schedule Modal */}
      <Modal
        id="myModal"
        isOpen={viewScheduleModal}
        toggle={() => {
          toggleViewSchedule();
        }}
        size="lg"
      >
        <ModalBody>
          <h5 className="hstack justify-content-center">Course Schedule</h5>

          <div className="mt-5">
            {loading === false && error === false ? (
              schedule
                ?.filter((item) => presentId === item?.courseId)
                ?.map((item, key) => (
                  <>
                    <div
                      className="d-flex gap-2"
                      key={key}
                      style={{ justifyContent: "space-between" }}
                    >
                      <div className="d-flex">
                        <div>
                          <i className="bx bx-file-blank bx-md"></i>
                        </div>
                        <div>
                          <div>
                            <strong>{item?.scheduleTitle}</strong>
                          </div>
                          <div>
                            <p className="fs-10">
                              Starts At: {item?.startTime} - Ends At:{" "}
                              {item?.endTime}
                              {"  "}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex gap-1">
                        <Button
                          className="btn btn-light"
                          style={{ border: "1px solid black" }}
                          onClick={() => {
                            handleEditSch(item);
                          }}
                        >
                          Edit
                        </Button>
                        {/* <Button
                          className="btn btn-dark"
                          style={{ backgroundColor: "#244a59" }}
                        >
                          Delete
                        </Button> */}
                      </div>
                    </div>
                    <hr />
                  </>
                ))
            ) : (
              <p className="hstack justify-content-center">
                {error === false && schedule?.length < 0 ? (
                  <>
                    <p className="fw-light">No schedules have been setup</p>
                  </>
                ) : (
                  <>
                    <Spinner
                      size="lg"
                      className="me-2 mt-5"
                      style={{ color: "#244a59" }}
                    ></Spinner>
                  </>
                )}
              </p>
            )}

            <Button
              className="btn btn-dark"
              onClick={() => {
                toggleViewSchedule();
              }}
            >
              Close
            </Button>
          </div>
        </ModalBody>
      </Modal>

      <Modal
        isOpen={questionIsOpen}
        toggle={toggleQuestionModal}
        size="xl"
        className="modal-fullscreen"
      >
        <ModalHeader toggle={toggleQuestionModal}></ModalHeader>
        <ModalBody>
          <EditCourse data={editData} handleEditModal={handleEditModal} />
        </ModalBody>
        {/* <ModalFooter>
          <Button color="secondary" onClick={toggleQuestionModal} style={{backgroundColor: '#244a59'}}>
            Save
          </Button>
          <Button color="primary" onClick={toggleQuestionModal} style={{backgroundColor: '#244a59'}}>
            Add Questions
          </Button>
        </ModalFooter> */}
      </Modal>
    </>
  );
}

export default Courses;
