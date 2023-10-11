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
} from "reactstrap";
import { Link } from "react-router-dom";
import bg from "../../../../assets/images/jobsinghana/bg1.png";

import icon1 from "./icon1.png";
import icon2 from "./icon2.png";
import icon3 from "./icon3.png";
import icon4 from "./icon4.png";
import icon5 from "./icon5.png";

import icon6 from "./icon6.png";
import icon7 from "./icon7.png";
import Rating from "react-rating";
import Flatpickr from "react-flatpickr";

import ser1 from "./ser1.png";
import ser2 from "./ser2.png";
import ser3 from "./ser3.png";
import ser4 from "./ser4.png";
import ser5 from "./ser5.png";

import logo1 from "./logo1.png";
import logo2 from "./logo2.png";
import logo3 from "./logo3.png";
import logo4 from "./logo4.png";
import logo5 from "./logo5.png";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { rateCard } from "../../../../store/actions";

const JobPosting = () => {
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

  const { loading, error, rateInfo } = useSelector((state) => ({
    loading: state.Rates.loading,
    error: state.Rates.error,
    rateInfo: state.Rates.rateCardInfo,
  }));

  const [selectedItem, setSelectedItem] = useState(null);
  const dispatch = useDispatch()

  useEffect(()=>{
   dispatch(rateCard({viewAction: ""}))
  }, [dispatch])

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
                          width: "20rem",
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
                          width: "20rem",
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
                          width: "20rem",
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
                          width: "20rem",
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

        <Container className="">
          <h4
            style={{ color: "#244a59", fontWeight: "bolder" }}
            className="mt- p-4"
          >
           <p className="mt-3"> Post a Job</p>
          </h4>

          <h4
            style={{ fontWeight: "bolder", textAlign: "center" }}
            className="mt-5"
          >
            Rate Card
          </h4>
          <hr />

          <p style={{ textAlign: "center" }}>
            <i
              className="bx bx-check fs-15 align-middle"
              style={{
                color: "#00d084",
                fontWeight: "bolder",
              }}
            ></i>{" "}
            Easy and instant posting process - your jobs available online in
            just 5 munites
          </p>

          <p style={{ textAlign: "center" }}>
            <i
              className="bx bx-check fs-15 align-middle"
              style={{
                color: "#00d084",
                fontWeight: "bolder",
              }}
            ></i>{" "}
            Job posting credit that you purchased will expire. Buy now and post
            whatever you need.
          </p>

          <h5
            style={{
              color: "#244a59",
              fontWeight: "bolder",
              textAlign: "center",
            }}
            className="mt-5"
          >
            Select your package
          </h5>
          <Col className="d-flex" style={{ justifyContent: "center" }}>
            <Card
              style={{
                border: "1px solid #ebeff0",
                boxShadow: "none",
                width: "40rem",
              }}
            >
               <CardBody>
              {loading === false && error === false ? (
                rateInfo?.map((item, key) => (
                  <div
                    className="d-flex p-3"
                    style={{ justifyContent: "space-between" }}
                    key={key}
                  >
                    <div>
                      <input
                        type="radio"
                        checked={item === selectedItem}
                        onChange={() => setSelectedItem(item)}
                      />{" "}
                      {item?.rateTitle}
                    </div>
                    <div>
                      <p style={{ textAlign: "left" }} className="">
                        <i
                          className="bx bxs-badge-check"
                          style={{ color: "#00D084" }}
                        ></i>{" "}
                        {item?.rateDescription}
                      </p>
                    </div>
                    <div>
                      <strong>GHS {item?.ratePrice || ""}</strong>
                    </div>
                  </div>
                ))
              ) : (
                <p>Loading ...</p>
              )}
            </CardBody>
            </Card>
          </Col>

          <div className="p-4">
            <h5
              style={{ fontWeight: "bolder", textAlign: "center" }}
              className="mt-5"
            >
              Want to post more?
            </h5>
            <p style={{ textAlign: "center" }} className="">
              Please contact us and we’ll find a personalized solution for you.
            </p>
          </div>

          <div
            className="mt-5 mb-5 p-3"
            style={{ border: "1px solid #ebeff0", width: "100%" }}
          >
            <b>GHS 100</b>
          </div>
          {/* logos */}
          <h4
            style={{
              fontWeight: "bolder",
              color: "#244a59",
              textAlign: "center",
              marginTop: "8rem",
            }}
          >
            More brands that post job adverts with us
          </h4>
          <Card style={{ boxShadow: "none" }}>
            <CardBody>
              <p className="m-5 mb-2 fw-bolder">
                Please choose how you want to pay your bill*
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "2rem",
                  gap: "2rem",
                }}
              >
                <div
                  style={{ border: "1px solid #ebeff0", cursor: "pointer" }}
                  className="p-3 br-5"
                >
                  <img src={ser1} alt="" className="img-fluid"></img>
                </div>
                <div
                  style={{ border: "1px solid #ebeff0", cursor: "pointer" }}
                  className="p-3 br-5"
                >
                  <img src={ser2} alt="" className="img-fluid"></img>
                </div>
                <div
                  style={{ border: "1px solid #ebeff0", cursor: "pointer" }}
                  className="p-3 br-5"
                >
                  <img src={ser3} alt="" className="img-fluid"></img>
                </div>
                <div
                  style={{ border: "1px solid #ebeff0", cursor: "pointer" }}
                  className="p-3 br-5"
                >
                  <img src={ser4} alt="" className="img-fluid"></img>
                </div>
                <div
                  style={{ border: "1px solid #ebeff0", cursor: "pointer" }}
                  className="p-3 br-5"
                >
                  <img src={ser5} alt="" className="img-fluid"></img>
                </div>
              </div>
              <p className="m-4 fw-bolder">
                This is a secured SSL encrypted payment
              </p>
            </CardBody>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default JobPosting;
