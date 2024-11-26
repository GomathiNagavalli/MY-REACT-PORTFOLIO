import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Copyright = () => {
  return (
    <>
    <Container>
        <Row>
            <Col >
            <div className='text-center'>
            <p style={{color:'orange'}}>{'\u00A9'}copyright 2024</p>
            </div>
           
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Copyright