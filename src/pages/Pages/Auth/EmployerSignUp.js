import ldn from "./images/ldn.png";
import google from "./images/google.png";
import fb from "./images/fb.png";
import { Col, Input, Row, Label, Card, CardBody, Button } from "reactstrap";

const EmployerSignUp = () => {
  return (
    <>
      <Card>
        <h5 className="fw-bolder text-end m-3">
          Existing employers/recruiters?
          <span style={{ color: "#244a59" }}>Login</span>{" "}
        </h5>
        <CardBody>
          <div className="mt-4 p-5">
          
            <h4 className="fw-bolder mt-4">
            Create employer profile
            </h4>

<Row className="p-5">
            <Col md={6}>
              <div className="mb-3">
                <Label for="firstNameinput" className="form-label">
                  Company Name
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
                  Address
                </Label>
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Enter Address"
                  id="lastNameinput"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="mb-3 mt-4">
                <Label for="compnayNameinput" className="form-label">
                  First Name
                </Label>
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Enter company name"
                  id="compnayNameinput"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="mb-3 mt-4">
                <Label for="compnayNameinput" className="form-label">
                  Last Name
                </Label>
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Enter company name"
                  id="compnayNameinput"
                />
              </div>
            </Col>
           
            <Col md={6}>
              <div className="mb-3 mt-4">
                <Label for="emailidInput" className="form-label">
                  Email Address
                </Label>
                <Input
                  type="email"
                  className="form-control"
                  placeholder="example@gamil.com"
                  id="emailidInput"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="mb-3 mt-4">
                <Label for="address1ControlTextarea" className="form-label">
                  Mobile Number
                </Label>
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Enter Mobile Number"
                  id="address1ControlTextarea"
                />
              </div>
            </Col>

            <div className="form-check mb-3 mt-5">
            <Input className="form-check-input" type="checkbox" id="formCheck6" defaultChecked/>
            <Label className="form-check-label" for="formCheck6">I agree to use the aforesaid details to create my Recruiter profile and display it on the jobsinghana site and also agreed to be bound by the <span className="text-muted fw-bolder" style={{color: '#244a59'}}>Terms of Use</span>  &
            <span className="text-muted fw-bolder" style={{color: '#244a59'}}></span> Privacy of Jobsinghana</Label>

          </div>
            <Col md={12}>
              <div className="text-end">
                <button type="submit" className="btn btn-dark w-100" style={{backgroundColor: "#244a59"}}>
                  Submit
                </button>
              </div>
            </Col>
            </Row>        
          
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default EmployerSignUp;
