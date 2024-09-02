import React from "react";
import Button from "components/micro/Button";
import InputCustom from "components/micro/Inputcustom";

export default function ContactCard() {
  return (
    <>
      <div className="grid h-screen place-items-center">
        <div className="bg-bg-secondary w-72 md:w-[600px] xl:w-[900px] border-4 border-border-input-color rounded-xl h-[500px]">
          <h2 className="text-4xl md:text-6xl ml-2 mr-2 text-center font-primary-font text-bg-primary">
            Contacter le gestionnaire du site
          </h2>
          <body>
            <div className="grid grid-rows-4 md:justify-center">
              <div className="">
                <InputCustom type="email" labelName="Votre e-mail" variant="medium" placeholder="votre e-mail ici"/>
              </div>
              <div className="mt-[-40px]">
                <InputCustom type="textarea" labelName="Votre demande ici" variant="medium" placeholder="entrez votre texte" />
              </div>
            </div>
            <div className="container mt-[-230px] md:mt-[-210px] mx-auto flex flex-row justify-around mt-8 md:mt-6">
              <div>
                <Button name="Annuler" variant="green" />
              </div>
              <div>
                <Button name="Envoyer" variant="red" />
              </div>
            </div>
          </body>
        </div>
      </div>
    </>
  );
}
