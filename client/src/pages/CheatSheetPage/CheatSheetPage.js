import React,{ useEffect }  from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function CheatSheetPage() {
  return (
    <Container>  
        <Row>
            <Col className="portfolio-header">CHEAT SHEET</Col>
        </Row>
        <section id="node">
            <Row>
                <Col>
                    <span className="card-title">Node.js:</span> Is a runtime environment for executing JavaScript out of browser. <br />
                    Run: By typing node in the terminal. Then start to add any javascript function, like the the js files. 
                </Col>
            </Row>
        </section>
    </Container>

  )
}
