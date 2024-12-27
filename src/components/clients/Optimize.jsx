import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import imgopti from "../../assets/images/18 imagem fluxo.png"
import imgopti_2 from "../../assets/images/20 imagem monitoramento.png"
const Optimize = () => {
    const { t, i18n } = useTranslation();
  return (
    <div style={{background:'black'}}>
       <Container style={{width:"80%",paddingTop:"15vh",paddingBottom:"10vh"}}>
       <Row className='g-5'>
       
        <Col xs={12} lg={8}>
        <p className='optiTitle'>{t("opti_title")}</p>
        <h4 className='optihead'> {t("opti1_head")}</h4>
           <p className='optidusc'>{t("opti1_dusc")}</p>
           {/* <p className='optisecTitle'>{t("secopti_title")} &nbsp;<span>{t("optisecTitle2")}</span></p> */}
        <img src={imgopti_2} alt="imgopti_2" style={{paddingTop:"5%"}} className='imgopti'/>
        </Col>
        <Col xs={12} lg={3}>
        <img src={imgopti} alt="imgRev" style={{height:"90%"}} className='imgopti'/>
        </Col>
      </Row>
       </Container>
    </div>
  )
}

export default Optimize
