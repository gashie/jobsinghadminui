import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col, Button, Input, Label } from "reactstrap";
//import { Redirect } from "react-router-dom"; // You'll need to install react-router-dom
import { Link } from "react-router-dom";
import { useSearchParams, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  activateUser,
  changePass,
  passwordCode,
  resendActivationCode,
} from "../../../store/actions";

function PasswordAction() {
  // Use useSearchParams to get query parameters from the URL
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  // Extract the 'token' and 'email' parameters from the URL

  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  useEffect(() => {
    const token = searchParams.get("token");
    const email = searchParams.get("email");

    if (token && email) {
      //   dispatch(
      //     activateUser({
      //       email: email,
      //       token: token,
      //     })
      //   );

      setEmail(email);
      setToken(token);
    } else {
      // Handle the case where token or email is missing
      console.error("Token or email not found in URL.");
    }
  }, [dispatch, searchParams]);

  const navigateAction = useSelector((state) => state.Account.navigateAction);
  const navigate = useNavigate();

  useEffect(() => {
    if (navigateAction) {
      // Perform the redirection based on the navigateAction value
      navigate(navigateAction);
    }
  }, [navigate, navigateAction]);

  const handleResend = () => {
    dispatch(
      resendActivationCode({
        email: email,
      })
    );
  };

  const handlePass = () => {
    const data = {
      email: email,
      token: token,
      password: currentPassword,
    };
    dispatch(passwordCode(data));
  };

  return (
    <>
      <Container fluid>
        <form>
          <Row
            className="justify-content-center mt-5"
            style={{ backgroundColor: "", height: "70vh" }}
          >
            <Col xs="12" md="6" className="text-center">
              <div className="mt-5">
                <h5>Change Password</h5>
                <p>
                  Your new password must contain at least 6 characters and a
                  number
                </p>
                <div className="mb-3 col-xl-20 mt-5">
                  <Input
                    type="password"
                    className="form-control p-3"
                    id="currentPassword"
                    placeholder="New Password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                </div>
              </div>

              <Link>
                <Button
                  type="button"
                  style={{ backgroundColor: "#244a59" }}
                  className="btn btn-dark"
                  onClick={handlePass}
                >
                  Change Password
                </Button>
              </Link>
              {/* )} */}
            </Col>

            {/* <p className="d-flex hstack justify-content-center mt-5" style={{cursor: 'pointer'}}
          onClick={handleResend}
          >Resend Code</p> */}
          </Row>
        </form>
      </Container>
    </>
  );
}

export default PasswordAction;
