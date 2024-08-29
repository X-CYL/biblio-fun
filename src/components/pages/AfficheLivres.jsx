import React from "react";
import BiblioFunTitle from "components/micro/BiblioFunTitle";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import BaseCard from "components/basePage/BaseCard";
import BackgroundComponent from "components/layout/BackgroundComponent";

export default function AfficheLivres() {
  return (
    <>
      <Header />
      <BiblioFunTitle />
      <BackgroundComponent>
        <BaseCard />
      </BackgroundComponent>
      <Footer />
    </>
  );
}
