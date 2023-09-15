import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import { Col, Row, Table, Button, Card, CardBody, Container, Input, Label } from "reactstrap";
import data from "./data";
import { viewjobAlerts } from '../../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

const Alerts = () => {

const [create, setCreate] = useState(false)

const dispatch = useDispatch()

useEffect(()=>{
    dispatch(viewjobAlerts({viewAction: ""}))
})


  return (
    <>
    {
        create === false ?
        <>
    <div style={{display: "flex", justifyContent: 'space-between'}}>
      <h5 style={{ fontWeight: "bolder", color: "#244a59" }} className="mt-3">
        My Alerts
      </h5>

      <Button className="btn btn-dark" style={{backgroundColor: '#244a59'}}
      onClick={()=>{
        setCreate(true)
      }}
      >
      Create new alert
      </Button>
      </div>
      <Col className="m-5">
        <div className="table-responsive">
          <Table className="align-middle table-nowrap mb-0">
            <thead>
              <tr>
                <th scope="col">Job title</th>
                <th scope="col">Inserted</th>
                <th scope="col">Updated</th>
                <th scope="col">Status</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((a, key) => (
                <tr key={key}>
                  <th scope="row">
                    <Link to="#" className="fw-medium">
                      {a.title}
                    </Link>
                  </th>
                 
                  <td>{a.inserted}</td>
                  <td>{a.updated}</td>
                  <td>{a.status}</td>
                  <td>{a.edit}</td>
                  <td>
                    <p
                      style={{
                        color: "red"
                      }}
                    >
                      {a.delete}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Col> 
      </>
      : <>
      <p style={{cursor: "pointer"}} onClick={()=>setCreate(false)}>
        Back
        </p>
      <h5 style={{ fontWeight: "bolder", color: "#244a59" }} className="mt-3">
       Create job Alert
      </h5>

      <div
          style={{
            display: "flex",
            justifyContent: "center",
           
          }}
        >
          <Col className="" lg={8}>
            
            <Container className="p-5">
              <Card className="p-5">
                <CardBody>
                  <Row className="mb-3">
                    <Col lg={3}>
                      <p
                        htmlFor="nameInput"
                        className="form-right "
                        style={{ textAlign: "right" }}
                      >
                        Name:
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
                      <p
                        htmlFor="nameInput"
                        className="form-right "
                        style={{ textAlign: "right" }}
                      >
                        Keyword: 
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

                  <Col lg={10} >
                     <div className='d-flex gap-5 form-check'>
                        <div>
                        <Col lg={20}>
                      <p
                        htmlFor="nameInput"
                        className="form-right "
                        style={{ textAlign: "right" }}
                      >
                        Choose your search criteria 
                      </p>
                    </Col>
                       
                        </div>
                        <div>
                        <Label className="form-check-label" for="flexRadioDefault1">
                        Any of these words
                        </Label>
                        <Input className='form-check-input' type='radio' name="flexRadioDefault" id="flexRadioDefault1"></Input>
                        
                        </div>
                        <div>
                             <Label className="form-check-label" for="flexRadioDefault1">
                             All of these words
                        </Label>
                        <Input className='form-check-input' type='radio' name="flexRadioDefault" id="flexRadioDefault1"></Input>
                       
                        </div>
                     </div>
                    </Col>


                  <Row className="mb-3 mt-5">
                    <Col lg={3}>
                      <p
                        htmlFor="nameInput"
                        className="form-right "
                        style={{ textAlign: "right" }}
                      >
                       Get job alerts
                      </p>
                    </Col>
                    <Col lg={9}>
                     <div className='d-flex gap-5 form-check'>
                        <div>
                        <Input className='form-check-input' type='radio' name="flexRadioDefault" id="flexRadioDefault1"></Input>
                        <Label className="form-check-label" for="flexRadioDefault1">
                            Daily
                        </Label>
                        </div>
                        <div>
                        <Input className='form-check-input' type='radio' name="flexRadioDefault" id="flexRadioDefault1"></Input>
                        <Label className="form-check-label" for="flexRadioDefault1">
                            Weekly
                        </Label>
                        </div>
                        <div>
                        <Input className='form-check-input' type='radio' name="flexRadioDefault" id="flexRadioDefault1"></Input>
                        <Label className="form-check-label" for="flexRadioDefault1">
                            Monthly
                        </Label>
                        </div>
                     </div>
                    </Col>
                  </Row>
                 
                  <Row className="mb-3">
                    <Col lg={3}>
                      <p
                        htmlFor="nameInput"
                        className="form-right "
                        style={{ textAlign: "right" }}
                      >
                        Location:
                      </p>
                    </Col>
                    <Col lg={9}>
                      <select className="form-select mb-3" aria-label="Default">
                        <option>Select Question Type</option>
                        <option>Account Information</option>
                        <option>Advertising</option>
                        <option>Applying to a job</option>
                       
                      </select>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col lg={3}>
                      <p
                        htmlFor="nameInput"
                        className="form-right "
                        style={{ textAlign: "right" }}
                      >
                        Job category:
                      </p>
                    </Col>
                    <Col lg={9}>
                      <select className="form-select mb-3" aria-label="Default">
                        <option>All job Categories</option>
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
                    <Col lg={3}>
                      <p
                        htmlFor="nameInput"
                        className="form-right "
                        style={{ textAlign: "right" }}
                      >
                        Job type:
                      </p>
                    </Col>
                    <Col lg={9}>
                      <select className="form-select mb-3" aria-label="Default">
                        <option>Any time</option>
                        <option>Full-time</option>
                        <option>Part-time</option>
                        <option>Contract</option>
                        <option>Permanent</option>
                        <option>Temporary</option>
                        <option>Internship</option>
                        <option>Remote</option>
                        <option>Science</option>
                       
                      </select>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col lg={3}>
                      <p
                        htmlFor="nameInput"
                        className="form-right "
                        style={{ textAlign: "right" }}
                      >
                        Any Experience:
                      </p>
                    </Col>
                    <Col lg={9}>
                      <select className="form-select mb-3" aria-label="Default">
                        <option>Any experience</option>
                        <option>1 year</option>
                        <option>1 year to 3years</option>
                        <option>3 years to 6 years</option>
                        <option>6 years to 10 years</option>
                        <option>10 years plus</option>
                       
                      </select>
                    </Col>
                  </Row>

                
                  <div className="text-start">
                    <button
                      type="submit"
                      className="btn btn-dark"
                      style={{ backgroundColor: "#244a59" }}
                    >
                     Create job alert
                    </button>
                  </div>
                </CardBody>
              </Card>
            </Container>
          </Col>
        </div>
      </>
}
    </>
  );
};

export default Alerts;
