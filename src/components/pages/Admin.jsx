import InputCustom from "components/micro/Inputcustom";
import React from "react";
import Button from "components/micro/Button";

export default function Admin() {
  return (
    <>
      <h1 className="text-center text-4xl underline bg-stone-400">Administration</h1>
      <div className="bg-stone-400 text-center">
        <InputCustom
          type="text"
          labelName="genre"
          variant="medium"
          placeholder="genre du livre"
        />
      </div>
      <div className="bg-stone-400 text-center">
        <InputCustom
          type="text"
          labelName="Format"
          variant="medium"
          placeholder="format du livre"
        />
      </div>
      <div className="container mx-auto flex flex-row justify-around mt-36 md:mt-6">
        <div>
          <Button name="Annuler" variant="green" />
        </div>
        <div>
          <Button name="Ajouter" variant="orange" />
        </div>
        <div>
          <Button name="Supprimer" variant="red" />
        </div>
      </div>
    </>
  );
}
