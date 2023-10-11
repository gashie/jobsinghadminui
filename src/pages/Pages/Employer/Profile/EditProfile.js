import {
  Row,
  Col,
  Label,
  Input,
  Card,
  Container,
  CardBody,
  Form,
  Spinner,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { updateUserProfile, viewProfile } from "../../../../store/actions";
import * as Yup from "yup";
import { useEffect } from "react";

const EditEmployerProfile = ({ toProfile }) => {
  const { loading, error, userInfo } = useSelector((state) => ({
    loading: state.Login.loading,
    error: state.Login.error,
    userInfo: state.Login.userInfo,
  }));

  const dispatch = useDispatch();


  useEffect(()=>{
    dispatch(viewProfile({viewAction: ""}))
  }, [dispatch])

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      companyName: userInfo?.userInfo?.company?.companyName || "",
      username: userInfo?.userInfo?.username || "",
      phone: userInfo?.userInfo?.phone || "",
      email: userInfo?.userInfo?.email || "",
      roleid: "1",
      address: userInfo?.userInfo?.company?.location || "",
      country: "Ghana",
      birthDate: "",
      maritalStatus: 1,
      gender: "M",
      userType: "jobseeker",
      companyDescription: userInfo?.userInfo?.company?.companyProfile || "",
      website: userInfo?.userInfo?.company?.website || "",
    },
    validateOnChange: true,
    validationSchema: Yup.object({
      companyName: Yup.string().required("Please enter a company Name"),
      username: Yup.string().required("Please enter a rate description"),
      phone: Yup.string().required("Please enter rate price"),
      email: Yup.string().required("Please enter rate limit"),
      address: Yup.string().required("Please enter rate limit"),
      companyDescription: Yup.string().required("Please enter rate limit"),
      website: Yup.string().required("Please enter rate limit"),
      // email: Yup.string().required("Please enter rate limit"),
    }),
    onSubmit: (values) => {
      const patch = {
        reset: false,
        blockUser: false,
        allow: 1,
        deleterecord: false,
        restore: 1,
        userId: userInfo?.userInfo?.userId,
        patch: true,
        profile: {
          fullName: values.companyName,
          username: values.username,
          phone: values.phone,
          email: values.email,
          roleid: "3",
          address: values.address,
          country: values.country,
          // birthDate: values.birthDate,
          maritalStatus: 1,
          gender: "M",
          userType: "employer",
        },
      };

      dispatch(updateUserProfile(patch));
    },
  });

  return (
    <>
      <div className="d-flex m-3" style={{ justifyContent: "space-between" }}>
        <h4 style={{ color: "#244a59", fontWeight: "bolder" }}>Edit Profile</h4>

        <h6
          style={{ cursor: "pointer", border: "1px solid #244a59" }}
          className="p-2"
          onClick={toProfile}
        >
          Go Back
        </h6>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "left",
        }}
        className="mx-3"
      >
        <Col className="" xl={8} md={20}>
          <Container className="p-2">
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                validation.handleSubmit();
                return false;
              }}
            >
              <div className="">
                <div>
                  <Row className="mb-3">
                    <Col lg={3}>
                      <p
                        htmlFor="nameInput"
                        className="form-right "
                        style={{ textAlign: "left" }}
                      >
                        Company Name:
                      </p>
                    </Col>
                    <Col lg={9}>
                      <Input
                        type="text"
                        className="form-control p-3"
                        id="companyName"
                        placeholder=""
                        onChange={validation.handleChange}
                        value={validation.values.companyName}
                        invalid={
                          validation.touched.companyName &&
                          validation.errors.companyName
                            ? true
                            : false
                        }
                      />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col lg={3}>
                      <p
                        htmlFor="nameInput"
                        className="form-right "
                        style={{ textAlign: "left" }}
                      >
                        Username:
                      </p>
                    </Col>
                    <Col lg={9}>
                      <Input
                        type="text"
                        className="form-control p-3"
                        id="username"
                        placeholder=""
                        onChange={validation.handleChange}
                        value={validation.values.username}
                        invalid={
                          validation.touched.username &&
                          validation.errors.username
                            ? true
                            : false
                        }
                      />
                    </Col>
                  </Row>
                  {/* <Row className="mb-3">
                    <Col lg={3}>
                      <p
                        htmlFor="nameInput"
                        className="form-right "
                        style={{ textAlign: "left" }}
                      >
                        Company:
                      </p>
                    </Col>

                    <Col lg={9}>
                      <Input
                        type="text"
                        className="form-control"
                        id="companyName"
                      
                        onChange={validation.handleChange}
                        value={validation.values.companyName}
                      />
                    </Col>
                  </Row> */}
                  <Row className="mb-3">
                    <Col lg={3}>
                      <p
                        htmlFor="nameInput"
                        className="form-right"
                        style={{ textAlign: "left" }}
                      >
                        Email:
                      </p>
                    </Col>

                    <Col lg={9}>
                      <Input
                        type="text"
                        className="form-control p-3"
                        id="email"
                        onChange={validation.handleChange}
                        value={validation.values.email}
                        invalid={
                          validation.touched.email && validation.errors.email
                            ? true
                            : false
                        }
                      />
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <Col lg={3}>
                      <p
                        htmlFor="nameInput"
                        className="form-right"
                        style={{ textAlign: "left" }}
                      >
                        Company Description:
                      </p>
                    </Col>

                    <Col lg={9}>
                      <Input
                        type="text"
                        className="form-control p-3"
                        id="companyDescription"
                        onChange={validation.handleChange}
                        value={validation.values.companyDescription}
                        invalid={
                          validation.touched.companyDescription &&
                          validation.errors.companyDescription
                            ? true
                            : false
                        }
                      />
                    </Col>
                  </Row>

                  {/* <Row className="mb-3">
                    <Col lg={3}>
                      <p
                        htmlFor="nameInput"
                        className="form-right "
                        style={{ textAlign: "left" }}
                      >
                        Contact Person:
                      </p>
                    </Col>

                    <Col lg={9}>
                      <Input
                        type="test"
                        className="form-control"
                        id="websiteUrl"
                        placeholder="Mr. Recruiter"
                        onChange={validation.handleChange}
                        value={validation.values.}
                      />
                    </Col>
                  </Row> */}

                  <Row className="mb-3">
                    <Col lg={3}>
                      <p
                        htmlFor="nameInput"
                        className="form-right "
                        style={{ textAlign: "left" }}
                      >
                        Address:
                      </p>
                    </Col>

                    <Col lg={9}>
                      <Input
                        type="text"
                        className="form-control p-3"
                        id="address"
                        onChange={validation.handleChange}
                        value={validation.values.address}
                        invalid={
                          validation.touched.address &&
                          validation.errors.address
                            ? true
                            : false
                        }
                      />
                    </Col>
                  </Row>
                  {/* <Row className="mb-3">
                    <Col lg={3}>
                      <p
                        htmlFor="nameInput"
                        className="form-right "
                        style={{ textAlign: "left" }}
                      >
                        BirthDate:
                      </p>
                    </Col>

                    <Col lg={9}>
                      <Input
                        type="date"
                        className="form-control p-3"
                        id="birthDate"
                        onChange={validation.handleChange}
                        value={validation.values.birthDate}
                        invalid={
                          validation.touched.birthDate &&
                          validation.errors.birthDate
                            ? true
                            : false
                        }
                      />
                    </Col>
                  </Row> */}

                  <Row className="mb-3">
                    <Col lg={3}>
                      <p
                        htmlFor="nameInput"
                        className="form-right "
                        style={{ textAlign: "left" }}
                      >
                        Phone:
                      </p>
                    </Col>

                    <Col lg={9}>
                      <Input
                        type="text"
                        className="form-control p-3"
                        id="phone"
                        onChange={validation.handleChange}
                        value={validation.values.phone}
                        invalid={
                          validation.touched.phone && validation.errors.phone
                            ? true
                            : false
                        }
                      />
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <Col lg={3}>
                      <p
                        htmlFor="nameInput"
                        className="form-right "
                        id="website"
                        style={{ textAlign: "left" }}
                      >
                        Website:
                      </p>
                    </Col>

                    <Col lg={9}>
                      <Input
                        type="text"
                        className="form-control p-3"
                        id="website"
                        placeholder=""
                        onChange={validation.handleChange}
                        value={validation.values.website}
                        invalid={
                          validation.touched.website &&
                          validation.errors.website
                            ? true
                            : false
                        }
                      />
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <Col lg={3}>
                      <p
                        htmlFor="nameInput"
                        className="form-right "
                        style={{ textAlign: "left" }}
                      >
                        Facebook Page Url:
                      </p>
                    </Col>

                    <Col lg={9}>
                      <Input
                        type="text"
                        className="form-control p-3"
                        id="websiteUrl"
                        placeholder=""
                      />
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <Col lg={3}>
                      <p
                        htmlFor="nameInput"
                        className="form-right "
                        style={{ textAlign: "left" }}
                      >
                        Twitter Page Url:
                      </p>
                    </Col>

                    <Col lg={9}>
                      <Input
                        type="text"
                        className="form-control p-3"
                        id="websiteUrl"
                        placeholder=""
                      />
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <Col lg={3}>
                      <p
                        htmlFor="nameInput"
                        className="form-right "
                        style={{ textAlign: "left" }}
                      >
                        LinkedIn Page Url:
                      </p>
                    </Col>

                    <Col lg={9}>
                      <Input
                        type="text"
                        className="form-control p-3"
                        id="websiteUrl"
                        placeholder=""
                      />
                    </Col>
                  </Row>

                  {/* <Row className="mb-3">
                    <Col lg={3}>
                      <p
                        htmlFor="nameInput"
                        className="form-right "
                        style={{ textAlign: "left" }}
                      >
                        Instagram Page Url:
                      </p>
                    </Col>

                    <Col lg={9}>
                      <Input
                        type="url"
                        className="form-control"
                        id="websiteUrl"
                        placeholder=""
                      />
                    </Col>
                  </Row> */}

                  <div className="text-start mb-3 col-xl-20 mt-3">
                    <button
                      type="submit"
                      className="btn px-5"
                      style={{
                        backgroundColor: "#244a59",
                        color: "white",
                      }}
                      disabled={error ? null : loading}
                      // onClick={handleSubmit}
                    >
                      {error ? null : loading ? (
                        <Spinner size="sm" className="me-2">
                          {" "}
                          Loading...{" "}
                        </Spinner>
                      ) : null}
                      Save
                    </button>
                  </div>

                  {/* <div className="text-start mt-4">
                    <button
                      type="submit"
                      className="btn btn-light"
                      style={{ color: "#244a59", border: "1px solid #244a59" }}
                    >
                      Delete my user account
                    </button>
                  </div> */}
                </div>
              </div>
            </Form>
          </Container>
        </Col>
      </div>
    </>
  );
};

export default EditEmployerProfile;
