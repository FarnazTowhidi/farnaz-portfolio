import React from 'react'
import NavBarCheatsheet from "../../../components/NavBarCheatsheet/NavBarCheatsheet"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function InstallfestPage() {
  return (
    <>
      <NavBarCheatsheet />
      <Container fluid className='body-cheatsheet'>
        <Row>
            <Col className="portfolio-header" style={{color:"black"}}>INSTALL FEST</Col>
        </Row>
        <Row>
          <Col>
          <h5>Homebrew</h5>
          /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
          <h5>Launch VS code by typing code</h5>
          view - command palette - install code
          
          <h5>Git</h5>
          brew install git
          <h5>Node.js</h5>
          brew install node<br />
          npm install -g nodemon<br/>
          Then we'll add nvm using its native installation script (make sure you're including the most up to date version of nvm where it says VERSION UMBER GOES HERE in the URL below. The format should be three numbers separated by dots, such as 0.35.3. <a href="https://github.com/nvm-sh/nvm/releases">Check for the latest release version here.: </a><br />
          curl -o- https://raw.githubusercontent.com/creationix/nvm/vVERSION NUMBER GOES HERE/install.sh | bash

          npx create-react-app app-name <br />
          npx clear-npx-cashe <br />
          npm install react-syntax-highlighter --save <br />
          npm i react-code-blocks<br />
          npm i dotenv< br/>
          npm i mongoose <br />
          npm run build <br/>
          </Col>
        </Row>
        
      </Container>
    </>
    
  )
}
