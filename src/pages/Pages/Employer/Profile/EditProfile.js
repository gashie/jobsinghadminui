import { Row, Col, Label, Input, Card, Container, CardBody } from "reactstrap";

const EditEmployerProfile = () => {
  return (
    <>

<div className="d-flex m-3" style={{justifyContent: 'space-between'}}>
<h4 style={{color: '#244a59', fontWeight: 'bolder'}}>
    Edit Profile
</h4>

<h6 style={{cursor: "pointer", border: '1px solid #244a59'}} className="p-2">Go Back</h6>

</div>


      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Col className="" xl={8} md={20}>
          <Container className="p-5">
            <Card className="p-5">
              <CardBody>
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
                      id="nameInput"
                      placeholder="gashietechnology@gmail.com"
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
                      type="url"
                      className="form-control"
                      id="websiteUrl"
                      placeholder="Gashie Technology"
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
                      id="websiteUrl"
                      placeholder="Lorem ipsum dolor sit amet consectetur. Quisque sapien amet quam id eget vestibulum. Aenean interdum porttitor est id integer urna. A odio vestibulum mi ac lorem mi tellus tortor. Sit at nunc consequat eu eget dictum."
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
                      Contact Person:
                    </p>
                  </Col>

                  <Col lg={9}>
                    <Input
                      type="url"
                      className="form-control"
                      id="websiteUrl"
                      placeholder="Mr. Recruiter"
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
                      Address:
                    </p>
                  </Col>

                  <Col lg={9}>
                    <Input
                      type="url"
                      className="form-control"
                      id="websiteUrl"
                      placeholder="Labone, Silver Lave"
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
                      type="url"
                      className="form-control"
                      id="websiteUrl"
                      placeholder="+233556834521"
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

                <div className="text-start mt-4">
                  <button
                    type="submit"
                    className="btn btn-light"
                    style={{ color: "#244a59", border: "1px solid #244a59" }}
                  >
                    Delete my user account
                  </button>
                </div>
              </CardBody>
            </Card>
          </Container>
        </Col>
      </div>
    </>
  );
};

export default EditEmployerProfile;
