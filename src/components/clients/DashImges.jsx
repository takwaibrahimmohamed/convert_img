import React from 'react'
import dash_1 from "../../assets/images/84 dashboard.png"
import dash_2 from "../../assets/images/85 dashboard inventory.png"
import Container from 'react-bootstrap/Container';
const DashImges = () => {
  return (
    <>
       <div style={{backgroundColor:"rgb(245,245,245)"}}>
    <Container style={{width:"80%",}} className='py-3'>
    <img src={dash_1} alt="dash_1" style={{width:"100%",height:"100%"}}/>
    </Container>
    </div>
    <div style={{backgroundColor:"rgb(250,250,250)"}}>
    <Container style={{width:"80%",}} className='py-3'>
    <img src={dash_2} alt="dash_2" style={{width:"100%",height:"100%"}} />
    </Container>
    </div>
    </>
  )
}

export default DashImges
