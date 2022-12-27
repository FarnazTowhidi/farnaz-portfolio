import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">Farnaz Towhidi</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}         
          >
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="portfolio">Portoflio</Nav.Link>
            <Nav.Link href="contact" disabled>Contact</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
