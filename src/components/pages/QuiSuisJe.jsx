import React from "react";
import BackgroundImageComponent from "../layout/BackgroundImageComponent";
import BiblioFunTitle from "../micro/BiblioFunTitle";
import Header from "../layout/Header";
import Footer from "../layout/Footer"
import QuiSuisJeText from "../micro/QuiSuisJeText";

export default function QuiSuisJe() {
  return (
    <>
    <Header />
    <BiblioFunTitle />
      <BackgroundImageComponent>
        <QuiSuisJeText />
      </BackgroundImageComponent>
    <Footer />
    </>
  );
}
