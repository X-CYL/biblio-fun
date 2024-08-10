import React from "react";
import BiblioFunTitle from "components/micro/BiblioFunTitle";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import RecordBook from "components/modals/RecordBook";

export default function Enregistrement() {
  return (
    <>
      <Header />
      <BiblioFunTitle />
        <RecordBook />
      <Footer />
    </>
  )
}
