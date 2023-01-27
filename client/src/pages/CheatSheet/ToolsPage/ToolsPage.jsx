import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBarCheatsheet from "../../../components/NavBarCheatsheet/NavBarCheatsheet"

export default function ToolsPage() {
  return (
    <>
      <NavBarCheatsheet />
      <Container fluid className='body-cheatsheet'>
        <Row>
            <Col className="portfolio-header" style={{color:"black"}}> TOOLS</Col>
        </Row>
        <Row>
          <Col>
          <h5>imgur.com</h5>
          
          </Col>
        </Row>
        
      </Container>
    </>   
  )
}
