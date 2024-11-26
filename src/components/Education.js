import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import '../components/Home.css'

const Education = () => {
  return (
    <>
        <section id="education" className='homepage'>
        <Container className='my-5'>
            <Row>
                <Col md={6} >
                    <div className='text-center mt-5'>
                    <p className='h2' style={{color:'orange'}}>Education</p>
                    <p className=''>I am a engineering graduate completed with first class. I took my webtechnology and python course from pyspiders softwaretraining institute.</p>
                    <h6 style={{color:'orange'}}>Skills</h6>
                    <div className='d-flex justify-content-center'>
                    <li className='list-unstyled mx-2 mb-3 p-1 rounded'style={{border:'1px solid orange', fontSize:'10px'}}>HTML5</li>
                    <li className='list-unstyled mx-2 mb-3 p-1 rounded'style={{border:'1px solid orange', fontSize:'10px'}}>CSS3</li>
                    <li className='list-unstyled mx-2 mb-3 p-1 rounded'style={{border:'1px solid orange', fontSize:'10px'}}>JavaScript</li>
                    <li className='list-unstyled mx-2 mb-3 p-1 rounded'style={{border:'1px solid orange', fontSize:'10px'}}>ReactJs</li>
                    <li className='list-unstyled mx-2 mb-3 p-1 rounded'style={{border:'1px solid orange', fontSize:'10px'}}>Bootstrap5</li>
                    <li className='list-unstyled mx-2 mb-3 p-1 rounded'style={{border:'1px solid orange', fontSize:'10px'}}>python</li>
                    </div>
                    </div>
                </Col>
                <Col md={6}>
                    <Image src={require('../assets/coderblack.jpg') } fluid className='img'></Image>
                </Col>
            </Row>
        </Container>


     </section>
    </>
  )
}

export default Education