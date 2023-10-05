import ldn from "./images/ldn.png";
import google from "./images/google.png";
import fb from "./images/fb.png";
import {
  Col,
  Input,
  Row,
  Label,
  Card,
  CardBody,
  Button,
  Form,
  FormFeedback,
  Spinner,
  Container,
} from "reactstrap";
import { loginUser } from "../../../store/auth/login/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../../store/auth/login/actions";
import { useEffect } from "react";

import * as Yup from "yup";
import { useFormik } from "formik";

const JobSeekerLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Listen for the successful login action or another appropriate action
  const isLoggedIn = useSelector((state) => state.Login.isloggedIn);
  const userInfo = useSelector((state) => state.Login.userInfo);

  useEffect(() => {
    if (isLoggedIn && userInfo?.userInfo?.roleid === 3) {
      // Dispatch the getMe action when the user is logged in
      dispatch(getMe());

      console.log("nav");

      // Perform redirection or other actions when the user is logged in
      navigate("/app/employer-dashboard");
    }

    if (isLoggedIn && userInfo?.userInfo?.roleid === 2) {
      // Dispatch the getMe action when the user is logged in
      dispatch(getMe());

      console.log("nav");

      // Perform redirection or other actions when the user is logged in
      navigate("/app/job-seeker-dashboard");
    }
  }, [dispatch, navigate, isLoggedIn, userInfo?.userInfo?.roleid]);

  const { user, errorMsg, loading, error } = useSelector((state) => ({
    user: state.Account.user,
    errorMsg: state.Login.errorMsg,
    loading: state.Login.loading,
    error: state.Login.error,
  }));

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      email: "",
      password: "",
    },
    validateOnChange: true,
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your Email"),
      password: Yup.string().required("Please Enter Your Passowrd"),
    }),
    onSubmit: (values) => {
      const loginData = {
        email: values.email,
        password: values.password,
      };

      dispatch(loginUser(loginData));
    },
  });

  return (
    <>
      <Card style={{ height: "100vh" }}>
        <Link to="/register">
          <h5 className="fw-bolder text-end m-3">
            New to jobsinghana?{" "}
            <span style={{ color: "#244a59", cursor: "pointer" }}>
              Register
            </span>{" "}
          </h5>
        </Link>
        <CardBody>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              validation.handleSubmit();
              return false;
            }}
            action="#"
          >
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

              <div className="d-flex" style={{ justifyContent: "center" }}>
                <Container className="col-xl-3">
                  <Row
                    className="mt-5 d-flex w-100"
                    style={{ flexDirection: "column" }}
                  >
                    <Col lg={15}>
                      <Label htmlFor="useremail" className="form-label">
                        Email<span className="text-danger">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        className="form-control p-3"
                        placeholder="Enter email"
                        type="email"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.email || ""}
                        invalid={
                          validation.touched.email && validation.errors.email
                            ? true
                            : false
                        }
                      />
                      {validation.touched.email && validation.errors.email ? (
                        <FormFeedback type="invalid">
                          <div>{validation.errors.email}</div>
                        </FormFeedback>
                      ) : null}
                    </Col>

                    <Link to="/forgot-password">
                      <h6
                        className="text-end fw-bolder mt-3"
                        style={{ cursor: "pointer" }}
                      >
                        Forgotten Password?
                      </h6>
                    </Link>

                    <Col lg={20} className="mt-3">
                      <Label htmlFor="useremail" className="form-label">
                        Password<span className="text-danger">*</span>
                      </Label>
                      <Input
                        id="passowrd"
                        name="password"
                        className="form-control p-3"
                        placeholder="Enter Password"
                        type="password"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.password || ""}
                        invalid={
                          validation.touched.password &&
                          validation.errors.password
                            ? true
                            : false
                        }
                      />
                      {validation.touched.password &&
                      validation.errors.password ? (
                        <FormFeedback type="invalid">
                          <div>{validation.errors.password}</div>
                        </FormFeedback>
                      ) : null}


<Button
                      style={{ backgroundColor: "#244a59" }}
                      disabled={
                        error ? null : loading
                      }
                      className="btn btn-dark w-100 mt-4"
                      type="submit"
                    >
                      {error ? null : loading ? (
                        <Spinner size="sm" className="me-2">
                          {" "}
                          Loading...{" "}
                        </Spinner>
                      ) : null}
                      Login
                    </Button>
                    </Col>

                   
                  </Row>
                </Container>
              </div>
            </div>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default JobSeekerLogin;
