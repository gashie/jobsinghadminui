import {
  Col,
  Row,
  Modal,
  ModalBody,
  Input,
  Container,
  Button,
  Form,
  Label,
  FormGroup,
} from "reactstrap";
import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const PostJob = () => {
  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    console.log(data); // This will log the content of the editor to the console
  };

  const [modal_standard, setmodal_standard] = useState(false);

  function tog_standard() {
    setmodal_standard(!modal_standard);
  }

  const [selectedOption, setSelectedOption] = useState("Select one");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setSelectedCheckboxes([...selectedCheckboxes, value]);
    } else {
      setSelectedCheckboxes(
        selectedCheckboxes.filter((item) => item !== value)
      );
    }
  };

  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  // Sample list of checkbox items
  const list1 = [{ id: 1, label: "Use auto responder" }];
  const list2 = [
    { id: 1, label: "Equal or more than passing score" },
    { id: 2, label: "Less than passing score" },
  ];
  const list3 = [
    { id: 1, label: "Equal or more than passing score" },
    { id: 2, label: "Less than passing score" },
  ];
  const list4 = [
    { id: 1, label: "Yes/No" },
    { id: 2, label: "List of answers with multiple choice" },
    { id: 3, label: "List of answers with sinlge choice" },
  ];

  return (
    <>
      <h4 style={{ color: "#244a59", fontWeight: "bolder" }} className="m-3">
        Post a job
      </h4>

      <Container>
        <Row>
          {/* left */}
          <Col>
            <Row className="mb-3">
              <Col lg={15}>
                <Input
                  type="url"
                  className="form-control p-3"
                  id="websiteUrl"
                  placeholder="Gashie Technology"
                />
              </Col>
            </Row>

            {/* <Row className="mb-3">
              <Col lg={15}>
                <div
                  style={{
                    backgroundColor: "#EFF1F2",
                    height: "35vh",
                    display: "flex",
                    justifyContent: "center",
                  }}
                ></div>
              </Col>
            </Row> */}

            <Row className="mb-3">
              <Col lg={15}>
                <Input
                  type="url"
                  className="form-control p-3"
                  id="websiteUrl"
                  placeholder="Gashie Technology"
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col lg={15}>
                <select className="form-select p-3">
                  <option>Choose Job Category</option>
                  <option>Accounting</option>
                  <option>Banking</option>
                  <option>Data Management</option>
                  <option>Extractive</option>
                  <option>Health and Nutrition</option>
                  <option>Insurance</option>
                  <option>Policy</option>
                  <option>Science</option>
                  <option>Automation/Machinery/Aviation</option>
                  <option>Driving/Transportation</option>
                  <option>Agriculture</option>
                  <option>Marketing</option>
                  <option>Publishing /Printing</option>
                  <option>Procurement</option>
                  <option>Social Work</option>
                  <option>Consulting</option>
                  <option>Customer Service</option>
                  <option>Poroject Development</option>
                  <option>Supply CHain</option>
                  <option>Internships</option>
                  <option>Operations</option>
                  <option>Food Service</option>
                  <option>I.T</option>
                  <option>Other</option>
                </select>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col lg={15}>
                <select className="form-select p-3">
                  <option>Default industry upon registration</option>
               
                    <option>Please Select</option>
                    <option>Accounting</option>
                    <option>Banking</option>
                    <option>Data Management</option>
                    <option>Extractive</option>
                    <option>Health and Nutrition</option>
                    <option>Insurance</option>
                    <option>Policy</option>
                    <option>Science</option>
                    <option>Automation/Machinery/Aviation</option>
                    <option>Driving/Transportation</option>
                    <option>Agriculture</option>
                    <option>Marketing</option>
                    <option>Publishing /Printing</option>
                    <option>Procurement</option>
                    <option>Social Work</option>
                    <option>Consulting</option>
                    <option>Customer Service</option>
                    <option>Poroject Development</option>
                    <option>Supply CHain</option>
                    <option>Internships</option>
                    <option>Operations</option>
                    <option>Food Service</option>
                    <option>I.T</option>
                    <option>Other</option>
                 
                </select>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col lg={15}>
                <Input
                  type="url"
                  className="form-control p-3"
                  id="websiteUrl"
                  placeholder="Education"
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col lg={15}>
                <Input
                  type="url"
                  className="form-control"
                  id="websiteUrl"
                  placeholder="Starting Date"
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col
                lg={15}
                className="d-flex gap-3 p-2"
                style={{ border: "1px solid #ebeff0", borderRadius: "0.5rem" }}
              >
                <Button
                  className="btn btn-light"
                  onClick={() => tog_standard()}
                >
                  How to apply
                </Button>
                <p style={{ color: "red" }}>Not set</p>
              </Col>
            </Row>
          </Col>

          {/* right */}
          <Col>
            <Row className="mb-3">
              <Col lg={15}>
                <Input
                  type="url"
                  className="form-control p-3"
                  id="websiteUrl"
                  placeholder="Partner Category"
                />
              </Col>
            </Row>

            {/* mdi-trending-down */}

            <Row className="mb-3">
              <Col lg={15}>
                <Input
                  type="url"
                  className="form-control p-3"
                  id="websiteUrl"
                  placeholder="Job status"
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col lg={15}>
                <select className="form-select p-3">
                 
                    <option>Chosee Job Category</option>
                    <option>Accounting</option>
                    <option>Banking</option>
                    <option>Data Management</option>
                    <option>Extractive</option>
                    <option>Health and Nutrition</option>
                    <option>Insurance</option>
                    <option>Policy</option>
                    <option>Science</option>
                    <option>Automation/Machinery/Aviation</option>
                    <option>Driving/Transportation</option>
                    <option>Agriculture</option>
                    <option>Marketing</option>
                    <option>Publishing /Printing</option>
                    <option>Procurement</option>
                    <option>Social Work</option>
                    <option>Consulting</option>
                    <option>Customer Service</option>
                    <option>Poroject Development</option>
                    <option>Supply CHain</option>
                    <option>Internships</option>
                    <option>Operations</option>
                    <option>Food Service</option>
                    <option>I.T</option>
                    <option>Other</option>
                 
                </select>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col lg={15} className="p-2">
                <Input
                  type="url"
                  className="form-control p-3"
                  id="websiteUrl"
                  placeholder="Job location eg. Accra, Tarkwa"
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col lg={15}>
                <Input
                  type="url"
                  className="form-control p-3"
                  id="websiteUrl"
                  placeholder="Years of experience"
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col lg={15}>
                <Input
                  type="url"
                  className="form-control p-3"
                  id="websiteUrl"
                  placeholder="End date"
                />
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mt-3">
          <h6 style={{ color: "#244a59", fontWeight: "bolder" }}>
            Description
          </h6>
          <Col lg={12}>
            <Form method="post">
              <CKEditor
                editor={ClassicEditor}
                data=""
                onChange={handleEditorChange} // Use the custom handleEditorChange function
              />
            </Form>
          </Col>
        </Row>

        <Row className="mt-3">
          <h6 style={{ color: "#244a59", fontWeight: "bolder" }}>
            How to apply
          </h6>
          <Col lg={12}>
            <Form method="post">
              <CKEditor
                editor={ClassicEditor}
                data=""
                onChange={handleEditorChange} // Use the custom handleEditorChange function
              />
            </Form>
          </Col>
        </Row>

        <div className="text-start d-flex gap-3 mt-4">
          <button
            type="submit"
            className="btn btn-dark"
            style={{ backgroundColor: "#244a59" }}
          >
            Submit
          </button>
        </div>
      </Container>

      {/* Modal */}
      <Modal
        id="myModal"
        isOpen={modal_standard}
        toggle={() => {
          tog_standard();
        }}
        style={{ borderRadius: "1rem" }}
      >
        <div
          className="d-flex p-3"
          style={{
            justifyContent: "space-between",
            backgroundColor: "#244a59",
          }}
        >
          <div></div>

          <div>
            <h5 className="modal-title text-light" id="myModalLabel">
              Application settings
            </h5>
          </div>
          <div className="text-end">
            <Button
              style={{
                backgroundColor: "#4e6d79",
                borderRadius: "0.7rem",
                color: "#304852",
              }}
              type="button"
              className="btn-close p-1"
              onClick={() => {
                setmodal_standard(false);
                setSelectedOption("Select one");
              }}
              aria-label="Close"
            ></Button>
          </div>
        </div>

        <ModalBody>
          {selectedOption === "Select one" ? (
            <Row className="mb-3">
              <Col lg={15}>
                <label>Receive application:</label>
                <select
                  className="form-select p-3"
                  onChange={handleSelectChange}
                  value={selectedOption}
                >
                  <option>Select one</option>
                  <option>Redirect to my website</option>
                  <option>Receive via email</option>
                  <option>Application tracker</option>
                </select>
              </Col>
            </Row>
          ) : selectedOption === "Application tracker" ? (
            <Row>
              <Col xl={9} md={9} className="">
                <label className="fs-11">
                  Accept resume with these keywords
                </label>
                <Input
                  type="text"
                  className="form-control p-3"
                  id="websitetext"
                  placeholder=""
                />
                <p className="fw-light fs-10 mt-2">
                  Please separate each keyword with comma. eg. Banking, Nurse
                </p>
              </Col>

              <Col xl={3} md={3}>
                <label className="fs-11"></label>
                <select className="form-select p-3 form-control mt-2">
                  <option>None</option>
                  <option>...</option>
                </select>
              </Col>

              <hr className="mt-3" />

              <h6 className="mt-2">Screening questionnaires</h6>

              <Row>
                <Col xl={20} md={20} className="mt-4">
                  <label className="fs-11">Question Name</label>
                  <Input
                    type="text"
                    className="form-control p-3"
                    id="websitetext"
                    placeholder="Enter question name"
                  />
                </Col>
              </Row>

              <Row>
                <Col xl={20} md={20} className="mt-4">
                  <label className="fs-11">Passing score</label>
                  <Input
                    type="text"
                    className="form-control p-3"
                    id="websitetext"
                    placeholder="Select passing score"
                  />
                </Col>
              </Row>

              {list1.map((item) => (
                <Row key={item.id} className="mt-3">
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        value={item.label}
                        checked={selectedCheckboxes.includes(item.label)}
                        onChange={handleCheckboxChange}
                      />{" "}
                      {item.label}
                    </Label>
                  </FormGroup>
                </Row>
              ))}

              <p className="mt-3">
                Send auto-reply email to candidates whose score is
              </p>
              {list2.map((item) => (
                <Row key={item.id}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        value={item.label}
                        checked={selectedCheckboxes.includes(item.label)}
                        onChange={handleCheckboxChange}
                      />{" "}
                      {item.label}
                    </Label>
                  </FormGroup>
                </Row>
              ))}
              <p className="mt-3">
                Send auto-reply email to candidates whose score is
              </p>
              {list3.map((item) => (
                <Row key={item.id}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        value={item.label}
                        checked={selectedCheckboxes.includes(item.label)}
                        onChange={handleCheckboxChange}
                      />{" "}
                      {item.label}
                    </Label>
                  </FormGroup>
                </Row>
              ))}
              <p className="mt-3">Question answer type</p>
              {list4.map((item) => (
                <Row key={item.id}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        value={item.label}
                        checked={selectedCheckboxes.includes(item.label)}
                        onChange={handleCheckboxChange}
                      />{" "}
                      {item.label}
                    </Label>
                  </FormGroup>
                </Row>
              ))}
            </Row>
          ) : selectedOption === "Receive via email" ? (
            <Row>
              <h6 className="mt-2">Screening questionnaires</h6>

              <Row>
                <Col xl={20} md={20} className="mt-4">
                  <label className="fs-11">Receive application</label>
                  <Input
                    type="text"
                    className="form-control p-3"
                    id="websitetext"
                    placeholder="Enter question name"
                    value="Recieve via email"
                  />
                </Col>
              </Row>

              <Row>
                <Col xl={20} md={20} className="mt-4">
                  <Input
                    type="text"
                    className="form-control p-3"
                    id="websitetext"
                    placeholder="Enter email aaddress"
                  />
                </Col>
              </Row>
            </Row>
          ) : selectedOption === "Redirect to my website" ? (
            <Row>
              <Row>
                <Col xl={20} md={20} className="mt-4">
                  <label className="fs-11">Receive application</label>
                  <Input
                    type="text"
                    className="form-control p-3"
                    id="websitetext"
                    placeholder="Enter question name"
                    value="Redirec to my website"
                  />
                </Col>
              </Row>

              <Row>
                <Col xl={20} md={20} className="mt-4">
                  <Input
                    type="text"
                    className="form-control p-3"
                    id="websitetext"
                    placeholder="Enter url (eg. http://gashietechnology.com)"
                  />
                </Col>
              </Row>
            </Row>
          ) : (
            ""
          )}
        </ModalBody>

        <div className="text-start p-3">
          <Button
            className="btn btn-dark text-end"
            style={{ backgroundColor: "#244a59" }}
          >
            Apply settings
          </Button>{" "}
          <Button
            className="btn btn-light"
            style={{ border: "1px solid #244a59" }}
            onClick={() => {
              tog_standard();
              setSelectedOption("Select one");
            }}
          >
            Cancel
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default PostJob;
