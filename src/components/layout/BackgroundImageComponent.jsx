import React from "react";
import backgroundImage from "../../assets/pics/fairytale-storytelling-with-open-book-concept.jpeg";
import BiblioFunTitle from "../micro/BiblioFunTitle";

export default function BackgroundImageComponent() {
  return (
    <div className="mx-0 sm:mx-12 xl:mx-28 mt-36 h-screen">
        <div className="text-center mb-4">
          <BiblioFunTitle />
        </div>
        
      <div
        className=" bg-cover bg-center bg-no-repeat  h-[550px] md:h-[650px]  w-full"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center text-white">
          <h1 className="text-xl">Titre du composant</h1>
        </div>
      </div>
    </div>
  );
}
