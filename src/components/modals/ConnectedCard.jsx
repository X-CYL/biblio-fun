import React from "react";
import Button from "../micro/Button";

export default function ConnectedCard() {
  return (
    <>
      <div className="grid h-screen place-items-center">
        <div className="bg-bg-secondary w-72 md:w-[600px] border-4 border-border-input-color rounded-xl h-[500px]">
          <h2 className="text-4xl text-center font-primary-font text-bg-primary">
            Se connecter
          </h2>
          <body>
            <div className="grid grid-rows-4">
              <div className="">
                <label
                  className="text-4xl ml-7 font-primary-font text-bg-primary"
                  htmlFor="email"
                >
                  {" "}
                  Votre e-mail
                </label>
                <input
                  className="w-[80%] ml-7 border-4 border-border-input-color rounded-md"
                  type="email"
                  name="email"
                />
              </div>
            <div className="mt-10">
            <label
                className="text-4xl ml-7 mt-4 font-primary-font text-bg-primary"
                htmlFor="password"
              >
                {" "}
                Mot de passe
              </label>
              <input
                className="w-[80%] ml-7 border-4 border-border-input-color rounded-md"
                type="text"
                name="password"
              />
            </div>
              
            </div>
            <div className="container mx-auto flex flex-row justify-around mt-[-70px]">
              <div>
                <Button name="Annuler" variant="green" />
              </div>
              <div>
                <Button name="Connexion" variant="red" />
              </div>
            </div>
          </body>
        </div>
      </div>
    </>
  );
}
