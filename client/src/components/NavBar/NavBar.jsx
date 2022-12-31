import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Resume from "../../FarnazTowhidi-Frontend-Resume.pdf"


export default function NavBar() {
  return (
    <Container fluid>
      <Row style={{backgroundColor:"#000000",height:"100%"}}>
        <Col lg={4} xs={8}>
          <Navbar variant="dark">    
          <Navbar.Brand href="home"><img src="../../images/apple-touch-4.png" style={{height:"50px"}} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}         
            >
              <Nav.Link href="portfolio">Portoflio</Nav.Link>
              <Nav.Link href={Resume} >Resume</Nav.Link>
              <Nav.Link href="contact">Contact</Nav.Link>          
            </Nav>        
          </Navbar.Collapse>     
          </Navbar>
        </Col>

        <Col lg={6}></Col>
        <Col lg={2} xs={3} style={{margin:"auto", textAlign:"right"}}>
        <a href="https://www.linkedin.com/in/farnaz-towhidi-12979665/"><img className="NavBar_icons" src="../../images/icon-linkedin.png" /></a>&nbsp;&nbsp;
        <a href="mailto:farnaz.towhidi@gmail.com"><img className="NavBar_icons" src="../../images/icon-gmail.png" /></a>&nbsp;&nbsp;
        <a href="https://github.com/FarnazTowhidi"><img className="NavBar_icons" src="../../images/icon-github.png" /></a>&nbsp;&nbsp;&nbsp;&nbsp;
        </Col>
      
      </Row>
   </Container> 
  )
}
