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
import Dropzone from 'react-dropzone'
import * as Yup from "yup";
import { useFormik } from "formik";
import {Link} from 'react-router-dom'
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

  //   const parameters = new URLSearchParams(search);

  //   const phonenumber = parameters.get("phonenumber");

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      digit1_input: "",
      digit2_input: "",
      digit3_input: "",
      digit4_input: "",
      digit5_input: "",
      digit6_input: "",
    },
    // validationSchema: Yup.object({
    //     digit1_input: Yup.string().required("Please Enter Your Phone Number"),
    //     password: Yup.string().required("Please Enter Your Password"),
    // }),
    onSubmit: (values) => {
      let {
        digit1_input,
        digit2_input,
        digit3_input,
        digit4_input,
        digit5_input,
        digit6_input,
      } = values;
      let finalCode = `${digit1_input}${digit2_input}${digit3_input}${digit4_input}${digit5_input}${digit6_input}`;

      //   let payload = {
      //     phonenumber: `+${phonenumber}`,
      //     passcode: finalCode,
      //   };
      //   dispatch(verifyPasscodeRequest(payload, props.router.navigate));
      //   dispatch({ type: VERIFY_PASSCODE_RESET });
    },
  });

  const getInputElement = (index) => {
    return document.getElementById("digit" + index + "-input");
  };

  const moveToNext = (index) => {
    if (getInputElement(index).value.length === 1) {
      if (index !== 6) {
        getInputElement(index + 1).focus();
      } else {
        getInputElement(index).blur();
        // Submit code
        // console.log('submit code', getInputElement(index));
      }
    }
  };

  const [change, setChange] = useState(false);

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
      <Row
        className="p-4"
        style={{  backgroundColor: "white" }}
      >
        <Col>
          <Card style={{  border: "none", boxShadow: "none" }} className="p-4 m-5">
            <CardBody>
              <Form action="#" className="form-steps">
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
                            <h6 className="fw-bolder" style={{color: activeTab !== 1 && "#dbdbdb"}}>Basic Details</h6>
                            <p className="text-muted" style={{color: activeTab !== 1 && "#dbdbdb"}}>15 seconds to complete</p>
                          </div>
                          <NavLink
                            to="#"
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
                              backgroundColor: "white"
                            }}
                          >
                            <i className="bx bx-check fs-20" style={{color: 'black'}}></i>
                          </NavLink>
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
                            <h6 className="fw-bolder" style={{color: activeTab !== 2 && "#dbdbdb"}}>Verification Center</h6>
                            <p className="text-muted" style={{color: activeTab !== 2 && "#dbdbdb"}}>15 seconds to complete</p>
                          </div>
                          <NavLink
                            to="#"
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
                           {
                            activeTab >= 2 ?   <i className="bx bx-check fs-20" style={{color: 'black'}}></i> : 2
                           }
                          </NavLink>
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
                            <h6 className="fw-bolder" style={{color: activeTab !== 3 && "#dbdbdb"}}>Confirmation</h6>
                            <p
                              className="text-muted"
                              style={{ width: "max-content", color: activeTab !== 3 && "#dbdbdb" }}
                            >
                              15 seconds to complete
                            </p>
                          </div>
                          <NavLink
                            to="#"
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
                            tag="button"
                            style={{
                              backgroundColor: "white",
                              border: "1px solid black",
                              width: "3.5rem",
                              height: "3.5rem",
                              transform: "rotate(270deg)",
                            }}
                          >
                            {
                            activeTab === 3 ?   <i className="bx bx-check fs-20" style={{color: 'black'}}></i> : 3
                           }
                          </NavLink>
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
                                <div className="dropzone dz-clickable mt-3" style={{border: '1px dashed #244a59', cursor: 'pointer'}}>
                                  <div
                                    className="dz-message needsclick"
                                    {...getRootProps()}
                                  >
                                   
                                    </div>
                                    <h5 className="fw-bolder text-left m-2" style={{color: "#244a59"}}>Upload Resume</h5>
                                    <h6 className="text-left m-2" style={{color: "#244a59"}}>
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

                          <div className="mb-3">
                            <PhoneInput
                              inputProps={{
                                name: "phonenumber",
                                required: true,
                                autoFocus: true,
                              }}
                              searchNotFound="No entries to show"
                              prefix="+"
                              inputStyle={{ width: "100%" }}
                              inputClass="form-control"
                              enableSearch={true}
                              countryCodeEditable={false}
                              country={"gh"}
                              value={null}
                              // onBlur={validation.handleBlur}
                              // onChange={(e) => {
                              //   if (e.valueOf().length > 10) {
                              //     setIsLess(false);
                              //   } else {
                              //     setIsLess(true);
                              //   }

                              //   validation.setFieldValue(
                              //     "phonenumber",
                              //     e.valueOf()
                              //   );
                              // }}
                              // placeholder="Enter phone number"
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
                              type="submit"
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
                        {/* <div className="d-flex align-items-start gap-3 mt-4">
                          <button
                            type="button"
                            className="btn btn-success btn-label right ms-auto nexttab nexttab"
                          >
                            <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
                            Go to more info
                          </button>
                        </div> */}
                      </TabPane>

                      <TabPane tabId={2}>
                        <div>
                          {/* <div className="text-center">
                            <div className="profile-user position-relative d-inline-block mx-auto mb-2">
                              <img
                                src={dummyUser}
                                className="rounded-circle avatar-lg img-thumbnail user-profile-image"
                                alt=""
                              />
                              <div className="avatar-xs p-0 rounded-circle profile-photo-edit">
                                <Input
                                  id="profile-img-file-input"
                                  type="file"
                                  className="profile-img-file-input"
                                  accept="image/png, image/jpeg"
                                />
                                <Label
                                  htmlFor="profile-img-file-input"
                                  className="profile-photo-edit avatar-xs"
                                >
                                  <span className="avatar-title rounded-circle bg-light text-body">
                                    <i className="ri-camera-fill"></i>
                                  </span>
                                </Label>
                              </div>
                            </div>
                            <h5 className="fs-14">Add Image</h5>
                          </div> */}

                          <h4 className="fw-bolder">Verification Center</h4>
                          <h6 className="fw-bolder mt-5">Mobile</h6>

                          {/* OTP */}
                          {change === false ? (
                            <>
                              <div
                                className="d-flex"
                                style={{ justifyContent: "space-between" }}
                              >
                                <p>
                                  We have sent an OTP to your phone number
                                  +233559752223
                                </p>
                                <p
                                  style={{
                                    color: "#244a59",
                                    cursor: "pointer",
                                  }}
                                  onClick={() => setChange(true)}
                                >
                                  <u>Change</u>
                                </p>
                              </div>

                              <Form
                                onSubmit={(e) => {
                                  e.preventDefault();
                                  validation.handleSubmit();
                                  return false;
                                }}
                                action="#"
                              >
                                <h6 className="mt-5">Enter OTP</h6>
                                <Row>
                                  <Col className="col-2">
                                    <Input
                                      type="text"
                                      name="digit1_input"
                                      className="form-control text-center"
                                      onChange={validation.handleChange}
                                      maxLength="1"
                                      id="digit1-input"
                                      onKeyUp={() => moveToNext(1)}
                                      style={{
                                        marginRight: 2,
                                        paddingLeft: 3,
                                        fontSize: 20,
                                      }}
                                    />
                                  </Col>

                                  <Col className="col-2">
                                    <div className="mb-3">
                                      <label
                                        htmlFor="digit2-input"
                                        className="visually-hidden"
                                      >
                                        Digit 2
                                      </label>
                                      <Input
                                        type="text"
                                        name="digit2_input"
                                        className="form-control text-center"
                                        onChange={validation.handleChange}
                                        maxLength="1"
                                        id="digit2-input"
                                        onKeyUp={() => moveToNext(2)}
                                        style={{
                                          marginRight: 2,
                                          paddingLeft: 3,
                                          fontSize: 20,
                                        }}
                                      />
                                    </div>
                                  </Col>

                                  <Col className="col-2">
                                    <div className="mb-3">
                                      <label
                                        htmlFor="digit3-input"
                                        className="visually-hidden"
                                      >
                                        Digit 3
                                      </label>
                                      <Input
                                        type="text"
                                        name="digit3_input"
                                        className="form-control text-center"
                                        onChange={validation.handleChange}
                                        maxLength="1"
                                        id="digit3-input"
                                        onKeyUp={() => moveToNext(3)}
                                        style={{
                                          marginRight: 2,
                                          paddingLeft: 3,
                                          fontSize: 20,
                                        }}
                                      />
                                    </div>
                                  </Col>

                                  <Col className="col-2">
                                    <div className="mb-3">
                                      <label
                                        htmlFor="digit4-input"
                                        className="visually-hidden"
                                      >
                                        Digit 4
                                      </label>
                                      <Input
                                        type="text"
                                        name="digit4_input"
                                        className="form-control text-center"
                                        onChange={validation.handleChange}
                                        maxLength="1"
                                        id="digit4-input"
                                        onKeyUp={() => moveToNext(4)}
                                        style={{
                                          marginRight: 2,
                                          paddingLeft: 3,
                                          fontSize: 20,
                                        }}
                                      />
                                    </div>
                                  </Col>
                                  <Col className="col-2">
                                    <div className="mb-3">
                                      <label
                                        htmlFor="digit5-input"
                                        className="visually-hidden"
                                      >
                                        Digit 5
                                      </label>
                                      <Input
                                        type="text"
                                        name="digit5_input"
                                        className="form-control text-center"
                                        onChange={validation.handleChange}
                                        maxLength="1"
                                        id="digit5-input"
                                        onKeyUp={() => moveToNext(5)}
                                        style={{
                                          marginRight: 2,
                                          paddingLeft: 3,
                                          fontSize: 20,
                                        }}
                                      />
                                    </div>
                                  </Col>
                                  <Col className="col-2">
                                    <div className="mb-3">
                                      <label
                                        htmlFor="digit6-input"
                                        className="visually-hidden"
                                      >
                                        Digit 6
                                      </label>
                                      <Input
                                        type="text"
                                        name="digit6_input"
                                        className="form-control text-center"
                                        onChange={validation.handleChange}
                                        maxLength="1"
                                        id="digit6-input"
                                        onKeyUp={() => moveToNext(6)}
                                        style={{
                                          marginRight: 2,
                                          paddingLeft: 3,
                                          //   paddingTop: 3,
                                          //   paddingBottom: 3,
                                          fontSize: 20,
                                        }}
                                      />
                                    </div>
                                  </Col>
                                </Row>

                                <h6
                                  className="fw-bolder"
                                  style={{
                                    color: "#244a59",
                                    cursor: "pointer",
                                  }}
                                >
                                  Didn't receive your OTP? Resend
                                </h6>

                                <div className="mt-5">
                                  <Button
                                    color="success"
                                    // disabled={
                                    //   passCodeError
                                    //     ? null
                                    //     : passCodeLoading
                                    //     ? true
                                    //     : false
                                    // }
                                    className="btn btn-dark w-100"
                                    type="submit"
                                    style={{ backgroundColor: "#244a59" }}
                                    onClick={() => {
                                      toggleTab(activeTab + 1, 100);
                                    }}
                                  >
                                    {/* {passCodeError ? null : passCodeLoading ? (
                                  <Spinner size="sm" className="me-2">
                                    {" "}
                                    Loading...{" "}
                                  </Spinner>
                                ) : null} */}
                                    Verify Mobile Numner
                                  </Button>
                                </div>
                              </Form>
                            </>
                          ) : (
                            <>
                              <div>
                                <p>Change mobile number</p>
                              </div>

                              <div className="mb-3 mt-5">
                                <PhoneInput
                                  inputProps={{
                                    name: "phonenumber",
                                    required: true,
                                    autoFocus: true,
                                  }}
                                  searchNotFound="No entries to show"
                                  prefix="+"
                                  inputStyle={{ width: "100%" }}
                                  inputClass="form-control"
                                  enableSearch={true}
                                  countryCodeEditable={false}
                                  country={"gh"}
                                  value={null}
                                  // onBlur={validation.handleBlur}
                                  // onChange={(e) => {
                                  //   if (e.valueOf().length > 10) {
                                  //     setIsLess(false);
                                  //   } else {
                                  //     setIsLess(true);
                                  //   }

                                  //   validation.setFieldValue(
                                  //     "phonenumber",
                                  //     e.valueOf()
                                  //   );
                                  // }}
                                  // placeholder="Enter phone number"
                                />
                              </div>

                              <Button
                                className="w-100 btn btn-dark"
                                style={{ backgroundColor: "#244a59" }}
                                onClick={() => {
                                  setChange(false);
                                }}
                              >
                                Update Mobile Number
                              </Button>
                            </>
                          )}
                        </div>
                        {/* <div className="d-flex align-items-start gap-3 mt-4">
                          <button
                            type="button"
                            className="btn btn-link text-decoration-none btn-label previestab"
                            onClick={() => {
                              toggleTab(activeTab - 1, 0);
                            }}
                          >
                            <i className="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i>{" "}
                            Back to General
                          </button>
                          <button
                            type="button"
                            className="btn btn-success btn-label right ms-auto nexttab nexttab"
                            onClick={() => {
                              toggleTab(activeTab + 1, 100);
                            }}
                          >
                            <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
                            Submit
                          </button>
                        </div> */}
                      </TabPane>

                      <TabPane tabId={3}>
                        <div>
                          <h4 className="fw-bolder">Confirmation</h4>
                          <div className="text-center">
                            <div className="mb-4">
                              <img
                                src={verification}
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

                        <Button
                          className="btn btn-dark w-100 mt-5"
                          style={{ backgroundColor: "#244a59" }}
                        >
                          Start Job Search
                        </Button>
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
