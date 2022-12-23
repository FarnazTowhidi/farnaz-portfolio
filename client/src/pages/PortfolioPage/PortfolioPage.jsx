import React,{ useEffect }  from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export default function PortfolioPage() {
  const portfolios = [ 
                      {title:"ChatterBox",
                       image: "aa.jpg",
                       description: "A MERN-stack instant messaging single page application (SPA), leveraging Socket.io to facilitate real-time communication between browsers. As a pseudo-social media application, I integrated AWS S3 for users to upload photos and coded functionality to edit their profile’s details. ",
                       sourceCode: "https://github.com/tungolra/Chatterbox-mern-app",
                       deploy: "https://chatterbox-sei-55.herokuapp.com/",
                       technology: "MVC architecture, express backend, AWS S3, Socket.io, HTML, CSS, React, MaterialUI" },
                       
                       {title:"Arash Habibi Lashkari",
                       image: "aa.jpg",
                       description: " lj l jl j lk j",
                       sourceCode: "",
                       deploy: "http://http://ahlashkari.com/",
                       technology: "Html, CSS" },
                       
                       {title:"Arash Habibi Lashkari",
                       image: "aa.jpg",
                       description: " lj l jl j lk j",
                       sourceCode: "",
                       deploy: "http://http://ahlashkari.com/",
                       technology: "Html, CSS" }
                      ]

  useEffect(() => {
    document.title = '{ } Portfolio Farnaz Towhidi';
  }, []);
  
  return (
    <div class="container">
      <div class="row">
        {portfolios.map((portfolio, idx)=>(
          <Col xl={4} lg={4} md={4} s={4} >
             <Card bg="custom-color" text="white" key="portofliocard{idx}" >
             <Card.Img src={portfolio.image} style={{borderRadius:0}} />
              <Card.Body >
                  <Card.Title >{portfolio.title}</Card.Title>
                  <Card.Text border="gray-dark">
                  {portfolio.description}                               
                  </Card.Text>
                  <Link href={portfolio.deploy}>Git Hub</Link>
                  <Link href={portfolio.deploy}>Deploy</Link>  
              </Card.Body>           
            </Card>       
          </Col>
        ) )
        }
        
       
      </div>
    </div>
  )
}
