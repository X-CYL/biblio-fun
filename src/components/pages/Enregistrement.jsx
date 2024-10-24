import React, { useEffect, useState } from "react";
import BiblioFunTitle from "components/micro/BiblioFunTitle";
import Navbar from "components/layout/Navbar";
import Footer from "components/layout/Footer";
import RecordBook from "components/modals/RecordBook";
import { useParams } from "react-router-dom";

export default function Enregistrement() {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  console.log("bookId", bookId);

  useEffect(() => {
    if (bookId !== undefined) {
      setBook({ title: "TOTOTOTOTOT" });
      // fetch("book dans la bdd avec bookId")
      //   .then((response) => {
      //     return response.json();
      //   })
      //   .then((data) => {
      //     setBook(data);
      //   });
    }
  }, );

  return (
    <>
      <Navbar />
      <BiblioFunTitle />
      <RecordBook book={book} />
      <Footer />
    </>
  );
}
