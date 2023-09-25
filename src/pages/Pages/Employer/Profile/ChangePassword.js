import React from "react";
import { Col, Label, Input, Row, Container } from "reactstrap";
import Flatpickr from "react-flatpickr";

function ChangePassword() {
  return (
    <>
      <Container className="d-flex h-stack justify-content-center" fluid>
        <div className="mt-5">
          <h5>Change Password</h5>
          <p>
            Your new password must contain at least 6 characters and a number
          </p>
          <div className="mb-3 col-xl-20 mt-5">
            <Label
              htmlFor="employeeName"
              className="form-label"
              style={{ fontSize: "0.8rem" }}
            >
              Currnet Password
            </Label>
            <Input
              type="password"
              className="form-control p-3"
              id="employeeName"
              placeholder="Currnet Password"
            />
          </div>
          <div className="mb-3 col-xl-20">
            <Label
              htmlFor="employeeUrl"
              className="form-label "
              style={{ fontSize: "0.8rem" }}
            >
              New Password
            </Label>
            <Input
              type="password"
              className="form-control p-3"
              id="employeeUrl"
              placeholder="New Password"
            />
          </div>
          <div className="mb-3 col-xl-20">
            <Label
              htmlFor="StartleaveDate"
              className="form-label "
              style={{ fontSize: "0.8rem" }}
            >
              Confirm New password
            </Label>
            <Input
              type="password"
              className="form-control p-3"
              id="employeeUrl"
              placeholder="Confirm New Password"
            />
          </div>

          <div className="text-start mb-3 col-xl-20 mt-3">
            <button
              type="submit"
              className="btn w-100 p-3"
              style={{
                backgroundColor: "#244a59",
                color: "white",
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ChangePassword;
