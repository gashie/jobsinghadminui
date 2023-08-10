import { useState } from "react";
import { Label, Input, Col, Row, Card } from "reactstrap";
import Dropzone from "react-dropzone";
import { Link } from "react-router-dom";
import SeaTech from "./seaTech.png";

const Apply = () => {
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
        className="p-5 m-5"
        style={{ border: "1px solid black", display: "flex" }}
      >
        <div>
          <div className="avatar-lg mb-0 ">
            <div className="avatar-title bg-light rounded">
              <img src={SeaTech} alt="" className="avatar-lg" />
            </div>
          </div>
        </div>

        <div>
          <h5>Warehouse Clerk</h5>
          <p>Seatch</p>
          <p>Accra, Ghana</p>
        </div>
      </Row>

      <Row className="p-0 m-5" style={{ border: "1px solid black" }}>
        <div className="p-5">
          <Col md={6}>
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
            <Col md={6}>
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
            <Col md={4}>
              <Label for="inputState" className="form-label">
                City
              </Label>
              <select
                id="inputState"
                className="form-select"
                data-choices
                data-choices-sorting="true"
              >
                <option selected>Choose...</option>
                <option>...</option>
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
                          <Link to="#" className="text-muted font-weight-bold">
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
                <div className="dropzone dz-clickable">
                  <div className="dz-message needsclick" {...getRootProps()}>
                    <div className="mb-3">
                      <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                    </div>
                    <h5>Drag or Click to upload file</h5>
                    <h6>(.doc, .docx, .pdf, .rtf, .txt, Max size 2 MB)</h6>
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
                <option>...</option>
              </select>
            </Col>

            <Label for="inputZip" className="form-label">
              Do you have any experience in this field?
            </Label>
            <select
              id="inputState"
              className="form-select"
              data-choices
              data-choices-sorting="true"
            >
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </Col>
          <Col xs={12}>
            <Label className="form-check-label mt-3" for="gridCheck">
              By clicking on Apply. you confirmed having read and agreed to the
              Terms of Service. You will also receive news about the company and
              similar job posting via email.
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
            >
              Apply
            </button>
          </Col>
        </div>
      </Row>
    </>
  );
};

export default Apply;
