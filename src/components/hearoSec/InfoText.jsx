import React from 'react'
import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
const InfoText = () => {
  const { t, i18n } = useTranslation();
  return (
<Container style={{width:"80%"}}>
<div style={{margin:"30px 0",paddingBottom:"20px",fontWeight:"300",fontFamily:"Poppins"}}>
      <p>{t("InfoText")}</p>
      <br/>
      <p>{t("InfoText_2")}</p>
        <hr style={{marginTop:"50px",color:"gray",}}/>
    </div>
</Container>
   
  )
}

export default InfoText
