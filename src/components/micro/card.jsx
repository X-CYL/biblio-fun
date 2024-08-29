import React from "react";
import pics1 from "../../assets/pics/la_derniere_chasse.png";

export default function Card() {
  return (
      <>
        <div className="">
          <div className="flex bg-bg-card w-72 h-40 sm:w-[400px] md:w-[500px] xl:w-[500px] rounded-xl  border-4 border-black ">
            <img
              className="h-16 w-28 md:w-16 mt-2 ml-2"
              src={pics1}
              alt="couverture la derniere chasse de grangé"
            />
            <div>
              <p className="ml-2 mt-1 font-card-font text-sm">
                Titre : La derniere chasse
              </p>
              <p className="ml-2 font-card-font text-sm">
                Auteur: Jean Christophe Grangé
              </p>
              <p className="ml-2 font-card-font text-sm">Pitch: </p>
              <p className="ml-1 mt-1 font-card-font text-xs">
                Un cadavre est retrouvé dans une clairière, que fait-il la au
                milieu de cette forêt appartenant à cette riche famille?{" "}
              </p>
            </div>
          </div>
          <div className="flex justify-between mt-[-30px] ml-6 mr-6 md:ml-8 md:mr-12]">
            <div className="flex">
              <p className="ml-1 mt-1 font-card-font text-xs">Publié par :</p>
              <p className="font-card-font text-yellow-300">X-CYL</p>
            </div>
            <div className="flex">
              <p className="ml-1 mt-1 font-card-font text-xs">Likes :</p>
              <p className="font-card-font mt-1 ml-1 text-xs text-red-600">
                45
              </p>
            </div>
          </div>
        </div>
      </>
    );
}
