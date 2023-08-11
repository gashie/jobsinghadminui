import React, { useState } from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Pagination,
  PaginationItem,
  PaginationLink,
  Col,
} from "reactstrap";
import car from "./CareerImages/car.png";

const itemsPerPage = 20; // Number of items to display per page
const data = [
  { id: 1, name: "10 Lies We Tell Ourselves About Networking " },
  { id: 2, name: "10 Simple Tips to Networking Success" },
  { id: 3, name: "11 Ways to Build Your Network After College" },
  { id: 4, name: "3 Ways to Optimize Your LinkedIn Profile " },
  { id: 5, name: "Are you LinkedIn? " },
  { id: 6, name: "Fired Over Twitter: 13 Tweets That Got People CANNED" },
  { id: 7, name: "10 Lies We Tell Ourselves About Networking" },
  { id: 7, name: "Getting started with LinkedIn as a recent graduate" },
  { id: 7, name: "How To Brand Yourself And Get A Better Job" },
  { id: 7, name: "The do's and don'ts of networking to find a job" },
  { id: 7, name: "#1 Strategy for Finding an Internship - Networking" },
  { id: 7, name: "LinkedIn Tips For Job Seekers And Career Shifters" },
  { id: 7, name: "10 Steps to a Successful Career Change" },
  { id: 7, name: "11 Tips to Find the Best LinkedIn Groups" },
  { id: 7, name: "13 Essential Tips for Landing a Job on LinkedIn" },
  { id: 7, name: "20 Critical Dos and Don'ts of LinkedIn Networking" },
  { id: 7, name: "3 Ways to Ask For Job Hunting Help--And Get It" },
  { id: 7, name: "6 Reasons to Change Careers" },
  { id: 7, name: "6 Ways to Attract Recruiters to Your LinkedIn Profile" },
  { id: 7, name: "7 Success Strategies for Distance Learners" },
  { id: 7, name: "20 Critical Dos and Don'ts of LinkedIn Networking" },
  { id: 7, name: "3 Ways to Ask For Job Hunting Help--And Get It" },
  { id: 7, name: "6 Reasons to Change Careers" },
  { id: 7, name: "6 Ways to Attract Recruiters to Your LinkedIn Profile" },
  { id: 7, name: "7 Success Strategies for Distance Learners" },
  { id: 7, name: "20 Critical Dos and Don'ts of LinkedIn Networking" },
  { id: 7, name: "3 Ways to Ask For Job Hunting Help--And Get It" },
  { id: 7, name: "6 Reasons to Change Careers" },
  { id: 7, name: "6 Ways to Attract Recruiters to Your LinkedIn Profile" },
  { id: 7, name: "7 Success Strategies for Distance Learners" },
  { id: 7, name: "20 Critical Dos and Don'ts of LinkedIn Networking" },
  { id: 7, name: "3 Ways to Ask For Job Hunting Help--And Get It" },
  { id: 7, name: "6 Reasons to Change Careers" },
  { id: 7, name: "6 Ways to Attract Recruiters to Your LinkedIn Profile" },
  { id: 7, name: "7 Success Strategies for Distance Learners" },
  { id: 7, name: "20 Critical Dos and Don'ts of LinkedIn Networking" },
  { id: 7, name: "3 Ways to Ask For Job Hunting Help--And Get It" },
  { id: 7, name: "6 Reasons to Change Careers" },
  { id: 7, name: "6 Ways to Attract Recruiters to Your LinkedIn Profile" },
  { id: 7, name: "7 Success Strategies for Distance Learners" },
  { id: 7, name: "20 Critical Dos and Don'ts of LinkedIn Networking" },
  { id: 7, name: "3 Ways to Ask For Job Hunting Help--And Get It" },
  { id: 7, name: "6 Reasons to Change Careers" },
  { id: 7, name: "6 Ways to Attract Recruiters to Your LinkedIn Profile" },
  { id: 7, name: "7 Success Strategies for Distance Learners" },
  { id: 7, name: "20 Critical Dos and Don'ts of LinkedIn Networking" },
  { id: 7, name: "3 Ways to Ask For Job Hunting Help--And Get It" },
  { id: 7, name: "6 Reasons to Change Careers" },
  { id: 7, name: "6 Ways to Attract Recruiters to Your LinkedIn Profile" },
  { id: 7, name: "7 Success Strategies for Distance Learners" },
  { id: 7, name: "20 Critical Dos and Don'ts of LinkedIn Networking" },
  { id: 7, name: "3 Ways to Ask For Job Hunting Help--And Get It" },
  { id: 7, name: "6 Reasons to Change Careers" },
  { id: 7, name: "6 Ways to Attract Recruiters to Your LinkedIn Profile" },
  { id: 7, name: "7 Success Strategies for Distance Learners" },
  // ... add more items
];

const CareerDetails = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderListItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToDisplay = data.slice(startIndex, endIndex);

    return itemsToDisplay.map((item) => (
      <h6 style={{ fontWeight: "bolder", color: "#244a59 ", textDecoration: 'underline' }} key={item.id}>
        {" "}
        <i className="bx bx-chevrons-right"></i>
        {item.name}{" "}
      </h6>
    ));
  };

  const renderPaginationItems = () => {
    const paginationItems = [];

    for (let i = 1; i <= totalPages; i++) {
      paginationItems.push(
        <PaginationItem key={i} active={i === currentPage}>
          <PaginationLink onClick={() => handlePageChange(i)} style={{ border: '1px solid #244a59', backgroundColor: i === currentPage && '#244a59', color: i === currentPage ? 'white' : '#244a59'}}>
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return paginationItems;
  };

  return (
   
    <Container>
      <Col xs={15} className="m-5" xl={20}>
        <h5 style={{ fontWeight: "bolder", color: "#244a59 " }}>
          Career Advice{" "}
          <i
            className="bx bx-chevron-right"
            style={{ fontSize: "1.5rem", position: "relative", top: "0.4rem" }}
          ></i>{" "}
          Career Development
        </h5>
        <hr />

        <h5
          style={{ fontWeight: "bolder", color: "#244a59 ", marginTop: "2rem" }}
        >
          Articles in Career Development
        </h5>

        <Col xs={10} md={20} xl={20}>
          <img src={car} alt="car" className="img-fluid"
          style={{maxWidth: '100%', height: 'auto', width: '60rem'}}
          ></img>
        </Col>

        <div className="mt-4">{renderListItems()}</div>

<div style={{display: 'flex', justifyContent: 'right'}}>
        <Pagination className="mt-3">
          <PaginationItem>
            <PaginationLink previous onClick={handlePreviousPage} style={{color: '#244a59', border: '1px solid #244a59'}}>
              Previous
            </PaginationLink>
          </PaginationItem>
          {renderPaginationItems()}
          <PaginationItem>
            <PaginationLink next onClick={handleNextPage} style={{color: '#244a59', border: '1px solid #244a59'}}>
              Next
            </PaginationLink>
          </PaginationItem>
        </Pagination>
        </div>
      </Col>
      </Container>
  
  );
};

export default CareerDetails;
