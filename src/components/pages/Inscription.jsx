import React from "react";
import BackgroundImageComponent from "components/layout/BackgroundImageComponent";
import BiblioFunTitle from "components/micro/BiblioFunTitle";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import SubscribeCard from "components/modals/SubscribeCard";

export default function Inscription() {
  return (
    <>
      <Header />
      <BiblioFunTitle />
      <BackgroundImageComponent>
        <SubscribeCard />
      </BackgroundImageComponent>
      <Footer />
    </>
  );
}
