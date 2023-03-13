import React from 'react'
import {CopyBlock, github} from "react-code-blocks";
import {Container, Row, Col} from "react-bootstrap"

export default function JavascriptPage() {
  return (
   <>
   <h1>JavaScript</h1>
    <Container fluid>
        <Row>
            <Col> 
                <h5>string to number</h5>
                number to string: num.toString(123) <br />
                string to number: Number("123")<br />
                Math.floor(divideResult / 2)
                <h5>Javascript switch statement</h5>
                <CopyBlock
                    language="jsx"
                    text={` 
                    switch(expression) {
                        case x:
                          // code block
                          break;
                        case y:
                          // code block
                          break;
                        default:
                          // code block
                      }
                    `}
                    codeBlock
                    theme={github}
                    showLineNumbers={false}
                />

                <h5>Reverse String</h5>
                <CopyBlock
                    language="jsx"
                    text={` 
                    function ReverseString (str) {
                        return str.split("").reverse().join("");
                    }
                    
                    Array:
                    const array1 = ["Banana", "Orange", "Apple", "Mango"];
                    array1.includes("Mango");
                    array1.forEach (() => {} )
                    
                    Map: 
                    const map1 = new Map() or 
                    const map1 = new Map([
                        [1, 'one'],
                        [2, 'two'],
                        [3, 'three'],
                      ]);

                    Map setting data method1:
                    map1.set('bar', 'foo');
                    console.log(map1.get('bar'));

                    Map setting data method2:
                    map1 [data1] = data2 
                    // Expected output: "foo"

                    forEach((element) => { })
                    forEach((element, index) => { })

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
