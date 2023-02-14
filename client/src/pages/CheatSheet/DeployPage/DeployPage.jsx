import React from 'react'
import Container from 'react-bootstrap/Container';
import { CopyBlock, github } from "react-code-blocks";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBarCheatsheet from "../../../components/NavBarCheatsheet/NavBarCheatsheet"

export default function DeployPage() {
    return (
        <>
          <NavBarCheatsheet />
          <Container fluid className='body-cheatsheet'>
            <Row>
                <Col className="portfolio-header" style={{color:"black"}}>DEPLOY</Col>
            </Row>
            <section id="terminal">
              <Row>
                  <Col>
                    <h5>Heroku</h5>
                    heroku login <br />
                    heroku create GA-macdonalds <br />
                    git push heruku main or master <br />
                    git remote rm heroku <br />
                    <h4>Set the App Environment variables (.env file)</h4>
                    heroku config:set KEY=VALUE   <br />
                    <h4>Oath environment variable</h4>
                    heroku config:set GOOGLE_CALLBACK==https://ga-macdonald.herokuapp.com/oauth2callback
                  </Col>
              </Row>
            </section>
        </Container>
        </>  
      )
}
