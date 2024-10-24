import React from "react";
import BackgroundImageComponent from "../layout/BackgroundImageComponent";
import BiblioFunTitle from "../micro/BiblioFunTitle";
import Footer from "../layout/Footer"
import QuiSuisJeText from "../micro/QuiSuisJeText";
import Navbar from "../layout/Navbar"

export default function QuiSuisJe() {
  return (
    <>
    <Navbar />
    <BiblioFunTitle />
      <BackgroundImageComponent>
        <QuiSuisJeText />
      </BackgroundImageComponent>
    <Footer />
    </>
  );
}
