import React,{ useEffect }  from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
//Data
import {portfolios} from "../../data.js"


export default function PortfolioPage() {
  

  useEffect(() => {
    document.title = '{ } Farnaz Towhidi Portfolio';
  }, []);

  function HandleMouseOut (e, value) {
    alert (e)
  }
  
  return ( 
    <Container>    
      <Row>
        <Col className="txt-header">SOME THING I HAVE BUILT</Col>
      </Row>
      <Row>
        {portfolios.map((portfolio, idx)=>(
       
          <Col style={{maxHeight:"400px;"}} >
             <Card bg="card-bg" text="card-desc" key="portofliocard{idx}" style={{ borderRadius:0,height:"100%"}} >
           
                <a target="_black" href={portfolio.url}>
                  <Card.Img 
                    src={portfolio.image} 
                    className="card-img d-flex flex-column justify-content-center" 
                    style={{borderRadius:0,maxHeight:"300px"}}                 
                   //  onMouseOut = {(e)=>HandleMouseOut(e, {portfolio.image})}
                    />             
                </a>
                 
                <Card.Body style={{borderRadius:"0", height:"200px"}}>
                    <Card.Title className="card-title">{portfolio.title}</Card.Title>
                    <Card.Text className="card-desc" border="gray-dark">
                    {portfolio.description}                               
                    </Card.Text>
                    <Card.Text className="card-tech" border="gray-dark">
                    {portfolio.technology}                               
                    </Card.Text>
                    {/* {
                      if (portfolio.sourceCode) {
                        <Link className="card-footer" href={portfolio.sourceCode}>Github </Link>
                      }
                      
                    } */}
                     
                    
                    <Link className="card-footer" href={portfolio.deploy}>Deploy </Link>  
                </Card.Body>       
            </Card>       
          </Col>
        ) )
        }
      </Row>    
    </Container>
  )
}
