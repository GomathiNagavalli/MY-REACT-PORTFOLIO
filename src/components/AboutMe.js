import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import '../components/About.css';

const AboutMe = () => {
  return (
    <>
     <section id="about" className=''>
        <Container className='my-5'>
            <Row>
                <Col md={6} className='d-none d-md-block '>
                    <Image src={require('../assets/coder.jpg')} fluid></Image>
                </Col>
                <Col className=''>
                <div className=''>
                <h1 className='text-decoration-underline text-muted text-center'>About</h1>
                <p className='h3' style={{color:'orange'}}>Hello Everyone!</p> 
                <p className='fw-bold'>My name is Gomathi Manokaran. I'm a computer science engineering graduate.</p>
                <p className='fw-bold'>with 80% in academics and i am a certified Frontend Developer.</p>
                </div>  
                </Col>
                <Col md={6}className='d-md-none'>
                    <Image src={require('../assets/coder.jpg')} fluid></Image>
                </Col>
            </Row>
        </Container>
     </section>
    </>
  )
}

export default AboutMe
