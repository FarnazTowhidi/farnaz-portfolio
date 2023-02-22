import React from 'react'
import {Container,Row, Col} from 'react-bootstrap'
import { CopyBlock, github } from "react-code-blocks";
import NavBarCheatsheet from '../../../components/NavBarCheatsheet/NavBarCheatsheet'

export default function EjsPage() {
  return (
    <>
    <NavBarCheatsheet />
      <Container fluid className='body-cheatsheet'>
        <Row>
            <Col className="portfolio-header" style={{color:"black"}}> Embeded Java Script (EJS)</Col>
        </Row>
        <Row>
          <Col>
            <h5>Screen shot</h5>
            <CopyBlock
                language="jsx"
                text={` 
                <body>
                <h1>Todos</h1>
                <ul>
                    <% todos.forEach(function(t) { %>
                    <li>
                        <%= t.todo %>
                        <%= t.done ? 'done' : 'not done' %>
                    </li>
                    <% }); %>
                </ul>
                </body>
                `}
            codeBlock
            theme={github}
            showLineNumbers={false}
            />
          </Col>
        </Row>      
      </Container>
    </>
  )
}
