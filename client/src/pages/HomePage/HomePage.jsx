import React, { useState }  from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { Link } from "react-router-dom";

export default function HomePage() {
  const [open, setOpen] = useState(false); 


  return (
    <Container>
      <Row><Col><img src="../images/farnaztowhidi.jpg" /></Col></Row>
      <Row>
        <Col className='font_Tajawal White'>FARNAZ TOWHIDI</Col>
      </Row>
      <Row>
        <Col className='font_Tajawal Orange size_30'>FRONTEND DEVELOPER</Col>
      </Row>
      <Row className='height_30'>
        <Col className='font_Tajawal White size_30'>EXPERIENCES</Col>
      </Row>
      <Row>
        <Col lg={1} className="Orange">IBM</Col>     
        <Col lg={7}> 
              <h3 className="Orange">@ Quality Assurance, 2020</h3>
              <ul>
                <li>Part of security intelligence team of 10 working on QRadar admin</li>
                <li>Knowledge on QRadar log and network activity and reports</li>
                <li> Created and edited automated test cases, manual, automation and regression testing</li>
                <li>Technologies used: Selenium, QRadar, Eclipse, Test Rail, Git, Git Hub</li>
              </ul>           
        </Col>
      </Row>
      <Row>
        <Col lg={1} className="Orange">Canadian Institute of Cybersecurity</Col>     
        <Col lg={8}> 
              <h3 className="Orange">@ Frontend Developer (contract), 2019</h3>
              <ul>
                <li>Designed and built website for International Conference on Privacy, Security and Trust, including information on events, workshops, organizers, …</li>
                <li>Technologies used: Html, CSS, ASP classic</li>              
              </ul>           
        </Col>
      </Row>
      <Row>
        <Col lg={1} className="Orange">Biossentials</Col>     
        <Col lg={8}> 
              <h3 className="Orange">@ Frontend Developer (contract), 2019</h3>
              <ul>
                <li>Worked closely with a designer to create new comprehensive layout</li>
                <li>Coded company website from ground up based on new graphic design, along with SEO audits that considered on page and off-page</li>
                <li>Technologies used: HTML, CSS, ASP Classic, SEO</li>
              </ul>           
        </Col>
      </Row>
      
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button>
      
      <Row>
        <Col className='font_Tajawal White size_30'>EDUCATION</Col>
      </Row>
    </Container>
  )
}
