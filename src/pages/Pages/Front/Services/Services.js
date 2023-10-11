import { useState, useEffect } from "react";
import "../Career/CareerAdvice/CareerAdvice.css";
import {
  Container,
  Row,
  Col,
  Button,
  CardBody,
  Card,
  Label,
  Input,
  Spinner,
} from "reactstrap";
import { Link } from "react-router-dom";
import bg from "../../../../assets/images/jobsinghana/bg1.png";
import car from "../Career/CareerAdvice/CareerImages/car.png";
import ent from "../Career/CareerAdvice/CareerImages/ent.png";
import health from "../Career/CareerAdvice/CareerImages/heath.png";
import jsearch from "../Career/CareerAdvice/CareerImages/jsearch.png";
import sal from "../Career/CareerAdvice/CareerImages/salary.png";
import workplace from "../Career/CareerAdvice/CareerImages/workplace.png";
import img1 from "./img1.png";
import img2 from "./img2.jpg";
import icon1 from "./icon1.png";
import icon2 from "./icon2.png";
import icon3 from "./icon3.png";
import icon4 from "./icon4.png";
import icon5 from "./icon5.png";
import icon6 from "./icon6.png";
import icon7 from "./icon7.png";
import Rating from "react-rating";
import Flatpickr from "react-flatpickr";
import { useDispatch, useSelector } from "react-redux";
import { sendService } from "../../../../store/actions";

