import React from 'react'
// import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavigationBar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><h2 className=''style={{color:'orange'}}><span><i className='bi bi-yelp'></i> Portfolio</span></h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            <Nav.Link href="#home" className='fw-bold'>Home</Nav.Link>
            <Nav.Link href="#about" className='fw-bold'>About Me</Nav.Link>
            <Nav.Link href="#education" className='fw-bold'>Education</Nav.Link>
            <Nav.Link href="#services" className='fw-bold'>My Services</Nav.Link>
            {/* <Nav.Link href="#home" className='fw-bold'>Portfolio</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavigationBar