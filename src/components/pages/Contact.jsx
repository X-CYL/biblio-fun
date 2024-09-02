import React from 'react';
import BackgroundImageComponent from 'components/layout/BackgroundImageComponent';
import Header from 'components/layout/Header';
import BiblioFunTitle from 'components/micro/BiblioFunTitle';
import Footer from 'components/layout/Footer'
import ContactCard from 'components/modals/ContactCard';

export default function Contact() {
  return (
    <>
      <Header />
      <BiblioFunTitle />
      <BackgroundImageComponent>
      <ContactCard />
      </BackgroundImageComponent>
        
      <Footer />
    </>
  )
}
