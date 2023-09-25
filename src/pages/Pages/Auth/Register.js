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
} from "reactstrap";
import { useState } from "react";
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

 

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      fullName: "", 
      userName: "", 
      phone: "", 
      password: "", 
      address: "", 
      country: "", 
      birthDate: "", 
      maritalStatus: "", 
      
    },
    // validationSchema: Yup.object({
    //     digit1_input: Yup.string().required("Please Enter Your Phone Number"),
    //     password: Yup.string().required("Please Enter Your Password"),
    // }),
    onSubmit: (values) => {
     
    },
  });



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

  return (
    <>
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
              <Form >
                <Row
                  className="d-flex"
                  style={{ justifyContent: "space-evenly" }}
                >
                  <Col
                    //   style={{transform: "rotate(90deg)"}}
                    xxl={3}
                    md={4}
                    xs={8}
                    style={{ marginRight: "8rem" }}
                  >
                    <div
                      className="progress-nav mb-4"
                      style={{ transform: "rotate(270deg)", marginTop: "6rem" }}
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

                  <Col style={{ marginTop: "8rem" }} xxl={4}>
                    <TabContent activeTab={activeTab}>
                      <TabPane tabId={1}>
                        <div>
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

                            <Dropzone
                              onDrop={(acceptedFiles) => {
                                handleAcceptedFiles(acceptedFiles);
                              }}
                            >
                              {({ getRootProps, getInputProps }) => (
                                <div
                                  className="dropzone dz-clickable mt-3"
                                  style={{
                                    border: "1px dashed #244a59",
                                    cursor: "pointer",
                                  }}
                                >
                                  <div
                                    className="dz-message needsclick"
                                    {...getRootProps()}
                                  ></div>
                                  <h5
                                    className="fw-bolder text-left m-2"
                                    style={{ color: "#244a59" }}
                                  >
                                    Upload Resume
                                  </h5>
                                  <h6
                                    className="text-left m-2"
                                    style={{ color: "#244a59" }}
                                  >
                                    (.doc, .docx, .pdf, .rtf, .txt, Max size 2
                                    MB)
                                  </h6>
                                </div>
                              )}
                            </Dropzone>
                          </div>

                          <Row className="mt-3">
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
                                  className="form-control"
                                  id="gen-info-email-input"
                                  placeholder="Enter email"
                                />
                              </div>
                            </Col>
                            <Col lg={6}>
                              <div className="mb-3">
                                <Label
                                  className="form-label"
                                  htmlFor="gen-info-username-input"
                                >
                                  Email ID
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="gen-info-username-input"
                                  placeholder="Enter user name"
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
                              className="form-control"
                              id="gen-info-password-input"
                              placeholder="Minimun 6 characters"
                            />
                          </div>

                       

                          <div className="form-check form-switch form-switch-success mb-3 mt-5">
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
                          </div>

                          <div>
                            <Button
                              type="button"
                              onClick={() => {
                                toggleTab(activeTab + 1, 50);
                              }}
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

                      <TabPane tabId={2}></TabPane>

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
