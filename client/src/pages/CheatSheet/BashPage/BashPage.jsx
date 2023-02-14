import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBarCheatsheet from "../../../components/NavBarCheatsheet/NavBarCheatsheet"

export default function BashPage() {
  return (
    <>
      <NavBarCheatsheet />
      <Container fluid className='body-cheatsheet'>
        <Row>
            <Col className="portfolio-header" style={{color:"black"}}>BASH</Col>
        </Row>
        <section id="terminal">
          <Row>
              <Col>
                  home directory: ~ <br />
                  root directory: / <br />
                  current directory: . <br />
                  root directory: .. <br />
                  pwd <br />

                  <h5>Listing directory:</h5>
                  ls -a <br />
                  <h5>Create directory:</h5>
                  mkdir directoryname
                  <h5>Create File:</h5>
                  touch file1.ext file2.ext
                  <h5> Move file</h5>
                   mv ~/Downloads/MyFile.txt ~/Documents/Work/MyFile.txt
                   <h5>Delete Directory</h5>
                  rm -rf directoryName<br />
                  <h5>Delete file</h5>
                  rm filename
                  
              </Col>
          </Row>
        </section>
    </Container>
    </>  
  )
}
