import React from "react";
import BackgroundImageComponent from "../layout/BackgroundImageComponent";
import BiblioFunTitle from "../micro/BiblioFunTitle";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";


export default function Acceuil() {
  return (
    <>
      <Navbar />
      <BiblioFunTitle />
      <BackgroundImageComponent>
      
      </BackgroundImageComponent>
      <Footer />
    </>
  );
}
