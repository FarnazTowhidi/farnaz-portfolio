import React from 'react'
import {CopyBlock, github} from "react-code-blocks";
import {Container, Row, Column} from "react-bootstrap"

export default function JavascriptPage() {
  return (
   <>
    <Container>
        <Row>
            <Column>
                <h5>Reverse String</h5>
                <CopyBlock
                    language="jsx"
                    text={` 
function ReverseString (str) {
    return str.split("").reverse().join("");
}
                    `}
                    codeBlock
                    theme={github}
                    showLineNumbers={false}
                />  
            </Column>
        </Row>
    </Container>
   </>
  )
}
