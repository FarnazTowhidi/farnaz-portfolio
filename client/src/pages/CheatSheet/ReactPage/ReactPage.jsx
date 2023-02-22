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
                            import "./ChatBox.css"; <br />                       
                            Tools: React developer tools <br />                          
                            <h4>import</h4>
                            import 'bootstrap/dist/css/bootstrap.min.css';  

                            <h4>Router</h4>
                            <CopyBlock
                                language="jsx"
                                text={` 
                                import { BrowserRouter as Router } from "react-router-dom";
                                root.render(
                                    <React.StrictMode>
                                      <Router> 
                                        <App />
                                      </Router> 
                                    </React.StrictMode>
                                  );
                                `}
                                codeBlock
                                theme={github}
                                showLineNumbers={false}
                            />

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
                        </Col>
                    </Row>
                </section>           
            </Container>
        </>   
    )
}
