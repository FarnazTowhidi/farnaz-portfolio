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
        <Col className="portfolio-header">SOME THING I HAVE BUILT</Col>
      </Row>
      <Row>
        {portfolios.map((portfolio, idx)=>(
       
          <Col xl={2} lg={2} md={3} xs={4} style={{maxHeight:"100%",}} >
             <Card bg="card-bg" text="card-desc" key="portofliocard{idx}" style={{ borderRadius:0,height:"100%"}} >
           
                <a target="_black" href={portfolio.url}>
                  <Card.Img 
                    src={portfolio.image} 
                    className="card-img d-flex flex-column justify-content-center" 
                    style={{borderRadius:0,height:"100%"}}                 
                    />             
                </a>
                 
                <Card.Body style={{borderRadius:"0", padding:"10px 0px 30px 0px"  }}>
                    <Card.Title className="card-title">
                      {portfolio.title}
                      {
                      (portfolio.sourceCode!="") 
                        ? <>
                            <a target="_blank" href={portfolio.sourceCode} ><img style={{width:"30px"}} src="/images/icon-git.png" /></a>
                            <a target="_blank" href={portfolio.deploy} ><img style={{width:"30px"}} src="/images/icon-deploy.png" /></a>
                          </>
                        : <a href={portfolio.url} ><img style={{width:"30px"}} src="./images/icon-deploy.png" /></a>
                      }  
                    </Card.Title>
                    <Card.Text className="card-desc" border="gray-dark" style={{ borderRadius:"0", height:"40px"}}>
                      {portfolio.description}                               
                    </Card.Text>
                    <Card.Text className="card-tech" border="gray-dark" style={{height:"40px"}}>
                      {portfolio.technology} 
                    </Card.Text>
                   
                </Card.Body>       
            </Card>       
          </Col>
        ) )
        }
      </Row>    
    </Container>
  )
}
