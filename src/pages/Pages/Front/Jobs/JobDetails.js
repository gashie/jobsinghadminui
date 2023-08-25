import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import { jobGrid } from "../../../../common/data/appsJobs";
import { Link } from "react-router-dom";
import lash from "./lash.png";

const JobDetails = () => {
  return (
    <>
      <div style={{ backgroundColor: "white" }} className="p-5">
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <h5 style={{ color: "#244a59", fontWeight: "bolder" }}>
            Security Jobs
          </h5>
          <Col md={15} xl={20}>
            <Card
              style={{
                boxShadow: "none",
                border: "1px solid #e0e0e0",
                borderRadius: "0.8rem",
              }}
            >
              <CardBody>
                <div className="p-5">
                  <Col xl={10} md={15} xs={20} sm={20}>
                    <div
                      className="avatar-sm mb-4 "
                      style={{ marginLeft: "4rem" }}
                    >
                      <div className="avatar-title bg-light rounded">
                        <img src={lash} alt="" className="avatar-xxl" />
                      </div>
                    </div>
                    <Link to="#!">
                      <h5 style={{ color: "#244a59", fontWeight: "bolder" }}>
                        Security Officer
                      </h5>
                    </Link>

                    <p className="fw-bold mt-4" style={{ color: "#244a59" }}>
                      {" "}
                      <i className="ri-map-pin-2-line  me-1 align-bottom"></i>{" "}
                      Lashibi Funeral Homes & Crematorium
                    </p>
                    <p className="">
                      {" "}
                      <i className="ri-map-pin-2-line me-1 align-bottom"></i>{" "}
                      Flexible
                    </p>
                    <p className="">
                      {" "}
                      <i className="ri-map-pin-2-line  me-1 align-bottom"></i>{" "}
                      Full Time
                    </p>
                    <p className="">
                      {" "}
                      <i className="ri-map-pin-2-line me-1 align-bottom"></i>{" "}
                      Accra, Greater-Accra , Ghana
                    </p>
                    <div
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        justifyContent: 'space-around',
                        width: '100%'
                      }}
                      className="col-md-20 col-xs-20"
                    >
                      <Button
                        type="button"
                        className="btn btn-icon btn-soft-light mt-3 p-4 "
                        data-bs-toggle="button"
                        aria-pressed="true"
                        style={{
                          width: "32%",
                          color: "black",
                          border: "1px solid #244a59",
                        }}
                      >
                        <i
                          className="mdi mdi-cards-heart fs-15"
                          style={{ color: "#244a59" }}
                        ></i>
                        Save
                      </Button>
                      <Link to="/apply" className="text-center" style={{width: '30%'}}>
                      <Button
                        type="button"
                        className="btn btn-icon btn-soft-dark mt-3 p-4 "
                        data-bs-toggle="button"
                        aria-pressed="true"
                        
                        style={{
                          width: "100%",
                          backgroundColor: "#244a59",
                          color: "white",
                        }}
                      >
                        Apply
                      </Button>
                      </Link>
                      <Button
                        type="button"
                        className="btn btn-icon btn-soft-light mt-3 p-4 "
                        data-bs-toggle="button"
                        aria-pressed="true"
                        style={{
                          width: "34%",
                          color: "black",
                          border: "1px solid #244a59",
                        }}
                      >
                        <i
                          className="mdi mdi-cards-heart fs-15"
                          style={{ color: "#244a59" }}
                        ></i>
                        Share
                      </Button>
                    </div>
                  </Col>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row style={{ display: "flex" }} className="m-0">
          <Col xs={20} xl={9} md={20}>
            <CardBody>
              <Card
                className="p-3"
                style={{
                  boxShadow: "none",
                  border: "1px solid #e0e0e0",
                  borderRadius: "0.8rem",
                }}
              >
                <h5 className="mb-3 fw-bolder mt-3" style={{ color: "#244a59" }}>
                  Job Description
                </h5>

                <p className="mb-2">
                  Lorem ipsum dolor sit amet consectetur. Turpis gravida quis
                  quis nibh turpis sed elit etiam platea. Rutrum imperdiet
                  faucibus faucibus pharetra nisl nulla pellentesque. Metus eget
                  auctor porttitor morbi donec. Est enim velit libero ornare
                  pharetra.
                </p>
                <p className="mb-4">
                  Product designer is an exceptional career choice. The demand
                  for product designers is increasing with each passing day but
                  there is a huge shortage for a skilful product designer in the
                  market. With hard work and an apt skill set, a product
                  designer can make a handsome amount of money.
                </p>
                <div>
                  <h5 className="mb-3 fw-bolder mt-5" style={{ color: "#244a59" }}>
                    Responsibilities
                  </h5>
                  {/* <p className="">
                    Provided below are the responsibilities of a Product
                    Designer:
                  </p> */}
                  <ul className=" vstack gap-2">
                    <li>
                      To visualise and create drawings and design concepts to
                      determine the best product.
                    </li>
                    <li>
                      To present ideas and concepts to relevant team members for
                      brainstorming.
                    </li>
                    <li>
                      To employ design concepts into functional prototypes.
                    </li>
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
                  <h5 className="mb-3 fw-bolder mt-5" style={{color: "#244a59"}}>Requirements</h5>
                  <ul className=" vstack gap-2">
                    <li>Minimum of SHS qualification</li>
                    <li>A least 1-3 years experience</li>
                    <li>Any additional qualificatio in a security related area from a recadvantage</li>
                    <li>Possess the necessary tact, respect and empathy</li>
                    <li>
                    Good interpersonal and communication skills (oral and written)
                    </li>
                    <li>Vigillant, alert and always aware of one’s surroundings</li>
                    <li>Physical fit and with a healthy weight range</li>
                    <li>
                    Intergrity and the ability to act responsibly and ethically
                    </li>
                  </ul>
                </div>

                <div className="m-4">
                    <h4 className="fw-bolder" style={{color: "#244a59"}}>Note:</h4>
                    <p>Please not, employers receive numeros applications per posting and will only  shortlist the most qualified candidates. Also Jobsinghana.com is not involved in any decision made by an employer/recruiter and therefore does not guarantee that applications sent result in a candidate being shortlisted/selected for that position</p>
                </div>

                <div className="m-4">
                <Link to="/apply" className="text-center" style={{width: '100%'}}>
                  <Button className="btn btn-dark p-3" style={{width: '100%', backgroundColor: "#244a59"}}>
                    Apply
                  </Button>
                  </Link>
                </div>

                <p className="text-center text-muted fw-bolder mt-4">Share this job with your friends</p>

                <ul className="list-inline mb-0 text-center mt-2">
                  
                  <li className="list-inline-item">
                    <Link to="#!" className="btn btn-icon p-4" style={{borderRadius: "2rem", backgroundColor: '#4477BB'}}>
                      <i className="ri-linkedin-line fs-20" style={{color: 'white'}}></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#!" className="btn btn-icon p-4" style={{borderRadius: "2rem", backgroundColor: '#405189'}}>
                      <i className="ri-facebook-line fs-20" style={{color: 'white'}}></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#!" className="btn btn-icon btn-soft-success p-4" style={{borderRadius: "2rem", backgroundColor: '#299CDB'}}>
                      <i className="ri-twitter-line fs-20" style={{color: 'white'}}></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#!" className="btn btn-icon btn-soft-secondary p-4" style={{borderRadius: "2rem", backgroundColor: '#5CCD5A'}}>
                      <i className="ri-whatsapp-line fs-20" style={{color: 'white'}}></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#!" className="btn btn-icon btn-soft-danger p-4" style={{borderRadius: "2rem", backgroundColor: '#3D7DDC'}}>
                      <i className="ri-messenger-line fs-20" style={{color: 'white'}}></i>
                    </Link>
                  </li>
                </ul>
              </Card>
            </CardBody>
          </Col>
          <Col xs={15} xl={3}>
            <Row>
              <Card style={{boxShadow: 'none', border: "1px solid #e0e0e0", backgroundColor: '#F8FAFC', borderRadius: '0.8rem'}}>
                <CardBody>
                  <div
                    className="p-1"
                    style={{ display: "grid", justifyContent: "center" }}
                  >
                    <p style={{ textAlign: "center" }}>
                      <i
                        className="mdi mdi-email-outline fw-bolder"
                        style={{ fontSize: "4rem" }}
                      ></i>
                    </p>
                    <h6 style={{ textAlign: "center", marginTop: "-1rem" }} className="fw-bolder">
                      Get similar jobs by email
                    </h6>

                    <input placeholder="Enter your email" className="m-3 p-3" style={{border: '1px solid #e0e0e0'}}></input>


                    <Button className="btn btn-success p-2 ">
                      Create alert
                    </Button>
                
                    <p style={{ textAlign: "center" }} className="mt-3">
                      * You can cancel this job alert at any time
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Row>
            <Row>
              <Card style={{backgroundColor: '#F8FAFC', boxShadow: 'none', border: 'none'}}>
                <CardBody>
                  <div className="p-3">
                    <h4 className="fw-bolder" style={{color: '#244a59'}}>Similar Jobs</h4>
                    <hr />
                    <h5 className="p-2 fw-bolder" style={{color: '#244a59'}}>GFRA Community Agent</h5>
                    <p className="p-2 fw-bolder">Terta Tech ARD</p>
                    <p className="p-2 mt-3  text-muted">Accra</p>
                    <hr />
                    <h5 className="p-2 fw-bolder" style={{color: '#244a59'}}>GFRA Community Agent</h5>
                    <p className="p-2 fw-bolder">Terta Tech ARD</p>
                    <p className="p-2 mt-3 text-muted">Accra</p>
                    <hr />
                    <h5 className="p-2 fw-bolder" style={{color: '#244a59'}}>GFRA Community Agent</h5>
                    <p className="p-2 fw-bolder">Terta Tech ARD</p>
                    <p className="p-2 mt-3 text-muted">Accra</p>
                    <hr />
                    <h5 className="p-2 fw-bolder" style={{color: '#244a59'}}>GFRA Community Agent</h5>
                    <p className="p-2 fw-bolder">Terta Tech ARD</p>
                    <p className="p-2 mt-3  text-muted">Accra</p>
                    <hr />
                    <Button style={{width: "100%", border: '1px solid #244a59'}} className="btn btn-light p-3 mt-3">See all similar Offers</Button>
                  </div>
                </CardBody>
              </Card>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default JobDetails;
