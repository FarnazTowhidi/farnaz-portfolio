import React, { useState,useEffect }  from 'react'
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

  useEffect(() => {
    document.title = '{ } Farnaz Towhidi Portfolio';
  }, []);

  return (
    <Container fluid>
      
      <section id="overview">
        <Row>
          <Col className='font-Tajawal'>FARNAZ TOWHIDI</Col>
        </Row>
        <Row>
          <Col className='font-Tajawal' style={{padding:0}}>FRONTEND DEVELOPER</Col>
        </Row>
        <Row lg={12} xs={12}>
          <Col lg={5} xs={4} style={{writingMode: "vertical-rl"}}><span>FRONTEND DEVELOPER</span></Col>    
          <Col lg={2} xs={4} style={{textAlign:"center"}} >
            <img src="../../images/FarnazTowhidi.jpg" />
          </Col> 
          <Col lg={5} xs={4}><span style={{writingMode:"vertical-rl", }}>FRONTEND DEVELOPER</span></Col>            
        </Row>
        
      </section>

      <section id="experience">
        <Row>
          <Col className='index-header' >EXPERIENCES</Col>
        </Row>        
        <Row lg={12} xs={12}>
          <Col lg={2} xs={2} className="idx-subheader" >IBM <br />CANADA</Col>     
          <Col lg={9} xs={10}> 
                <ul>
                  <li> @Quality Assurance, 2020</li>
                  <li> Part of security intelligence team of 10 working on QRadar admin</li>
                  <li> Knowledge on QRadar log and network activity and reports</li>
                  <li> Created and edited automated test cases, manual, automation and regression testing</li>
                  <li className="color-gray"> Selenium &nbsp; QRadar &nbsp;&nbsp; Eclipse &nbsp;&nbsp; Test Rail &nbsp;&nbsp; Git &nbsp;&nbsp; Git Hub</li>
                </ul>           
          </Col>
        </Row>
        <Row lg={12} xs={12}>
          <Col lg={2} xs={2} className="idx-subheader">CIC <br />CANADA</Col>     
          <Col lg={8} xs={10}> 
                <ul>
                  <li> @Frontend Developer (contract), 2019</li>
                  <li> Designed and built website for International Conference on Privacy, Security and Trust, including information on events, workshops, organizers, …</li>
                  <li className="color-gray"> Html &nbsp;&nbsp; CSS &nbsp;&nbsp; ASP</li>              
                </ul>           
          </Col>
        </Row>
        <Row lg={12} xs={12}>
          <Col lg={2} xs={2} className="idx-subheader">BIOSSENTIALS <br /> MALAYSIA</Col>     
          <Col lg={8} xs={10}> 
            <ul>
              <li> @Frontend Developer (Part time), 2009-2014</li>
              <li> Worked closely with a designer to create new comprehensive layout</li>
              <li> Coded company website from ground up based on new graphic design, along with SEO audits that considered on and off-page</li>
              <li className="color-gray"> HTML &nbsp;&nbsp; CSS &nbsp;&nbsp; ASP &nbsp;&nbsp; SEO</li>
            </ul>           
          </Col>
        </Row>
        <Row lg={12} xs={12}>
          <Col lg={2} xs={2} className="idx-subheader">MAADIRAN <br /> IRAN</Col>     
          <Col lg={8} xs={10}> 
            <ul>
              <li> @FullStack Developer (Full time), 2005-2009</li>
              <li> Designed and modified dynamic web site for products automation, manufacturing, and after-sales support as a part of team of 4</li>
              <li> Analyzed user’s needs and converted them to create right solutions, such as selecting products based on user’s requirement</li>
              <li className="color-gray"> HTML &nbsp;&nbsp; CSS &nbsp;&nbsp;Asp .net &nbsp;&nbsp; SQL Server   </li>
            </ul>           
          </Col>
        </Row>
      </section>
      
      <section id="education" style={{paddingTop:"30px", paddingBottom: "30px"}}>
        <Row>
          <Col className='index-header'>EDUCATION</Col>
        </Row>
        <Row lg={12} className="justify-content-md-center">
          <Col lg={2} className="idx_sections_subheader"></Col>     
          <Col lg={10}> 
                <ul>
                  <li> GENERAL ASSEMBLY, Software Engineering Immersive</li>
                  <li> PHD of Computer Science, UTM University, Kuala Lumpur, Malaysia</li>  
                  <li> Master of Information Security, UTM University, Kuala Lumpur, Malaysia	</li>              
                </ul>           
          </Col>
        </Row>
      </section>
     

      <section id="skills">
        <Row>
          <Col className='index-header' >TECHNICAL SKILLS</Col>
        </Row> 
        <Row>
          <Col lg={2} xs={2} className="idx-subheader-horiz">LANGUAGE<br /> FRAMEWORKS <br /> LIBRARIES</Col>   
          <Col>
            <ul className="ul-skills">
                  <li> HTML5, CSS3, JavaScript, DOM, Bootstrap, React.js </li>
                  <li> Express,js, Node.js, Python, Django, </li>
                  <li> Jira, Jenkins, TestRail, Eclipse, Selenium</li>
                  <li> Responsive design</li>
                  <li> Object Oriented Programing</li>
                 </ul>            
            </Col>
        </Row> 
        <Row>
          <Col lg={2} xs={2} className="idx-subheader-horiz">DATABASE </Col>   
          <Col>
            <ul className="ul-skills">
                <li>Sql server</li>
                <li>MongoDB, MongoDB, Mongoose</li>
                <li>Sql, mysql</li>
            </ul>     
          </Col>
        </Row> 
        <Row>
          <Col lg={2} xs={2} className="idx-subheader-horiz">METHODOLOGIES<br /> </Col>   
          <Col>
            <ul className="ul-skills">
               <li> REST APIs, Deploy Heroku, Git and GitHub, Agile Scrum</li>
               <li> Oath Authentication</li>
               <li> User stories, Wire framing</li>
               <li> MVC Pattern, Middleware, Mern Infrastructure</li>
            </ul>     
          </Col>
        </Row> 
      </section>
    </Container>
  )
}
