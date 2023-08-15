import "../Career/CareerAdvice/CareerAdvice.css";
import { Container, Row, Col, Button, CardBody, Card, Label, Input } from "reactstrap";
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
import Flatpickr from 'react-flatpickr'


const Recruitment = () => {
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

  return (
    <>
      <div></div>

      <Row className="justify-content-center">
        <Col xl={20} xs={10} md={20} className="text-bg-size">
          <img src={bg} className="text-bg" alt="bg"></img>

          <div
            className="m-5 mt-5"
            style={{ display: "grid", justifyContent: "center" }}
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
                <Col md={20} style={{ display: "grid", gap: "2rem" }}>
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
                    Advertising
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col md={20} style={{ display: "grid", gap: "2rem" }}>
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
                </Col>
              </Row>
            </Col>
          </div>
        </Col>
      </Row>

      <Container className="mt-5">
        <Col xs={10} className="mt-5">
          <h5 style={{ color: "#244a59", fontWeight: "bolder" }}>
            Recruitment/Headhunting
          </h5>
          <p className="fs-16">
            Use our state of the art technology to headhunt the exact talent for
            your organisation and only interact with the candidates that best
            fit your requirements
          </p>
        </Col>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Col xs={10} xl={5} md={5}>
            <img src={img1} alt="img" className="img-fluid"></img>
          </Col>
          <Col xs={10} xl={6} md={6}>
            <h5
              style={{ color: "#244a59", fontWeight: "bolder" }}
              className="mt-4"
            >
              Recruitment/Headhunting Process
            </h5>
            <p className="fs-16">
              We use a combination of methods to identify a large pool of
              potential candidates for each search project. These include
              searching in our extensive databases, networking, headhunting and
              proactively contacting and recruiting potential candidates. Based
              on our knowledge of your organization and specific position
              requirements
            </p>
            <Button
              className="btn btn-dark"
              style={{ backgroundColor: "#244a59" }}
            >
              Contact Us
            </Button>
          </Col>
        </div>
      </Container>
      {/* Part 2 */}
      <Col>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            color: "#244a59",
            fontWeight: "bolder",
            backgroundColor: "white",
          }}
          className="p-5 mt-5"
        >
          60% of candidates would feel more confident that a job is the right
          fit for them if they were headhunted
        </div>
      </Col>
      {/* Part 3 */}
      <Container>
        <Col className="p-3 mt-5">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "3rem",
              flexWrap: "wrap",
            }}
          >
            <Col xl={5}>
              <div style={{ display: "grid", gap: "1rem" }}>
                <h5
                  style={{
                    color: "#244a59",
                    fontWeight: "bolder",
                    textAlign: "center",
                  }}
                  className="mt-5"
                >
                  Use advanced filters to get the best job matches
                </h5>
                <p className="fs-15" style={{ textAlign: "center" }}>
                  Select multiple candidates to create a talent pool and only
                  interact with the candidates that best fit your requirements
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  gap: "0.5rem",
                  flexWrap: "wrap",
                }}
                className="mt-2"
              >
                {iconList.map((a) => {
                  return (
                    <div style={{ display: "grid" }} key={a.icon}>
                      <p style={{ textAlign: "center" }}>
                        <img src={a.icon} alt="alt"></img>
                      </p>
                      <p style={{ textAlign: "center", width: "6rem" }}>
                        {a.des}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  gap: "0.5rem",
                  flexWrap: "wrap",
                }}
                className="mt-2"
              >
                {iconList2.map((a) => {
                  return (
                    <div style={{ display: "grid" }} key={a.icon}>
                      <p style={{ textAlign: "center" }}>
                        <img src={a.icon} alt="alt"></img>
                      </p>
                      <p style={{ textAlign: "center", width: "6rem" }}>
                        {a.des}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Col>

            <Col>
              <p style={{ textAlign: "center" }}>
                <img src={img2} alt="img2" className="img-fluid"></img>
              </p>
            </Col>
          </div>
        </Col>
      </Container>

      {/* Part 4 */}

      <Col>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            color: "#244a59",
            fontWeight: "bolder",
            backgroundColor: "white",
          }}
          className="p-5 mt-5"
        >
          <Container
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <Col xl={8} md={8}>
              <h4 style={{ fontWeight: "bolder", color: "#244a59" }}>
                William Baffoe - Gashie Technology
              </h4>
              <p className="fs-16">
                “Jobsinghana is one of our go-to solutions for talent
                acquisition. Client-centric with great customer service ethic;
                my team and I have had wonderful support from the Jobsinghana
                team over many years. Their database of applicants is
                unbeatable.”
              </p>
            </Col>
            <Col xl={15}>
              <div style={{ marginTop: "2.5rem" }}>
                <Rating
                  stop={5}
                  emptySymbol={
                    <i
                      className="mdi mdi-star-outline"
                      style={{ fontSize: "30px" }}
                    ></i>
                  }
                  fullSymbol={
                    <i
                      className="mdi mdi-star text-success"
                      style={{ fontSize: "30px" }}
                    ></i>
                  }
                  initialRating={5}
                  readonly
                />
              </div>
            </Col>
          </Container>
        </div>
      </Col>

      {/* Part 5 */}
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <Col className="p-5 " lg={8}>
         <h4 style={{textAlign: 'center', color: '#244a59', fontWeight: 'bolder'}} className="mt-5">Contact US</h4>
        <Container className="p-5">
            <Card className="p-5">
                <CardBody>
          <Row className="mb-3">
            <Col lg={3}>
              <p htmlFor="nameInput" className="form-right " style={{textAlign: 'right'}}>
                Name
              </p>
            </Col>
            <Col lg={9}>
              <Input
                type="text"
                className="form-control"
                id="nameInput"
                placeholder="Enter your name"
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col lg={3}>
            <p htmlFor="nameInput" className="form-right " style={{textAlign: 'right'}}>
                Email Address
              </p>
            </Col>
            <Col lg={9}>
              <Input
                type="url"
                className="form-control"
                id="websiteUrl"
                placeholder="Enter your url"
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col lg={3}>
            <p htmlFor="nameInput" className="form-right " style={{textAlign: 'right'}}>
                I am
              </p>
            </Col>
            <Col lg={9}>
              <select className="form-select mb-3" aria-label="Default">
                <option>Select User Type</option>
                <option>Job Seeker</option>
                <option>Employer</option>
                <option>Advertiser</option>
                <option>Other</option>
              </select>
              
            </Col>
          </Row>
          <Row className="mb-3">
            <Col lg={3}>
            <p htmlFor="nameInput" className="form-right " style={{textAlign: 'right'}}>
                Question Type
              </p>
            
            </Col>
            <Col lg={9}>
            <select className="form-select mb-3" aria-label="Default">
                <option>Select Question Type</option>
                <option>Account Information</option>
                <option>Advertising</option>
                <option>Applying to a job</option>
                <option>Banner Advertising</option>
                <option>Content</option>
                <option>Email Unsubscribe</option>
                <option>Employer Account</option>
                <option>Featured Employer</option>
                <option>Featured Job</option>
                <option>Featured/Bold Job</option>
                <option>General Question</option>
                <option>Job Search</option>
                <option>Login and / or Password</option>
                <option>Posting / Managing Jobs</option>
                <option>Press/Media</option>
                <option>Resume and/or Cover Letter</option>
                <option>Resume Database Search</option>
                <option>Search Sponser</option>
                <option>Site Abuse/Fraudulent Email</option>
                <option>Sponsored Link</option>
                <option>Suggestion</option>
                <option>Other</option>
               
              </select>
            </Col>
          </Row>
        
        
          <Row className="mb-3">
            <Col lg={3}>
            <p htmlFor="nameInput" className="form-right " style={{textAlign: 'right'}}>
                Message
              </p>
            </Col>
            <Col lg={9}>
              <textarea
                className="form-control"
                id="meassageInput"
                rows="3"
                placeholder="Enter your message"
              ></textarea>
            </Col>
          </Row>
          <div className="text-start">
            <button type="submit" className="btn btn-dark" style={{backgroundColor: '#244a59'}}>
              Submit Enquiry
            </button>
          </div>
          </CardBody>
            </Card>
        </Container>
        
      </Col>
      </div>

      {/* Part 6 */}
      <Col>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            color: "#244a59",
            
            backgroundColor: "#244a59",
          }}
          className="p-5 mt-5"
        >
          <Container
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <Col xl={5} md={8}>
              <h4 style={{ fontWeight: "bolder", color: "white" }}>
              Need Help? Contact US
              </h4>
              <p className="fs-16" style={{color: 'white'}}>
              Call or email if you have any questions
              </p>
            </Col>
            <Col xl={20}>
              <div >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "2rem",
                  flexWrap: "wrap",
               
                }}
                
              >
               
                    <div style={{ display: "grid" }}>
                      <p style={{ textAlign: "center" }}>
                        <img src={icon6} alt="alt"></img>
                      </p>
                      <p style={{ textAlign: "center", width: "6rem", color: 'white' }}>
                      (030) 276 0143
                      </p>
                    </div>

                    <div style={{ display: "grid" }}>
                      <p style={{ textAlign: "center" }}>
                        <img src={icon7} alt="alt"></img>
                      </p>
                      <p style={{ textAlign: "center", width: "6rem", color: 'white' }}>
                      info@jobsinghana.com
                      </p>
                    </div>
                  
                
              </div>
              </div>
            </Col>
          </Container>
        </div>
      </Col>
    </>
  );
};

export default Recruitment;
