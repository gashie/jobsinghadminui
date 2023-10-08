import React, { useState } from "react";
import { Col, Label, Input, Container, Spinner, Form } from "reactstrap";
import Flatpickr from "react-flatpickr";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../../../store/actions";
import { useFormik } from "formik";
import * as Yup from "yup";

function ChangePassword() {
  // Define state variables for the form fields
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true); // State to track password match

  const dispatch = useDispatch();

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Check if the passwords match
  //   if (newPassword !== confirmNewPassword) {
  //     setPasswordsMatch(false);
  //     return; // Do not proceed with submission
  //   }

  //   // Reset the passwordsMatch state
  //   setPasswordsMatch(true);

  //   dispatch(
  //     changePassword({
  //       password: currentPassword,
  //       newPassword: newPassword,
  //     })
  //   );

  //   setCurrentPassword("");
  //   setNewPassword("");
  //   setConfirmNewPassword("");
  // };

  const { loading, error } = useSelector((state) => ({
    loading: state.Login.passwordLoading,
    error: state.Login.passwordError,
  }));

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    validateOnChange: true,
    validationSchema: Yup.object({
      currentPassword: Yup.string().required("Please Select a date"),
      newPassword: Yup.string().required("Please Select a fullname"),
      confirmNewPassword: Yup.string().required("Please ernter a username"),
    }),
    onSubmit: (values) => {
      if (values.newPassword !== values.confirmNewPassword) {
        setPasswordsMatch(false);
        return; // Do not proceed with submission
      }

      // Reset the passwordsMatch state
      setPasswordsMatch(true);

      dispatch(
        changePassword({
          password: values.currentPassword,
          newPassword: values.newPassword,
        })
      );
    },
  });

  return (
    <>
      <Container className="d-flex h-stack justify-content-center mt-5" fluid>
        <div className="mt-5">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              validation.handleSubmit();
              return false;
            }}
          >
            <h5>Change Password</h5>
            <p>
              Your new password must contain at least 6 characters and a number
            </p>
            <div className="mb-3 col-xl-20 mt-5">
              <Label
                htmlFor="currentPassword"
                className="form-label"
                style={{ fontSize: "0.8rem" }}
              >
                Current Password
              </Label>
              <Input
                type="password"
                className="form-control p-3"
                id="currentPassword"
                placeholder="Current Password"
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                invalid={
                  validation.touched.currentPassword &&
                  validation.errors.currentPassword
                    ? true
                    : false
                }
              />
            </div>
            <div className="mb-3 col-xl-20">
              <Label
                htmlFor="newPassword"
                className="form-label "
                style={{ fontSize: "0.8rem" }}
              >
                New Password
              </Label>
              <Input
                type="password"
                className="form-control p-3"
                id="newPassword"
                placeholder="New Password"
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                invalid={
                  validation.touched.newPassword &&
                  validation.errors.newPassword
                    ? true
                    : false
                }
              />
            </div>
            <div className="mb-3 col-xl-20">
              <Label
                htmlFor="confirmNewPassword"
                className="form-label "
                style={{ fontSize: "0.8rem" }}
              >
                Confirm New Password
              </Label>
              <Input
                type="password"
                className={`form-control p-3 ${
                  !passwordsMatch ? "is-invalid" : ""
                }`}
                id="confirmNewPassword"
                placeholder="Confirm New Password"
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                invalid={
                  validation.touched.confirmNewPassword &&
                  validation.errors.confirmNewPassword
                    ? true
                    : false
                }
              />
              {!passwordsMatch && (
                <div className="invalid-feedback">
                  Make sure confirm password is the same as new password
                </div>
              )}
            </div>

            <div className="text-start mb-3 col-xl-20 mt-3">
              <button
                type="submit"
                className="btn w-100 p-3"
                style={{
                  backgroundColor: "#244a59",
                  color: "white",
                }}
                disabled={error ? null : loading}
                // onClick={handleSubmit}
              >
                {error ? null : loading ? (
                  <Spinner size="sm" className="me-2">
                    {" "}
                    Loading...{" "}
                  </Spinner>
                ) : null}
                Change Password
              </button>
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
}

export default ChangePassword;
