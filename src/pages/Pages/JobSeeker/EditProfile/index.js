import { Col, Label, Input, Row } from "reactstrap";
import avatar1 from "../profile.png";

const EditProfile = () => {
  return (
    <>
      <h4
        style={{ textAlign: "center", fontWeight: "bolder", color: "#244a59" }}
      >
        Profile Information
      </h4>

      <div className="text-center">
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
              className="profile-img-file-input"
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

      <Row>
        <Col md={6}>
          <div className="mb-3">
            <Label for="firstNameinput" className="form-label">
              First Name
            </Label>
            <Input
              type="text"
              className="form-control"
              placeholder="Enter your firstname"
              id="firstNameinput"
            />
          </div>
        </Col>
        <Col md={6}>
          <div className="mb-3">
            <Label for="lastNameinput" className="form-label">
              Last Name
            </Label>
            <Input
              type="text"
              className="form-control"
              placeholder="Enter your lastname"
              id="lastNameinput"
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
              type="date"
              className="form-control"
              placeholder="Enter company name"
              id="compnayNameinput"
            />
          </div>
        </Col>
        <Col md={6}>
          <div className="mb-3">
            <Label for="phonenumberInput" className="form-label">
              Gender
            </Label>
            <select
              className="form-select mb-3"
              aria-label="Default select example"
            >
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </Col>
      </Row>

      <Col md={12}>
        <div className="mb-3">
          <Label for="emailidInput" className="form-label">
            Address
          </Label>
          <Input
            type="email"
            className="form-control"
            placeholder="Labone Silver Lane"
            id="emailidInput"
          />
        </div>
      </Col>

      <Row>
        <Col md={6}>
          <div className="mb-3">
            <Label for="address1ControlTextarea" className="form-label">
              Country
            </Label>
            <Input
              type="text"
              className="form-control"
              placeholder="Address 1"
              id="address1ControlTextarea"
            />
          </div>
        </Col>
        <Col md={6}>
          <div className="mb-3">
            <Label for="citynameInput" className="form-label">
              Phone Number
            </Label>
            <Input
              type="email"
              className="form-control"
              placeholder="Enter your city"
              id="citynameInput"
            />
          </div>
        </Col>
      </Row>

      <Col md={12}>
        <div className="text-start">
          <button type="submit" className="btn btn-dark" style={{backgroundColor: '#244a59'}}>
            Save
          </button>
        </div>
      </Col>
    </>
  );
};

export default EditProfile;
