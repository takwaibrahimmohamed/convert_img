import React from 'react'
import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo_1 from "../../assets/images/69 logo 1.png"
import logo_2 from "../../assets/images/70 logo 2.png"
import logo_3 from "../../assets/images/71 logo 3.png"
import logo_4 from "../../assets/images/72 logo 4.png"
const SubortCl = () => {
    const { t, i18n } = useTranslation();
  return (
    <div style={{textAlign:"center",padding:"5vh 0"}} id="Clients">
         <Container style={{width:"60%"}}>
         <p className='dashhead'>{t("supporthead")} <span>{t("supporthead_person")}</span></p>
        <Row className="mt-5 pt-5">
          <Col> <img src={logo_1} alt="logo_1" style={{width:"70%",height:"70%"}}/></Col>
          <Col> <img src={logo_2} alt="logo_2" style={{width:"70%",height:"70%"}}/></Col>
          <Col> <img src={logo_3} alt="logo_3" style={{width:"70%",height:"70%"}}/></Col>
          <Col> <img src={logo_4} alt="logo_4" style={{width:"70%",height:"70%"}}/></Col>
         
       
        </Row>
         </Container>
     
    </div>
  )
}

export default SubortCl
