import React from 'react'
import {CopyBlock, github} from "react-code-blocks";
import {Container, Row, Col} from "react-bootstrap"

export default function JavascriptPage() {
  return (
   <>
    <Container fluid>
        <Row>
            <Col> 
                number to string: num.toString(123) <br />
                string to number: Number("123")
                <h5>Reverse String</h5>
                <CopyBlock
                    language="jsx"
                    text={` 
function ReverseString (str) {
    return str.split("").reverse().join("");
}

forEach((element) => { /* … */ })
forEach((element, index) => { /* … */ })

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
