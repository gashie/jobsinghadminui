import { Table, Button, Col } from "reactstrap";
import data from "./data";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { viewCv } from "../../../../store/actions";

const CoverLetters = ({
  handleAddCoverLetter,
  handleEditCoverLetter,
  handleViewCoverLetter,
  Letter
}) => {
  const dispatch = useDispatch();

  const { cvInfo, loading, error } = useSelector((state) => ({
    loading: state.Resumes.loading,
    error: state.Resumes.error,
    cvInfo: state.Resumes.cvInfo,
  }));

  useEffect(() => {
    dispatch(viewCv({ viewAction: "" }));
  }, [dispatch]);

  function formatDate(timestamp) {
    // Create a Date object from the input timestamp
    const date = new Date(timestamp);

    // Define months array for formatting
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    function getDayWithSuffix(day) {
      if (day >= 11 && day <= 13) {
        return `${day}th`;
      }
      switch (day % 10) {
        case 1:
          return `${day}st`;
        case 2:
          return `${day}nd`;
        case 3:
          return `${day}rd`;
        default:
          return `${day}th`;
      }
    }

    // Format the date in the desired format
    const formattedDate = `${getDayWithSuffix(day)} ${month}, ${year}`;

    return formattedDate;
  }

  const [viewData, setViewData] = useState();

  console.log(viewData);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h5 style={{ fontWeight: "bolder", color: "#244a59" }} className="mt-3">
          My Cover letters
        </h5>

        <Button
          className="btn btn-dark"
          style={{ backgroundColor: "#244a59" }}
          //   onClick={()=>{
          //     setCreate(true)
          //   }}
          onClick={handleAddCoverLetter}
        >
          Add cover letter
        </Button>
      </div>
      <Col className="m-5">
        <div className="table-responsive">
          <Table className="align-middle table-nowrap mb-0">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Inserted</th>
                <th scope="col">Updated</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
                <th scope="col">View</th>
                <th scope="col">Duplicate</th>
              </tr>
            </thead>

            <tbody>
              {loading === false && error === false ? (
                cvInfo?.map((item, key) => (
                  <tr key={key}>
                    <th scope="row">
                      <Link to="#" className="fw-medium">
                        {item?.coverLetterName}
                      </Link>
                    </th>

                    <td>{formatDate(item?.createdAt)}</td>
                    <td>{formatDate(item?.updatedAt) || "-"}</td>
                    <td>
                      <p
                        onClick={handleEditCoverLetter}
                        style={{ cursor: "pointer" }}
                      >
                        {" "}
                        Edit
                      </p>
                    </td>

                    <td>
                      <p
                        style={{
                          color: "red",
                          cursor: "pointer",
                        }}
                      >
                        Delete
                      </p>
                    </td>
                    <td>
                      <p
                        style={{
                          color: "#244a59",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          handleViewCoverLetter();
                          console.log(item);
                          Letter(item)
                        }}
                      >
                        View
                      </p>
                    </td>
                    <td>
                      <p
                        style={{
                          color: "#244a59",
                          cursor: "pointer",
                        }}
                      >
                        Duplicate
                      </p>
                    </td>
                  </tr>
                ))
              ) : (
                <p>Loading Data ...</p>
              )}
            </tbody>
          </Table>
        </div>
      </Col>
    </>
  );
};

export default CoverLetters;
