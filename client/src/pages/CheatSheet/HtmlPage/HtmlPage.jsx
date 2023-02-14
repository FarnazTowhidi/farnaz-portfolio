import React from 'react'
import { CopyBlock, github } from "react-code-blocks";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBarCheatsheet from "../../../components/NavBarCheatsheet/NavBarCheatsheet"

export default function 
() {
  return (
    <>
    <NavBarCheatsheet />
    <Container fluid className='body-cheatsheet'>
    <Row>
          <Col className="portfolio-header" style={{color:"black"}}>HTML</Col>
      </Row>
      <section id="terminal">
        <Row>
            <Col>
                const btn = document.querySelector () <br />
               
                querySelector querySelectorAll(selector)
                <h5>Event Lisener</h5>
                <CopyBlock
                language="jsx"
                text={` 
                var p = document.getElementById('some-paragraph');
                p.addEventListener('click', function(event) {
                p.innerHTML = 'You clicked it!';
                });
                `}
                codeBlock
                theme={github}
                showLineNumbers={false}
            />
            </Col>
        </Row>
      </section>
  </Container>
  </>
  )
}
