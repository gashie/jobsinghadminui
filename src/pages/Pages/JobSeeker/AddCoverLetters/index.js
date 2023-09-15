import { CardBody, Col, Card, Row, Label, Input, FormFeedback, Form } from "reactstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Editor from "./Editor";
import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import {createCv} from '../../../../store/Resume/action'
import { useEffect } from "react";

const AddCoverLetters = () => {
  const dispatch = useDispatch();

  const [textFromEditor, setTextFromEditor] = useState("");
  const [text, setFinalText] = useState("")

  useEffect(()=>{
    setFinalText(textFromEditor)
  }, [textFromEditor] )



  const handlePlainTextChange = (plainText) => {
    setTextFromEditor(plainText);

  };

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      description: "",
    },
    validateOnChange: true,
    validationSchema: Yup.object({
      name: Yup.string().required("Please Enter Cover Letter Name"),
    }),
    onSubmit: (values) => {
      const data = {
        coverLetterName: values.name,
        coverLetterDescription: text,
      };
      // Dispatch an action or perform other operations with the data
      console.log(data);
      dispatch(createCv(data))
      validation.resetForm();
    },
    
    
  });



 

  return (
    <>
      <h4 className="m-3">Add cover letters</h4>
      <Card>
        <CardBody>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              validation.handleSubmit();
              return false;
            }}
           
          >
            <Row className="mb-3">
              {/* <Form></Form> */}
              <Col lg={3}>
                <Label htmlFor="useremail" className="form-label">
                  Name<span className="text-danger">*</span>
                </Label>
                </Col>
                <Col lg={9}>
                <Input
                  id="name"
                  name="name"
                  className="form-control p-3"
                  placeholder="Enter Name"
                  type="text"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.name || ""}
                  invalid={
                    validation.touched.name && validation.errors.name
                      ? true
                      : false
                  }
                />
                {validation.touched.name && validation.errors.name ? (
                  <FormFeedback type="invalid">
                    <div>{validation.errors.name}</div>
                  </FormFeedback>
                ) : null}
            </Col>
            </Row>

            <Row className="mb-3">
              <Col lg={3}>
                <Label htmlFor="contactNumber" className="form-label">
                  Description
                </Label>
              </Col>
              <Col lg={9}>
                <Editor onPlainTextChange={handlePlainTextChange} />
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
                type="button"
                className="btn btn-light"
                style={{ color: "#244a59", border: "1px solid #244a59" }}
              >
                Cancel
              </button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};
export default AddCoverLetters;
