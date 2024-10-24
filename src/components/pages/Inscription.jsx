import React from "react";
import BackgroundImageComponent from "components/layout/BackgroundImageComponent";
import BiblioFunTitle from "components/micro/BiblioFunTitle";
import Navbar from "components/layout/Navbar";
import Footer from "components/layout/Footer";
import SubscribeCard from "components/modals/SubscribeCard";

export default function Inscription() {
  return (
    <>
      <Navbar />
      <BiblioFunTitle />
      <BackgroundImageComponent>
        <SubscribeCard />
      </BackgroundImageComponent>
      <Footer />
    </>
  );
}
