import React from 'react'
import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';

const Dashboardinfo = () => {
    const { t, i18n } = useTranslation();
  return (
    <>
    <div style={{backgroundColor:"rgb(250,250,250)",textAlign:"justify",marginTop:"10vh",padding:"5vh 0"}}>
         <Container style={{width:"80%",}}>
         <p className='dashhead' >{t("dashhead")} <span>{t("dashhead_person")}</span></p>
         <p className='dashTitl' >{t("dashTitl")}</p>
         </Container>
     
    </div>
   
   
   
    
    </>
  )
}

export default Dashboardinfo
