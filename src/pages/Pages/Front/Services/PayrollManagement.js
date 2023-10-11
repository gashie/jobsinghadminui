import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  CardBody,
  Card,
  Label,
  Input,
  Spinner,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { sendService } from "../../../../store/actions";

const PayrollManagement = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [purpose] = useState("Payroll Management");
  const [isFormValid, setIsFormValid] = useState(false);

  const dispatch = useDispatch();

  // Function to update isFormValid based on form input values
  const updateFormValidity = () => {
    setIsFormValid(
      firstName.trim() !== "" &&
        lastName.trim() !== "" &&
        companyName.trim() !== "" &&
        phoneNumber.trim() !== "" &&
        email.trim() !== ""
    );
  };

  const handleService = () => {
    dispatch(
      sendService({
        serviceName: purpose,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phoneNumber,
        purpose: purpose,
        Company: companyName,
      })
    );

    // Clear the form data after submission
    setFirstName("");
    setLastName("");
    setCompanyName("");
    setPhoneNumber("");
    setEmail("");
    setIsFormValid(false);
  };

  const { loading, error } = useSelector((state) => ({
    loading: state.Users.serviceLoading,
    error: state.Users.serviceError,
  }));

  return (
    <>
      <div style={{ backgroundColor: "white" }}>
        <Row className="mb-5 py-5 p-5">
          <Col xl={9}>
            <Container>
              <h4 style={{ fontWeight: "bolder", color: "#244a59" }}>
                Payroll Management
              </h4>
              <p className="mt-3">
                For more information, fill out the form below.
              </p>

              <div>
                <Row>
                  <div className="mb-3 col-xl-6 col-md-5 mt-5">
                    <Label
                      htmlFor="employeeName"
                      className="form-label"
                      style={{ fontSize: "0.8rem" }}
                    >
                      First Name:
                    </Label>
                    <Input
                      type="text"
                      className="form-control p-3"
                      id="employeeName"
                      placeholder=""
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                        updateFormValidity();
                      }}
                    />
                  </div>

                  <div className="mb-3 col-xl-6 col-md-5 mt-5">
                    <Label
                      htmlFor="employeeUrl"
                      className="form-label"
                      style={{ fontSize: "0.8rem" }}
                    >
                      Last Name:
                    </Label>
                    <Input
                      type="text"
                      className="form-control p-3"
                      id="employeeUrl"
                      placeholder=""
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                        updateFormValidity();
                      }}
                    />
                  </div>
                </Row>
                <Row>
                  <div className="mb-3 col-xl-6 col-md-5 mt-5">
                    <Label
                      htmlFor="employeeName"
                      className="form-label"
                      style={{ fontSize: "0.8rem" }}
                    >
                      Company Name:
                    </Label>
                    <Input
                      type="text"
                      className="form-control p-3"
                      id="employeeName"
                      placeholder=""
                      value={companyName}
                      onChange={(e) => {
                        setCompanyName(e.target.value);
                        updateFormValidity();
                      }}
                    />
                  </div>

                  <div className="mb-3 col-xl-6 col-md-5 mt-5">
                    <Label
                      htmlFor="employeeUrl"
                      className="form-label"
                      style={{ fontSize: "0.8rem" }}
                    >
                      Phone Number:
                    </Label>
                    <Input
                      type="text"
                      className="form-control p-3"
                      id="employeeUrl"
                      placeholder=""
                      value={phoneNumber}
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                        updateFormValidity();
                      }}
                    />
                  </div>
                </Row>
                <Row>
                  <div className="mb-3 col-xl-6 col-md-5 mt-5">
                    <Label
                      htmlFor="employeeName"
                      className="form-label"
                      style={{ fontSize: "0.8rem" }}
                    >
                      Email Address:
                    </Label>
                    <Input
                      type="text"
                      className="form-control p-3"
                      id="employeeName"
                      placeholder=""
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        updateFormValidity();
                      }}
                    />
                  </div>

                  <div className="mb-3 col-xl-6 col-md-5 mt-5">
                    <Label
                      htmlFor="employeeUrl"
                      className="form-label"
                      style={{ fontSize: "0.8rem" }}
                    >
                      Purpose of Enquiry:
                    </Label>
                    <Input
                      type="text"
                      className="form-control p-3"
                      id="employeeUrl"
                      value={purpose}
                      readOnly
                    />
                  </div>
                </Row>
              </div>

              <div className="text-start">
                <Button
                  style={{ backgroundColor: "#244a59" }}
                  disabled={!isFormValid}
                  className="btn btn-dark p-3 px-4 mt-3"
                  type="submit"
                  onClick={handleService}
                >
                  {isFormValid && !loading}
                  {error ? null : loading ? (
                    <Spinner size="sm" className="me-2">
                      Loading...
                    </Spinner>
                  ) : null}
                  Talk to us
                </Button>
              </div>
            </Container>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PayrollManagement;
