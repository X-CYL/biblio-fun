import React from "react";
import BiblioFunTitle from "components/micro/BiblioFunTitle";
import Navbar from "components/layout/Navbar";
import Footer from "components/layout/Footer";
import BaseCard from "components/basePage/BaseCard";
import BackgroundComponent from "components/layout/BackgroundComponent";
import { useNavigate } from "react-router-dom";

export default function AfficheLivres() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <BiblioFunTitle />
      <BackgroundComponent>
        <BaseCard />
        <button onClick={() => navigate("/book/create")}>CREER UN LIVRE</button>
      </BackgroundComponent>
      <Footer />
    </>
  );
}
