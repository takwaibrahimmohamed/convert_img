import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imgRev from "../../assets/images/16 imagem reducao custos.png"
import "./reviews.css"
import { useTranslation } from 'react-i18next';


const Review_3 = () => {
  const { t, i18n } = useTranslation();
  return (
    <div style={{overflowX:"hidden"}}>
      <Row className='rev3_box'>
        
     <Col xs="12" lg="4" className='rev3_box_img'> <img src={imgRev} alt="" className='imgRev'/></Col>
     <Col xs="0" lg="7" className='pe-4 me-2 imgRev_text' style={{textAlign:"end"}}>
        <p className='revTitle'>{t("rev3_Title")}</p>
        <h4 className='revhead '>{t("rev3_head")}</h4>
           <p className='revdusc revdusc_3'>{t("rev3_dusc")}</p>
        </Col>
      </Row>
      {/* <Row style={{justifyContent:"flex-end",textAlign:"end"}}> 
        
    </Row> */}
    </div>

  
   

  )
}

export default Review_3
