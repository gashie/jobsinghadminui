import verification from "./images/verification.png";
import {Link} from "react-router-dom";
import { Button } from "reactstrap";

const EmployerOTPSucces = () => {
  return (
    <>
     <Link to='/login'>
        <h5 className="fw-bolder text-end m-3">
          Existing employers/recruiters?
          <span style={{ color: "#244a59" }}>Login</span>{" "}
        </h5>
        </Link>
      <div
        style={{ backgroundColor: "white", height: "80vh" }}
        className="p-5 mb-5"
      >
        <div className=" pt-5">
          <h4 className="fw-bolder text-center mt-5">Confirmation</h4>
          <div className="text-center">
            <div className="mb-4">
              <img
                src={verification}
                alt="ver"
                className="img-fluid avatar-xxl"
              ></img>
            </div>
            <h5 className="fw-bolder text-center">Congratulations!</h5>
            <p className="fw-bolder text-center">
              Your account has now been created
            </p>
            <p className="mt-5 text-muted text-center">
              An email has been sent to
            </p>
            <p className=" fw-bolder">ksahgioerg@gmail.com</p>
            <Link to="/job-list">
          <Button
            className="btn btn-dark w-50 mt-5 text-center"
            style={{ backgroundColor: "#244a59" }}
          >
            Post Jobs
          </Button>
        </Link>
          </div>
        </div>
     
      </div>
    </>
  );
};

export default EmployerOTPSucces;
