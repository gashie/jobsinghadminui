import React, { useState } from "react";
import {
  Modal,
  Input,
  Button,
  ModalBody,
  Form,
  FormFeedback,
} from "reactstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

function AddContent({presentId}) {
  const dispatch = useDispatch();

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      rateTitle: "",
      rateDescription: "",
      ratePrice: "",
      rateLimit: "",
    },
    validateOnChange: true,
    // validationSchema: Yup.object({
    //   rateTitle: Yup.string().required("Please enter a rate title"),
    //   rateDescription: Yup.string().required("Please enter a rate description"),
    //   ratePrice: Yup.string().required("Please enter rate price"),
    //   rateLimit: Yup.string().required("Please enter rate limit"),
    // }),
    onSubmit: (values) => {
      const rateData = {
        rateTitle: values.rateTitle,
        rateDescription: values.rateDescription,
        ratePrice: values.ratePrice,
        rateLimit: values.rateLimit,
      };
      console.log(values)
     

      //   dispatch(createRateCard(rateData));
      //   validation.resetForm();
      //   setAddCategoryModal(false);
    },
  });

  return (
    <>
      <ModalBody>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            validation.handleSubmit();
            return false;
          }}
        >
          <p className="text-end text-light">
            <Button
              type="button"
              className="btn-close text-light p-2"
              style={{
                backgroundColor: "#e0e0e0",
                color: "white",
                borderRadius: "2rem",
              }}
              onClick={() => {
                // setAddContentModal(false);
              }}
              aria-label="Close"
            ></Button>
          </p>

          <h5 className="text-center">Add Content</h5>
          <label className="mt-4">Add Category</label>
          <Input type="text" />

          <div className="hstack justify-content-center">
            <div className="hstack gap-2 justify-content-center p-2 mt-4 mb-3 w-50">
              <Button color="primary" className="w-50">
                Save{" "}
              </Button>
              <Button
                color="light"
                //   onClick={() => {
                //     toggleAddContentModal();
                //   }}
                className="w-50"
              >
                Cancel
              </Button>
            </div>
          </div>
        </Form>
      </ModalBody>
    </>
  );
}

export default AddContent;
