import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import Resume from "../../FarnazTowhidi-Fullstack-Developer.pdf"



export default function NavBar() {
  return (
    <Container fluid>
      <Row style={{backgroundColor:"#000000",height:"100%"}}>
        <Col xxl={6} xl={6} lg={6} md={6} xs={6}>
          <Navbar expand="md" variant="dark">
            <Container>
            <Navbar.Brand href="home"><img className="Navbar-brand-image" alt="farnaz towhidi brand" src={"/images/apple-touch-4.png"}/></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav"> <img className='navbar-toggler-icon' alt="icon menubar" src="/images/icon-navbar-toggle.png" /> </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Link to="home" className="nav-link">Home</Link>
                  <Link to="portfolio" className="nav-link">Portfolio</Link>             
                  <Nav.Link href={Resume} >Resume</Nav.Link>    
                  {/* <Link to="cheatsheet" className="nav-link">Cheat Sheet</Link>   */}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>  
        <Col xl={6} lg={6} md={6} xs={6} style={{marginTop:"20px", textAlign:"right"}}>
        <a href="https://www.linkedin.com/in/farnaz-towhidi-12979665/"><img className="NavBar_icons" alt="farnaz towhidi linkedin" src="/images/icon-linkedin.png" /></a>&nbsp;
        <a href="mailto:farnaz.towhidi@gmail.com"><img className="NavBar_icons" alt="farnaz towhidi gmail" src="/images/icon-gmail.png" title="farnaz.towhidi@gmail.com" /></a>&nbsp;
        <a href="https://github.com/FarnazTowhidi"><img className="NavBar_icons" alt="farnaz towhidi github" src="/images/icon-github.png" /></a>&nbsp;
        </Col>    
      </Row>
    </Container> 
  )
}
