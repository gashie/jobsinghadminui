import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import { jobGrid } from "../../../../common/data/appsJobs";
import { Link } from "react-router-dom";
import lash from "./lash.png";

const JobDetails = () => {
  return (
    <>
      <Row
        style={{ display: "flex", justifyContent: "center" }}
        className="m-5"
      >
         <h5>Security Jobs</h5>
        <Col md={15} xl={20} >
        <Card >
          <CardBody>
            <div
              className="p-5"
             
            >
              <Col xl={10} md={15} xs={25} sm={20}>
                <div className="avatar-sm mb-4 " style={{ marginLeft: "4rem" }}>
                  <div className="avatar-title bg-light rounded">
                    <img src={lash} alt="" className="avatar-xxl" />
                  </div>
                </div>
                <Link to="#!">
                  <h5>Security Officer</h5>
                </Link>

                <p className="text-muted">
                  {" "}
                  <i className="ri-map-pin-2-line text-primary me-1 align-bottom"></i>{" "}
                  Lashibi Funeral Homes & Crematorium
                </p>
                <p className="text-muted">
                  {" "}
                  <i className="ri-map-pin-2-line text-primary me-1 align-bottom"></i>{" "}
                  Flexible
                </p>
                <p className="text-muted">
                  {" "}
                  <i className="ri-map-pin-2-line text-primary me-1 align-bottom"></i>{" "}
                  Full Time
                </p>
                <p className="text-muted">
                  {" "}
                  <i className="ri-map-pin-2-line text-primary me-1 align-bottom"></i>{" "}
                  Accra, Greater-Accra , Ghana
                </p>

                <div
                  style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}
                  className="cols-xs-5"
                >
                  <Button
                    type="button"
                    className="btn btn-icon btn-soft-primary mt-3 p-2 "
                    data-bs-toggle="button"
                    aria-pressed="true"
                    style={{ width: "10rem", padding: "2rem" }}
                  >
                    <i className="mdi mdi-cards-heart fs-16"></i>Save
                  </Button>
                  <Button
                    type="button"
                    className="btn btn-icon btn-soft-primary mt-3 p-2 "
                    data-bs-toggle="button"
                    aria-pressed="true"
                    style={{ width: "10rem" }}
                  >
                    <i className="mdi mdi-cards-heart fs-16"></i>Apply
                  </Button>
                  <Button
                    type="button"
                    className="btn btn-icon btn-soft-primary mt-3 p-2 "
                    data-bs-toggle="button"
                    aria-pressed="true"
                    style={{ width: "10rem" }}
                  >
                    <i className="mdi mdi-cards-heart "></i>Share
                  </Button>
                </div>
              </Col>
            </div>
          </CardBody>
        </Card>
        </Col>
      </Row>

      <Row style={{ display: "flex" }} className="m-5">
        <Col xs={20} xl={9}>
          <CardBody>
            <Card className="p-3">
              <h5 className="mb-3">Job Description</h5>

              <p className="text-muted mb-2">
                A Product Designer of a company is responsible for the user
                experience of a product, which usually includes taking direction
                on the business goals and objectives from product management.
                Product Designers are typically associated with the visual or
                tactile aspects of a product but sometimes they can also play a
                role in the information architecture and system design of a
                product.
              </p>
              <p className="text-muted mb-4">
                Product designer is an exceptional career choice. The demand for
                product designers is increasing with each passing day but there
                is a huge shortage for a skilful product designer in the market.
                With hard work and an apt skill set, a product designer can make
                a handsome amount of money.
              </p>
              <div>
                <h5 className="mb-3">Responsibilities of Product Designer</h5>
                <p className="text-muted">
                  Provided below are the responsibilities of a Product Designer:
                </p>
                <ul className="text-muted vstack gap-2">
                  <li>
                    To visualise and create drawings and design concepts to
                    determine the best product.
                  </li>
                  <li>
                    To present ideas and concepts to relevant team members for
                    brainstorming.
                  </li>
                  <li>To employ design concepts into functional prototypes.</li>
                  <li>
                    To analyse, modify and revise existing designs or products
                    and meet customer expectations.
                  </li>
                  <li>
                    To coordinate with team members and to ensure accurate
                    efficiency in the design phase.
                  </li>
                  <li>Excellent attention to detail</li>
                  <li>Meticulous and diligent</li>
                </ul>
              </div>

              <div>
                <h5 className="mb-3">Skill & Experience</h5>
                <ul className="text-muted vstack gap-2">
                  <li>Communication skills</li>
                  <li>Sound visualisation abilities</li>
                  <li>Observation skills</li>
                  <li>Problem-solving abilities</li>
                  <li>
                    Eye for aesthetic design and understanding of customer
                    appeal
                  </li>
                  <li>Artistic & innovative flair</li>
                  <li>Strong knowledge of the industry & market trends</li>
                  <li>
                    Relevant work experience in a particular field is mandatory
                  </li>
                </ul>
              </div>

              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <h5 className="mb-0">Share this job:</h5>
                </li>
                <li className="list-inline-item">
                  <Link to="#!" className="btn btn-icon btn-soft-info">
                    <i className="ri-facebook-line"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#!" className="btn btn-icon btn-soft-success">
                    <i className="ri-whatsapp-line"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#!" className="btn btn-icon btn-soft-secondary">
                    <i className="ri-twitter-line"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#!" className="btn btn-icon btn-soft-danger">
                    <i className="ri-mail-line"></i>
                  </Link>
                </li>
              </ul>
            </Card>
          </CardBody>
        </Col>
        <Col xs={15} xl={3}>
          <Row>
            <Card>
                <CardBody>
                           <div className="p-1" style={{display: 'grid', justifyContent: 'center'}}>

                            <p style={{textAlign: 'center'}}>
                                <i className="mdi mdi-email-outline" style={{fontSize: '4rem'}}></i>
                                </p>
                                <h5 style={{textAlign: 'center', marginTop: '-1rem'}}>Get similar jobs by email</h5>

                                <Button className="btn btn-success p-2">
                                        Create alert
                                </Button>

                                <p style={{textAlign: 'center'}} className="mt-3">* You can cancel this job alert at any time</p>

                           </div>
                </CardBody>
            </Card>
          </Row>
          <Row>
            <Card>
                <CardBody>
                    <div className="p-3">
                        <h4>Similar Jobs</h4>
                        <hr />
                        <h5>GFRA Community Agent</h5>
                        <h6>Terta Tech ARD</h6>
                        <hr />
                        <h5>GFRA Community Agent</h5>
                        <h6>Terta Tech ARD</h6>
                        <hr />
                        <h5>GFRA Community Agent</h5>
                        <h6>Terta Tech ARD</h6>
                        <hr />
                        <h5>GFRA Community Agent</h5>
                        <h6>Terta Tech ARD</h6>
                        <hr />
                        <Button>
                            See all similar Offers
                        </Button>
                    </div>
                </CardBody>
            </Card>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default JobDetails;
