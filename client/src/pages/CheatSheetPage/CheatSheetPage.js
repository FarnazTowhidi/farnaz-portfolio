import React,{ useState, useEffect }  from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CopyBlock, dracula, obsidian } from "react-code-blocks";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function CheatSheetPage() {
    const [language, changeLanguage] = useState("jsx");
    const [languageDemo, changeDemo] = useState("jsx");
    const [lineNumbers, toggleLineNumbers] = useState(true);
    const str = "Farnaz Towhidi"
    const score = 20 

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

        <section id="git" style={{marginBottom:"30px"}}>
            <Row>
                <Col>
                    <span className="card-title">GIT</span>  <br />
                    git add .  <br />
                    git commit -m "initial" <br />
                    git push <br />
                    git remote -v <br />
                    git pull upstream main <br />
                    
                </Col>
            </Row>
        </section>
        
        <section id="node" style={{marginBottom:"30px"}}>
            <Row>
                <Col>
                    <span className="card-title">Node.js</span><br /> 
                    Is a runtime environment for executing JavaScript out of browser. Run By typing node in the terminal. Then start to add any javascript function, like the the js files.  <br />
                
                </Col>
            </Row>
        </section>

        <section id="react" style={{marginBottom:"30px"}}>
            <Row>
                <Col>
                    <span className="card-title">REACT </span><br />
                    <h4>INSTALL </h4>
                    npx create-react-app app-name <br />
                    npm install react-syntax-highlighter --save <br />
                    npm i react-code-blocks<br />
                    npm run build <br/>
                    Tools: React developer tools <br />
                    <h4>Template Literal</h4>
                    <CopyBlock
                        language="javascript"
                        text={` ${str}  Frontend developer`}
                        codeBlock
                        theme={dracula}
                        showLineNumbers={false}
                    />

                    <h4>Ternary Expression</h4>
                    <CopyBlock
                        language="jsx"
                        text={` score > 90 ? "A" : "B"`}
                        codeBlock
                        theme={dracula}
                        showLineNumbers={false}
                    />
                    
                    <h4>React Form</h4>
                    <CopyBlock
                        language="jsx"
                        text={` 
                        function handleAddTodo (e) {
                            e.preventDefault();
                            setTodos ((todos)=> [...todos, newTodo]);
                        }
                        <form onSubmit={handleAddTodo}>
                        </form>
                        `}
                        codeBlock
                        theme={dracula}
                        showLineNumbers={false}
                    />
                    
                    <h4>State variable for form</h4>
                    <CopyBlock
                        language="jsx"
                        text={` 
                        export default function App() {
                            const [formData, setFormData] = useState({
                              name: "",
                              emotion: "😁"
                            });
                          
                            function handleChange(evt) {
                              const newFormData = { ...formData, [evt.target.name]: evt.target.value };
                              setFormData(newFormData);
                            }
                           
                        `}
                        codeBlock
                        theme={obsidian}
                        showLineNumbers={false}
                    />

                     Two methods for using setTodos, the first is passing the new value, the second is passing the new value, combine with previous one.
                    
                   
                    <CopyBlock
                        language="jsx"
                        text={`function handleTodo(e) {setTodos((todos)=>[ ...todos, newTodo])}`}
                        codeBlock
                        theme={dracula}
                        showLineNumbers={false}
                    />
                   
                   <span className="card-title">REACT /CSS</span><br />
 
                </Col>
            </Row>
        </section>
    </Container>

  )
}
