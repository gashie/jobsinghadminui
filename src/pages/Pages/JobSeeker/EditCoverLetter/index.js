import { CardBody, Col, Card, Row, Label, Input, Form } from "reactstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const EditCoverLetter = () => {
  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    console.log(data); // This will log the content of the editor to the console
  };

  return (
    <>
      <h4 className="m-3">Edit cover letter</h4>
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
                placeholder="Warehouse Clerck"
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
                  data="Lorem ipsum dolor sit amet consectetur. Semper dolor elit adipiscing sit sit cursus. Ut fermentum ipsum morbi donec nibh faucibus. Mauris fermentum vestibulum eros nulla convallis amet a. Quam massa in nibh imperdiet. Nibh interdum eget quam lacus amet aenean purus imperdiet magna. Dictum urna a purus est. Suscipit nisl ut faucibus lectus sit scelerisque morbi proin. Feugiat at ac sed sit elementum morbi risus commodo. Vitae ac egestas donec placerat est dapibus vitae pellentesque. Non interdum penatibus.

                  Suspendisse velit pellentesque facilisi volutpat sed. Duis quis dui risus non tristique. Nisi bibendum erat quis dignissim ipsum. Maecenas congue amet pellentesque adipiscing cursus sollicitudin pulvinar in etiam. Viverra non praesent imperdiet est amet tincidunt eget. Adipiscing in pharetra morbi purus. Lectus ipsum venenatis non convallis porttitor "
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
              Update
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
export default EditCoverLetter;
