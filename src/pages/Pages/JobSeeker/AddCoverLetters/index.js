import { CardBody, Col, Card, Row, Label, Input, Form } from "reactstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const AddCoverLetters = () => {
  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    console.log(data); // This will log the content of the editor to the console
  };

  return (
    <>
      <h4 className="m-3">Add cover letters</h4>
      <Card>
        <CardBody>
          <Row className="mb-3">
            <Col lg={3}>
              <Label htmlFor="nameInput" className="form-label">
                Name
              </Label>
            </Col>
            <Col lg={9}>
              <Input
                type="text"
                className="form-control"
                id="nameInput"
                placeholder=""
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={3}>
              <Label htmlFor="contactNumber" className="form-label">
                Description
              </Label>
            </Col>
            <Col lg={9}>
              <Form method="post">
                <CKEditor
                  editor={ClassicEditor}
                  data=""
                  onChange={handleEditorChange} // Use the custom handleEditorChange function
                />
              </Form>
            </Col>
          </Row>

          <div className="text-start d-flex gap-3">
            <button
              type="submit"
              className="btn btn-dark"
              style={{ backgroundColor: "#244a59" }}
            >
              Save
            </button>
            <button
              type="submit"
              className="btn btn-light"
              style={{ color: "#244a59", border: "1px solid #244a59" }}
            >
              Cancel
            </button>
          </div>
        </CardBody>
      </Card>
    </>
  );
};
export default AddCoverLetters;
