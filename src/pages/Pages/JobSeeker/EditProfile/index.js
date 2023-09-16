import { Col, Label, Input, Row } from "reactstrap";
import avatar1 from "../profile.png";

import { useFormik } from "formik";
import * as Yup from "yup";

const EditProfile = () => {
  const validationSchema = Yup.object({
    // firstName: Yup.string().required("First Name is required"),
    // lastName: Yup.string().required("Last Name is required"),
    // birthDate: Yup.date().required("Birth Date is required"),
    // gender: Yup.string().required("Gender is required"),
    // address: Yup.string().required("Address is required"),
    // country: Yup.string().required("Country is required"),
    // phoneNumber: Yup.string().required("Phone Number is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      birthDate: "",
      gender: "",
      address: "",
      country: "",
      phoneNumber: "",
    },
    // validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });

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

        <div className="text-center mt">
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
        <form onSubmit={formik.handleSubmit}>
        <Row style={{ marginTop: "2rem" }}>
          <Col md={6} className="mt-4">
            <div className="mb-3">
              <Label for="firstNameinput" className="form-label">
                First Name
              </Label>
              <Input
                type="text"
                className="form-control p-3"
                placeholder="Enter your firstname"
                id="firstNameinput"
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="mb-3 mt-4">
              <Label for="lastNameinput" className="form-label">
                Last Name
              </Label>
              <Input
                type="text"
                className="form-control p-3"
                placeholder="Enter your lastname"
                id="lastNameinput"
              />
            </div>
          </Col>
        </Row>

        <Row>
  <Col md={6}>
    <div className="mb-3">
      <Label for="birthDateInput" className="form-label">
        Birth Date
      </Label>
      <Input
        type="date"
        className="form-control p-3"
        placeholder="Enter your birth date"
        id="birthDateInput"
        name="birthDate" // Add a "name" attribute to link the input to Formik
        onChange={formik.handleChange} // Use handleChange to update the Formik state
        value={formik.values.birthDate} // Set the value from Formik's state
      />
    </div>
  </Col>
  <Col md={6}>
    <div className="mb-3">
      <Label for="genderSelect" className="form-label">
        Gender
      </Label>
      <select
        className="form-select mb-3 p-3"
        aria-label="Gender"
        id="genderSelect"
        name="gender" // Add a "name" attribute to link the input to Formik
        onChange={formik.handleChange} // Use handleChange to update the Formik state
        value={formik.values.gender} // Set the value from Formik's state
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
  </Col>
</Row>

<Col md={12}>
  <div className="mb-3">
    <Label for="addressInput" className="form-label">
      Address
    </Label>
    <Input
      type="text"
      className="form-control p-3"
      placeholder="Labone Silver Lane"
      id="addressInput"
      name="address" // Add a "name" attribute to link the input to Formik
      onChange={formik.handleChange} // Use handleChange to update the Formik state
      value={formik.values.address} // Set the value from Formik's state
    />
  </div>
</Col>

<Row>
  <Col md={6}>
    <div className="mb-3">
      <Label for="countryInput" className="form-label">
        Country
      </Label>
      <Input
        type="text"
        className="form-control p-3"
        placeholder="Address 1"
        id="countryInput"
        name="country" // Add a "name" attribute to link the input to Formik
        onChange={formik.handleChange} // Use handleChange to update the Formik state
        value={formik.values.country} // Set the value from Formik's state
      />
    </div>
  </Col>
  <Col md={6}>
    <div className="mb-3">
      <Label for="phoneNumberInput" className="form-label">
        Phone Number
      </Label>
      <Input
        type="text"
        className="form-control p-3"
        placeholder="+233559690060"
        id="phoneNumberInput"
        name="phoneNumber" // Add a "name" attribute to link the input to Formik
        onChange={formik.handleChange} // Use handleChange to update the Formik state
        value={formik.values.phoneNumber} // Set the value from Formik's state
      />
    </div>
  </Col>
</Row>


        <Col md={12}>
          <div className="text-start mt-3">
          <div className="text-start mt-3">
          <button type="submit" className="btn btn-dark" style={{ backgroundColor: '#244a59' }}>
            Save
          </button>
        </div>
          </div>
        </Col>
      </form>
    </>
  );
};

export default EditProfile;
