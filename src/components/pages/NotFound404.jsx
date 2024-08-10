import React from "react";
import Button from "components/micro/Button";
import errorPageGif from "../../assets/pics/bookworm-7364_256.gif";

function NotFound404() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-bg-secondary w-[300px] md:w-[600px] border-4 border-border-input-color rounded-xl h-[500px]">
          <body className="flex flex-col ">
            <div className="text-center mt-[-50px]">
              <div className="pt-[50px] md:pt-[60px]">
                <h2 className="text-4xl text-amber-400 font-card-font">
                  {" "}
                  Oups la page que vous demandez n'existe pas !!!
                </h2>
              </div>
              <div>
                <img
                  className="mx-auto mt-10"
                  src={errorPageGif}
                  alt="Gif animé d'un ver vert qui lit un livre"
                />
              </div>
            </div>
            <div className="mx-auto mt-28 md:mt-36">
              <Button name="Retour accueil" variant="red" />
              
            </div>
          </body>
        </div>
      </div>
    </>
  );
}

export default NotFound404;
