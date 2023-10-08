import { Col, Label, Input, Row, Form, FormFeedback, Spinner } from "reactstrap";
import avatar1 from "../profile.png";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile, updateProfileImage } from "../../../../store/actions";
import { useState } from "react";

const EditProfile = () => {
  const dispatch = useDispatch();

  const { userInfo, loading, error } = useSelector((state) => ({
    userInfo: state.Login.userInfo,
    loading: state.Login.loading,
    error: state.Login.error,
  }));

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      fullName: userInfo?.userInfo?.fullName,
      username: userInfo?.userInfo?.username,
      phone: userInfo?.userInfo?.phone || "",
      email: userInfo?.userInfo?.email,
      roleid: "2",
      birthDate: "",
      address: "",
      maritalStatus: "",
      gender: "",
      userType: "jobSeeker",
      country: "Ghana",
    },
    validateOnChange: true,
    validationSchema: Yup.object({
      birthDate: Yup.string().required("Please Select a date"),
      fullName: Yup.string().required("Please Select a fullname"),
      username: Yup.string().required("Please ernter a username"),
      phone: Yup.string().required("Please enter a phone number"),
      email: Yup.string().required("Please Select an email"),
      address: Yup.string().required("Please enter an address"),
     // maritalStatus: Yup.string().required("Please Select a marital status"),
      gender: Yup.string().required("Please Select a gender"),
    }),
    onSubmit: (values) => {
      const userData = {
        reset: false,
        blockUser: false,
        allow: 1,
        deleterecord: false,
        restore: 1,
        userId: userInfo?.userInfo?.userId,
        patch: true,
        profile: {
          fullName: values.fullName,
          username: values.username,
          phone: values.phone,
          email: values.email,
          roleid: "2",
          address: values.address,
          country: "Ghana",
          birthDate: values.birthDate ?? " ",
          maritalStatus: 1,
          gender: values.gender === "Male" ? "M" : "F",
          userType: "jobseeker",
        },
      };

      console.log(typeof userData);
      // dispatch(viewCv({ viewAction: "" }));
      //dispatch(viewCv({ viewAction: "" }));
      // Dispatch an action or perform other operations with the data
      console.log(userData);

      dispatch(updateProfile(userData));

      //dispatch(updateCv(userData));

      // if (dispatch(viewCv({ viewAction: "" }))) {
      //   handleCoverLetters();
      // }

      validation.resetForm();
    },
  });

  const [image, setImage] = useState();

  const handleImage = () => {
    const formData = new FormData();
    formData.append("profileImage", image);

    dispatch(updateProfileImage(formData));
  };

   console.log(validation.errors)

  return (
    <>
      <h4
        style={{
          textAlign: "center",
          fontWeight: "bolder",
          color: "#244a59",
          marginTop: "3rem",
        }}
      >
        Profile Information
      </h4>

      <Form
        onSubmit={(e) => {
          e.preventDefault();
          validation.handleSubmit();
          return false;
        }}
      >
        <div className="text-center mt-4">
          <div className="profile-user position-relative d-inline-block mx-auto  mb-4">
            <img
              src={avatar1}
              className="rounded-circle avatar-xl img-thumbnail user-profile-image"
              alt="user-profile"
            />
            <div className="avatar-xs p-0 rounded-circle profile-photo-edit">
              <Input
                id="profile-img-file-input"
                type="file"
                className="profile-img-file-input p-3"
              />
              <Label
                htmlFor="profile-img-file-input"
                className="profile-photo-edit avatar-xs"
              >
                <span className="avatar-title rounded-circle bg-light text-body">
                  <i className="ri-camera-fill"></i>
                </span>
              </Label>
            </div>
          </div>
        </div>

        <Row style={{ marginTop: "2rem" }}>
          <Col md={6} className="mt-4">
            <div className="mb-3">
              <Label for="firstNameinput" className="form-label">
                Full Name
              </Label>
              <Input
                id="fullName"
                name="fullName"
                className="form-control p-3"
                placeholder="Enter New Name"
                type="text"
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                value={validation.values.fullName || ""}
                invalid={
                  validation.touched.fullName && validation.errors.fullName
                    ? true
                    : false
                }
              />
            
            </div>
          </Col>
          <Col md={6}>
            <div className="mb-3 mt-4">
              <Label for="lastNameinput" className="form-label">
                UserName
              </Label>
              <Input
                id="username"
                name="username"
                className="form-control p-3"
                placeholder="Enter New Name"
                type="text"
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                value={validation.values.username || ""}
                invalid={
                  validation.touched.username && validation.errors.username
                    ? true
                    : false
                }
              />
           
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <div className="mb-3">
              <Label for="compnayNameinput" className="form-label">
                Birth Date
              </Label>
              <Input
                id="birthDate"
                name="birthDate"
                className="form-control p-3"
                type="date"
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                value={validation.values.birthDate || ""}
                invalid={
                  validation.touched.birthDate && validation.errors.birthDate
                    ? true
                    : false
                }
              />
              {validation.touched.birthDate && validation.errors.birthDate ? (
                <FormFeedback type="invalid">
                  <div>{validation.errors.birthDate}</div>
                </FormFeedback>
              ) : null}
            </div>
          </Col>
          <Col md={6}>
            <div className="mb-3">
              <Label for="phonenumberInput" className="form-label">
                Gender
              </Label>
              <Input
                name="gender"
                id="gender"
                type="select"
                className="form-select mb-3 p-3"
                aria-label="Default select example"
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                value={validation.values.gender}
                invalid={
                  validation.touched.gender && validation.errors.gender
                    ? true
                    : false
                }
              >
                <option>Male</option>
                <option>Female</option>
              </Input>
            </div>
          </Col>
        </Row>

        <Col md={12}>
          <div className="mb-3">
            <Label for="emailidInput" className="form-label">
              Address
            </Label>
            <Input
              id="address"
              name="address"
              className="form-control p-3"
              placeholder="Enter New Name"
              type="text"
              onChange={validation.handleChange}
              onBlur={validation.handleBlur}
              value={validation.values.address || ""}
              invalid={
                validation.touched.address && validation.errors.address
                  ? true
                  : false
              }
            />
            {validation.touched.address && validation.errors.address ? (
              <FormFeedback type="invalid">
                <div>{validation.errors.address}</div>
              </FormFeedback>
            ) : null}
          </div>
        </Col>

        <Row>
          <Col md={6}>
            <div className="mb-3">
              <Label for="address1ControlTextarea" className="form-label">
                Country
              </Label>
              <Input
                id="name"
                name="name"
                className="form-control p-3"
                placeholder="Enter New Name"
                type="text"
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                value={validation.values.country || ""}
                invalid={
                  validation.touched.country && validation.errors.country
                    ? true
                    : false
                }
              />
              {validation.touched.country && validation.errors.country ? (
                <FormFeedback type="invalid">
                  <div>{validation.errors.country}</div>
                </FormFeedback>
              ) : null}
            </div>
          </Col>
          <Col md={6}>
            <div className="mb-3">
              <Label for="citynameInput" className="form-label">
                Phone Number
              </Label>
              <Input
                id="phone"
                name="phone"
                className="form-control p-3"
                placeholder="Enter New Name"
                type="text"
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                value={validation.values.phone || ""}
                invalid={
                  validation.touched.phone && validation.errors.phone
                    ? true
                    : false
                }
              />
              {validation.touched.phone && validation.errors.phone ? (
                <FormFeedback type="invalid">
                  <div>{validation.errors.phone}</div>
                </FormFeedback>
              ) : null}
            </div>
          </Col>
        </Row>

        <button
                type="submit"
                className="btn p-3 px-5"
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
                Save
              </button>
      </Form>

      <Col className="mb-3" mt-5>
        <label className="mt-5">Profile Image</label>
        <Input
          id="courseVideo"
          name="courseVideo"
          className="form-control p-3"
          type="file"
          onChange={(e) => {
            const selectedFile = e.target.files[0];
            setImage(selectedFile);
          }}
          onBlur={validation.handleBlur}
        />
      </Col>
      <button
        type="button"
        className="btn btn-dark mt-2 p-3"
        onClick={handleImage}
        style={{ backgroundColor: "#244a59" }}
      >
        Change Profile Image
      </button>
    </>
  );
};

export default EditProfile;
