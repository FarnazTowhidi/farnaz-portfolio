import React from 'react'
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBarCheatsheet from "../../../components/NavBarCheatsheet/NavBarCheatsheet"


export default function CheatSheetPage() {
  return (
    <>
     <NavBarCheatsheet />
     <Container fluid className='body-cheatsheet'>
        <Row>
            <Col className="portfolio-header" style={{color:"black"}}>CHEAT SHEET</Col>
        </Row>
        <Row>
            <Col xl={12}> <Link to="/Installfest" >Install Fest</Link></Col>           
        </Row>
        <Row>
            <Col xl={12}> <Link to="/react" >HTML 5</Link></Col>           
        </Row>
        <Row>
            <Col xl={12}> <Link to="/css" >CSS</Link></Col>           
        </Row>
        <Row>
            <Col xl={12}> <Link to="/javascript" >JavaScript</Link></Col>           
        </Row>
        <Row>
            <Col xl={12}> <Link to="/visualstudio" >Visual studio</Link></Col>           
        </Row>
        <Row>
            <Col xl={12}> <Link to="/cheatsheetreact" >React</Link></Col>           
        </Row>
        <Row>
            <Col xl={12}> <Link to="/tools" >Tools</Link></Col>           
        </Row>
    </Container>
    </>  
  )
}
