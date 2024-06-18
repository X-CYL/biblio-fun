import React from "react";
import openBook from "../../../src/assets/pics/opened-book.jpg";

export default function QuiSuisJe() {
  return (
    <>
      <section className="h-screen">
        <div className="flex justify-center">
          <h1 className="title-style text-4xl md:text-8xl mt-20">BIBLIO-FUN</h1>
        </div>
          <div className="mt-10">
            <img
              className="mx-auto my-auto"
              src={openBook}
              alt="vue de livre ouvert"
            />
          </div>
        
      </section>
      <article className="">
          <div className="">
            <span className="flex justify-center mt-12">
              <p className="text-size text-center bg-slate-200/35  pl-10 pr-10 pt-3 pb-3 border border-solid border-4 border-blue-600 rounded-xl text-3xl">
                Bonjour, je me présente, le m'appelle Bibliofun, J'existe pour
                vous aider à enregistrer, lister, et gèrer votre bibliotheque
                personnelle via cette interface. <br />
                En effet, il n'est pas évident pour de grands lecteurs comme
                nous, de savoir précisemment ce que nous avons comme miterature
                dans nos placards, tiroirs, et autres lieux insolites. <br />
                Pourquoi ne pas regrouper tout cela ici, et pourquoi ne pas
                partager nos titres et prendre connaissance et liker les titres
                des livres des autres utilisteurs? <br />
                Venez me découvrir et m'essayer! <br />
                Seul votre pseudo sera visible chez moi. <br />A tout de
                suite...{" "}
              </p>
            </span>
          </div>
        </article>
    </>
  );
}
