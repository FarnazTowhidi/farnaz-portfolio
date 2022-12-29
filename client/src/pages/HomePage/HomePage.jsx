import React, { useState }  from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
// import header1 from "../../images/background2.jpg";
// import header2 from "../../images/FarnazTowhdi_header2.jpg";
// import header3 from "../../images/FarnazTowhdi_header3.jpg";


export default function HomePage() {
  const [open, setOpen] = useState(false); 


  return (
    <Container fluid>
      {/* <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={header1}
          alt="First slide"
        />       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={header2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={header3}
          alt="Third slide"
        />

      </Carousel.Item>
      </Carousel> */}
      
      <section id="overview">
        <Row>
          <Col className='font-Tajawal'>FARNAZ TOWHIDI</Col>
        </Row>
        <Row lg={12}>
          <Col lg={5} style={{writingMode: "vertical-rl"}}><span>FRONTEND DEVELOPER</span></Col>    
          <Col lg={2} style={{textAlign:"center"}} >
            <img src="../../images/FarnazTowhidi.jpg" />
          </Col> 
          <Col lg={5}><span style={{writingMode:"vertical-rl", }}>FRONTEND DEVELOPER</span></Col>            
        </Row>
        <Row>
          <Col className='font-Tajawal' style={{padding:0, margin:0}}>FRONTEND DEVELOPER</Col>
        </Row>
      </section>

      <section id="experience">
        <Row>
          <Col className='index-header' >EXPERIENCES</Col>
        </Row>        
        <Row lg={12}>
          <Col lg={4} className="idx-subheader" >IBM <br />FREDERICTON</Col>     
          <Col lg={8}> 
                <ul>
                  <li>@Quality Assurance, 2020</li>
                  <li>Part of security intelligence team of 10 working on QRadar admin</li>
                  <li>Knowledge on QRadar log and network activity and reports</li>
                  <li> Created and edited automated test cases, manual, automation and regression testing</li>
                  <li>Technologies used: Selenium, QRadar, Eclipse, Test Rail, Git, Git Hub</li>
                </ul>           
          </Col>
        </Row>
        <Row lg={12}>
          <Col lg={4} className="idx-subheader">CIC <br />CANADA</Col>     
          <Col lg={8}> 
                <ul>
                  <li>@Frontend Developer (contract), 2019</li>
                  <li>Designed and built website for International Conference on Privacy, Security and Trust, including information on events, workshops, organizers, …</li>
                  <li>Technologies used: Html, CSS, ASP classic</li>              
                </ul>           
          </Col>
        </Row>
        <Row lg={12}>
          <Col lg={4} className="idx-subheader">BIOSSENTIALS <br /> MALAYSIA</Col>     
          <Col lg={8}> 
                <ul>
                  <li>@Frontend Developer (contract), 2019</li>
                  <li>Worked closely with a designer to create new comprehensive layout</li>
                  <li>Coded company website from ground up based on new graphic design, along with SEO audits that considered on and off-page</li>
                  <li>Technologies used: HTML, CSS, ASP Classic, SEO</li>
                </ul>           
          </Col>
        </Row>
      </section>
      
      <section id="education">
        <Row>
          <Col className='index-header'>EDUCATION</Col>
        </Row>
        <Row lg={12} className="justify-content-md-center">
          <Col lg={4} className="idx_sections_subheader"></Col>     
          <Col lg={8}> 
                <ul>
                  <li>GENERAL ASSEMBLY, Software Engineering Immersive</li>
                  <li>PHD of Computer Science, UTM University, Kuala Lumpur, Malaysia</li>  
                  <li>Master of Information Security, UTM University, Kuala Lumpur, Malaysia	</li>              
                </ul>           
          </Col>
        </Row>
      </section>
      
     
      
      
      <section>

      </section>
    </Container>
  )
}
