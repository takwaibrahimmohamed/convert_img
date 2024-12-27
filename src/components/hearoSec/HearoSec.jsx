import React from 'react'
import Container from 'react-bootstrap/Container';
import "../hearoSec/HearoSec.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
const HearoSec = () => {
  const { t, i18n } = useTranslation();
  console.log(window.innerWidth)
  return (
<div className='containBg' id="about">
<Container style={{width:"80%"}}>
    <Row>
        <Col xs={12} lg={7}>
        <p className='text text_1'>{t("title")}</p>
        <h5 className='textbold'>{t("dusc")}</h5>
        <p className='text'>
        {t("sectitle")}</p>
        </Col>
    </Row>
 
  
</Container>
</div>
     
  
  )
}

export default HearoSec