const Services = () => {
  const iconList = [
    {
      icon: icon1,
      des: "Search by Job Title, Location, Skills and Keywords",
    },
    {
      icon: icon2,
      des: "Use activity filters to find fresh and active candidates",
    },
    {
      icon: icon3,
      des: "Layer multiple filters for the perfect matches",
    },
  ];
  const iconList2 = [
    {
      icon: icon4,
      des: "Select multiple candidates to create a talent pool",
    },
    {
      icon: icon5,
      des: "Unlock your best matches using CV Search Credit",
    },
  ];

  const [width, setWidth] = useState("");
  const [left, setLeft] = useState("");
  const updateWindowSize = () => {
    const newWindowSize = document.documentElement.clientWidth;
    if (newWindowSize <= 375) {
      setWidth("10rem");
      setLeft("11rem");
    } else if (newWindowSize >= 1200) {
      setWidth("20rem");

      setLeft("");
    } else if (newWindowSize > 375) {
      setWidth("20rem");
      setLeft("");
    }
  };

  useEffect(() => {
    // Initial window size calculation
    updateWindowSize();

    // Event listener for window resize
    window.addEventListener("resize", updateWindowSize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  const [purpose, setPurpose] = useState("Recruitment / Headhunting");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const dispatch = useDispatch();

  const validateForm = () => {
    return (
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      companyName.trim() !== "" &&
      phoneNumber.trim() !== "" &&
      email.trim() !== ""
    );
  };

  useEffect(() => {
    // Update isFormValid whenever form inputs change
    setIsFormValid(validateForm());
  }, [firstName, lastName, companyName, phoneNumber, email]);

  const handleService = () => {
    dispatch(
      sendService({
        serviceName: purpose,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phoneNumber,
        purpose: purpose,
        Company: companyName,
      })
    );

    setFirstName("");
    setLastName("");
    setCompanyName("");
    setPhoneNumber("");
    setEmail("");
    setIsFormValid(false);
  };

  const { loading, error } = useSelector((state) => ({
    loading: state.Users.serviceLoading,
    error: state.Users.serviceError,
  }));

  return (
    <>
      <div style={{ backgroundColor: "white" }}>
        {/* <Row className="justify-content-center">
          <Col xl={20} xs={10} md={20} className="text-bg-size">
            <img
              src={bg}
              className="text-bg"
              alt="bg"
              style={{ zIndex: "1" }}
            ></img>

            <div
              className="m-5 mt-5"
              style={{
                display: "grid",
                justifyContent: "center",
                zIndex: "99",
                position: "relative",
              }}
            >
              <h4 style={{ textAlign: "center", color: "white" }}>Services</h4>
              <p style={{ textAlign: "center", color: "white" }}>
                Finding jobseeking tips you can actually use.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Col
                md={20}
                xl={15}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "1rem",
                  border: "0px solid black",
                  padding: "1rem",
                  backgroundColor: "#355765B5",
                  borderRadius: "0.2rem",
                }}
              >
                <Row>
                  <Col
                    md={20}
                    style={{ display: "grid", gap: "2rem", zIndex: "1" }}
                  >
                    {" "}
                    <Link
                      to="/services"
                      className="text-light"
                    >
                      <Button
                         style={{
                          color: "white",
                          backgroundColor: "#355765B5",
                          border: "1px solid white",
                          padding: "1rem",
                          width: width,
                          position: 'relative', 
                          left: left
                        }}
                        className="btn"
                      >
                        Recruitment/Headhunting
                      </Button>
                    </Link>
                    <Link
                      to="/services-payroll-management"
                      className="text-light"
                    >
                      <Button
                        style={{
                          color: "white",
                          backgroundColor: "#355765B5",
                          border: "1px solid white",
                          padding: "1rem",
                          width: width,
                          position: 'relative', 
                          left: left
                        }}
                        className="btn"
                      >
                        Payroll Management
                      </Button>
                    </Link>
                  </Col>
                </Row>
                <Row>
                  <Col
                    md={20}
                    style={{ display: "grid", gap: "2rem", zIndex: "1" }}
                  >
                    <Link to="/services-outsourcing" className="text-light">
                      <Button
                        style={{
                          color: "white",
                          backgroundColor: "#355765B5",
                          border: "1px solid white",
                          padding: "1rem",
                          width: width,
                          position: 'relative', 
                          right: left
                        }}
                        className="btn"
                      >
                        Outsourcing
                      </Button>
                    </Link>
                    <Link to="/services-job-posting" className="text-light">
                      <Button
                         style={{
                          color: "white",
                          backgroundColor: "#355765B5",
                          border: "1px solid white",
                          padding: "1rem",
                          width: width,
                          position: 'relative', 
                          right: left

                        }}
                        className="btn"
                      >
                        Job Posting
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </Col>
            </div>
          </Col>
        </Row> */}

        <Row className="mb-4 p-5">
          <Col xl={9}>
            <Container>
              <h4 style={{ fontWeight: "bolder", color: "#244a59" }}>
                Recruitment/Headhunting
              </h4>
              <p className="mt-3">
                Use our state of the art technology to headhunt the exact talent
                for your organisation and only interact with the candidates that
                best fit your requirements
              </p>
              <p className="mt-3">
                For more information, fill out the form below.
              </p>

              <div>
                <Row>
                  <div className="mb-3 col-xl-6 col-md-5 mt-5">
                    <Label
                      htmlFor="employeeName"
                      className="form-label"
                      style={{ fontSize: "0.8rem" }}
                    >
                      First Name:
                    </Label>
                    <Input
                      type="text"
                      className="form-control p-3"
                      id="employeeName"
                      placeholder=""
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>

                  <div className="mb-3 col-xl-6 col-md-5 mt-5">
                    <Label
                      htmlFor="employeeUrl"
                      className="form-label"
                      style={{ fontSize: "0.8rem" }}
                    >
                      Last Name:
                    </Label>
                    <Input
                      type="text"
                      className="form-control p-3"
                      id="employeeUrl"
                      placeholder=""
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </Row>
                <Row>
                  <div className="mb-3 col-xl-6 col-md-5 mt-5">
                    <Label
                      htmlFor="employeeName"
                      className="form-label"
                      style={{ fontSize: "0.8rem" }}
                    >
                      Company Name:
                    </Label>
                    <Input
                      type="text"
                      className="form-control p-3"
                      id="employeeName"
                      placeholder=""
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>

                  <div className="mb-3 col-xl-6 col-md-5 mt-5">
                    <Label
                      htmlFor="employeeUrl"
                      className="form-label"
                      style={{ fontSize: "0.8rem" }}
                    >
                      Phone Number:
                    </Label>
                    <Input
                      type="text"
                      className="form-control p-3"
                      id="employeeUrl"
                      placeholder=""
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </Row>
                <Row>
                  <div className="mb-3 col-xl-6 col-md-5 mt-5">
                    <Label
                      htmlFor="employeeName"
                      className="form-label"
                      style={{ fontSize: "0.8rem" }}
                    >
                      Email Address:
                    </Label>
                    <Input
                      type="email"
                      className="form-control p-3"
                      id="employeeName"
                      placeholder=""
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="mb-3 col-xl-6 col-md-5 mt-5">
                    <Label
                      htmlFor="employeeUrl"
                      className="form-label"
                      style={{ fontSize: "0.8rem" }}
                    >
                      Purpose of Enquiry:
                    </Label>
                    <Input
                      type="text"
                      className="form-control p-3"
                      id="employeeUrl"
                      value={purpose}
                      readOnly
                    />
                  </div>
                </Row>
              </div>

              <div className="text-start">
                <Button
                  style={{ backgroundColor: "#244a59" }}
                  disabled={!isFormValid}
                  className="btn btn-dark px-4 p-3 mt-3"
                  type="submit"
                  onClick={handleService}
                >
                  {error ? null : loading ? (
                    <Spinner size="sm" className="me-2">
                      Loading...
                    </Spinner>
                  ) : null}
                  Talk to us
                </Button>
              </div>
            </Container>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Services;
