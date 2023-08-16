import React, { useState } from "react";
import {
  Row,
  Col,
  Container,
  Card,
  CardBody,
  NavLink,
  Button,
  CardText,
} from "reactstrap";
import splace from "./splace.png";
import icon8 from "./icon8.png";
import img4 from "./img4.png";
import img3 from "./img3.png";
import './Services.css'

const FirmDetails = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const longText = (
    <div>
      <p className="fs-15" style={{ wordSpacing: "0.3rem" }}>
        Lorem ipsum dolor sit amet consectetur. Condimentum felis ornare gravida
        pulvinar tristique nulla erat tempus sem. Pellentesque tempus et amet
        est morbi nisl imperdiet. Mi turpis vel amet et. Sit vel massa cursus mi
        habitant faucibus. Tellus diam pharetra phasellus turpis nulla suscipit
        duis dictumst. Donec id quam nunc nisi tellus tellus. Pharetra arcu
        dictumst vestibulum ipsum odio quam imperdiet volutpat. Aliquet ut
        mauris faucibus ac urna vel. Est porttitor in mauris enim congue. Sed
        ultrices amet accumsan nunc. Nulla feugiat in tellus pharetra
        pellentesque condimentum. Consectetur ac ultricies ultricies vitae
        aliquet orci rutrum. Nisi pellentesque faucibus sed accumsan turpis. Ut
        commodo at nunc risus parturient. In est nibh in feugiat integer
        pulvinar. Mauris rutrum vitae ornare ut tortor porttitor sit nec. At et
        lobortis auctor viverra in pellentesque varius. Ut ornare maecenas enim
        montes nec faucibus justo ultricies a. Fermentum viverra id massa diam
        justo amet etiam.
      </p>
      <h5 style={{ color: "#244a59", fontWeight: "bolder" }}>
        What Splace offers its clients
      </h5>
      <p>
        Splace offers a wide range of services to its clients, including but not
        limited to:
        <ul>
          <li>Web design and development</li>
          <li>Graphic design</li>
          <li>Content creation</li>
          <li>Digital marketing</li>
          <li>Branding and identity</li>
        </ul>
      </p>

      <h6
        style={{
          color: "#244a59",
          fontWeight: "bolder",
          cursor: "pointer",
          textAlign: "center",
        }}
        onClick={toggleExpanded}
      >
        Read Less
      </h6>
    </div>
  );

  return (
    <>
      <div style={{ backgroundColor: "white", padding: "4rem" }}>
        <Container>
          {/* Logos */}
          <h5 style={{ fontWeight: "bolder", color: "#244a59" }} className="">
            View all outsourcing firms
          </h5>
          <Col xs={20}>
            <Card style={{ backgroundColor: "#F2F4F5" }}>
              <CardBody>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                  }}
                >
                  <div className="d-flex mb-4">
                    <div className="avatar-xl">
                      <div className="avatar-title bg-light rounded">
                        <img
                          src={splace}
                          alt=""
                          className="avatar-xxl companyLogo-img img-fluid"
                        />
                      </div>
                    </div>

                    <div className="ms-3 flex-grow-1">
                      <h5
                        className="job-title"
                        style={{ fontWeight: "bolder" }}
                      >
                        Splace{" "}
                        <span
                          className="badge badge-soft-light me-1"
                          style={{
                            backgroundColor: "#CED4DA",
                            color: "#00D084",
                          }}
                        >
                          <i
                            className="bx bxs-badge-check"
                            style={{ color: "#00D084" }}
                          ></i>{" "}
                          VERIFIED
                        </span>
                      </h5>

                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.5rem",
                        }}
                      >
                        <Button
                          className="btn btn-dark mt-4"
                          style={{
                            backgroundColor: "#244a59",
                          }}
                        >
                          Get a free quote
                        </Button>
                        <span
                          className=" me-1"
                          style={{
                            position: "relative",
                            top: "2rem",
                          }}
                        >
                          <div style={{ display: "flex", flexWrap: "wrap" }}>
                            <img
                              src={icon8}
                              alt=""
                              className="avatar-xxs companyLogo-img img-fluid"
                            />
                            (030) 276 0143
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>

                  <Col xl={4} className="mt-4">
                    <div className="d-flex space-around wrap">
                      <div>
                        <div className="d-flex mb-4">
                          <div className="avatar-lg">
                            <div className="avatar-title bg-light rounded">
                              <img
                                src={img3}
                                alt=""
                                className="avatar-lg companyLogo-img  img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="d-flex mb-4">
                          <div className="avatar-lg">
                            <div className="avatar-title bg-light rounded">
                              <img
                                src={img4}
                                alt=""
                                className="avatar-lg companyLogo-img img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </div>
              </CardBody>
            </Card>
          </Col>

          {/* OverView */}
          <Col className="mt-5">
            <Container className="mt-5">
              <h4 style={{ color: "#244a59", fontWeight: "bolder" }}>
                <i className="bx bx-map-alt"></i> Overview
              </h4>
              <Card style={{border: 'none', boxShadow: '0px 0px 0px white'}}>
                <CardBody >
                  <CardText>
                    {expanded ? (
                      longText
                    ) : (
                        <>
                      <div>
                        {React.Children.toArray(longText.props.children).slice(
                          0,
                          2
                        )}

                        
                      </div>
                      <h6
                      style={{
                        color: "#244a59",
                        fontWeight: "bolder",
                        textAlign: "center",
                        cursor: "pointer",
                      }}
                      onClick={toggleExpanded}
                    >
                      Read More
                    </h6>
                    </>
                    )}
                  </CardText>
                  {!expanded && (
                    <div
                      className="gradient-overlay"
                      onClick={toggleExpanded}
                    ></div>
                  )}
                </CardBody>
              </Card>
            </Container>
          </Col>

          {/* Icons */}
          <Col>
            <div>
              <div className="d-flex mt-5 gap-2">
                <div>
                  <i
                    className="ri-map-pin-line"
                    style={{
                      fontSize: "2rem",
                      position: "relative",
                      top: "0.6rem",
                    }}
                  ></i>
                </div>
                <div style={{ display: "grid" }}>
                  <p style={{ position: "relative", top: "0.6rem" }}>
                    Headquaters
                  </p>
                  <h6 style={{ color: "#244a59", fontWeight: "bolder" }}>
                    Rio Tower, Independence Avenue, 23 Kofi Annan Street ,
                    Accra-Ghana
                  </h6>
                </div>
              </div>
              <div className="d-flex mt-3  gap-2">
                <div>
                  <i
                    className=" ri-building-4-line"
                    style={{
                      fontSize: "2rem",
                      position: "relative",
                      top: "0.6rem",
                    }}
                  ></i>
                </div>
                <div style={{ display: "grid" }}>
                  <p style={{ position: "relative", top: "0.6rem" }}>
                    Public or Private
                  </p>
                  <h6 style={{ color: "#244a59", fontWeight: "bolder" }}>
                    Private
                  </h6>
                </div>
              </div>
              <div className="d-flex mt-3 gap-2">
                <div>
                  <i
                    className="bx bx-group"
                    style={{
                      fontSize: "2rem",
                      position: "relative",
                      top: "0.6rem",
                    }}
                  ></i>
                </div>
                <div style={{ display: "grid" }}>
                  <p style={{ position: "relative", top: "0.6rem" }}>
                    Seats or Staff
                  </p>
                  <h6 style={{ color: "#244a59", fontWeight: "bolder" }}>
                    20 - 49
                  </h6>
                </div>
              </div>
              <div className="d-flex mt-3 gap-2">
                <div>
                  <i
                    className="bx bx-dollar-circle"
                    style={{
                      fontSize: "2rem",
                      position: "relative",
                      top: "0.6rem",
                    }}
                  ></i>
                </div>
                <div style={{ display: "grid" }}>
                  <p style={{ position: "relative", top: "0.6rem" }}>Revenue</p>
                  <h6 style={{ color: "#244a59", fontWeight: "bolder" }}>
                    $3Mil. - $10Mil.{" "}
                  </h6>
                </div>
              </div>
              <div className="d-flex mt-3 gap-2">
                <div>
                  <i
                    className="ri-building-2-line"
                    style={{
                      fontSize: "2rem",
                      position: "relative",
                      top: "0.6rem",
                    }}
                  ></i>
                </div>
                <div style={{ display: "grid" }}>
                  <p style={{ position: "relative", top: "0.6rem" }}>
                    Industries
                  </p>
                  <h6 style={{ color: "#244a59", fontWeight: "bolder" }}>
                    <span
                      className="badge badge-soft-light me-1"
                      style={{
                        backgroundColor: "#CED4DA",
                        color: "black",
                      }}
                    >
                      Admin Support
                    </span>
                    <span
                      className="badge badge-soft-light me-1"
                      style={{
                        backgroundColor: "#CED4DA",
                        color: "black",
                      }}
                    >
                      Customer Service
                    </span>
                    <span
                      className="badge badge-soft-light me-1"
                      style={{
                        backgroundColor: "#CED4DA",
                        color: "black",
                      }}
                    >
                      Digital Content Marketing
                    </span>
                  </h6>
                </div>
              </div>
            </div>

            <hr />
          </Col>
          {/* Details */}
          <Col style={{ display: "flex", flexWrap: "wrap", gap: "10rem" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "",
                marginTop: "4rem",
                flexDirection: "column",
              }}
            >
              <h4 style={{ color: "#244a59", fontWeight: "bolder" }}>
                <i className=" bx bx-file"></i> Details
              </h4>
              <div className="d-flex mt-5 gap-2">
                <div></div>
                <div style={{ display: "grid" }}>
                  <p style={{ position: "relative", top: "0.6rem" }}>
                    Executive
                  </p>
                  <h6 style={{ color: "#244a59", fontWeight: "bolder" }}>
                    James Brown, Co Founder & CEO
                  </h6>
                </div>
              </div>
              <div className="d-flex mt-5 gap-2">
                <div></div>
                <div style={{ display: "grid" }}>
                  <p style={{ position: "relative", top: "0.6rem" }}>
                    Year Founded
                  </p>
                  <h6 style={{ color: "#244a59", fontWeight: "bolder" }}>
                    23/o7/1992
                  </h6>
                </div>
              </div>
              <div className="d-flex mt-5 gap-2">
                <div></div>
                <div style={{ display: "grid" }}>
                  <p style={{ position: "relative", top: "0.6rem" }}>
                    Countries of fulfilment
                  </p>
                  <h6 style={{ color: "#244a59", fontWeight: "bolder" }}>
                    <span
                      className="badge badge-soft-light me-1"
                      style={{
                        backgroundColor: "#CED4DA",
                        color: "black",
                      }}
                    >
                      Ghana
                    </span>
                  </h6>
                </div>
              </div>
              <div className="d-flex mt-5 gap-2">
                <div></div>
                <div style={{ display: "grid" }}>
                  <p style={{ position: "relative", top: "0.6rem" }}>Sectors</p>
                  <h6 style={{ color: "#244a59", fontWeight: "bolder" }}>
                    <span
                      className="badge badge-soft-light me-1"
                      style={{
                        backgroundColor: "#CED4DA",
                        color: "black",
                      }}
                    >
                      Admin Support
                    </span>
                    <span
                      className="badge badge-soft-light me-1"
                      style={{
                        backgroundColor: "#CED4DA",
                        color: "black",
                      }}
                    >
                      Customer Service
                    </span>
                    <span
                      className="badge badge-soft-light me-1"
                      style={{
                        backgroundColor: "#CED4DA",
                        color: "black",
                      }}
                    >
                      Digital Content Marketing
                    </span>
                  </h6>
                </div>
              </div>
              {/* Flex end */}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "",
                marginTop: "4rem",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <p>Contact Information</p>
              <h5 style={{ color: "#244a59", fontWeight: "bolder" }}>
                <i className="bx bxs-phone"></i> (030) 276 0143
              </h5>
              <h5 style={{ color: "#244a59", fontWeight: "bolder" }}>
                <i className="bx bx-envelope"></i> info@splace.com
              </h5>
              <h5 style={{ color: "#244a59", fontWeight: "bolder" }}>
                <i className="bx bx-globe"></i> https://splace.com
              </h5>
              <Button
                className="btn btn-light"
                style={{ border: "1px solid #244A59" }}
              >
                Contact Company
              </Button>
            </div>
          </Col>

          {/* THe rest */}
          <Col>
            <div className="mt-5">
              <h5 style={{ color: "#244a59", fontWeight: "bolder" }}>
                About Splace Review and Comparison
              </h5>
              <p className="fs-15" style={{ wordSpacing: "0.3rem" }}>
                Lorem ipsum dolor sit amet consectetur. Condimentum felis ornare
                gravida pulvinar tristique nulla erat tempus sem. Pellentesque
                tempus et amet est morbi nisl imperdiet. Mi turpis vel amet et.
                Sit vel massa cursus mi habitant faucibus. Tellus diam pharetra
                phasellus turpis nulla suscipit duis dictumst. Donec id quam
                nunc nisi tellus tellus. Pharetra arcu dictumst vestibulum ipsum
                odio quam imperdiet volutpat. Aliquet ut mauris faucibus ac urna
                vel. Est porttitor in mauris enim congue. Sed ultrices amet
                accumsan nunc. Nulla feugiat in tellus pharetra pellentesque
                condimentum. Consectetur ac ultricies ultricies vitae aliquet
                orci rutrum. Nisi pellentesque faucibus sed accumsan turpis. Ut
                commodo at nunc risus parturient. In est nibh in feugiat integer
                pulvinar. Mauris rutrum vitae ornare ut tortor porttitor sit
                nec. At et lobortis auctor viverra in pellentesque varius. Ut
                ornare maecenas enim montes nec faucibus justo ultricies a.
                Fermentum viverra id massa diam justo amet etiam.
              </p>
            </div>
            <div className="mt-5">
              <h5 style={{ color: "#244a59", fontWeight: "bolder" }}>
                About Splace Outsourcing
              </h5>
              <p className="fs-15" style={{ wordSpacing: "0.3rem" }}>
                Lorem ipsum dolor sit amet consectetur. Condimentum felis ornare
                gravida pulvinar tristique nulla erat tempus sem. Pellentesque
                tempus et amet est morbi nisl imperdiet. Mi turpis vel amet et.
                Sit vel massa cursus mi habitant faucibus. Tellus diam pharetra
                phasellus turpis nulla suscipit duis dictumst. Donec id quam
                nunc nisi tellus tellus. Pharetra arcu dictumst vestibulum ipsum
                odio quam imperdiet volutpat. Aliquet ut mauris faucibus ac urna
                vel. Est porttitor in mauris enim congue. Sed ultrices amet
                accumsan nunc. Nulla feugiat in tellus pharetra pellentesque
                condimentum. Consectetur ac ultricies ultricies vitae aliquet
                orci rutrum. Nisi pellentesque faucibus sed accumsan turpis. Ut
                commodo at nunc risus parturient. In est nibh in feugiat integer
                pulvinar. Mauris rutrum vitae ornare ut tortor porttitor sit
                nec. At et lobortis auctor viverra in pellentesque varius. Ut
                ornare maecenas enim montes nec faucibus justo ultricies a.
                Fermentum viverra id massa diam justo amet etiam.
              </p>
            </div>
            <div className="mt-5">
              <h5 style={{ color: "#244a59", fontWeight: "bolder" }}>
                Splace Services and Pricings
              </h5>
              <p className="fs-15" style={{ wordSpacing: "0.3rem" }}>
                Lorem ipsum dolor sit amet consectetur. Condimentum felis ornare
                gravida pulvinar tristique nulla erat tempus sem. Pellentesque
                tempus et amet est morbi nisl imperdiet. Mi turpis vel amet et.
                Sit vel massa cursus mi habitant faucibus. Tellus diam pharetra
                phasellus turpis nulla suscipit duis dictumst. Donec id quam
                nunc nisi tellus tellus. Pharetra arcu dictumst vestibulum ipsum
                odio quam imperdiet volutpat. Aliquet ut mauris faucibus ac urna
                vel. Est porttitor in.
              </p>
            </div>
            <div className="mt-5">
              <h5 style={{ color: "#244a59", fontWeight: "bolder" }}>
                Splace Consulting Pricings
              </h5>
              <p className="fs-15" style={{ wordSpacing: "0.3rem" }}>
                Lorem ipsum dolor sit amet consectetur. Condimentum felis ornare
                gravida pulvinar tristique nulla erat tempus sem. Pellentesque
                tempus et amet est morbi nisl imperdiet. Mi turpis vel amet et.
                Sit vel massa cursus mi habitant faucibus. Tellus diam pharetra
                phasellus turpis nulla suscipit duis dictumst. Donec id quam
                nunc nisi tellus tellus. Pharetra arcu dictumst vestibulum ipsum
                odio quam imperdiet volutpat. Aliquet ut mauris faucibus ac urna
                vel. Est porttitor in.
              </p>
            </div>
            <div className="mt-5">
              <h5 style={{ color: "#244a59", fontWeight: "bolder" }}>
                How Splace Outshines its Competion
              </h5>
              <p className="fs-15" style={{ wordSpacing: "0.3rem" }}>
                Lorem ipsum dolor sit amet consectetur. Condimentum felis ornare
                gravida pulvinar tristique nulla erat tempus sem. Pellentesque
                tempus et amet est morbi nisl imperdiet. Mi turpis vel amet et.
                Sit vel massa cursus mi habitant faucibus. Tellus diam pharetra
                phasellus turpis nulla suscipit duis dictumst. Donec id quam
                nunc nisi tellus tellus. Pharetra arcu dictumst vestibulum ipsum
                odio quam imperdiet volutpat. Aliquet ut mauris faucibus ac urna
                vel. Est porttitor in.
              </p>
            </div>
            <div className="mt-5">
              <h5 style={{ color: "black", fontWeight: "bolder" }}>
                Key Executives
              </h5>
              <h5 style={{ color: "#244a59", fontWeight: "bolder" }}>
                James Brown (Co-Founder COO)
              </h5>
              <p className="fs-15" style={{ wordSpacing: "0.3rem" }}>
                Lorem ipsum dolor sit amet consectetur. Condimentum felis ornare
                gravida pulvinar tristique nulla erat tempus sem. Pellentesque
                tempus et amet est morbi nisl imperdiet. Mi turpis vel amet et.
                Sit vel massa cursus mi habitant faucibus. Tellus diam pharetra
                phasellus turpis nulla suscipit duis dictumst. Donec id quam
                nunc nisi tellus tellus. Pharetra arcu dictumst vestibulum ipsum
                odio quam imperdiet volutpat. Aliquet ut mauris faucibus ac urna
                vel. Est porttitor in.
              </p>
            </div>
            <div className="mt-5">
              <h5 style={{ color: "#244a59", fontWeight: "bolder" }}>
                Mabel Kay (Founder, CEO)
              </h5>
              <p className="fs-15" style={{ wordSpacing: "0.3rem" }}>
                Lorem ipsum dolor sit amet consectetur. Condimentum felis ornare
                gravida pulvinar tristique nulla erat tempus sem. Pellentesque
                tempus et amet est morbi nisl imperdiet. Mi turpis vel amet et.
                Sit vel massa cursus mi habitant faucibus. Tellus diam pharetra
                phasellus turpis nulla suscipit duis dictumst. Donec id quam
                nunc nisi tellus tellus. Pharetra arcu dictumst vestibulum ipsum
                odio quam imperdiet volutpat. Aliquet ut mauris faucibus ac urna
                vel. Est porttitor in.
              </p>
            </div>
            <div className="mt-5">
              <h5 style={{ color: "#244a59", fontWeight: "bolder" }}>
                References
              </h5>
              <p className="fs-12" style={{ wordSpacing: "0.3rem" }}>
                https://www.hiafoaokpag.com/ahfshgdkm/hjdsjhgijh
              </p>
              <p className="fs-12" style={{ wordSpacing: "0.3rem" }}>
                https://www.hiafoaokpag.com/ahfshgdkm/hjdsjhgijh
              </p>
            </div>
          </Col>
        </Container>
      </div>
    </>
  );
};

export default FirmDetails;
