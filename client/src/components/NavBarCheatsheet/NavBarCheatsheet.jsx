import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";

export default function NavBarCheatsheet() {
  return (
    <Container  >
        <Navbar expand="lg" variant="dark">
        <Container>
            <Navbar.Brand href="home">CHEAT SHEET</Navbar.Brand>
            <Nav className="me-auto">           
                <Link to="/Installfest" className="nav-link" >Installfest</Link>         
            </Nav> 
            <Nav className="me-auto">           
                <Link to="/bash" className="nav-link" >Bash</Link>         
            </Nav> 
            <Nav className="me-auto">           
                <Link to="/git" className="nav-link" >Git</Link>         
            </Nav> 
            <Nav className="me-auto">           
                <Link to="/visualstudio" className="nav-link" >Visual Studio</Link>         
            </Nav> 
            <Nav className="me-auto">
            <Link to="/framework" className="nav-link" >FrameWork</Link>  
            </Nav> 


            <NavDropdown title="Languages" id="basic-nav-dropdown">
                <NavDropdown.Item href="/">HTML/CSS</NavDropdown.Item>  
                <NavDropdown.Item href="/javascript">Javascript</NavDropdown.Item>
                <NavDropdown.Item href="/react">React</NavDropdown.Item>
                <NavDropdown.Item href="/express">Python</NavDropdown.Item>      
                <NavDropdown.Item href="/java">Java</NavDropdown.Item>                 
            </NavDropdown> &nbsp;&nbsp;&nbsp;

            <NavDropdown title="Framework" id="basic-nav-dropdown">
                <NavDropdown.Item href="/">Django</NavDropdown.Item>  
                <NavDropdown.Item href="/express">Express.js</NavDropdown.Item>
                <NavDropdown.Item href="/express">Angular</NavDropdown.Item>   
                <NavDropdown.Item href="/express">Vue.js</NavDropdown.Item>                  
            </NavDropdown> &nbsp;&nbsp;&nbsp;

            

            <NavDropdown title="Database" id="basic-nav-dropdown">
                <NavDropdown.Item href="/mongo">Mongo</NavDropdown.Item>       
            </NavDropdown> 
            
             
      
            <Nav className="me-auto">           
                <Link to="/node" className="nav-link" >Node</Link>    
            </Nav>  
            <Nav className="me-auto">           
                <Link to="/deploy" className="nav-link" >Deploy</Link>    
            </Nav>              
            <Nav className="me-auto">           
                <Link to="/tools" className="nav-link" >Tools</Link>    
        
            </Nav>             
        </Container>
        </Navbar>  
    </Container> 
  )
}
