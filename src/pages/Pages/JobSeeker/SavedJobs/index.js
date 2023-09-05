import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Row,
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Label,
  InputGroupText,
  Card,
  Input,
} from "reactstrap";
import data from "./data";
import Dropzone from "react-dropzone";
import SeaTech from "../../../../assets/images/jobsinghana/seatec.png";
import img1 from './img1.png'

import jobLocations from "../../../../common/data/cities.json";


const SavedJobs = () => {
  const [modal_standard, setmodal_standard] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const [selectedLocation, setSelectedLocation] = useState("");

  function tog_standard() {
    setmodal_standard(!modal_standard);
  }
  function tog_success() {
    setSuccessModal(!successModal);
  }

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
      <h5 style={{ fontWeight: "bolder", color: "#244a59" }} className="mt-3">
        List of saved jobs
      </h5>

      <Col className="m-5">
        <div className="table-responsive">
          <Table className="align-middle table-nowrap mb-0">
            <thead>
              <tr>
                <th scope="col">Job title</th>
                <th scope="col">Company Name</th>
                <th scope="col">Advertised on </th>
                <th scope="col">Expired on</th>
                <th scope="col">Delete</th>
                <th scope="col">Apply</th>
              </tr>
            </thead>
            <tbody>
              {data.map((a, key) => (
                <tr key={key}>
                  <th scope="row">
                    <Link to="#" className="fw-medium">
                      {a.jobTitle}
                    </Link>
                  </th>
                  <td>{a.companyName}</td>
                  <td>{a.advertisedOn}</td>
                  <td>{a.ExpiredOn}</td>
                  <td>
                    <p
                      style={{
                        color: "red",
                      }}
                    >
                      {a.delete}
                    </p>
                  </td>
                  <td>
                    <p
                      style={{ color: "#244A59", cursor: "pointer" }}
                      onClick={() => tog_standard()}
                    >
                      <td>{a.apply}</td>
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Col>

      <Modal
        id="myModal"
        size="xl"
        className=""
        isOpen={modal_standard}
        toggle={() => {
          tog_standard();
        }}
      >
        <ModalHeader>
          {/* <h5 className="modal-title" id="myModalLabel">
            Modal Heading
          </h5> */}
          <Button
            type="button"
            className="btn-close"
            onClick={() => {
              setmodal_standard(false);
            }}
            aria-label="Close"
          ></Button>
        </ModalHeader>
        <ModalBody>
          {/* <Link to="/job-details">
            <h4
              className="m-5"
              style={{ fontWeight: "bolder", cursor: "pointer" }}
            >
              <i
                className="bx bx-chevron-left"
                style={{
                  fontSize: "1.5rem",
                  position: "relative",
                  top: "0.3rem",
                }}
              ></i>
              Back to Jobs
            </h4>
          </Link> */}
          <div style={{ display: "flex", justifyContent: "center" }}>
          <div
        style={{ backgroundColor: "white", }}
        className="p-4"
      >
        <Link to="/job-details"></Link>
        <div style={{ display: "flex", justifyContent: "center", }}>
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
                        <img src={SeaTech} alt="" className="avatar-lg" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-2">
                    <h5 style={{ fontWeight: "bolder" }}>Warehouse Clerk</h5>
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
            <Col xl={11}>
              <Row className="p-0 m-5" style={{ border: "1px solid #e0e0e0" }}>
                <div className="p-5">
                  <Col md={12}>
                    <Label for="inputEmail4" className="form-label">
                      Email address*
                    </Label>
                    <Input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Email"
                    />
                  </Col>
                  <Row>
                    <Col md={6} className="mt-4">
                      <Label for="inputPassword4" className="form-label">
                        Country
                      </Label>
                      <Input
                        type="password"
                        className="form-control"
                        id="inputPassword4"
                        placeholder="Password"
                      />
                    </Col>
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
                        onChange={(e) => setSelectedLocation(e.target.value)}
                      >
                        <option value="" selected>
                          Choose...
                        </option>
                        {Object.keys(jobLocations).map((region) => (
                          <optgroup key={region} label={region}>
                            {jobLocations[region].map((location, index) => (
                              <option key={index} value={location}>
                                {location}
                              </option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                    </Col>
                  </Row>

                  <Col xs={12} className="mt-4">
                    <Label for="inputPassword4" className="form-label">
                      Select Resume
                    </Label>

                    <div className="list-unstyled mb-0" id="file-previews">
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
                              Formats supported: docx, doc, RTF, txt, PDF
                              (maximum of 2 MB)
                            </p>
                          </div>
                        </div>
                      )}
                    </Dropzone>
                  </Col>

                  <h6 className="mt-5">Add a cover letter</h6>
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
                    >
                      <option selected>Choose...</option>
                      <option>0-2 years</option>
                      <option>3-5 years</option>
                      <option>6-9 years</option>
                      <option>10+ years</option>
                    </select>
                  </Col>
                  <Col xs={12} className="mt-3">
                    <Label className="form-check-label mt-4" for="gridCheck">
                      By clicking on Apply. you confirmed having read and agreed
                      to the Terms of Service. You will also receive news about
                      the company and similar job posting via email.
                    </Label>
                  </Col>
                  <Col xs={12} md={12} xl={12}>
                    <button
                      type="submit"
                      className="btn mt-3 p-3"
                      style={{
                        width: "100%",
                        color: "white",
                        backgroundColor: "#244a59",
                      }}
                      onClick={() => {
                        setSuccessModal(true);
                        tog_standard();
                    }}
                    >
                      Apply
                    </button>
                  </Col>
                </div>
              </Row>
            </Col>
          </div>
        </div>
      </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="light"
            onClick={() => {
              tog_standard();
            }}
          >
            Close
          </Button>
          {/* <Button color="primary">Save changes</Button> */}
        </ModalFooter>
      </Modal>

      <Modal
    isOpen={successModal}
    toggle={() => {
        tog_success();
    }}
    backdrop={'static'}
    id="staticBackdrop"
    centered
>
    <ModalHeader>
        {/* <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5> */}
        <Button type="button" className="btn-close"
            onClick={() => {
                setSuccessModal(false);
            }} aria-label="Close"></Button>
    </ModalHeader>
    <ModalBody className="text-center p-5">
        <img src={img1} alt="img1" className="img-fluid">
        </img>

        <div className="mt-4">
            <h4 className="mb-3">Successful</h4>
            <p className="text-muted mb-4"> Your application has been submitted successfully</p>
            <div className="hstack gap-2 justify-content-center">
                
                {/* <Button to="/job-seeker-dashboard" className="btn btn-success">Home</Button> */}
            </div>
        </div>
    </ModalBody>
</Modal>
    </>
  );
};

export default SavedJobs;
