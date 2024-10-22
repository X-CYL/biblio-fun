import React from "react";
import BackgroundImageComponent from "components/layout/BackgroundImageComponent";
import BiblioFunTitle from "components/micro/BiblioFunTitle";
import Navbar from "components/layout/Navbar";
import Footer from "components/layout/Footer";
import ConnectedCard from "components/modals/ConnectedCard";

export default function Connexion() {
  return (
    <>
      <Navbar />
      <BiblioFunTitle />
      <BackgroundImageComponent>
        <ConnectedCard />
      </BackgroundImageComponent>
      <Footer />
    </>
  );
}
