import React, { useState } from "react";
import { Col, Input, Row, Label, Card, CardBody, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetPasswordCode } from "../../../store/actions";

const ForgotPassword = () => {
  const [emailOrPhoneNumber, setEmailOrPhoneNumber] = useState("");

  const handleEmailOrPhoneNumberChange = (e) => {
    setEmailOrPhoneNumber(e.target.value);
  };

  const dispatch = useDispatch();

  const handleSendClick = () => {
    console.log("as");
    const data = { email: emailOrPhoneNumber };
    dispatch(resetPasswordCode(data));
  };

  return (
    <>
      <Card>
        <Link to="/login">
          <h5 className="fw-bolder text-end m-3">
            Existing employers/recruiters?
            <span style={{ color: "#244a59" }}>Login</span>{" "}
          </h5>
        </Link>
        <CardBody>
          <div className="mt-4 p-5">
            <h4 className="fw-bolderr">Forgot your password?</h4>
            <h4 className="fw-bolder mt-4">
              Enter your email to have your password reset link sent to you
            </h4>

            <div className="d-flex" style={{ justifyContent: "center" }}>
              <Row
                className="mt-5 d-flex w-50"
                style={{ flexDirection: "column" }}
              >
                <Col lg={15} className="mt-5">
                  <div className="mb-3">
                    <Label
                      className="form-label"
                      htmlFor="gen-info-username-input"
                    >
                      Email ID / Phone Number
                    </Label>
                    <Input
                      type="text"
                      className="form-control p-4"
                      id="gen-info-username-input"
                      placeholder="Enter email or phone number"
                      value={emailOrPhoneNumber}
                      onChange={handleEmailOrPhoneNumberChange}
                    />
                  </div>
                </Col>

                <Button
                  type="button"
                  className="btn btn-dark w-100 mt-4 p-3"
                  style={{ backgroundColor: "#244159" }}
                  onClick={handleSendClick}
                >
                  Send
                </Button>
              </Row>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default ForgotPassword;
