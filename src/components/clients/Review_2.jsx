import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imgRev_2 from "../../assets/images/14 imagem hospede C.png"
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
const Review_2 = () => {
  const { t, i18n } = useTranslation();
  return (
    <div style={{background:"rgb(252,252,252)",marginTop:"10vh",marginBottom:"10vh",padding:"50px 0 0 0"}}>
    <Container style={{width:"80%"}}>
    <Row>
     
     <Col xs={12} lg={6} style={{textAlign:"start"}}>
     <p className='revTitle'>{t("rev2_Title")}</p>
     <h4 className='revhead'> {t("rev2_head")}</h4>
        <p className='revdusc w_revdusc' style={{marginTop:"10%",width:"125%"}}>{t("rev2_dusc")}
         
         </p>
     </Col>
     <Col xs={12} lg={6}>

     <img src={imgRev_2} alt="imgRev_2" style={{width:"100%",height:"100%"}}/>
    
     </Col>
   </Row>
    </Container>
  
    </div>
  )
}

export default Review_2
