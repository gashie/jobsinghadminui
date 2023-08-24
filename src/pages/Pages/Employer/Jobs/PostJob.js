import {
  Col,
  Row,
  Modal,
  ModalBody,
  Input,
  Container,
  Button,
  Form,
} from "reactstrap";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const PostJob = () => {
  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    console.log(data); // This will log the content of the editor to the console
  };

  return (
    <>
      <h4 style={{ color: "#244a59", fontWeight: "bolder" }} className="m-3">
        Post a job
      </h4>

      <Container>
        <Row>
          {/* left */}
          <Col>
            <Row className="mb-3">
              <Col lg={15}>
                <Input
                  type="url"
                  className="form-control"
                  id="websiteUrl"
                  placeholder="Gashie Technology"
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col lg={15}>
                <div
                  style={{
                    backgroundColor: "#EFF1F2",
                    height: "35vh",
                    display: "flex",
                    justifyContent: "center",
                  }}
                ></div>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col lg={15}>
                <Input
                  type="url"
                  className="form-control"
                  id="websiteUrl"
                  placeholder="Gashie Technology"
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col lg={15}>
                <select className="form-select ">
                  <option> Category 1</option>
                  <option>Category 1</option>
                </select>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col lg={15}>
                <select className="form-select ">
                  <option>Default industry upon registration</option>
                  <option>...</option>
                </select>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col lg={15}>
                <Input
                  type="url"
                  className="form-control"
                  id="websiteUrl"
                  placeholder="Education"
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col lg={15}>
                <Input
                  type="url"
                  className="form-control"
                  id="websiteUrl"
                  placeholder="Starting Date"
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col
                lg={15}
                className="d-flex gap-3 p-2"
                style={{ border: "1px solid #ebeff0", borderRadius: "0.5rem" }}
              >
                <Button className="btn btn-light">How to apply</Button>
                <p style={{ color: "red" }}>Not set</p>
              </Col>
            </Row>
          </Col>

          {/* right */}
          <Col>
            <Row className="mb-3">
              <Col lg={15}>
                <Input
                  type="url"
                  className="form-control"
                  id="websiteUrl"
                  placeholder="Partner Category"
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col lg={15}>
                <div
                  style={{
                    backgroundColor: "#EFF1F2",
                    height: "35vh",
                    display: "flex",
                    justifyContent: "center",
                  }}
                ></div>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col lg={15}>
                <Input
                  type="url"
                  className="form-control"
                  id="websiteUrl"
                  placeholder="Job status"
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col lg={15}>
                <select className="form-select ">
                  <option>Category 2</option>
                  <option>...</option>
                </select>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col lg={15} className="p-2">
                <Input
                  type="url"
                  className="form-control"
                  id="websiteUrl"
                  placeholder="Job location eg. Accra, Tarkwa"
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col lg={15}>
                <Input
                  type="url"
                  className="form-control"
                  id="websiteUrl"
                  placeholder="Years of experience"
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col lg={15}>
                <Input
                  type="url"
                  className="form-control"
                  id="websiteUrl"
                  placeholder="End date"
                />
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mt-3">
          <h6 style={{ color: "#244a59", fontWeight: "bolder" }}>
            Description
          </h6>
          <Col lg={12}>
            <Form method="post">
              <CKEditor
                editor={ClassicEditor}
                data=""
                onChange={handleEditorChange} // Use the custom handleEditorChange function
              />
            </Form>
          </Col>
        </Row>

        <Row className="mt-3">
          <h6 style={{ color: "#244a59", fontWeight: "bolder" }}>
            How to apply
          </h6>
          <Col lg={12}>
            <Form method="post">
              <CKEditor
                editor={ClassicEditor}
                data=""
                onChange={handleEditorChange} // Use the custom handleEditorChange function
              />
            </Form>
          </Col>
        </Row>

        <div className="text-start d-flex gap-3 mt-4">
          <button
            type="submit"
            className="btn btn-dark"
            style={{ backgroundColor: "#244a59" }}
          >
            Submit
          </button>
        </div>
      </Container>
    </>
  );
};

export default PostJob;
