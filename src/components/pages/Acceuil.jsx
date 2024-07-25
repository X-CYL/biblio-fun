import React from "react";
import BackgroundImageComponent from "../layout/BackgroundImageComponent";
import BiblioFunTitle from "../micro/BiblioFunTitle";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ConnectedCard from "../modals/ConnectedCard";


export default function Acceuil() {
  return (
    <>
      <Header />
      <BiblioFunTitle />
      <BackgroundImageComponent>
      <ConnectedCard />
      </BackgroundImageComponent>
      <Footer />
    </>
  );
}
