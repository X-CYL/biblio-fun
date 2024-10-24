import React from 'react';
import BackgroundImageComponent from 'components/layout/BackgroundImageComponent';
import Navbar from 'components/layout/Navbar';
import BiblioFunTitle from 'components/micro/BiblioFunTitle';
import Footer from 'components/layout/Footer'
import ContactCard from 'components/modals/ContactCard';

export default function Contact() {
  return (
    <>
      <Navbar />
      <BiblioFunTitle />
      <BackgroundImageComponent>
      <ContactCard />
      </BackgroundImageComponent>
        
      <Footer />
    </>
  )
}
