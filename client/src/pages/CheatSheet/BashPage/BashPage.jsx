import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBarCheatsheet from "../../../components/NavBarCheatsheet/NavBarCheatsheet"

export default function BashPage() {
  return (
    <>
      <NavBarCheatsheet />
      <Container fluid className='body-cheatsheet'>
      <Row>
            <Col className="portfolio-header" style={{color:"black"}}>BASH</Col>
        </Row>
        <section id="terminal">
          <Row>
              <Col>
                  <h4>BASH</h4>
                  List hidden files: ls -a <br />
                  Move file:  mv ~/Downloads/MyFile.txt ~/Documents/Work/MyFile.txt
              </Col>
          </Row>
        </section>
    </Container>
    </>
    
    
  )
}
