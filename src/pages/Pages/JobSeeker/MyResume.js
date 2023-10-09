import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Card, Col, Row, Button, Spinner } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createResume, updateResume, viewResume } from "../../../store/actions";
import { useEffect } from "react";

function MyResume() {
  const dispatch = useDispatch();

  const [file, setfile] = useState([]);

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
    setfile(files);
  };

  const { loading, error } = useSelector((state) => ({
    loading: state.Resumes.updateResumeLoading,
    error: state.Resumes.updateResumeError,
  }));

  const { viewResumeLoading, viewResumeError, Resume } = useSelector(
    (state) => ({
      viewResumeLoading: state.Resumes.loading,
      viewResumeError: state.Resumes.error,
      Resume: state.Resumes.resumeInfo,
    })
  );

  useEffect(() => {
    dispatch(viewResume({ viewAction: "" }));
  }, [dispatch]);

  const handleCreateResume = () => {
    const formData = new FormData();
    formData.append("myCv", file[0]);
    // formData.append("resumeId", "e527149a-40af-46c7-aa4a-d21d35b5c0c7");
    // formData.append("patch", true);

    dispatch(createResume(formData));
    setfile([]);
  };

  const pdf = "https://108.166.181.225:5050/upload/pdf/resume/";

  function handleOpenInNewTab(e) {
    // Prevent the default behavior of the link
    e.preventDefault();

    // Specify the URL of the PDF file
    const pdfUrl = pdf + Resume?.fileName;

    // Open a new window or tab with custom styles
    const newWindow = window.open(pdfUrl, "_blank", "width=800,height=600");

    // Apply custom styles to the new window
    if (newWindow) {
      newWindow.document.body.style.backgroundColor = "black";
      newWindow.document.body.style.margin = "0";
      // You can add more custom styles as needed
    }
  }

  return (
    <>
    <div className="">
      <div className="list-unstyled mb-0" id="file-previews">
        {file.map((f, i) => {
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
      {/* http://108.166.181.225:5050/uploads/pdf/course/ */}
      <Row>
        <Col xl={12}>

          
          <div
            className="d-flex mb-4"
            style={{ justifyContent: "space-between" }}
          >
            <div>
              {" "}
              <h5
                className="mb-3 mt-3 fw-bolder"
                style={{ fontWeight: "boder" }}
              >
                Replace your CV
              </h5>
            </div>

            <div>
              <Link target="_blank" onClick={handleOpenInNewTab}>
                <Button
                  style={{ backgroundColor: "#244a59" }}
                  className="btn btn-dark p-3"
                >
                  Download Resume
                </Button>
              </Link>
            </div>
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
                      cursor: "pointer",
                    }}
                  >
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

              <Button
                style={{ backgroundColor: "#244a59" }}
                disabled={error || file.length === 0 || loading}
                className="btn btn-dark w-100 mt-4"
                onClick={() => {
                  handleCreateResume();
                }}
              >
                {error ? null : loading ? (
                  <Spinner size="sm" className="me-2">
                    {" "}
                    Loading...{" "}
                  </Spinner>
                ) : null}
                Submit
              </Button>
         
        

        </Col>
      </Row>
      </div>
    </>
  );
}

export default MyResume;
