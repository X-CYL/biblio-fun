import React from "react";
import BackgroundImageComponent from "components/layout/BackgroundImageComponent";
import BiblioFunTitle from "components/micro/BiblioFunTitle";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import ConnectedCard from "components/modals/ConnectedCard";

export default function Connexion() {
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
