import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col, Button, Input } from "reactstrap";
//import { Redirect } from "react-router-dom"; // You'll need to install react-router-dom
import { Link } from "react-router-dom";

function EmailAction() {
  // const [redirect, setRedirect] = useState(false);

  // useEffect(() => {
  //   // Simulate an automatic redirection after 5 seconds
  //   // const redirectTimer = setTimeout(() => {
  //   //   setRedirect(true);
  //   // }, 5000);

  //   return () => clearTimeout(redirectTimer);
  // }, []);

  const [token, setToken] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Get the current URL
    const currentUrl = window.location.href;

    // Parse the URL to extract query parameters
    const urlParams = new URLSearchParams(currentUrl);

    // Extract the 'token' and 'email' parameters
    const token = urlParams.get('token');
    const email = urlParams.get('email');

    // Update the state with the extracted values
    setToken(token);
    setEmail(email);
  }, [window.location.href]); // Add window.location.href to the dependency array

  console.log(token , email)

  return (
    <>
      <Container fluid>
        <Row className="justify-content-center mt-5">
          <Col xs="12" md="6" className="text-center">
            <h5>Redirection Page</h5>
            <p>You are being redirected to the login page.</p>
            {/* {redirect ? (
              <Redirect to="/login" />
            ) : ( */}
            <Link to="/employer-profile">
              <Button color="primary">Redirect to Login</Button>
              </Link>
            {/* )} */}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default EmailAction;
