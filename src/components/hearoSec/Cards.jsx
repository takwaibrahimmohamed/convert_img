import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import cart_1 from "../../assets/images/07 icone topo B.png"
import cart_2 from "../../assets/images/08 icone topo B.png"
import cart_3 from "../../assets/images/09 icone topo B.png"
import arrow from "../../assets/images/10 icone seta topo B.png"

import Container from 'react-bootstrap/Container';
import { useTranslation } from 'react-i18next';
const Cards = () => {
  const { t, i18n } = useTranslation();
  return (
    <Container className='containCart' style={{width:"80%",marginTop:"-27vh"}}>
    <Row xs={1} md={3} className="gy-5 gx-4" style={{width:"90%",margin:"0 auto"}}>
   
   <Col>
     <Card className='cartst'>
      <img src={cart_2} alt="cart_2"  className='cart_1Img'/>
       <Card.Body>
         <Card.Title>{t("Card_title2")}</Card.Title>
         <Card.Text className='cart_dusc' style={{lineHeight:"1"}}>
         {t("Card_title2_disc")}
         </Card.Text>
         {/* <Card.Title style={{margin:"0",padding:"0",fontSize:"1rem",fontFamily:"Poppins"}}>{t("cart_title_mail")}
         </Card.Title> */}
         {/* <img src={arrow} alt="arrow" style={{width:"15%",height:"10%"}}/> */}
       </Card.Body>
     </Card>
   </Col>
   <Col>
     <Card className='cartst'>
      <img src={cart_3} alt="cart_3"  className='cart_1Img'/>
      <Card.Body>
         <Card.Title>{t("Card_title3")}</Card.Title>
         <Card.Text className='cart_dusc' style={{lineHeight:"1"}}>
         {t("Card_title3_disc")}
         </Card.Text>
         {/* <Card.Title style={{margin:"0",padding:"0",fontSize:"1rem",fontFamily:"Poppins"}}>{t("cart_title_mail")}
         </Card.Title>
         <img src={arrow} alt="arrow" style={{width:"15%",height:"10%"}}/> */}
       </Card.Body>
     </Card>
   </Col>
   <Col>
     <Card className='cartst'>
      <img src={cart_1} alt="cart_1"  className='cart_1Img'/>
      <Card.Body>
      {/* <Card.Body style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}> */}
         <Card.Title>{t("Card_title1")}</Card.Title>
         <Card.Text className='cart_dusc' style={{lineHeight:"1"}}>
         {t("Card_title1_disc")}
         </Card.Text>
         {/* <Card.Title style={{margin:"0",padding:"0",fontSize:"1rem",fontFamily:"Poppins"}}> {t("cart_title_mail")}
         </Card.Title>
         <img src={arrow} alt="arrow" style={{width:"15%",height:"10%"}}/> */}
       </Card.Body>
     </Card>
   </Col>
  

    </Row>
    </Container>

  )
}

export default Cards
