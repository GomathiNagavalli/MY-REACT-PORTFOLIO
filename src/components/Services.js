import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Services = () => {
  return (
    <>
        <section id="services">
            <Container>
                <Row className='align-center'>
                    <Col md={4}>
                        <h5   style={{color:'orange'}}>Policy</h5>
                        <p className='text-muted' style={{fontSize:'13px'}}>Lorem ipsum dolor sit amet consector adipilipsting alit. Sepiendte sst enin qouys debits reprebseb unde mobilitabs</p>
                    </Col>
                    <Col md={4}>
                        <h5 style={{color:'orange'}}>Services</h5>
                        <p className='text-muted' style={{fontSize:'13px'}}>Lorem ipsum dolor sit amet consector adipilipsting alit. Sepiendte sst enin qouys debits reprebseb unde mobilitabs</p>
                    </Col>
                    <Col md={4}>
                        <h5 style={{color:'orange'}}>Terms & conditions</h5>
                        <p className='text-muted' style={{fontSize:'13px'}}>Lorem ipsum dolor sit amet consector adipilipsting alit. Sepiendte sst enin qouys debits reprebseb unde mobilitabs</p>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Services