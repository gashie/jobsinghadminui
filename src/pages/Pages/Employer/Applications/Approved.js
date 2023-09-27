import { useState, useEffect } from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  employerApplications,
  jobseekerApplications,
} from "../../../../store/actions";

const Approved = () => {
  const [margin, setMargin] = useState("");
  const [action, setAction] = useState(false);
  const [takeAction, setTakeAction] = useState("");

  const updateWindowSize = () => {
    const newWindowSize = document.documentElement.clientWidth;
    if (newWindowSize <= 375) {
      setMargin("-25rem");
    } else if (newWindowSize <= 1200) {
      setMargin("");
    } else if (newWindowSize >= 1200) {
      setMargin("");
    } else if (newWindowSize > 375) {
      setMargin("");
    }
  };

  useEffect(() => {
    // Initial window size calculation
    updateWindowSize();

    // Event listener for window resize
    window.addEventListener("resize", updateWindowSize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(jobseekerApplications({ viewAction: "" }));
  }, [dispatch]);

  const { loading, error, details } = useSelector((state) => ({
    loading: state.Jobs.jobseekerApplicationsLoading,
    error: state.Jobs.jobseekerApplicationsError,
    details: state.Jobs.jobseekerApplications,
  }));

  return (
    <>
      <Row>
        <Col lg={12} className="mt-4">
          <Card>
            <CardBody>
              <div id="customerList">
                <div className="table-responsive table-card mt-3 mb-1">
                  <table
                    className="table align-middle table-nowrap"
                    id="customerTable"
                    style={{ backgroundColor: "#ebeff0" }}
                  >
                    <thead className="table-light">
                      <tr>
                        {/* <th scope="col" style={{ width: "50px" }}>
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          id="checkAll"
                                          value="option"
                                        />
                                      </div>
                                    </th> */}

                        <th>Applicant Name</th>
                        <th>Position</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Date Applied</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody className="list form-check-all">
                      {loading === false && error === null ? (
                        details?.map((item, key) => (
                          <>
                            <tr key={key}>
                              <td className="customer_name">Kofi Kwame</td>
                              <td className="customer_name">
                              {item?.jobTitle}
                              </td>

                              <td className="startDate">kofi@gmail.com</td>
                              <td className="startDate">0553368892</td>
                              <td className="startDate">20th May, 2023</td>
                              <td className="startDate">
                                <p
                                  style={{
                                    color: "#00d084",
                                  }}
                                >
                                  Approved
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="id">
                                <Link to="#" className="fw-medium link-primary">
                                  1
                                </Link>
                              </td>
                              <td className="customer_name">Kofi Kwame</td>
                              <td className="customer_name">
                                Warehouse Clerck
                              </td>

                              <td className="startDate">kofi@gmail.com</td>
                              <td className="startDate">0553368892</td>
                              <td className="startDate">20th May, 2023</td>
                              <td className="startDate">
                                <p
                                  style={{
                                    color: "#00d084",
                                  }}
                                >
                                  Approved
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="id">
                                <Link to="#" className="fw-medium link-primary">
                                  1
                                </Link>
                              </td>
                              <td className="customer_name">Kofi Kwame</td>
                              <td className="customer_name">
                                Warehouse Clerck
                              </td>

                              <td className="startDate">kofi@gmail.com</td>
                              <td className="startDate">0553368892</td>
                              <td className="startDate">20th May, 2023</td>
                              <td className="startDate">
                                <p
                                  style={{
                                    color: "#00d084",
                                  }}
                                >
                                  Approved
                                </p>
                              </td>
                            </tr>
                          </>
                        ))
                      ) : (
                        <p>Loading</p>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Approved;
