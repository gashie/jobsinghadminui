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
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../../../../store/actions";
import { Link } from "react-router-dom";

const Health = () => {
  const { loading, error, info } = useSelector((state) => ({
    loading: state.Feeds.fetchNewsLoading,
    error: state.Feeds.fetchNewsError,
    info: state.Feeds.fetchNewsInfo,
  }));

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 20; // Number of items to display per page

  const data = [
    { id: 1, name: "10 Lies We Tell Ourselves About Networking " },
    { id: 2, name: "10 Simple Tips to Networking Success" },
    { id: 3, name: "11 Ways to Build Your Network After College" },
    { id: 4, name: "3 Ways to Optimize Your LinkedIn Profile " },
    { id: 5, name: "Are you LinkedIn? " },
    { id: 6, name: "Fired Over Twitter: 13 Tweets That Got People CANNED" },
    { id: 7, name: "10 Lies We Tell Ourselves About Networking" },
    { id: 8, name: "Getting started with LinkedIn as a recent graduate" },
    { id: 9, name: "How To Brand Yourself And Get A Better Job" },
    { id: 10, name: "The do's and don'ts of networking to find a job" },
    { id: 11, name: "#1 Strategy for Finding an Internship - Networking" },
    { id: 12, name: "LinkedIn Tips For Job Seekers And Career Shifters" },
    { id: 13, name: "10 Steps to a Successful Career Change" },
  ];

  const totalPages = Math.ceil(info?.length / itemsPerPage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchNews({
        postType: "career_advice",
        postCategory: "health_safety",
      })
    );
    window.scrollTo(0, 0)
  }, [dispatch]);

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
    let itemsToDisplay;

if (info && info.length > startIndex) {
  itemsToDisplay = info.slice(startIndex, endIndex);
} else {
  itemsToDisplay = [];
}

    return itemsToDisplay?.map((item) => (
      <>
      <Link to={item?.link}>
      <h6
        style={{
          fontWeight: "bolder",
          color: "#244a59 ",
          textDecoration: "underline",
        }}
        key={item.feedId}
      >
        {" "}
        <i className="bx bx-chevrons-right"></i>
        {item.title}{" "}
      </h6>
      </Link>
      </>
    ));
  };

  const renderPaginationItems = () => {
    const paginationItems = [];

    for (let i = 1; i <= totalPages; i++) {
      paginationItems.push(
        <PaginationItem key={i} active={i === currentPage}>
          <PaginationLink
            onClick={() => handlePageChange(i)}
            style={{
              border: "1px solid #244a59",
              backgroundColor: i === currentPage && "#244a59",
              color: i === currentPage ? "white" : "#244a59",
            }}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return paginationItems;
  };

  return (
    <div
      style={{ display: "grid", justifyContent: "center", width: "100%" }}
      className="w-100"
    >
      <Col xs={15} className="m-5" xl={20} style={{ width: "100%" }}>
        <h5 style={{ fontWeight: "bolder", color: "#244a59 " }}>
          Career Advice{" "}
          <i
            className="bx bx-chevron-right"
            style={{ fontSize: "1.5rem", position: "relative", top: "0.4rem" }}
          ></i>{" "}
          Health & Safety
        </h5>
        <hr />

        <h5
          style={{ fontWeight: "bolder", color: "#244a59 ", marginTop: "2rem" }}
        >
          Articles in Health & Safety
        </h5>

        <Col xs={10} md={20} xl={20}>
          <img
            src={car}
            alt="car"
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto", width: "60rem" }}
          ></img>
        </Col>

        <div className="mt-4">{renderListItems()}</div>

        <div style={{ display: "flex", justifyContent: "" }}>
          <Pagination className="mt-3">
            <PaginationItem>
              <PaginationLink
                previous
                onClick={handlePreviousPage}
                style={{ color: "#244a59", border: "1px solid #244a59" }}
              >
                Previous
              </PaginationLink>
            </PaginationItem>
            {renderPaginationItems()}
            <PaginationItem>
              <PaginationLink
                next
                onClick={handleNextPage}
                style={{ color: "#244a59", border: "1px solid #244a59" }}
              >
                Next
              </PaginationLink>
            </PaginationItem>
          </Pagination>
        </div>
      </Col>
    </div>
  );
};

export default Health;
