import React from "react";
import openBook from "../../../src/assets/pics/fairytale-storytelling-with-open-book-concept.jpeg";

export default function Acceuil() {
  return (
    <>
      <div className="grid h-screen place-items-center">
        <div className="text-center">
          <h1 className="title-style text-4xl md:text-8xl mt-10">BIBLIO-FUN</h1>
        </div>
        <div className="bg-cover bg-center bg-no-repeat h-64 w-full" style={{ backgroundImage: `url('https://picjumbo.com/woman-with-sun-glasses-in-flower-field-summer/)` }}>
          <div className="bg-black bg-opacity-50 h-full flex items-center justify-center text-white">
          <h1 className="text-xl">Titre du composant</h1>
          </div>
        </div>
      </div>
    </>
  );
}
