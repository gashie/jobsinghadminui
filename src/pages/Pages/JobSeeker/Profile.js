import React from 'react'
import {Col, Card, CardBody, Row} from 'reactstrap'
import profile from './profile.png'

function Profile() {
  return (
    <>
         <Col xxl={10} xs={12} md={12} >
           <Card>
            <CardBody style={{
                display: 'flex', 
                justifyContent: 'space-evenly'
            }}>
                <Row>
                        <Col>
                            <img src={profile} alt='profile-img'></img>
                            <h5 style={{textAlign: 'center', marginTop: '1rem'}}>Mathias Lawson</h5>
                            <p style={{textAlign: 'center', color: 'gray'}}>Web Developer</p>
                        </Col>
                        
                        <Col>
          <div style={{
            borderLeft: '1px dashed black',
            height: '100%'
          }}></div>
        </Col>

                        <Col style={{display: 'grid', gap: '0.4rem'}}>
                        <div style={{display: "flex", gap: '0.4rem'}}>
                            <h6>Phone:</h6><h6>+233559690060</h6> 
                        </div>
                        <div style={{display: "flex", gap: '0.4rem'}}>
                            <h6>Email:</h6><h6>mathiaslawson70@gmail.com</h6> 
                        </div>
                        <div style={{display: "flex", gap: '0.4rem'}}>
                            <h6>Birthday:</h6><h6>Labone, Silver Lave</h6> 
                        </div>
                        <div style={{display: "flex", gap: '0.4rem'}}>
                            <h6>Country:</h6><h6>Ghana</h6> 
                        </div>
                        <div style={{display: "flex", gap: '0.4rem'}}>
                            <h6>Gender:</h6><h6>Male</h6> 
                        </div>
                        </Col>
                        </Row>
            </CardBody>
           </Card>
         </Col>
    
    
    </>
  )
}

export default Profile