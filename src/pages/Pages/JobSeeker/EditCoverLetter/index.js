import {
  CardBody,
  Col,
  Card,
  Row,
  Label,
  Input,
  Form,
  FormFeedback,
} from "reactstrap";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Editor from "./Editor";
import { updateCv, viewCv } from "../../../../store/actions";
import * as Yup from "yup";
import { useFormik } from "formik";

const EditCoverLetter = ({ data, handleCoverLetters }) => {
  const dispatch = useDispatch();

  const [textFromEditor, setTextFromEditor] = useState("");
  const [text, setFinalText] = useState("");

  useEffect(() => {
    setFinalText(textFromEditor);
  }, [textFromEditor]);

  const handlePlainTextChange = (plainText) => {
    setTextFromEditor(plainText);
  };

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: data?.coverLetterName,
      description: "",
    },
    validateOnChange: true,
    validationSchema: Yup.object({
      name: Yup.string().required("Please Enter Cover Letter Name"),
    }),
    onSubmit: (values) => {
      const editData = {
        coverLetterName: data?.coverLetterName,
        coverLetterDescription: text,

        deleterecord: false,
        restore: 0,
        coverLetterId: data?.coverLetterId,
        patch: true,
        patchData: {
          coverLetterName: values.name,
          coverLetterDescription: text,
        },
      };
   
     
      dispatch(updateCv(editData));
      handleCoverLetters();

      // if (dispatch(viewCv({ viewAction: "" }))) {
      //   handleCoverLetters();
      // }

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
                  placeholder="Enter New Name"
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
              <Editor onPlainTextChange={handlePlainTextChange} content={textFromEditor} data={data?.coverLetterDescription}/>

              </Col>
            </Row>

            <Row className="mb-3">
              <Col lg={3}></Col>
              <Col lg={9}>
                <div className="text-start d-flex gap-3">
                  <button
                    type="submit"
                    className="btn btn-dark p-3 px-5"
                    style={{ backgroundColor: "#244a59" }}
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="btn btn-light p-3 px-5"
                    style={{ color: "#244a59", border: "1px solid #244a59" }}
                  >
                    Cancel
                  </button>
                </div>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default EditCoverLetter;
