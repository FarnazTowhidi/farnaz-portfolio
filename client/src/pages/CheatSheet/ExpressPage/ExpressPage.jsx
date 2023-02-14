import React from 'react'
import Container from 'react-bootstrap/Container';
import { CopyBlock, github } from "react-code-blocks";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBarCheatsheet from "../../../components/NavBarCheatsheet/NavBarCheatsheet"

export default function ExpressPage() {
  return (
    <>
      <NavBarCheatsheet />
      <Container fluid className='body-cheatsheet' style={{backgroundColor:"#f0f0f0"}}>
        <Row>
            <Col className="portfolio-header" style={{color:"black"}}>EXPRESS</Col>
        </Row>
        <section id="terminal">
          <Row>
              <Col>
                touch server.js <br />
                <h4>server.js</h4>
                <CopyBlock
                    language="jsx"
                    text={` 
const express = require('express');
const path = require('path');
const logger = require('morgan');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3001;
require("dotenv").config();
require("./config/database");
app.use(cors()); // anyone can communicate with our api
app.use(logger('dev'));
app.use(express.json());
app.use("/api/students", require("./routes/api/students"));
app.use("/api/courses", require("./routes/api/courses"));
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port, function () {
  console.log("Express app running on port ");
});             
                    `}
                    codeBlock
                    theme={github}
                    showLineNumbers={false}
                />  

                <h4>database.js</h4>
                <CopyBlock
                    language="jsx"
                    text={` 
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/ShyftLabs", {
useNewUrlParser: true,
useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("connected", function () {console.log ("") });
                    `}
                    codeBlock
                    theme={github}
                    showLineNumbers={false}
                />  
                res.redirect ("Rout path") <br />
                res.render ("File path") <br />
                res.redirect ("/home") <br />
                res.render ("/home/index.jsx")
              </Col>
          </Row>
        </section>
    </Container>
    </>  
  )
}
