import {
  Card,
  Col,
  Container,
  Row,
  CardBody,
  Input,
  Button,
  Form,
  FormFeedback,
} from "reactstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Editor from "./Editor";
import { useDispatch, useSelector } from "react-redux";
import { category, saveCourse, updateCourse } from "../../../../store/actions";
import { useNavigate } from "react-router-dom";
import { formatDate2 } from "../../../../Components/Hooks/formatDate2";

const EditCourse = ({ handleEditModal }) => {
  const dispatch = useDispatch();

  const Nav = (location) => {
    let navigate = useNavigate();
    navigate(`${location}`);
  };

  const { data } = useSelector((state) => ({
    data: state.Jobs.editCloneData,
  }));

  const updateEditorData = (editorId, html) => {
    setEditorData({
      ...editorData,
      [editorId]: html,
    });
  };

  const [editorData, setEditorData] = useState({
    editor1: "",
    editor2: "",
    editor3: "",
    // Add more editors as needed
  });

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: data?.courseTitle || "",
      description: data?.courseDescription || "",
      organizer: data?.courseOrganiser || "",
      venue: data?.courseVenue || "",
      cost: data?.courseCost || "",
      startDate: formatDate2(data?.courseStartDate) || "",
      endDate: formatDate2(data?.courseEndDate) || "",
      studyMode: data?.courseStudyMode || "",
      duration: data?.courseDuration || "",
      category: data?.courseCategory || "",
      courseLink: data?.courseLink || "",
      courseGoals: data.courseGoals || "",
      audience: data.courseAudience || "",
      courseCertificationNote: data.courseCertificationNote || "",
    },
    validateOnChange: true,
    validationSchema: Yup.object({
      // keyword: Yup.string().required("Please enter a keyword"),
      // name: Yup.string().required("Please enter a name"),
      // criteria: Yup.string().required("Please choose a search criteria"),
      // frequency: Yup.string().required("Please select a frequency"),
      // location: Yup.string().required("Please select a location"),
      // category: Yup.string().required("Please select a category"),
      // experience: Yup.string().required("Please select an experience level"),
      // jobType: Yup.string().required("Please select a job type"),
    }),
    onSubmit: (values) => {
      const patch = {
        courseTitle: values.title,
        courseDescription: editorData.editor3,
        courseOrganiser: values.organizer,
        courseVenue: values.venue,
        courseCost: values.cost,
        courseStartDate: values.startDate,
        courseEndDate: values.endDate,
        courseStudyMode: values.studyMode,
        courseDuration: values.duration,
        courseCategory: values.courseCategory,
        courseAudience: values.audience,
        courseGoals: editorData.editor1,
        courseLink: values.courseLink,
        courseCertificationNote: editorData.editor2,
      };

      const patchData = new FormData();
      patchData.append("courseId", data.courseId);
      patchData.append("patch", true);
      patchData.append("deleterecord", false);
      patchData.append("restore", false);
      patchData.append("patchData", JSON.stringify(patch));
      patchData.append("courseImage", Image);
      patchData.append("courseVideoAd", Video);
      patchData.append("courseBrochure", Brochure);

      dispatch(updateCourse(patchData));
      handleEditModal();
    },
  });

  useEffect(()=>{
   dispatch(category({viewAction: ""}))
  }, [dispatch])

  
  const [Brochure, setBrochure] = useState(data?.courseBrochure);
  const [Image, setImage] = useState(data?.courseImage);
  const [Video, setVideo] = useState(data?.courseVideoAd);

  function formatDate(timestamp) {
    // Create a Date object from the input timestamp
    const date = new Date(timestamp);

    // Define months array for formatting
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Get the date components
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    // Function to add the "st," "nd," "rd," or "th" suffix to the day
    function getDayWithSuffix(day) {
      if (day >= 11 && day <= 13) {
        return `${day}th`;
      }
      switch (day % 10) {
        case 1:
          return `${day}st`;
        case 2:
          return `${day}nd`;
        case 3:
          return `${day}rd`;
        default:
          return `${day}th`;
      }
    }

    // Format the date in the desired format
    const formattedDate = `${getDayWithSuffix(day)} ${month}, ${year}`;

    return formattedDate;
  }

  const { catLoading, catError, categoryInfo } = useSelector((state) => ({
    catLoading: state.Industry.loading,
    catError: state.Industry.error,
    categoryInfo: state.Industry.categoryInfo,
  }));

  return (
    <>
      <div className="mb-5">
        <div>
          <div className="m-2 p-2 mb-5">
            <div className="p-3" style={{ marginTop: "-2rem" }}>
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <div className="mt-">
                  <h4 className="fw-bolder mt-5">Edit Course</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Container className=" mb-4" fluid>
          <Row className="justify-content-center">
            <Col xs="20" md="20" sm="20">
              <div className="p-2">
                <CardBody>
                  {/* left */}

                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      return false;
                    }}
                  >
                    <Row>
                      <Col className="mb-3">
                        <label>Title</label>
                        <Input
                          id="title"
                          name="title"
                          className="form-control p-3"
                          placeholder="Enter Course Name"
                          type="text"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.title || ""}
                          invalid={
                            validation.touched.title && validation.errors.title
                              ? true
                              : false
                          }
                        />
                        {validation.touched.title && validation.errors.title ? (
                          <FormFeedback type="invalid">
                            <div>{validation.errors.title}</div>
                          </FormFeedback>
                        ) : null}
                      </Col>

                      <Col className="mb-3">
                        <label>Organizer</label>
                        <Input
                          id="organizer"
                          name="organizer"
                          className="form-control p-3"
                          placeholder="Enter organizer name"
                          type="text"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.organizer || ""}
                          invalid={
                            validation.touched.organizer &&
                            validation.errors.organizer
                              ? true
                              : false
                          }
                        />
                        {validation.touched.organizer &&
                        validation.errors.organizer ? (
                          <FormFeedback type="invalid">
                            <div>{validation.errors.organizer}</div>
                          </FormFeedback>
                        ) : null}
                      </Col>
                    </Row>

                    <Row>
                      <Col className="mb-3">
                        <label>Venue</label>
                        <Input
                          id="venue"
                          name="venue"
                          className="form-control p-3"
                          placeholder="Enter venue name"
                          type="text"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.venue || ""}
                          invalid={
                            validation.touched.venue && validation.errors.venue
                              ? true
                              : false
                          }
                        />
                        {validation.touched.venue && validation.errors.venue ? (
                          <FormFeedback type="invalid">
                            <div>{validation.errors.venue}</div>
                          </FormFeedback>
                        ) : null}
                      </Col>

                      <Col className="mb-3">
                        <label>Cost</label>
                        <Input
                          id="cost"
                          name="cost"
                          className="form-control p-3"
                          placeholder="Enter cost"
                          type="number"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.cost || ""}
                          invalid={
                            validation.touched.cost && validation.errors.cost
                              ? true
                              : false
                          }
                        />
                        {validation.touched.cost && validation.errors.cost ? (
                          <FormFeedback type="invalid">
                            <div>{validation.errors.cost}</div>
                          </FormFeedback>
                        ) : null}
                      </Col>
                    </Row>
                    <Row>
                      <Col className="mb-3">
                        <label>Start Date</label>
                        <Input
                          id="startDate"
                          name="startDate"
                          className="form-control p-3"
                          type="date"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.startDate || ""}
                          invalid={
                            validation.touched.startDate &&
                            validation.errors.startDate
                              ? true
                              : false
                          }
                        />
                        {validation.touched.startDate &&
                        validation.errors.startDate ? (
                          <FormFeedback type="invalid">
                            <div>{validation.errors.startDate}</div>
                          </FormFeedback>
                        ) : null}
                      </Col>

                      <Col className="mb-3">
                        <label>End Date</label>
                        <Input
                          id="endDate"
                          name="endDate"
                          className="form-control p-3"
                          placeholder="Enter End Date"
                          type="date"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.endDate || ""}
                          invalid={
                            validation.touched.endDate &&
                            validation.errors.endDate
                              ? true
                              : false
                          }
                        />
                        {validation.touched.endDate &&
                        validation.errors.endDate ? (
                          <FormFeedback type="invalid">
                            <div>{validation.errors.endDate}</div>
                          </FormFeedback>
                        ) : null}
                      </Col>
                    </Row>
                    <Row>
                      <Col className="mb-3">
                        <label>Study Mode</label>
                        <Input
                          id="studyMode"
                          name="studyMode"
                          className="form-control p-3"
                          placeholder="Enter study mode"
                          type="text"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.studyMode || ""}
                          invalid={
                            validation.touched.studyMode &&
                            validation.errors.studyMode
                              ? true
                              : false
                          }
                        />
                        {validation.touched.studyMode &&
                        validation.errors.studyMode ? (
                          <FormFeedback type="invalid">
                            <div>{validation.errors.studyMode}</div>
                          </FormFeedback>
                        ) : null}
                      </Col>

                      <Col className="mb-3">
                        <label>Duration</label>
                        <Input
                          id="duration"
                          name="duration"
                          className="form-control p-3"
                          placeholder="Enter duration"
                          type="text"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.duration || ""}
                          invalid={
                            validation.touched.duration &&
                            validation.errors.duration
                              ? true
                              : false
                          }
                        />
                        {validation.touched.duration &&
                        validation.errors.duration ? (
                          <FormFeedback type="invalid">
                            <div>{validation.errors.duration}</div>
                          </FormFeedback>
                        ) : null}
                      </Col>
                    </Row>

                    <Row>
                      <Col className="mb-3">
                        <label>Audience</label>
                        <Input
                          id="audience"
                          name="audience"
                          className="form-control p-3"
                          placeholder="Audience"
                          type="text"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.audience || ""}
                          invalid={
                            validation.touched.audience &&
                            validation.errors.audience
                              ? true
                              : false
                          }
                        />
                        {validation.touched.audience &&
                        validation.errors.audience ? (
                          <FormFeedback type="invalid">
                            <div>{validation.errors.audience}</div>
                          </FormFeedback>
                        ) : null}
                      </Col>

                      <Col className="mb-3">
                        <label>Course Image</label>
                        <Input
                          id="courseVideo"
                          name="courseVideo"
                          className="form-control p-3"
                          type="file"
                          onChange={(e) => {
                            const selectedFile = e.target.files[0];
                            setImage(selectedFile);
                          }}
                          onBlur={validation.handleBlur}
                        />
                      </Col>

                      {/* <Col className="mb-3">
                        <label>Description</label>
                        <Input
                          id="description"
                          name="description"
                          className="form-control p-3"
                          placeholder="Enter Description"
                          type="text"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.description || ""}
                          invalid={
                            validation.touched.description &&
                            validation.errors.description
                              ? true
                              : false
                          }
                        />
                        {validation.touched.description &&
                        validation.errors.description ? (
                          <FormFeedback type="invalid">
                            <div>{validation.errors.description}</div>
                          </FormFeedback>
                        ) : null}
                      </Col> */}
                    </Row>

                    <Row>
                      <label>Select Category</label>
                      <Col lg={6}>
                        <select
                          className="form-select p-3"
                          name="jobCategoryId"
                          id="jobCategoryId"
                          value={validation.values.jobCategoryId}
                          onChange={validation.handleChange}
                        >
                          <option>Select Category</option>
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

                      <Col className="mb-3 mt-3">
                        <label>Course Link</label>
                        <Input
                          id="courseLink"
                          name="courseLink"
                          className="form-control p-3"
                          placeholder="Enter course link"
                          type="text"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.courseLink || ""}
                          invalid={
                            validation.touched.courseLink &&
                            validation.errors.courseLink
                              ? true
                              : false
                          }
                        />
                        {validation.touched.courseLink &&
                        validation.errors.courseLink ? (
                          <FormFeedback type="invalid">
                            <div>{validation.errors.courseLink}</div>
                          </FormFeedback>
                        ) : null}
                      </Col>
                    </Row>

                    <Row>
                      {/* <Col className="mb-3">
                        <label>Course Certification Note</label>
                        <select
                          className="form-select p-3"
                          onChange={validation.handleChange}
                          value={validation.values.courseCertificationNote}
                          id="courseCertificationNote"
                        >
                          <option>Select Category </option>
                          <option>You will get a certification </option>
                          <option>You will not get a certification </option>
                        </select>
                      </Col> */}
                    </Row>

                    <Row>
                      <Col>
                        <label>Course Video Adverts</label>
                        <Input
                          id="courseVideo"
                          name="courseVideo"
                          className="form-control p-3"
                          type="file"
                          onChange={(e) => {
                            const selectedFile = e.target.files[0];
                            setVideo(selectedFile);
                          }}
                          onBlur={validation.handleBlur}
                        />
                      </Col>
                      <Col>
                        <label>Course Brochure</label>
                        <Input
                          id="courseVideo"
                          name="courseVideo"
                          className="form-control p-3"
                          type="file"
                          onChange={(e) => {
                            const selectedFile = e.target.files[0];
                            setBrochure(selectedFile);
                          }}
                          onBlur={validation.handleBlur}
                        />
                      </Col>
                    </Row>

                    <Col className="mt-5">
                      <label>Course Goals</label>
                      <Editor
                        editorId="editor1"
                        transmitHtml={updateEditorData}
                      />
                    </Col>

                    <Col className="mt-5">
                      <label>Certification Note</label>
                      <Editor
                        editorId="editor2"
                        transmitHtml={updateEditorData}
                      />
                    </Col>

                    <Col className="mt-5">
                      <label>Description</label>
                      <Editor
                        editorId="editor3"
                        transmitHtml={updateEditorData}
                      />
                    </Col>
                    {/* 
                    <Row className="mt-3">
                      <h6 style={{ color: "#244a59", fontWeight: "bolder" }}>
                        Content
                      </h6>
                      <Col lg={12}>
                        <Form method="post">
                          <Editor />
                        </Form>
                      </Col>
                    </Row> */}

                    <div className="text-start d-flex gap-3 mt-4">
                      {/* <Link to="/course"> */}
                      <button
                        type="submit"
                        className="btn btn-dark"
                        style={{ backgroundColor: "#244a59" }}
                      >
                        Submit
                      </button>
                      {/* </Link> */}
                    </div>
                  </Form>
                </CardBody>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default EditCourse;
