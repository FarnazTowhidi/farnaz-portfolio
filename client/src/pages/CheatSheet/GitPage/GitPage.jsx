import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBarCheatsheet from "../../../components/NavBarCheatsheet/NavBarCheatsheet"

export default function GitPage() {

  return (
    <>
        <NavBarCheatsheet />
        <Container fluid className='body-cheatsheet'>  
            <Row>
                <Col className="portfolio-header" style={{color:"black"}}>GIT</Col>
            </Row>
        
            <section id="node" style={{marginBottom:"30px"}}>
                <Row>
                    <Col>
                        <h4>Node.js</h4><br /> 
                        Is a runtime environment for executing JavaScript out of browser. Run By typing node in the terminal. Then start to add any javascript function, like the the js files.  <br />
                    
                    </Col>
                </Row>
            </section>

            <section id="mongoose" >
                npm i mongoose <br />
            </section>

            <section id="mern-stack" style={{marginBottom:"30px"}}>
            <Row>
                    <Col>
                        <span className="card-title">BUILDING MERN INFRASTRUCTURE </span><br />
                        <h4>1- Generate the React app</h4>
                        npx create-react-app mern-infrastructure
                        <h4>2- Build the React app's production code</h4>
                        npm run build
                        <h4>3- Code the skeleton Express app</h4>
                        npm i express morgan serve-favicon<br/>
                        Create and Code the Express App (server.js): touch server.js
                        <h4>4- Define the "catch all" route in the Express backend</h4>
                        <h4>5- Test the Express server</h4>
                        nodemon server
                    </Col>
                </Row>
            </section>
        </Container>
    </>
    
  )
}
