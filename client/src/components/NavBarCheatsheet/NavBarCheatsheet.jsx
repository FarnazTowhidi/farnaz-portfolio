import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

export default function NavBarCheatsheet() {
  return (
    <Container fluid>
      <Row style={{backgroundColor:"#ffffff",height:"100%"}}>
        <Col xxl={6} xl={6} lg={6} md={6} xs={6}>
          <Navbar expand="md" variant="dark">
            <Container>
              <Nav className="me-auto">           
                  <Link to="/Installfest" style={{color:"#000000"}} >Installfest</Link>         
              </Nav> 
              <Nav className="me-auto">           
                  <Link to="/bash" style={{color:"#000000"}} >Bash</Link>         
              </Nav> 
              <Nav className="me-auto">           
                  <Link to="/git" style={{color:"#000000"}} >Git</Link>         
              </Nav> 
              <Nav className="me-auto">           
                  <Link to="/visualstudio" style={{color:"#000000"}} >Visual Studio</Link>         
              </Nav> 
              <Nav className="me-auto">           
                  <Link to="/html" style={{color:"#000000"}} >Html</Link>         
              </Nav>         
              <Nav className="me-auto">           
                  <Link to="/react"style={{color:"#000000"}} >React</Link>    
          
              </Nav>   
              <Nav className="me-auto">           
                  <Link to="/tools" style={{color:"#000000"}} >Tools</Link>    
          
              </Nav>             
            </Container>
          </Navbar>
        </Col>  
         
      </Row>
    </Container> 
  )
}
