import { Table, Button, Col } from "reactstrap";
import data from "./data";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { viewCv, updateCv } from "../../../../store/actions";

const CoverLetters = ({
  handleAddCoverLetter,
  handleEditCoverLetter,
  handleViewCoverLetter,
  Letter,
}) => {
  const dispatch = useDispatch();

  const { cvInfo, loading, error, mssg } = useSelector((state) => ({
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
  const [deleteData, setDeleteData] = useState();

  console.log(viewData);

  const handleDeleteRecord = (item) => {
    const deleteData = {
      coverLetterName: item?.coverLetterName,
      coverLetterDescription: item?.coverLetterDescription,
      deleterecord: true,
      restore: 0,
      coverLetterId: item?.coverLetterId,
      patch: false,
      patchData: {
        coverLetterName: item?.coverLetterName,
        coverLetterDescription: item?.coverLetterDescription,
      },
    };
    dispatch(updateCv(deleteData));
    console.log("delete worlgin");
    console.log(deleteData);
    dispatch(viewCv({ viewAction: "" }));
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the current page of items
  const currentJobs = cvInfo?.slice(startIndex, endIndex);

  // Function to handle page changes
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Determine if "Previous" and "Next" links should be disabled
  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = endIndex >= cvInfo?.length;

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }} className="mt-5">
        <h5
          style={{ fontWeight: "bolder", color: "#244a59" }}
          className="mt-3 mx-5 px-2"
        >
          My Cover letters
        </h5>

        <Button
          className="btn btn-dark mx-5"
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
                {/* <th scope="col">Duplicate</th> */}
              </tr>
            </thead>

            <tbody>
              {loading === false && error === false ? (
                currentJobs?.map((item, key) => (
                  <tr key={key}>
                    <th scope="row"  className="p-3">
                      <Link style={{color: '#244a59'}} lassName="fw-medium">
                        {item?.coverLetterName}
                      </Link>
                    </th>

                    <td>{formatDate(item?.createdAt)}</td>
                    <td>
                      {" "}
                      {item?.updatedAt === null
                        ? "No updates made yet"
                        : formatDate(item?.updatedAt)}
                    </td>
                    <td>
                      <span
                        onClick={() => {
                          handleEditCoverLetter();
                          Letter(item);
                        }}
                        style={{
                          cursor: "pointer",
                          marginTop: "2rem",
                          position: "relative",
                          top: "-0.2rem",
                        }}
                      >
                        {" "}
                        Edit
                      </span>
                    </td>

                    <td>
                      <span
                        style={{
                          color: "red",
                          cursor: "pointer",
                          marginTop: "2rem",
                          position: "relative",
                          top: "-0.2rem",
                        }}
                        onClick={() => handleDeleteRecord(item)}
                      >
                        Delete
                      </span>
                    </td>
                    <td>
                      <span
                        style={{
                          color: "#244a59",
                          cursor: "pointer",
                          marginTop: "2rem",
                          position: "relative",
                          top: "-0.2rem",
                        }}
                        onClick={() => {
                          handleViewCoverLetter();
                          console.log(item);
                          Letter(item);
                        }}
                      >
                        View
                      </span>
                    </td>
                    {/* <td>
                      <p
                        style={{
                          color: "#244a59",
                          cursor: "pointer",
                        }}
                      >
                        Duplicate
                      </p>
                    </td> */}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center mt-5">
                    <div className="d-flex align-items-center justify-content-center">
                      {loading === true ? (
                        <>
                          <Spinner
                            size="lg"
                            className="me-2 mt-5"
                            style={{ color: "#244a59" }}
                          ></Spinner>
                        </>
                      ) : (
                        <>
                          <p className="fw-light mt-5">
                            You don't have any cover letters at the moment.
                          </p>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>

        <div className="d-flex justify-content-end mt-2">
          <div className="pagination-wrap hstack gap-2">
            <Link
              className={`page-item pagination-prev ${
                isPrevDisabled ? "disabled" : ""
              }`}
              to="#"
              onClick={() =>
                !isPrevDisabled && handlePageChange(currentPage - 1)
              }
            >
              Previous
            </Link>
            <span
              className="page-number p-2 px-3 text-light"
              style={{ backgroundColor: "#244a59" }}
            >
              {" "}
              {currentPage}
            </span>
            <ul className="pagination listjs-pagination mb-0"></ul>
            <Link
              className={`page-item pagination-next ${
                isNextDisabled ? "disabled" : ""
              }`}
              to="#"
              onClick={() =>
                !isNextDisabled && handlePageChange(currentPage + 1)
              }
            >
              Next
            </Link>
          </div>
        </div>
      </Col>
    </>
  );
};

export default CoverLetters;
