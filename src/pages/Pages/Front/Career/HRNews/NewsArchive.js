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
import car from "../CareerAdvice/CareerImages/car.png";
import borris from './borris.png'

import img2 from './img2.png'
import img3 from './img3.png'
import img4 from './img4.png'
import img5 from './img5.png'
import img6 from './img6.png'

const itemsPerPage = 20; // Number of items to display per page
const data = [
  { id: 1, name: "10 Lies We Tell Ourselves About Networking", img: borris, des: 'Lorem ipsum dolor sit amet consectetur. Vitae dolor imperdiet tristique quam. Vitae purus diam montes convallis convallis. At feugiat nam id dictum semper. Tristique libero risus amet adipiscing aliquam turpis amet. Non arcu dui nulla bibendum vestibulum viverra in aliquam id. Viverra aliquet donec enim rutr. Tristique libero risus amet adipiscing aliquam turpis amet. Non arcu dui nulla bibendum vestibulum viverra in aliquam id. Viverra aliquet donec enim rutr. Tristique libero risus amet adipiscing aliquam turpis amet. Non arcu dui nulla bibendum vestibulum viverra in aliquam id. Viverra aliquet donec enim rutr ' },
  { id: 2, name: "10 Simple Tips to Networking Success", img: img2, des: 'Lorem ipsum dolor sit amet consectetur. Vitae dolor imperdiet tristique quam. Vitae purus diam montes convallis convallis. At feugiat nam id dictum semper. Tristique libero risus amet adipiscing aliquam turpis amet. Non arcu dui nulla bibendum vestibulum viverra in aliquam id. Viverra aliquet donec enim rutr. Tristique libero risus amet adipiscing aliquam turpis amet. Non arcu dui nulla bibendum vestibulum viverra in aliquam id. Viverra aliquet donec enim rutr. Tristique libero risus amet adipiscing aliquam turpis amet. Non arcu dui nulla bibendum vestibulum viverra in aliquam id. Viverra aliquet donec enim rutr ' },
  { id: 2, name: "10 Simple Tips to Networking Success", img: img3, des: 'Lorem ipsum dolor sit amet consectetur. Vitae dolor imperdiet tristique quam. Vitae purus diam montes convallis convallis. At feugiat nam id dictum semper. Tristique libero risus amet adipiscing aliquam turpis amet. Non arcu dui nulla bibendum vestibulum viverra in aliquam id. Viverra aliquet donec enim rutr. Tristique libero risus amet adipiscing aliquam turpis amet. Non arcu dui nulla bibendum vestibulum viverra in aliquam id. Viverra aliquet donec enim rutr. Tristique libero risus amet adipiscing aliquam turpis amet. Non arcu dui nulla bibendum vestibulum viverra in aliquam id. Viverra aliquet donec enim rutr ' },
  { id: 2, name: "10 Simple Tips to Networking Success", img: img4, des: 'Lorem ipsum dolor sit amet consectetur. Vitae dolor imperdiet tristique quam. Vitae purus diam montes convallis convallis. At feugiat nam id dictum semper. Tristique libero risus amet adipiscing aliquam turpis amet. Non arcu dui nulla bibendum vestibulum viverra in aliquam id. Viverra aliquet donec enim rutr. Tristique libero risus amet adipiscing aliquam turpis amet. Non arcu dui nulla bibendum vestibulum viverra in aliquam id. Viverra aliquet donec enim rutr. Tristique libero risus amet adipiscing aliquam turpis amet. Non arcu dui nulla bibendum vestibulum viverra in aliquam id. Viverra aliquet donec enim rutr ' },
  { id: 2, name: "10 Simple Tips to Networking Success", img: img5, des: 'Lorem ipsum dolor sit amet consectetur. Vitae dolor imperdiet tristique quam. Vitae purus diam montes convallis convallis. At feugiat nam id dictum semper. Tristique libero risus amet adipiscing aliquam turpis amet. Non arcu dui nulla bibendum vestibulum viverra in aliquam id. Viverra aliquet donec enim rutr. Tristique libero risus amet adipiscing aliquam turpis amet. Non arcu dui nulla bibendum vestibulum viverra in aliquam id. Viverra aliquet donec enim rutr. Tristique libero risus amet adipiscing aliquam turpis amet. Non arcu dui nulla bibendum vestibulum viverra in aliquam id. Viverra aliquet donec enim rutr ' },
  { id: 2, name: "10 Simple Tips to Networking Success", img: img6, des: 'Lorem ipsum dolor sit amet consectetur. Vitae dolor imperdiet tristique quam. Vitae purus diam montes convallis convallis. At feugiat nam id dictum semper. Tristique libero risus amet adipiscing aliquam turpis amet. Non arcu dui nulla bibendum vestibulum viverra in aliquam id. Viverra aliquet donec enim rutr. Tristique libero risus amet adipiscing aliquam turpis amet. Non arcu dui nulla bibendum vestibulum viverra in aliquam id. Viverra aliquet donec enim rutr. Tristique libero risus amet adipiscing aliquam turpis amet. Non arcu dui nulla bibendum vestibulum viverra in aliquam id. Viverra aliquet donec enim rutr ' },
  // ... add more items
];

const NewsArchive = () => {
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
        <>
        <div style={{display: 'flex', gap: '1rem', justifyContent: "center"}} className="w-10">
          <Col xs={4} md={20} xl={20}  className="mt-3">
          <img src={item.img} alt="car" className="img-fluid"
          style={{maxWidth: '100%', height: 'auto', width: '60rem', borderRadius: '0.5rem'}}
          ></img>
        </Col>
      <h6 style={{ fontWeight: "bolder", color: "#244a59 ", textDecoration: 'none', marginTop: '1rem' }} key={item.id}>
        {" "}
        {item.name}{" "}
        <p style={{fontWeight: 'lighter',}} className="col-xl-5 ">{item.des}</p>
        <p style={{fontWeight: 'lighter'}}>Date | June 27, 2023</p>
      </h6>
     
      </div>
      </>
    )) 
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
   
    <Container fluid style={{width: '89%'}}>
      <Col xs={15} className="m-5" xl={20}>
        <h5 style={{ fontWeight: "bolder", color: "#244a59 " }}>
          News Archive{" "}
          {/* <i
            className="bx bx-chevron-right"
            style={{ fontSize: "1.5rem", position: "relative", top: "0.4rem" }}
          ></i>{" "}
          Career Development */}
        </h5>
        <hr />
       

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

export default NewsArchive;
