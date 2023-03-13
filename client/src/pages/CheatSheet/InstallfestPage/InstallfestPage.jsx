import React from 'react'
import { CopyBlock, github } from "react-code-blocks";
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
          brew install git <br />

          <h5>Node.js</h5>
          Node is a Javascript engine for the backend. We use it to power our web server and connect to db.
          brew install node<br />
          node -v <br />
          npm -v <br />
          Then we'll add nvm using its native installation script (make sure you're including the most up to date version of nvm where it says VERSION UMBER GOES HERE in the URL below. The format should be three numbers separated by dots, such as 0.35.3. <a href="https://github.com/nvm-sh/nvm/releases">Check for the latest release version here.: </a><br />
          curl -o- https://raw.githubusercontent.com/creationix/nvm/vVERSION NUMBER GOES HERE/install.sh | bash
          
          <h5>NODE</h5>
          <span className="fw-bold">Create package.json:</span> npm init <br />
          <span className="fw-bold">Node package manager:</span> npm install request <br />
          <span className="fw-bold">nodemon:</span> npm install -g nodemon

          <h5>Create Express App</h5>
          express -e projectName  (e for ejs files)
          <h5>Install node modules</h5>
          npm i
          
        
          <h5>EXPRESS GENERATOR</h5>
          Replace installation for "npm i" and "npm install request": <br />
          npm install -g express-generator <br />
          express -e express-todos (<span className="fw-bold">NOTE:</span> Rename app.js to server.js and browse to bin, www, Rename require app to server )<br />
          <span className="fw-bold">Create node modules:</span> npm i <br />

          <h5>MONGO</h5>
          npm i mongoose <br />
          <a href="https://expressjs.com/en/5x/api.html"><h5>EXPRESS</h5></a>
          npm i express morgan serve-favicon   <br />                    
          npm i mongoose <br />
          npm i dotenv< br/>
          npm i ejs <br />
          touch .env <br />
          Create folder config, file database.js<br />
          npm i method-override <br />

          
          <h5>Amazon Web Service (AWS)</h5>
          pip3 install bot3 <br />

          <h5>REACT</h5>
          npx create-react-app app-name <br />
          npx clear-npx-cashe <br />
          npm install react-syntax-highlighter --save <br />
          npm i react-code-blocks<br />
          <span className="fw-bold">Install React Bootstrap</span>: npm i react-bootstrap <br/>
          <span className="fw-bold">Install React Router 6</span>: npm i react-router-dom<br />
          <span className="fw-bold">Install SASS</span>: npm install -g sass<br />
          <span className="fw-bold">Install Dray and Drop</span>: npm install react-beautiful-dnd --save<br />
          <span className="fw-bold">Install React Sidebar</span>: npm install react-pro-sidebar<br />
          <span className="fw-bold">Install React Icon</span>: npm install react-icons<br />


          npm install axios <br />
          <span className="fw-bold">Build: </span>npm run build <br/>
          <span className="fw-bold">Run: </span> npm start
          

          

          <h5>MERN STACK</h5>
            1- Generate the React app: npx create-react-app mern-infrastructure <br />
            2- Build the React app's production code: npm run build <br />
            3- Code the skeleton Express app: npm i express morgan serve-favicon<br/>
            4- Create and Code the Express App (server.js): touch server.js
            5- Define the "catch all" route in the Express backend< br />
            6- Test the Express server: nodemon server
          </Col>
        </Row>
        
      </Container>
    </>   
  )
}
