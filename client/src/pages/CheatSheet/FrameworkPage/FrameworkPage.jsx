import React from 'react'
import { CopyBlock, github } from "react-code-blocks";
import NavBarCheatsheet from "../../../components/NavBarCheatsheet/NavBarCheatsheet"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function FrameworkPage() {
  return (
    <>
    <NavBarCheatsheet />
    <Container fluid className='body-cheatsheet'>
      <h5>Framework: Express</h5>
      <h1>MERN Stack</h1>
      Mongo, Express, React, Node. 
      Node: Create Server.
      Express: Framework to create server.
      MongoDB: Database.
      Django: Framework to create ???.
      PostGreSQL:Database

      <section id="mern-stack" style={{marginBottom:"30px"}}>
        <Row>
            <Col>
                <h5>BUILDING MERN INFRASTRUCTURE </h5>
                1- Generate the React app: 
                npx create-react-app mern-infrastructure <br />
                2- Build the React app's production code
                npm run build <br />
                3- Code the skeleton Express app
                npm i express morgan serve-favicon<br/>
                Create and Code the Express App (server.js): touch server.js
                4- Define the "catch all" route in the Express backend< br />
                5- Test the Express server
                nodemon server

                <h5>MVC code organication</h5>
                Model, View, Controller
            </Col>
        </Row>
      </section>
    </Container>
    
    </>
  )
}
