import {
  Col,
  Row,
  TabPane,
  Input,
  Label,
  NavItem,
  NavLink,
  Card,
  CardHeader,
  CardBody,
  Form,
  Progress,
  Nav,
  TabContent,
  Button,
  Spinner,
} from "reactstrap";
import { useEffect, useState } from "react";
import classnames from "classnames";
import dummyUser from "../../../assets/images/users/user-dummy-img.jpg";
import PhoneInput from "react-phone-input-2";
import Dropzone from "react-dropzone";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import ldn from "./images/ldn.png";
import google from "./images/google.png";
import fb from "./images/fb.png";
import verification from "./images/verification.png";

import OTP from "./OTP";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, signUp } from "../../../store/actions";

const Register = () => {
  const [activeTab, setactiveTab] = useState(1);
  const [activeArrowTab, setactiveArrowTab] = useState(4);
  const [passedSteps, setPassedSteps] = useState([1]);
  const [progressbarvalue, setprogressbarvalue] = useState(0);

  function toggleTab(tab, value) {
    if (activeTab !== tab) {
      var modifiedSteps = [...passedSteps, tab];

      if (tab >= 1 && tab <= 4) {
        setactiveTab(tab);
        setPassedSteps(modifiedSteps);
      }
    }
    setprogressbarvalue(value);
  }

  const dispatch = useDispatch();

  const [selectedFilesSelfie, setselectedFilesSelfie] = useState([]);

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  const handleAcceptedFiles = (files) => {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setselectedFilesSelfie(files);
  };

  function ScrollToTop() {
    const { pathname } = window.location;
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      fullName: "",
      username: "",
      phone: "",
      email: "",
      password: "",
      address: "",
      country: "Ghana",
      birthDate: "",
      maritalStatus: null,
      gender: "",
      userType: "jobseeker",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Please Enter Your full name"),
      username: Yup.string().required("Please Enter Your username"),
      phone: Yup.string().required("Please Enter Your phone"),
      email: Yup.string().required("Please Enter Your email"),
      password: Yup.string().required("Please Enter Your password"),
      address: Yup.string().required("Please Enter Your address"),
      country: Yup.string().required("Please Enter Your country"),
      birthDate: Yup.string().required("Please Enter Your birthDate"),
      maritalStatus: Yup.string().required("Please Enter Your marital status"),
      gender: Yup.string().required("Please Enter Your gender"),
    }),
    onSubmit: (values) => {
      const data = {
        fullName: values.fullName,
        username: values.username,
        phone: values.phone,
        email: values.email,
        password: values.password,
        address: values.address,
        country: values.country,
        birthDate: values.birthDate,
        maritalStatus: values.maritalStatus === "Single" ? 0 : 1,
        gender: values.gender === "Male" ? "M" : "F",
        userType: "jobseeker",
      };

      const formData = new FormData();
      formData.append("fullName", values.fullName);
      formData.append("username", values.username);
      formData.append("phone", values.phone);
      formData.append("email", values.email);
      formData.append("password", values.password);
      formData.append("address", values.address);
      formData.append("country", values.country);
      formData.append("birthDate", values.birthDate);
      formData.append("maritalStatus", 1);
      formData.append("gender", values.gender === "Male" ? "M" : "F");
      formData.append("userType", "jobseeker");
      formData.append("myCv", selectedFilesSelfie[0]);

      toggleTab(activeTab + 1, 50);
      validation.resetForm();
      window.scrollTo(0, 0);
      dispatch(signUp(formData));
    },
  });

  console.log(validation.errors);

  const [left, setLeft] = useState("");
  const [top, setTop] = useState("");
  const [createLeft, setCreateLeft] = useState("");
  const [checkTop, setCheckTop] = useState("");
  const updateWindowSize = () => {
    const newWindowSize = window.innerWidth;

    if (newWindowSize <= 576) {
      // for sm screens
      setLeft("20vh");
      setTop("10rem");
      setCreateLeft("");
      setCheckTop("10rem");
    } else if (newWindowSize <= 992) {
      // for md screens
      setLeft("0vh");
      setTop("10rem");
      setCreateLeft("");
      setCheckTop("");
    } else if (newWindowSize <= 1600) {
      // for md screens
      setLeft("100vh");
      setTop("-7rem");
      setCreateLeft("");
      setCheckTop("");
    } else {
      // for xl screens
      setLeft("160vh");
      setTop("-7rem");
      setCreateLeft("10rem");

      setCheckTop("-4rem");
    }
  };

  useEffect(() => {
    updateWindowSize(); // Call on initial component mount
    window.addEventListener("resize", updateWindowSize); // Add listener for window resize
    return () => {
      window.removeEventListener("resize", updateWindowSize); // Clean up the listener on component unmount
    };
  }, []);

  const { loading, error } = useSelector((state) => ({
    loading: state.Account.loading,
    error: state.Account.error,
  }));
  return (
    <>
      {/* <ScrollToTop /> */}
      <Row className="p-4" style={{ backgroundColor: "white" }}>
        <Col>
          <Link to="/login">
            <h5 className="fw-bolder text-end m-3">
              Already Registered?{" "}
              <span style={{ color: "#244a59", cursor: "pointer" }}>Login</span>{" "}
            </h5>
          </Link>
          <Card
            style={{ border: "none", boxShadow: "none" }}
            className="p-4 m-5"
          >
            <CardBody>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  validation.handleSubmit();
                  return false;
                }}
              >
                <Row
                  className="d-flex"
                  style={{ justifyContent: "space-evenly" }}
                >
                  <Col
                    //   style={{transform: "rotate(90deg)"}}
                    xxl={3}
                    md={4}
                    xs={12}
                    style={{ marginRight: left, marginTop: checkTop }}
                  >
                    <div
                      className="progress-nav mb-4"
                      style={{
                        transform: "rotate(270deg)",
                        marginTop: "-2rem",
                      }}
                    >
                      <Progress
                        value={progressbarvalue}
                        style={{
                          height: "1px",
                          width: "90rem",
                          backgroundColor: "#244a59",
                        }}
                      />

                      <Nav
                        className="nav-pills progress-bar-tab custom-nav"
                        role="tablist"
                        style={{ width: "15rem", transform: "rotate(180deg)" }}
                      >
                        <NavItem>
                          <div
                            style={{
                              transform: "rotate(270deg)",
                              position: "absolute",
                              top: "-7rem",
                              left: "-2rem",
                            }}
                          >
                            <h6
                              className="fw-bolder"
                              style={{ color: activeTab !== 1 && "#dbdbdb" }}
                            >
                              Basic Details
                            </h6>
                            <p
                              className="text-muted"
                              style={{ color: activeTab !== 1 && "#dbdbdb" }}
                            >
                              15 seconds to complete
                            </p>
                          </div>
                          <Button
                            id="pills-gen-info-tab"
                            className={classnames(
                              {
                                active: activeTab === 1,
                                done: activeTab <= 4 && activeTab >= 0,
                              },
                              "rounded-pill"
                            )}
                            onClick={() => {
                              toggleTab(1, 0);
                            }}
                            tag="button"
                            style={{
                              border: "1px solid #244a59",
                              width: "3.5rem",
                              height: "3.5rem",
                              transform: "rotate(270deg)",
                              backgroundColor: "white",
                            }}
                          >
                            <i
                              className="bx bx-check fs-20"
                              style={{ color: "black" }}
                            ></i>
                          </Button>
                        </NavItem>
                        <NavItem>
                          <div
                            style={{
                              transform: "rotate(270deg)",
                              position: "absolute",
                              top: "-7rem",
                              left: "3.5rem",
                            }}
                          >
                            <h6
                              className="fw-bolder"
                              style={{ color: activeTab !== 2 && "#dbdbdb" }}
                            >
                              Verification Center
                            </h6>
                            <p
                              className="text-muted"
                              style={{ color: activeTab !== 2 && "#dbdbdb" }}
                            >
                              15 seconds to complete
                            </p>
                          </div>
                          <Button
                            id="pills-gen-info-tab"
                            className={classnames(
                              {
                                active: activeTab === 2,
                                done: activeTab <= 4 && activeTab > 1,
                              },
                              "rounded-pill text-dark"
                            )}
                            onClick={() => {
                              toggleTab(2, 50);
                            }}
                            tag="button"
                            style={{
                              backgroundColor: "white",
                              border: "1px solid black",
                              width: "3.5rem",
                              height: "3.5rem",
                              transform: "rotate(270deg)",
                            }}
                          >
                            {activeTab >= 2 ? (
                              <i
                                className="bx bx-check fs-20"
                                style={{ color: "black" }}
                              ></i>
                            ) : (
                              2
                            )}
                          </Button>
                        </NavItem>
                        <NavItem>
                          <div
                            style={{
                              transform: "rotate(270deg)",
                              position: "absolute",
                              top: "-7rem",
                              left: "9.5rem",
                            }}
                          >
                            <h6
                              className="fw-bolder"
                              style={{ color: activeTab !== 3 && "#dbdbdb" }}
                            >
                              Confirmation
                            </h6>
                            <p
                              className="text-muted"
                              style={{
                                width: "max-content",
                                color: activeTab !== 3 && "#dbdbdb",
                              }}
                            >
                              15 seconds to complete
                            </p>
                          </div>
                          <Button
                            id="pills-gen-info-tab"
                            className={classnames(
                              {
                                active: activeTab === 3,
                                done: activeTab <= 4 && activeTab > 2,
                              },
                              "rounded-pill text-dark"
                            )}
                            onClick={() => {
                              toggleTab(3, 100);
                            }}
                            // tag="button"
                            style={{
                              backgroundColor: "white",
                              border: "1px solid black",
                              width: "3.5rem",
                              height: "3.5rem",
                              transform: "rotate(270deg)",
                            }}
                          >
                            {activeTab === 3 ? (
                              <i
                                className="bx bx-check fs-20"
                                style={{ color: "black" }}
                              ></i>
                            ) : (
                              3
                            )}
                          </Button>
                        </NavItem>
                      </Nav>
                    </div>
                  </Col>

                  <Col
                    style={{ marginTop: top, marginLeft: createLeft }}
                    xl={5}
                    md={7}
                    xs={20}
                  >
                    <TabContent activeTab={activeTab}>
                      <TabPane tabId={1}>
                        <div className="">
                          <div className="mb-4">
                            <div>
                              <h5 className="mb-1 text-center fw-bolder">
                                Create an account
                              </h5>
                              <p className="text-muted text-center">
                                It only takes a couple of minutes to get
                                started!
                              </p>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <p
                                  className="fw-bolder p-1 text-center"
                                  style={{
                                    backgroundColor: "#def9ef",
                                    color: "#00d084",
                                    borderRadius: "0.4rem",
                                    width: "max-content",
                                  }}
                                >
                                  Its free!
                                </p>
                              </div>

                              <div
                                className="d-flex text-center gap-5 mt-3"
                                style={{ justifyContent: "center" }}
                              >
                                <div
                                  className="d-flex"
                                  style={{ cursor: "pointer" }}
                                >
                                  <img
                                    src={google}
                                    alt="google"
                                    className="img-fluid avatar-xxs"
                                  ></img>
                                  <p
                                    style={{
                                      position: "relative",
                                      top: "0.2rem",
                                    }}
                                    className="fw-bolder"
                                  >
                                    Google
                                  </p>
                                </div>
                                <div
                                  className="d-flex gap-1"
                                  style={{ cursor: "pointer" }}
                                >
                                  <img
                                    src={ldn}
                                    alt="google"
                                    className="img-fluid avatar-xxs"
                                  ></img>
                                  <p
                                    style={{
                                      position: "relative",
                                      top: "0.2rem",
                                    }}
                                    className="fw-bolder"
                                  >
                                    LinkedIn
                                  </p>
                                </div>
                                <div
                                  className="d-flex gap-1"
                                  style={{ cursor: "pointer" }}
                                >
                                  <img
                                    src={fb}
                                    alt="google"
                                    className="img-fluid avatar-xxs"
                                  ></img>
                                  <p
                                    style={{
                                      position: "relative",
                                      top: "0.2rem",
                                    }}
                                    className="fw-bolder"
                                  >
                                    Facebook
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div>
                            <div
                              className="list-unstyled mb-0"
                              id="file-previews"
                            >
                              {selectedFilesSelfie.map((f, i) => {
                                return (
                                  <Card
                                    className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                    key={i + "-file"}
                                  >
                                    <div className="p-2">
                                      <Row className="align-items-center">
                                        <Col className="col-auto">
                                          <img
                                            data-dz-thumbnail=""
                                            height="80"
                                            className="avatar-sm rounded bg-light"
                                            alt={f.name}
                                            src={f.preview}
                                          />
                                        </Col>
                                        <Col>
                                          <Link
                                            to="#"
                                            className="text-muted font-weight-bold"
                                          >
                                            {f.name}
                                          </Link>
                                          <p className="mb-0">
                                            <strong>{f.formattedSize}</strong>
                                          </p>
                                        </Col>
                                      </Row>
                                    </div>
                                  </Card>
                                );
                              })}
                            </div>
                          </div>

                          <div
                            style={{
                              height: "100px",

                              overflow: "hidden",
                              border: "1px dashed #e0e0e0",
                            }}
                          >
                            <Dropzone
                              onDrop={(acceptedFiles) =>
                                handleAcceptedFiles(acceptedFiles)
                              }
                            >
                              {({ getRootProps, getInputProps }) => (
                                <div
                                  className="dropzone dz-clickable"
                                  style={{ cursor: "pointer", border: "none" }}
                                >
                                  <div
                                    className="dz-message needsclick"
                                    {...getRootProps()}
                                  >
                                    {/* <div className="mb-3">
                                      <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                                    </div> */}
                                    <h5>Drag or Click to upload file</h5>
                                    <h6>( .pdf Max size 2 MB)</h6>
                                  </div>
                                </div>
                              )}
                            </Dropzone>
                          </div>

                          <Row className="mt-5">
                            <Col lg={6}>
                              <div className="mb-3">
                                <Label
                                  className="form-label"
                                  htmlFor="gen-info-email-input"
                                >
                                  Full Name
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control p-3"
                                  id="fullName"
                                  onChange={validation.handleChange}
                                  onBlur={validation.handleBlur}
                                  value={validation.values.fullName || ""}
                                  placeholder="Enter full name"
                                  invalid={
                                    validation.touched.fullName &&
                                    validation.errors.fullName
                                      ? true
                                      : false
                                  }
                                />
                              </div>
                            </Col>
                            <Col lg={6}>
                              <div className="mb-3">
                                <Label
                                  className="form-label"
                                  htmlFor="gen-info-username-input"
                                >
                                  Email
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control p-3"
                                  id="email"
                                  onChange={validation.handleChange}
                                  onBlur={validation.handleBlur}
                                  value={validation.values.email || ""}
                                  placeholder="Enter user name"
                                  invalid={
                                    validation.touched.email &&
                                    validation.errors.email
                                      ? true
                                      : false
                                  }
                                />
                              </div>
                            </Col>
                          </Row>
                          <div className="mb-3">
                            <Label
                              className="form-label"
                              htmlFor="gen-info-password-input"
                            >
                              Password
                            </Label>
                            <Input
                              type="password"
                              className="form-control p-3"
                              id="password"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.password || ""}
                              placeholder="Minimun 6 characters"
                              invalid={
                                validation.touched.password &&
                                validation.errors.password
                                  ? true
                                  : false
                              }
                            />
                          </div>
                          <Row>
                            <Col>
                              {" "}
                              <div className="mb-3">
                                <Label
                                  className="form-label"
                                  htmlFor="gen-info-password-input"
                                >
                                  Username
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control p-3"
                                  id="username"
                                  onChange={validation.handleChange}
                                  onBlur={validation.handleBlur}
                                  value={validation.values.username || ""}
                                  placeholder="Enter Username"
                                  invalid={
                                    validation.touched.username &&
                                    validation.errors.username
                                      ? true
                                      : false
                                  }
                                />
                              </div>
                            </Col>

                            <Col>
                              <div className="mb-3">
                                <Label
                                  className="form-label"
                                  htmlFor="gen-info-password-input"
                                >
                                  Phone Number
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control p-3"
                                  id="phone"
                                  onChange={validation.handleChange}
                                  onBlur={validation.handleBlur}
                                  value={validation.values.phone || ""}
                                  placeholder="Enter Phone Number"
                                  invalid={
                                    validation.touched.phone &&
                                    validation.errors.phone
                                      ? true
                                      : false
                                  }
                                />
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              {" "}
                              <div className="mb-3">
                                <Label
                                  className="form-label"
                                  htmlFor="gen-info-password-input"
                                >
                                  Address
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control p-3"
                                  id="address"
                                  onChange={validation.handleChange}
                                  onBlur={validation.handleBlur}
                                  value={validation.values.address || ""}
                                  placeholder="Enter Address"
                                  invalid={
                                    validation.touched.address &&
                                    validation.errors.address
                                      ? true
                                      : false
                                  }
                                />
                              </div>
                            </Col>

                            <Col>
                              {" "}
                              <div className="mb-3">
                                <Label
                                  className="form-label"
                                  htmlFor="gen-info-password-input"
                                >
                                  Birthdate
                                </Label>
                                <Input
                                  type="date"
                                  className="form-control p-3"
                                  id="birthDate"
                                  onChange={validation.handleChange}
                                  onBlur={validation.handleBlur}
                                  value={validation.values.birthDate || ""}
                                  placeholder="Enter Address"
                                  invalid={
                                    validation.touched.birthDate &&
                                    validation.errors.birthDate
                                      ? true
                                      : false
                                  }
                                />
                              </div>
                            </Col>
                          </Row>

                          <Row>
                            <Col lg={6}>
                              <div className="mb-3">
                                <Label
                                  for="phonenumberInput"
                                  className="form-label"
                                >
                                  Gender
                                </Label>
                                <Input
                                  name="gender"
                                  id="gender"
                                  type="select"
                                  className="form-select mb-3 p-3"
                                  aria-label="Default select example"
                                  onChange={validation.handleChange}
                                  onBlur={validation.handleBlur}
                                  value={validation.values.gender}
                                  invalid={
                                    validation.touched.address &&
                                    validation.errors.fullName
                                      ? true
                                      : false
                                  }
                                >
                                  <option>Select Gender</option>
                                  <option>Male</option>
                                  <option>Female</option>
                                </Input>
                              </div>
                            </Col>

                            <Col lg={6}>
                              {" "}
                              <div className="mb-3">
                                <Label
                                  for="phonenumberInput"
                                  className="form-label"
                                >
                                  Marital Status
                                </Label>
                                <Input
                                  name="maritalStatus"
                                  id="maritalStatus"
                                  type="select"
                                  className="form-select mb-3 p-3"
                                  aria-label="Default select example"
                                  onChange={validation.handleChange}
                                  onBlur={validation.handleBlur}
                                  value={validation.values.maritalStatus}
                                  invalid={
                                    validation.touched.maritalStatus &&
                                    validation.errors.fullName
                                      ? true
                                      : false
                                  }
                                >
                                  <option>Select Marital Status</option>
                                  <option>Single</option>
                                  <option>Married</option>
                                </Input>
                              </div>
                            </Col>
                          </Row>

                          {/* <div className="form-check form-switch form-switch-success mb-3 mt-5">
                            <Input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="SwitchCheck3"
                              defaultChecked
                            />
                            <Label
                              className="form-check-label text-muted"
                              htmlFor="SwitchCHeck11"
                            >
                              Receive recruiter notifications on{" "}
                              <i
                                className="mdi mdi-whatsapp fs-15"
                                style={{ color: "#00d084" }}
                              ></i>{" "}
                              WhatsApp
                            </Label>
                          </div>

                          <div>
                            <p className="text-muted text-left">
                              I agree to jobsinghana's{" "}
                              <b>Terms & Conditions, Privacy Policy</b> default
                              malter and communication settings governing the
                              use of <b>jobsinghana.</b>
                            </p>
                          </div> */}

                          <div>
                            <Button
                              type="submit"
                              // onClick={() => {
                              //   if (Object.keys(validation.errors).length > 0) {
                              //     console.log(
                              //       Object.keys(validation.errors).length
                              //     );
                              //   } else {
                              //     toggleTab(activeTab + 1, 50);
                              //   }
                              // }}
                              className="btn btn-dark mt-4"
                              style={{
                                backgroundColor: "#244a59",
                                width: "100%",
                              }}
                            >
                              Continue
                            </Button>
                          </div>
                        </div>
                      </TabPane>

                      <TabPane tabId={2} style={{ height: "40vh" }}>
                        <div className="d-grid hstack justify-content-center">
                          {/* <h2
                            className="text-dark"
                            style={{ fontFamily: "impact", color: "#244a59" }}
                          >
                            Welcome to JobsInGhana
                          </h2> */}
                          {loading === true ? (
                            <>
                              <Spinner></Spinner>
                              <p
                                className="mt-5"
                                style={{ textAlign: "center" }}
                              >
                                Verifying your Registration Information
                              </p>
                            </>
                          ) : (
                            <p className="mt-5" style={{ textAlign: "center" }}>
                              Please go back and fill the form.
                            </p>
                          )}
                        </div>
                      </TabPane>

                      <TabPane tabId={3}>
                        <div>
                          <h4 className="fw-bolder text-center">
                            Confirmation
                          </h4>
                          <div className="text-center">
                            <div className="mb-4">
                              <img
                                src={verification}
                                alt="ver"
                                className="img-fluid avatar-xxl"
                              ></img>
                            </div>
                            <h5 className="fw-bolder text-center">
                              Congratulations!
                            </h5>
                            <p className="fw-bolder text-center">
                              Your account has now been created
                            </p>
                            <p className="mt-5 text-muted text-center">
                              An email has been sent to
                            </p>
                            <p className=" fw-bolder">ksahgioerg@gmail.com</p>
                          </div>
                        </div>

                        <Link to="/job-list">
                          <Button
                            className="btn btn-dark w-100 mt-5"
                            style={{ backgroundColor: "#244a59" }}
                          >
                            Start Job Search
                          </Button>
                        </Link>
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Register;
