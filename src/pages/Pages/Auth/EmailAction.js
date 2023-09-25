import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col, Button, Input } from "reactstrap";
//import { Redirect } from "react-router-dom"; // You'll need to install react-router-dom
import { Link } from "react-router-dom";
import { useSearchParams, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { activateUser, resendActivationCode } from "../../../store/actions";

function EmailAction() {
  // Use useSearchParams to get query parameters from the URL
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  // Extract the 'token' and 'email' parameters from the URL

  const [email, setEmail] = useState("")
 
  useEffect(() => {
    const token = searchParams.get("token");
    const email = searchParams.get("email");

    if (token && email) {
      dispatch(activateUser({
        email: email,
        token: token,
      }));
     
      setEmail(email)
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


  const handleResend = () =>{
    dispatch(resendActivationCode({
      email: email
    }))
  }


  return (
    <>
      <Container fluid>
        <Row className="justify-content-center mt-5" style={{backgroundColor: '', height: "70vh"}}>
          <Col xs="12" md="6" className="text-center">
            <h5>Proceed to Login</h5>
            <p>Your account has been activated</p>
            {/* {redirect ? (
              <Redirect to="/login" />
            ) : ( */}
            <Link to="/login">
              <Button style={{backgroundColor: '#244a59'}} className="btn btn-dark">Go to Login</Button>
            </Link>
            {/* )} */}
          </Col>
          
          <p className="d-flex hstack justify-content-center mt-5" style={{cursor: 'pointer'}}
          onClick={handleResend}
          >Resend Code</p>
        </Row>
      </Container>
    </>
  );
}

export default EmailAction;
