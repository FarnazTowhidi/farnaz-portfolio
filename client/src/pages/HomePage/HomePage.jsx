import React, { useState,useEffect }  from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';


export default function HomePage() {
  const [open, setOpen] = useState(false); 

  useEffect(() => {
    document.title = '{ } Farnaz Towhidi Portfolio';
  }, []);

  return (
    <Container fluid>
      
      <section id="overview">
        <Row >
          <Col className='font-Tajawal'>FARNAZ TOWHIDI</Col>
        </Row>
        <Row>
          <Col className='font-Tajawal' style={{padding:0, marginTop:"0px"}}>FRONTEND DEVELOPER</Col>
        </Row>  
        
        <Row lg={12} xs={12}>
          <Col xl={12} lg={12} md={4} xs={12} style={{textAlign:"center"}} >
            <img src="/images/FarnazTowhidi.jpg" />
          </Col> 
        </Row>  
         
      </section>

  
      <section id="skills2" style={{marginTop:"30px"}}>
        <Row>
          <Col xl={1} lg={1} md={1} xs={1} className='index-header-vertical'>TECHNICAL <br></br>SKILLS</Col>
          <Col xl={1} lg={1} md={1} xs={1} className="d-sm-block"></Col>
          <Col xl={10} lg={10} md={10} xs={10}>
            <Container fluid>
              <Row>
                <Col lg={2} xs={2} className="idx-subheader-horiz">LANGUAGE<br /> FRAMEWORKS <br /> LIBRARIES</Col>   
                <Col lg={10} xs={10}>
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
                      <li>MongoDB, Mongoose</li>
                      <li>Sql, mysql</li>
                  </ul>     
                </Col>
              </Row> 
              <Row>
                <Col lg={2} xs={2} className="idx-subheader-horiz">METHODOLOGIES<br /> </Col>   
                <Col>
                  <ul className="ul-skills">
                    <li> REST APIs, Deploy Heroku, Git, GitHub, Agile Scrum</li>
                    <li> Oath Authentication</li>
                    <li> User stories, Wire framing</li>
                    <li> MVC Pattern, Middleware, Mern Infrastructure</li>
                  </ul>     
                </Col>
              </Row> 
            </Container>
          </Col>
        </Row> 
      </section>

      <section id="devided">
        <Row>
          <Col xl={2}></Col>
          <Col style={{borderTop: "1px solid #2d2d2d", margin:"50px"}}></Col>
          <Col xl={2}></Col>
        </Row>
      </section>

      <section id="experience">
        <Row>
          <Col xl={1} lg={1} md={1} xs={1} className='index-header-vertical'>EXPERIENCES</Col>
          <Col xl={1} lg={1} md={1} xs={1}></Col>
          <Col xl={10} lg={10} md={10} xs={10}>
            <Container fluid>
                <Row lg={12} xs={12}>
                    <Col lg={2} xs={2} className="idx-subheader-horiz" >IBM <br />CANADA</Col>     
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
                  <Col lg={2} xs={2} className="idx-subheader-horiz">CIC <br />CANADA</Col>     
                  <Col lg={9} xs={10}> 
                        <ul>
                          <li> @Frontend Developer (Contract), 2019</li>
                          <li> Designed and built website for International Conference on Privacy, Security and Trust, including information on events, workshops, organizers, …</li>
                          <li className="color-gray"> HTML &nbsp;&nbsp; CSS &nbsp;&nbsp; ASP</li>              
                        </ul>           
                  </Col>
                </Row>
                <Row lg={12} xs={12}>
                  <Col lg={2} xs={2} className="idx-subheader-horiz">BIOSSENTIALS <br /> MALAYSIA</Col>     
                  <Col lg={9} xs={10}> 
                    <ul>
                      <li> @Frontend Developer (Part time), 2009-2014</li>
                      <li> Worked closely with a designer to create new comprehensive layout</li>
                      <li> Coded company website from ground up based on new graphic design, along with SEO audits that considered on and off-page</li>
                      <li className="color-gray"> HTML &nbsp;&nbsp; CSS &nbsp;&nbsp; ASP &nbsp;&nbsp; SEO</li>
                    </ul>           
                  </Col>
                </Row>
                <Row lg={12} xs={12}>
                  <Col lg={2} xs={2} className="idx-subheader-horiz">MAADIRAN <br /> IRAN</Col>     
                  <Col lg={9} xs={10}> 
                    <ul>
                      <li> @FullStack Developer (Full time), 2005-2009</li>
                      <li> Designed and modified dynamic web site for products automation, manufacturing, and after-sales support as a part of team of 4</li>
                      <li> Analyzed user’s needs and converted them to create right solutions, such as selecting products based on user’s requirement</li>
                      <li className="color-gray"> HTML &nbsp;&nbsp; CSS &nbsp;&nbsp;Asp .net &nbsp;&nbsp; SQL Server   </li>
                    </ul>           
                  </Col>
                </Row>
            </Container>         
          </Col>
        </Row>         
      </section> 


      <section id="devided">
        <Row>
          <Col xl={2}></Col>
          <Col style={{borderTop: "1px solid #2d2d2d", margin:"50px"}}></Col>
          <Col xl={2}></Col>
        </Row>
      </section>

      <section id="education">
        <Row>
          <Col xl={1} lg={1} md={1} xs={1} className='index-header-vertical'>EDUCATION</Col>
          <Col xl={1} lg={1} md={1} xs={1}></Col>
          <Col xl={10} lg={10} md={10} xs={10}>
              <Container fluid>            
                <Row lg={12}>
                  <Col lg={2} md={3} xs={3} className="idx-subheader-horiz">CANADA<br /> TORRONTO</Col>     
                  <Col lg={10} md={9} xs={9}> 
                        <ul>
                          <li> GENERAL ASSEMBLY, Software Engineering Immersive, <span style={{color:"#ef7c02"}}>GPA, 3.98</span></li>                                   
                        </ul> 
                        <br />          
                  </Col>
                </Row>
                <Row lg={12}>
                <Col lg={2} md={3} xs={3} className="idx-subheader-horiz">MALAYSIA <br />KUALA LUMPUR</Col>     
                <Col lg={10} md={9} xs={9}> 
                        <ul>                        
                          <li> PHD of Computer Science, UTM University</li>  
                          <li> Master of computer science (Information Security), UTM University, <span style={{color:"#ef7c02"}}>GPA, 3.68</span>	</li>                               
                        </ul>  
                        <br />              
                  </Col>
                </Row>
                <Row lg={12}>
                <Col lg={2} md={3} xs={3} className="idx-subheader-horiz">IRAN <br />TEHRAN</Col>     
                <Col lg={10} md={9} xs={9}> 
                        <ul>                           
                          <li> Software Engineer, IAU, </li>              
                        </ul> 
                        <br />               
                  </Col>
                </Row>
              </Container>
          </Col>
        </Row>      
      </section>
        
    </Container>
  )
}
