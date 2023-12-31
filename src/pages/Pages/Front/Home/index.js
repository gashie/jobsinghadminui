import React, {useState, useEffect} from 'react'
import Search from './Search'
import {Col, Row, Container} from 'reactstrap'
import FeaturedJobs from './FeaturedJobs'
import Services from './Services'


const Home = () => {
  return (
    <>
   <Col>
      
      <Row>
      <Search />
      </Row>
      <Row>
      <FeaturedJobs />
      </Row>
      <Row>
      <Services />
      </Row>
      {/* <Row>
      <Footer />
      </Row> */}
    </Col>
    </>
  )
}

export default Home