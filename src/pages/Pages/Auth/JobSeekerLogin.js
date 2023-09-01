import ldn from "./images/ldn.png";
import google from "./images/google.png";
import fb from "./images/fb.png";
import { Col, Input, Row, Label, Card, CardBody, Button } from "reactstrap";
import { loginUser } from "../../../store/auth/login/actions";
import { useDispatch } from "react-redux";

const JobSeekerLogin = () => {

const dispatch = useDispatch()

  return (
    <>
    
      <Card>
      <h5 className="fw-bolder text-end m-3">New to jobsinghana?<span style={{color: '#244a59'}}>Register</span> </h5>
        <CardBody>
          <div className="mt-4 p-5">
            <h4 className="fw-bolder text-center">Login</h4>

            <div
              className="d-flex text-center gap-5 mt-5"
              style={{ justifyContent: "center" }}
            >
              <div className="d-flex" style={{ cursor: "pointer" }}>
                <img
                  src={google}
                  alt="google"
                  className="img-fluid avatar-xxs"
                ></img>
                <p
                  style={{
                    position: "relative",
                    top: "0.2rem",
                  }}
                  className="fw-bolder"
                >
                  Google
                </p>
              </div>
              <div className="d-flex gap-1" style={{ cursor: "pointer" }}>
                <img
                  src={ldn}
                  alt="google"
                  className="img-fluid avatar-xxs"
                ></img>
                <p
                  style={{
                    position: "relative",
                    top: "0.2rem",
                  }}
                  className="fw-bolder"
                >
                  LinkedIn
                </p>
              </div>
              <div className="d-flex gap-1" style={{ cursor: "pointer" }}>
                <img
                  src={fb}
                  alt="google"
                  className="img-fluid avatar-xxs"
                ></img>
                <p
                  style={{
                    position: "relative",
                    top: "0.2rem",
                  }}
                  className="fw-bolder"
                >
                  Facebook
                </p>
              </div>
            </div>

<div className="d-flex" style={{justifyContent: 'center'}}>
            <Row className="mt-5 d-flex w-50" style={{ flexDirection: 'column'}} >
              <Col lg={15}>
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
                    placeholder="Enter user name"
                  />
                </div>
              </Col>

             <h6 className="text-end fw-bolder mt-3" style={{cursor: 'pointer'}}>Forgotten Password?</h6>

              <Col lg={20} className="mt-3">
                <div className="mb-3">
                  <Label
                    className="form-label"
                    htmlFor="gen-info-username-input"
                  >
                   Password
                  </Label>
                  <Input
                    type="password"
                    className="form-control p-4"
                    id="gen-info-username-input"
                    placeholder="Password"
                  />
                </div>
              </Col>

              <Button className="btn btn-dark w-100 mt-4 p-3" style={{backgroundColor: '#244159'}} onClick={()=>{
                dispatch(loginUser({name: "Mathias Lawson", password: "123456"}))
              }}>Login</Button>
            </Row>
            </div>    
          </div>

        
        </CardBody>
      </Card>
    </>
  );
};

export default JobSeekerLogin;
