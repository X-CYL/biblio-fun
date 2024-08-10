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
            <div className="grid grid-rows-2 md:justify-center">
              <div className="mt-10">
                <InputCustom type="email" labelName="Votre email:" />
              </div>
              <div className="mt-10">
                <InputCustom type="password" labelName="Votre mot de passe:" />
              </div>
            </div>
            <div className="container mx-auto flex flex-row justify-around mt-32 md:mt-32">
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
