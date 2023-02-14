import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBarCheatsheet from "../../../components/NavBarCheatsheet/NavBarCheatsheet"

export default function VisualstudioPage() {
  return (
    <>
      <NavBarCheatsheet />
      <Container fluid className='body-cheatsheet'>  
          <Row>
              <Col className="portfolio-header" style={{color:"black"}}>VISUAL STUDIO</Col>
          </Row>
          <section id="extensions">
              <h5>EXTENSION</h5>
              Code Runner<br />
              Live Server <br />
              Materieal Icon Theme <br/>
              auto rename Tag <br />
              ES7+react/Redux/React<br />
          </section>
      </Container>
    </>
    
  )
}
