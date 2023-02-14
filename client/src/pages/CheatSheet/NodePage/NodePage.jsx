import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBarCheatsheet from "../../../components/NavBarCheatsheet/NavBarCheatsheet"

export default function NodePage() {
    return (
        <>
          <NavBarCheatsheet />
          <Container fluid className='body-cheatsheet'>
            <Row>
                <Col>
                    <h4>Run</h4>
                    node filename
                </Col>
            </Row>
                
          </Container>
        </>   
      )
}
