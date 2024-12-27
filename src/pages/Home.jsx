import React from 'react'
import Header from '../components/header/Header'
import HearoSec from '../components/hearoSec/HearoSec';
import Reviews from '../components/clients/Reviews';
import ContactCart from '../components/contact/ContactCart';
import Footer from '../components/footer/Footer';
import InfoText from '../components/hearoSec/InfoText';
import Cards from '../components/hearoSec/Cards';
const Home = () => {
  return (
    <>
      <Header/>
      <HearoSec/>
      <Cards/>
      <InfoText/>
      <Reviews/>
      {/* <ContactCart/>///// */}
      <Footer/>
    </>
  )
}

export default Home
