import React from "react";
import Button from "components/micro/Button";
import InputCustom from "components/micro/Inputcustom";

export default function ConnectedCard() {
  return (
    <>
      <div className="grid h-screen place-items-center">
        <div className="bg-bg-secondary w-72 md:w-[600px] border-4 border-border-input-color rounded-xl h-[500px]">
          <h2 className="text-4xl md:text-6xl text-center font-primary-font text-bg-primary">
            Se connecter
          </h2>
          <body>
            <div className="grid grid-rows-4 md:justify-center">
              { /*<div className="">
                <label
                  className="text-4xl ml-7 md:ml-2 font-primary-font text-bg-primary"
                  htmlFor="email"
                >
                  {" "}
                  Votre e-mail
                </label>
                <input
                  className="w-[80%] md:w-[100%] ml-7 md:ml-2 md:h-10 border-4 border-border-input-color rounded-md bg-bg-primary"
                  type="email"
                  name="email"
                />
              </div> */}
              <InputCustom type="email"
              labelName ="votre email ici" />
            <div className="mt-10">
            {/*<label
                className="text-4xl ml-7 mt-4 md:ml-2 font-primary-font text-bg-primary"
                htmlFor="password"
              >
                {" "}
                Mot de passe
              </label>
              <input
                className="w-[80%] md:w-[100%] ml-7 md:ml-2 md:h-10 border-4 border-border-input-color rounded-md bg-bg-primary"
                type="text"
                name="password"
              /> */}
              <InputCustom type="password"
              labelName ="mot de passe ici" />
            <div className="mt-10"></div>
            </div>
              
            </div>
            <div className="container mx-auto flex flex-row justify-around mt-[-220px] md:mt-[-370px]">
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
