import React from 'react'
import Container from 'react-bootstrap/Container';
import { CopyBlock, github } from "react-code-blocks";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBarCheatsheet from "../../../components/NavBarCheatsheet/NavBarCheatsheet"

export default function MongoPage() {
  return (
    <>
    <NavBarCheatsheet />
      <Container fluid className='body-cheatsheet' style={{backgroundColor:"#f0f0f0"}}>
        <Row>
            <Col className="portfolio-header" style={{color:"black"}}>MONGO</Col>
        </Row>
        <section id="terminal">
          <Row>
              <Col>               
                <h5>mongosh</h5> 
                show dbs <br />
                use databaseName <br />
                show collections <br />
                db.collectionName.find() <br />
                db.collectionName.find().pretty  <br /> 
                db.collectionName.insertOne({}) <br/>
                db.collectionName.deleteMany()  
                <h5>Drop Collection</h5>
                db.collectionName.drop()         <br />           
              </Col>
          </Row>
        </section>
    </Container>
    </>
  )
}
