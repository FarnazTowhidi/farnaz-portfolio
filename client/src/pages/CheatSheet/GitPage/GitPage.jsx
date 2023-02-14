import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBarCheatsheet from "../../../components/NavBarCheatsheet/NavBarCheatsheet"

export default function GitPage() {

  return (
    <>
        <NavBarCheatsheet />
        <Container fluid className='body-cheatsheet'>  
            <Row>
                <Col className="portfolio-header" style={{color:"black"}}>GIT</Col>
            </Row>
        
            
            
        </Container>
    </>
    
  )
}
