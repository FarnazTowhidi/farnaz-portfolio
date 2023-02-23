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
                <h5>MongoDB</h5> 
                MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need.
                <h5>mongoose</h5>
                Mongoose is a JavaScript object-oriented programming library that creates a connection between MongoDB and the Node.js JavaScript runtime environment.<br />
                
                <h5>Model Schema</h5>
                <CopyBlock  
                  text={` 
                  const mongoose = require("mongoose");
                  const CourseSchema = new mongoose.Schema(
                      {
                          courseName: {
                          type: String,
                          required: true,
                        }
                      },
                      name: String, 
                      releaseYear: Nmber,
                      nowShowing: Boolean,
                      movieDate: Date, 
                      cast: [String],
                      field1: mongoose.Schema.ObjectId,
                      {
                        timestamps: true,
                      }
                    );                  
                    module.exports = mongoose.model("Course", CourseSchema);
                    `} 
                  codeBlock
                  theme={github}
                  showLineNumbers={false}
                />

                <h5>CRUD Collection</h5>
                <CopyBlock  
                  text={` 
                  help 
                  show dbs 
                  use databaseName 
                  show collections 
                  db.collectionName.find()
                  db.collectionName.find().pretty  
                  db.collectionName.insertOne({}) 
                  
                  db.people.insert({
                    ... name: "Fred",   
                    ... age: 21         
                    }) 
                      
                  
                  db.collectionName.deleteOne()   
                  db.collectionName.deleteMany()    
                  db.collectionName.drop()                   
                    `} 
                  codeBlock
                  theme={github}
                  showLineNumbers={false}
                />
                <h5>Data Modeling in MongoDB</h5>
                <h5>Embeded Documents </h5>  This example embed the address data entities in the patron data.   
                <CopyBlock  
                  text={` 
{
  "_id": "joe",
  "name": "Joe Bookreader",
  "addresses": [
                {
                  "street": "123 Fake Street",
                  "city": "Faketon",
                  "state": "MA",
                  "zip": "12345"
                },
                {
                  "street": "1 Some Other Street",
                  "city": "Boston",
                  "state": "MA",
                  "zip": "12345"
                }
              ]
}
                    `} 
                  codeBlock
                  theme={github}
                  showLineNumbers={false}
                />

                <h5>Referencing</h5>    
                <CopyBlock  
                  text={`{
                    _id: ObjectId("5099803df3f4948bd2e983a4"),
                    name: "Joe Smith",
                    contacts: [
                      ObjectId("5099803df3f4948bd2f98391"),
                      ObjectId("5099803df3f4948bd1f97203")
                    ]
                  }
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
