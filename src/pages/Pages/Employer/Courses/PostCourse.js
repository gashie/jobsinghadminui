import { Label, Input, Row, Col } from "reactstrap";
import Flatpickr from "react-flatpickr";

const PostCourse = () => {
  return (
    <>
      <div className="mb-3 mt-4">
        <Label htmlFor="StartleaveDate" className="form-label">
          Category
        </Label>
        <Row className="mb-3">
          <Col lg={15}>
            <select className="form-select ">
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
      </div>
      <div className="mb-3">
        <Label htmlFor="EndleaveDate" className="form-label">
          Study mode
        </Label>
        <Row className="mb-3">
          <Col lg={15}>
            <select className="form-select ">
              <option>Please select</option>
              <option>Online Course</option>
              <option>Full-time study</option>
              <option>Part-time study</option>
              <option>Distance learning</option>
            </select>
          </Col>
        </Row>
      </div>
      <div className="mb-3">
        <Label htmlFor="employeeUrl" className="form-label">
          Title
        </Label>
        <Input
          type="url"
          className="form-control"
          id="employeeUrl"
          placeholder="Enter emploree url"
        />
      </div>
      <div className="mb-3">
        <Label htmlFor="VertimeassageInput" className="form-label">
          Description
        </Label>
        <textarea
          className="form-control"
          id="VertimeassageInput"
          rows="3"
          placeholder="Enter your message"
        ></textarea>
      </div>
      <div className="mb-3">
        <Label htmlFor="employeeName" className="form-label">
          Category
        </Label>
        <Input
          type="text"
          className="form-control"
          id="employeeName"
          placeholder="Enter emploree name"
        />
      </div>
      <div className="mb-3">
        <Label htmlFor="employeeName" className="form-label">
          Qualification
        </Label>
        <Input
          type="text"
          className="form-control"
          id="employeeName"
          placeholder="Enter emploree name"
        />
      </div>
      <div className="mb-3">
        <Label htmlFor="employeeName" className="form-label">
          Start date
        </Label>
        <Input
          type="text"
          className="form-control"
          id="employeeName"
          placeholder="Enter emploree name"
        />
      </div>
      <div className="mb-3">
        <Label htmlFor="employeeName" className="form-label">
          Duration
        </Label>
        <Input
          type="text"
          className="form-control"
          id="employeeName"
          placeholder="Enter emploree name"
        />
      </div>
      <div className="mb-3">
        <Label htmlFor="employeeName" className="form-label">
          Cost
        </Label>
        <Input
          type="text"
          className="form-control"
          id="employeeName"
          placeholder="Enter emploree name"
        />
      </div>
      <div className="mb-3">
        <Label htmlFor="EndleaveDate" className="form-label">
          Location
        </Label>
        <Row className="mb-3">
          <Col lg={15}>
            <select className="form-select ">
              <option>Please select</option>
              <option>Accra</option>
              <option>Aburi</option>
              <option>Ada</option>
              <option>Cape Coast</option>
              <option>Dambai</option>
              <option>Kasoa</option>
              <option>Keta</option>
              <option>Kumasi</option>
              <option>Labadi</option>
              <option>Madina</option>
              <option>Mamobi</option>
              <option>Nima</option>
              <option>Okponglo</option>
              <option>Shiashie</option>
              <option>sampa</option>
              <option>Suhum</option>
              <option>Sedru</option>
            </select>
          </Col>
        </Row>
      </div>

      <div className="text-start">
        <button
          type="submit"
          className="btn btn-dark"
          style={{ backgroundColor: "#244a59" }}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default PostCourse;
