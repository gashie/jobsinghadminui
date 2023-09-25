import {
  Row,
  Col,
  Label,
  Input,
  Card,
  Container,
  CardBody,
  Form,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { updateUserProfile } from "../../../../store/actions";

const EditEmployerProfile = ({ toProfile }) => {
  const { loading, error, userInfo } = useSelector((state) => ({
    loading: state.Login.loading,
    error: state.Login.error,
    userInfo: state.Login.userInfo,
  }));

const dispatch = useDispatch()

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
      website: userInfo?.userInfo?.company?.website || ""
    },
    validateOnChange: true,
    // validationSchema: Yup.object({
    //   rateTitle: Yup.string().required("Please enter a rate title"),
    //   rateDescription: Yup.string().required("Please enter a rate description"),
    //   ratePrice: Yup.string().required("Please enter rate price"),
    //   rateLimit: Yup.string().required("Please enter rate limit"),
    // }),
    onSubmit: (values) => {
      const patch = {
        reset: false,
        blockUser: false,
        allow: 1,
        deleterecord: false,
        restore: 1,
        userId:  userInfo?.userInfo?.userId,
        patch: true,
        profile: {
          fullName: values.companyName,
          username: values.username,
          phone: values.phone,
          email: values.email,
          roleid: "3",
          address: values.address,
          country: values.country,
          birthDate: values.birthDate,
          maritalStatus: 1,
          gender: "M",
          userType: "jobseeker",
        },
      };

     dispatch(updateUserProfile(patch))
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
          justifyContent: "center",
        }}
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
                        Username:
                      </p>
                    </Col>
                    <Col lg={9}>
                      <Input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder=""
                        onChange={validation.handleChange}
                        value={validation.values.username}
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
                  </Row>
                  <Row className="mb-3">
                    <Col lg={3}>
                      <p
                        htmlFor="nameInput"
                        className="form-right "
                        style={{ textAlign: "left" }}
                      >
                        Email:
                      </p>
                    </Col>

                    <Col lg={9}>
                      <Input
                        type="text"
                        className="form-control"
                        id="email"
                      
                        onChange={validation.handleChange}
                        value={validation.values.email}
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
                        Company Description:
                      </p>
                    </Col>

                    <Col lg={9}>
                      <Input
                        type="text"
                        className="form-control"
                        id="companyDescription"
                        onChange={validation.handleChange}
                        value={validation.values.companyDescription}
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
                        className="form-control"
                        id="address"
                        onChange={validation.handleChange}
                        value={validation.values.address}
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
                        BirthDate:
                      </p>
                    </Col>

                    <Col lg={9}>
                      <Input
                        type="date"
                        className="form-control"
                        id="birthDate"
                        onChange={validation.handleChange}
                        value={validation.values.birthDate}
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
                        Phone:
                      </p>
                    </Col>

                    <Col lg={9}>
                      <Input
                        type="text"
                        className="form-control"
                        id="phone"
                        onChange={validation.handleChange}
                        value={validation.values.phone}
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
                        onChange={validation.handleChange}
                        value={validation.values.website}
                      >
                        Website:
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
                        type="url"
                        className="form-control"
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
                        type="url"
                        className="form-control"
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
                        type="url"
                        className="form-control"
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
                  </Row>

                  <div className="text-start">
                    <button
                      type="submit"
                      className="btn btn-dark"
                      style={{ backgroundColor: "#244a59" }}
                    >
                      Update
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
