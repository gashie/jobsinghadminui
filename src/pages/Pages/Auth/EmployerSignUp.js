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
  Container,
  Spinner,
} from "reactstrap";
import { Link } from "react-router-dom";
//import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { industry, signUp } from "../../../store/actions";
import { useEffect } from "react";

const EmployerSignUp = () => {
  const dispatch = useDispatch();

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      fullName: "",
      username: "",
      phone: "",
      email: "",
      password: "",
      address: "",
      country: "Ghana",
      industryId: "",
      birthDate: "1995-06-07",
      maritalStatus: 1,
      gender: "M",
      userType: "employer",
      companyName: "",
      location: "",
      website: "",
      companySize: null,
      companyProfile: "",
    },
    validateOnChange: true,
    // validationSchema: Yup.object({
    //   rateTitle: Yup.string().required("Please enter a rate title"),
    //   rateDescription: Yup.string().required("Please enter a rate description"),
    //   ratePrice: Yup.string().required("Please enter rate price"),
    //   rateLimit: Yup.string().required("Please enter rate limit"),
    // }),
    onSubmit: (values) => {
      console.log(values);

      const data = { values };
      dispatch(signUp(values));
      // dispatch(createRateCard(rateData));
      // validation.resetForm();
      // setAddCategoryModal(false);
    },
  });

  const { loading, error } = useSelector((state) => ({
    loading: state.Account.loading,
    error: state.Account.error,
  }));

  const { catLoading, catError, categoryInfo } = useSelector((state) => ({
    catLoading: state.Industry.loading,
    catError: state.Industry.error,
    categoryInfo: state.Industry.industryInfo,
  }));

  useEffect(()=>{
     dispatch(industry({viewAction: ""}))
  }, [dispatch])

  return (
    <>
      <Card>
        <Link to="/login">
          <h5 className="fw-bolder text-end m-3">
            Existing employers/recruiters?
            <span style={{ color: "#244a59" }}>Login</span>{" "}
          </h5>
        </Link>
        <Container>
          <CardBody>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                validation.handleSubmit();
                return false;
              }}
            >
              <div className="mt-4 p-5">
                <h4 className="fw-bolder mt-4">Create employer profile</h4>

                <Row className="p-5">
                  <Col md={6}>
                    <div className="mb-3">
                      <Label for="firstNameinput" className="form-label">
                        FullName
                      </Label>
                      <Input
                        type="text"
                        className="form-control p-3"
                        placeholder="Enter your firstname"
                        id="fullName"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.fullName || ""}
                      />
                    </div>
                  </Col>

                  <Col md={6}>
                    <div className="mb-3 ">
                      <Label for="compnayNameinput" className="form-label">
                        Username
                      </Label>
                      <Input
                        type="text"
                        className="form-control p-3"
                        placeholder="Enter username"
                        id="username"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.username || ""}
                      />
                    </div>
                  </Col>

                  <Col md={6}>
                    <div className="mb-3 mt-4">
                      <Label for="emailidInput" className="form-label">
                        Email Address
                      </Label>
                      <Input
                        type="test"
                        className="form-control p-3"
                        placeholder="Enter email"
                        id="email"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.email || ""}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3 mt-4">
                      <Label for="emailidInput" className="form-label">
                        Phone
                      </Label>
                      <Input
                        type="text"
                        className="form-control p-3"
                        placeholder="Enter Phone"
                        id="phone"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.phone || ""}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3 mt-4">
                      <Label for="emailidInput" className="form-label">
                        Physical Address
                      </Label>
                      <Input
                        type="text"
                        className="form-control p-3"
                        placeholder="Enter physical address"
                        id="address"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.address || ""}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3 mt-4">
                      <Label for="emailidInput" className="form-label">
                        Company Name
                      </Label>
                      <Input
                        type="text"
                        className="form-control p-3"
                        placeholder="Enter company Name"
                        id="companyName"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.companyName || ""}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3 mt-4">
                      <Label for="emailidInput" className="form-label">
                        Location
                      </Label>
                      <Input
                        type="text"
                        className="form-control p-3"
                        placeholder="Enter Location"
                        id="location"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.location || ""}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3 mt-4">
                      <Label for="emailidInput" className="form-label">
                        Company Description
                      </Label>
                      <Input
                        type="text"
                        className="form-control p-3"
                        placeholder="Enter Company Description"
                        id="companyProfile"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.companyProfile || ""}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3 mt-4">
                      <Label for="emailidInput" className="form-label">
                        Company Size
                      </Label>
                      <Input
                        type="text"
                        className="form-control p-3"
                        placeholder="Enter company Size"
                        id="companySize"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.companySize || ""}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                       <div className="mb-3 mt-4">
                  <Label for="emailidInput" className="form-label">
                        Indsutry
                      </Label>
                    <select
                      className="form-select p-3"
                    
                      id="industryId"
                      value={validation.values.industryId}
                      onChange={validation.handleChange}
                    >
                       <option>Select Industry</option>
                      {catLoading === false && catError === false ? (
                        categoryInfo?.map((item, key) => (
                          <option key={key} value={item?.industryId}>
                            {item?.industryTitle}
                          </option>
                        ))
                      ) : (
                        <option>loading categories...</option>
                      )}
                    </select>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3 mt-4">
                      <Label for="emailidInput" className="form-label">
                        Website
                      </Label>
                      <Input
                        type="text"
                        className="form-control p-3"
                        placeholder="example@gamil.com"
                        id="website"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.website || ""}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3 mt-4">
                      <Label for="emailidInput" className="form-label">
                        Password
                      </Label>
                      <Input
                        type="password"
                        className="form-control p-3"
                        placeholder="Enter Password"
                        id="password"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.password || ""}
                      />
                    </div>
                  </Col>

                  <div className="form-check mb-3 mt-5">
                    <Input
                      className="form-check-input"
                      type="checkbox"
                      id="formCheck6"
                      defaultChecked
                    />
                    <Label className="form-check-label" for="formCheck6">
                      I agree to use the aforesaid details to create my
                      Recruiter profile and display it on the jobsinghana site
                      and also agreed to be bound by the{" "}
                      <span
                        className="text-muted fw-bolder"
                        style={{ color: "#244a59" }}
                      >
                        Terms of Use
                      </span>{" "}
                      &
                      <span
                        className="text-muted fw-bolder"
                        style={{ color: "#244a59" }}
                      ></span>{" "}
                      Privacy of Jobsinghana
                    </Label>
                  </div>
                  <Col md={12}>
                    <div className="text-end">
                      <Button
                        style={{ backgroundColor: "#244a59" }}
                        // disabled={
                        //   error ? null : loading
                        // }
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
                    </div>
                  </Col>
                </Row>
              </div>
            </Form>
          </CardBody>
        </Container>
      </Card>
    </>
  );
};

export default EmployerSignUp;
