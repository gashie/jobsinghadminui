import React from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

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
import { makePayment } from "../../../../../store/actions";
import { useNavigate } from "react-router-dom";

function Index({togglePaymentModal, payLater}) {
  const { loading, error, rateInfo } = useSelector((state) => ({
    loading: state.Rates.loading,
    error: state.Rates.error,
    rateInfo: state.Rates.rateCardInfo,
  }));

  const { idLoading, idError, idInfo,payloading, payError, payInfo  } = useSelector((state) => ({
    loading: state.Jobs.idLoading,
    error: state.Jobs.idError,
    idInfo: state.Jobs.id,
    payloading: state.Rates.payloading,
    payInfo: state.Rates.payInfo,
    payError: state.Rates.payError,
  }));

  const [selectedItem, setSelectedItem] = useState(null);
  console.log(selectedItem);

  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState(""); // Initialize with an empty string or your desired initial value

   const triggerLink = () =>{
    if(payloading === false && payError === false){
      togglePaymentModal()
      // 
    }
  }

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handlePay = () => {
    console.log("pay");
    const payData = {
      courseId: "",
      rateId: selectedItem?.rateId || "",
      transactionFor: "job",
      paymentDescription: inputValue,
      jobId: idInfo?.jobId,
    };

    dispatch(makePayment(payData));
    navigate("/app/employer-jobs")
    triggerLink()
  };


 

  return (
    <>
      <Container className="pb-5">
        <h4
          style={{ color: "#244a59", fontWeight: "bolder" }}
          className="mt-5 p-4"
        >
          Pay for Job Posting
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
          Easy and instant posting process - your jobs available online in just
          5 munites
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
          <p className="fs-15">
            <b>GHS {selectedItem?.ratePrice || ""}</b> For{" "}
            {selectedItem?.rateTitle}{" "}
          </p>
        </div>

        {
          <>
            <Input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter something..."
            />
          </>
        }
        <Button className="btn btn-dark mt-5 p-3" onClick={handlePay} style={{backgroundColor: '#244a59'}}>
          Make Payment
        </Button>

        {/* logos */}
      </Container>
    </>
  );
}

export default Index;
