import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imgRev from "../../assets/images/12 imagem gerenciamento.png"
import "./reviews.css"
import Review_2 from './Review_2';
import Review_3 from './Review_3';
import { useTranslation } from 'react-i18next';
import Optimize from './Optimize';
import Detect from './Detect';
import Dashboardinfo from './Dashboardinfo';
import SubortCl from './SubortCl';
import DashImges from './DashImges';
const Reviews = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
    <Container style={{width:"80%"}}>
      <Row>
        <Col xs={12} lg={7}>
        <img src={imgRev} alt="imgRev" style={{width:"100%",height:"100%",objectFit:"contain"}}/>
        </Col>
        <Col className='text-xs-start text-lg-end' style={{width:"10%",flexWrap:"wrap"}}>
        <p className='revTitle'>{t("rev1_Title")}</p>
        <h4 className='revhead'> {t("rev1_head")}</h4>
           <p className='revdusc'>{t("rev1_dusc")}</p>
        </Col>
      </Row>
     
     
    </Container>
  <Review_2/>
  <Review_3/>
   <Optimize/>
   <Detect/>
   <Dashboardinfo/>
   <DashImges/>
   {/* <SubortCl/> */}
    </>
  )
}

export default Reviews
