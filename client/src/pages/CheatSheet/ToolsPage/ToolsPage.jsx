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
            <h5>Screen shot</h5>
            shift-cmd-3<br/>
            shift-cmd-4 <br />
            <h5>imgur.com</h5> 
            <h5>Shortcuts</h5>
            Boiler plate for HTML file: ! + tab <br />
            Boiler plate for React Functional  RFC    

            <section id="extensions">
              <h5>Visual Studio Extension</h5>
              Code Runner<br />
              Live Server <br />
              Materieal Icon Theme <br/>
              auto rename Tag <br />
              ES7+react/Redux/React<br />
          </section>  

          <section id="naming-conventions">
              <h5>Naming Conventions</h5>
              Showing Data: index
          </section>   
          </Col>
        </Row>      
      </Container>
    </>   
  )
}
