import React,{ useEffect }  from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function CheatSheetPage() {
  return (
    <Container>  
        <Row>
            <Col className="portfolio-header">CHEAT SHEET</Col>
        </Row>
        <section id="terminal" style={{marginBottom:"30px"}}>
            <Row>
                <Col>
                    <span className="card-title">TERMINAL</span>  <br />
                    List hidden files: ls -a <br />
                    Move file:  mv ~/Downloads/MyFile.txt ~/Documents/Work/MyFile.txt
                </Col>
            </Row>
        </section>
        
        <section id="node" style={{marginBottom:"30px"}}>
            <Row>
                <Col>
                    <span className="card-title">Node.js</span><br /> 
                    Is a runtime environment for executing JavaScript out of browser. <br />
                    Run: By typing node in the terminal. Then start to add any javascript function, like the the js files. 
                </Col>
            </Row>
        </section>

        <section id="react" style={{marginBottom:"30px"}}>
            <Row>
                <Col>
                    <span className="card-title">REACT </span><br />
                    npx create-react-app app-name <br />
                    npm run build
                    
                </Col>s
            </Row>
        </section>
    </Container>

  )
}
