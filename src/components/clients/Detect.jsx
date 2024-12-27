import React from 'react'
import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imgRev from "../../assets/images/22 imagem vandalismo.png"
const Detect = () => {
    const { t, i18n } = useTranslation();
  return (
    <Container style={{width:"80%",paddingTop:"15vh"}}>
    <Row>
      <Col xs={12} lg={8}>
      <img src={imgRev} alt="imgRev" style={{width:"100%",height:"100%"}}/>
      </Col>
      <Col style={{textAlign:"end",width:"10%",flexWrap:"wrap"}}>
      <p className='detTitle'>{t("detTitle")}</p>
      <h4 className='dethead'> {t("dethead")}</h4>
         <p className='detdusc'>{t("detdusc")}</p>
      </Col>
    </Row>
   
   
  </Container>
  )
}

export default Detect
