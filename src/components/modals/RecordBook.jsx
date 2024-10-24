import React from "react";
import Button from "components/micro/Button";
import InputCustom from "components/micro/Inputcustom";
import { category } from "components/arrays/Array";
import { format } from "components/arrays/Array";

import { useState } from "react";

/**
 * Soit tu recois pas de book (book = null) => creation d'un nouveau book
 * Si tu recois un book (book !== null) => update un book
 */

export default function RecordBook({ book }) {
  const isBookUpdate = book !== null; // en train de modifier un book
  isBookUpdate && console.log("book title : ", book.title);

  const [genreSelect, setGenreSelect] = useState(
    isBookUpdate ? book.genre : ""
  );
  const [formatSelect, setFormatSelect] = useState(
    isBookUpdate ? book.format : ""
  );
  const [isChecked, setIsChecked] = useState(
    isBookUpdate ? book.isVisible : false
  );

  const genreChange = (e) => {
    setGenreSelect(e.target.value);
  };
  const selectChange = (ev) => {
    setFormatSelect(ev.target.value);
  };
  const partageChange = (c) => {
    setIsChecked(c.target.checked);
  };
  const handleSubmit = (event) => {
    if (isBookUpdate) {
      // fetch("bdd", {
      //   body: {
      //     title: "input title",
      //   },
      // });
      // PUT ou PATCH avec les infos
      alert(`CECI EST UN UPDATE`);
    } else {
      // POST avec les infos
      alert(`CECI EST UN CREATE`);
    }
    event.preventDefault();
    // alert(`La case est ${isChecked ? "cochée" : "décochée"}`); //en attendant la logique definitive
  };

  const handleReset = (event) => {
    event.target.closest("form").reset();
    setGenreSelect("");
    setFormatSelect(""); // Remettre à jour les états si nécessaire
    setIsChecked(false);
  };

  console.log(genreSelect);
  console.log(formatSelect);
  console.log(isChecked);

  return (
    <>
      <div className="grid h-screen place-items-center ">
        <div className="bg-bg-secondary w-72 md:w-[700px] xl:w-[1200px] rounded-md h-[700px] ">
          <h2 className="text-4xl md:text-6xl text-center font-primary-font text-bg-primary ">
            Enregistrer un nouvel ouvrage
          </h2>
          <body>
            <form>
              <div className="flex flex-wrap justify-center scrollbar scrollbar-thumb-nav-text-color-selected scrollbar-track-sky-300 h-80 overflow-y-scroll lg:gap-3 md:gap-3 md:h-[560px]">
                <section className="flex-wrap items-start md:w-[44%]">
                  <div>
                    <InputCustom
                      type="text"
                      labelName="Titre du livre"
                      variant="medium"
                      id="titre"
                      defaultValue={isBookUpdate ? book.title : ""}
                    />
                  </div>
                  <div>
                    <InputCustom
                      type="text"
                      labelName="Edition"
                      variant="medium"
                      id="edition"
                    />
                  </div>
                  <div>
                    <InputCustom
                      type="text"
                      labelName="N° SBE"
                      variant="medium"
                      id="sbe"
                    />
                  </div>
                  <div className="flex flex-wrap">
                    <div>
                      <InputCustom
                        type="option"
                        labelName="Genre"
                        variant="large"
                        id="genre"
                        value={genreSelect}
                        option={category.map((item) => (
                          <option key={item.id} value={item.name}>
                            {item.name.charAt(0).toUpperCase() +
                              item.name.slice(1).toLowerCase()}
                          </option>
                        ))}
                        onChange={genreChange}
                      />
                    </div>
                    <div className="xl:ml-16">
                      <InputCustom
                        type="option"
                        labelName="Format"
                        variant="medium"
                        id="format"
                        value={formatSelect}
                        option={format.map((item) => (
                          <option key={item.id} value={item.format}>
                            {item.format.charAt(0).toUpperCase() +
                              item.format.slice(1).toLowerCase()}
                          </option>
                        ))}
                        onChange={selectChange}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap">
                    <div>
                      <InputCustom
                        type="checkbox"
                        labelName="Partage ?"
                        id="partage"
                        checked={isChecked}
                        onChange={partageChange}
                      />
                    </div>
                    <div className="xl:ml-12">
                      <InputCustom
                        type="file"
                        labelName="Choisir un fichier"
                        variant="medium"
                        id="file"
                      />
                    </div>
                  </div>
                </section>
                <section className="flex-wrap items-start md:w-[44%]">
                  <div>
                    <InputCustom
                      type="text"
                      labelName="Prenom auteur"
                      variant="medium"
                      id="prenom_auteur"
                    />
                  </div>
                  <div>
                    <InputCustom
                      type="text"
                      labelName="Nom auteur"
                      variant="medium"
                      id="nom_auteur"
                    />
                  </div>
                  <div>
                    <InputCustom
                      type="date"
                      labelName="Date édition"
                      variant="medium"
                      id="date_edition"
                    />
                  </div>
                  <div className="mt-[-10px] md:mt-[-10px]">
                    <InputCustom
                      type="number"
                      labelName="Nombre de pages"
                      id="number"
                    />
                  </div>
                  <div>
                    <InputCustom
                      type="textarea"
                      labelName="Pitch de l'histoire"
                      variant="medium"
                      id="pitch"
                    />
                  </div>
                </section>
              </div>
              <div className="container mx-auto flex flex-wrap gap-4 justify-around mt-36 md:mt-6">
                <div>
                  <Button
                    name="Annuler"
                    variant="green"
                    type="reset"
                    onClick={handleReset}
                    link="/"
                  />
                </div>

                <div>
                  <Button
                    name="Effacer"
                    variant="orange"
                    type="reset"
                    onClick={handleReset}
                  />
                </div>
                <div>
                  <Button
                    name="Enregistrer"
                    variant="red"
                    type="submit"
                    onClick={handleSubmit}
                  />
                </div>
              </div>
            </form>
          </body>
        </div>
      </div>
    </>
  );
}
