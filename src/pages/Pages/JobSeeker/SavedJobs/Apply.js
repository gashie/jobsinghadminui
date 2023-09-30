import React, { useState } from "react";
import Questionnaire from "./Questionnaire";
import ApplyContent from "./ApplyContent";
import { Form, Col, Row, Label, Card, Input } from "reactstrap";
import { Link } from "react-router-dom";
import jobLocations from "../../../../common/data/cities.json";
import Dropzone from "react-dropzone";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useSelector } from "react-redux";

function Apply({ questionInfo, jobInfo }) {


    const {userInfo} = useSelector((state) => ({
        userInfo: state.Login.userInfo
    }))


  const [step, setStep] = useState(1);
  const [selectedFilesSelfie, setselectedFilesSelfie] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [phone, setPhone] = useState(userInfo?.userInfo?.phone);
  const [email, setEmail] = useState(userInfo?.userInfo?.email); // New state for email
  const [educationLevel, setEducationLevel] = useState(""); // New state for education level
  const [experienceLevel, setExperienceLevel] = useState(""); // New state for experience level

  const [fullName, setFullName] = useState(userInfo?.userInfo?.fullName);

  const handleNext = () => {
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const {id} = useSelector((state)=>state.Jobs.id)

  const [data, setData] = useState({});

  const handleData = () => {
    const info = {
      phone: phone,
      email: email,
      fullName: fullName,
      file: selectedFilesSelfie[0],
      jobId: jobInfo?.jobId
    };

    setData(info);
  };

  console.log(jobInfo?.jobId)



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
      {step === 1 ? (
        <>
          <h4 className="d-flex htstack justify-content-center">Step 1 of 2</h4>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ backgroundColor: "white" }} className="p-4">
              <Link to="/job-details"></Link>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Col xl={11} md={12} xs={12}>
                  <div style={{ width: "98%", marginLeft: "1rem" }}>
                    <Row
                      className="p-5 m-5"
                      style={{ border: "1px solid #e0e0e0", display: "flex" }}
                    >
                      <div style={{ display: "flex", gap: "0.8rem" }}>
                        <div>
                          <div className="avatar-lg mb-0 ">
                            <div className="avatar-title bg-light rounded">
                              <img
                                src={"SeaTech"}
                                alt=""
                                className="avatar-lg"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="mt-2">
                          <h5 style={{ fontWeight: "bolder" }}>
                            Warehouse Clerk
                          </h5>
                          <p>Seatch</p>
                          <p>Accra, Ghana</p>
                        </div>
                      </div>
                    </Row>
                  </div>
                </Col>
              </div>

              <div style={{ width: "98%", marginLeft: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Form>
                    <Col xl={11}>
                      <Row
                        className="p-0 m-5"
                        style={{ border: "1px solid #e0e0e0" }}
                      >
                        <div className="p-5">
                          <Col md={12}>
                            <Label for="inputEmail4" className="form-label">
                              Full Name
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              id="inputEmail4"
                              placeholder=""
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                            />
                          </Col>
                          <Col md={12} className="mt-4">
                            <Label for="inputEmail4" className="form-label">
                              Email address
                            </Label>
                            <Input
                              type="email"
                              className="form-control"
                              id="inputEmail4"
                              placeholder=""
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </Col>
                          <Col md={12} className="mt-4">
                            <Label for="inputEmail4" className="form-label">
                              Phone
                            </Label>
                            <Input
                              type="number"
                              className="form-control"
                              id="inputEmail4"
                              placeholder=""
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                            />
                          </Col>
                          <Row>
                            <Col md={6} className="mt-4">
                              <Label for="inputState" className="form-label">
                                City
                              </Label>
                              <select
                                id="inputState"
                                className="form-select"
                                data-choices
                                data-choices-sorting="true"
                                value={selectedLocation}
                                onChange={(e) =>
                                  setSelectedLocation(e.target.value)
                                }
                              >
                                <option value="" selected>
                                  Choose...
                                </option>
                                {Object.keys(jobLocations).map((region) => (
                                  <optgroup key={region} label={region}>
                                    {jobLocations[region].map(
                                      (location, index) => (
                                        <option key={index} value={location}>
                                          {location}
                                        </option>
                                      )
                                    )}
                                  </optgroup>
                                ))}
                              </select>
                            </Col>
                          </Row>

                          <Col xs={12} className="mt-4">
                            <Label for="inputPassword4" className="form-label">
                              Select Resume
                            </Label>

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
                                  className="dropzone dz-clickable"
                                  style={{
                                    backgroundColor: "#ebeff0",
                                    border: "1px dashed gray",
                                    cursor: "pointer",
                                  }}
                                >
                                  <div
                                    className="dz-message needsclick"
                                    {...getRootProps()}
                                  >
                                    <div className="mb-3">
                                      <i
                                        className="display-4 bx bx-plus"
                                        style={{ color: "#244a59" }}
                                      />
                                    </div>
                                    <h6
                                      style={{ color: "#244a59" }}
                                      className="fw-bolder"
                                    >
                                      Choose a file or drop it here
                                    </h6>
                                    <p className="fs-11">
                                      Formats supported: docx, doc, RTF, txt,
                                      PDF (maximum of 2 MB)
                                    </p>
                                  </div>
                                </div>
                              )}
                            </Dropzone>
                          </Col>
                        </div>
                        <hr />
                        <div className="p-5">
                          <Col md={12}>
                            <Col md={12}>
                              <Label for="inputCity" className="form-label">
                                What is your level of education?
                              </Label>
                              <select
                                id="inputState"
                                className="form-select"
                                data-choices
                                data-choices-sorting="true"
                                value={educationLevel}
                                onChange={(e) =>
                                  setEducationLevel(e.target.value)
                                }
                              >
                                <option selected>Choose...</option>
                                <option>None</option>
                                <option>High School</option>
                                <option>Professional</option>
                                <option>College</option>
                                <option>University</option>
                                <option>Training</option>
                              </select>
                            </Col>

                            <Label for="inputZip" className="form-label mt-4">
                              Do you have any experience in this field?
                            </Label>
                            <select
                              id="inputState"
                              className="form-select"
                              data-choices
                              data-choices-sorting="true"
                              value={experienceLevel}
                              onChange={(e) =>
                                setExperienceLevel(e.target.value)
                              }
                            >
                              <option selected>Choose...</option>
                              <option>0-2 years</option>
                              <option>3-5 years</option>
                              <option>6-9 years</option>
                              <option>10+ years</option>
                            </select>
                          </Col>

                          <Col xs={12} className="mt-5">
                            <Label
                              className="form-check-label mt-4"
                              for="gridCheck"
                            >
                              By clicking on Apply, you confirm having read and
                              agreed to the Terms of Service. You will also
                              receive news about the company and similar job
                              postings via email.
                            </Label>
                          </Col>
                          <Col xs={12} md={12} xl={12}>
                            <button
                              type="button"
                              className="btn mt-4 p-2"
                              style={{
                                width: "100%",
                                color: "white",
                                backgroundColor: "#244a59",
                              }}
                              onClick={() => {
                                handleNext();
                                handleData();
                              }}
                            >
                              Continue
                            </button>
                          </Col>
                        </div>
                      </Row>
                    </Col>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>
          <Questionnaire handleBack={handleBack} questionInfo={questionInfo} data={data}/>
        </p>
      )}
    </>
  );
}

export default Apply;
