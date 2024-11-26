import React from 'react';
// import Container from 'react-bootstrap/esm/Container';
import {Row ,Container ,Col ,Image ,link} from 'react-bootstrap';
// import {BsInstagram} from 'react-icons/bs';
import '../components/Home.css'

const Home = () => {
  return (
    <>
     <section id="home" className='homepage'>
        <Container className='mb-5'>
            <Row>
                <Col md={6}>
                    <div className='text-center mt-5'>
                    <p className=''>Wellcome to my website</p>
                    <p className='h2 myname' style={{color:'orange'}}>Gomathi Manokaran</p>
                    <p className='text-end text-light'style={{fontSize:'10px'}}>-I'm a professional frontend developer</p>
                    <div className='mb-3'>
                        <i className='bi bi-instagram mx-3'></i>
                        <i className='bi bi-facebook mx-3'></i>
                        <i className='bi bi-linkedin mx-3'></i>
                        <i className='bi bi-github mx-3'></i>
                    </div>
                    </div>
                </Col>
                <Col md={6} className=''>
                    <Image src={require('../assets/home.jpg') } fluid className='img'></Image>
                </Col>
            </Row>
        </Container>


     </section>
    
    </>
  )
}

export default Home