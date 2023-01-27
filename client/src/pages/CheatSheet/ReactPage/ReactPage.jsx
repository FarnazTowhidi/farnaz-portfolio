import { CopyBlock, github } from "react-code-blocks";
import NavBarCheatsheet from "../../../components/NavBarCheatsheet/NavBarCheatsheet"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ReactPage() {
    const str = "Farnaz Towhidi"

    return (
        <>
            <NavBarCheatsheet />
            <Container fluid className="body-cheatsheet">  
                <Row>
                    <Col className="portfolio-header" style={{color:"black"}}>REACT</Col>
                </Row>

                <section id="react">
                    <Row>
                        <Col>
                            <h4>INSTALL </h4>
                            npx create-react-app app-name <br />
                            npx clear-npx-cashe <br />
                            npm install react-syntax-highlighter --save <br />
                            npm i react-code-blocks<br />
                            npm i dotenv< br/>
                            npm i mongoose <br />
                            npm run build <br/>
                            <span className="fw-bold">Install React Router</span>: npm i react-router-dom<br />
                            
                            Tools: React developer tools <br />
                            <h4>Template Literal</h4>
                            <CopyBlock
                                language="javascript"
                                text={` ${str}  Frontend developer`}
                                codeBlock
                                theme={github}
                                showLineNumbers={false}
                            />

                            <h4>Ternary Expression</h4>
                            <CopyBlock
                                language="jsx"
                                text={` score > 90 ? "A" : "B"`}
                                codeBlock
                                theme={github}
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
    theme={github}
    showLineNumbers={false}
/>
                            
                            <h4>Form State variable</h4>
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
    theme={github}
    showLineNumbers={false}
/>

                            Two methods for using setTodos, the first is passing the new value, the second is passing the new value, combine with previous one.                 
                        
                            <CopyBlock
                                language="jsx"
                                text={`function handleTodo(e) {setTodos((todos)=>[ ...todos, newTodo])}`}
                                codeBlock
                                theme={github}
                                showLineNumbers={false}
                            />
                        
                        <span className="card-title">REACT /CSS</span><br />

                        </Col>
                    </Row>
                </section>

                <section id="mern-stack" style={{marginBottom:"30px"}}>
            <Row>
                    <Col>
                        <span className="card-title">BUILDING MERN INFRASTRUCTURE </span><br />
                        <h4>1- Generate the React app</h4>
                        npx create-react-app mern-infrastructure
                        <h4>2- Build the React app's production code</h4>
                        npm run build
                        <h4>3- Code the skeleton Express app</h4>
                        npm i express morgan serve-favicon<br/>
                        Create and Code the Express App (server.js): touch server.js
                        <h4>4- Define the "catch all" route in the Express backend</h4>
                        <h4>5- Test the Express server</h4>
                        nodemon server
                    </Col>
                </Row>
            </section>
            </Container>
        </>   
    )
}
