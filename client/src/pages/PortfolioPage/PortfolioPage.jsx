import React,{ useEffect }  from 'react'

export default function PortfolioPage() {

  useEffect(() => {
    document.title = '{name:"Farnaz Towhidi, portfolio:["ChatterBox", "Fitness App"]}';
  }, []);
  
  return (
    <h1>Portfolio page</h1>
  )
}
