import React from "react";
import Button from "components/micro/Button";
import InputCustom from "components/micro/Inputcustom";

export default function RecordBook() {
  return (
    <>
      <div className="grid h-screen place-items-center ">
        <div className="bg-bg-secondary w-72 md:w-[700px] xl:w-[1200px] rounded-md h-[700px] ">
          <h2 className="text-4xl md:text-6xl text-center font-primary-font text-bg-primary ">
            Enregistrer un nouvel ouvrage
          </h2>
          <body>
            <div>
              <div className="flex flex-wrap justify-center scrollbar scrollbar-thumb-nav-text-color-selected scrollbar-track-sky-300 h-80 overflow-y-scroll lg:gap-3 md:gap-3 md:h-[560px]">
                <section className="flex-wrap items-start md:w-[44%]">
                  <div>
                    <InputCustom
                      type="text"
                      labelName="Titre du livre"
                      variant="medium"
                    />
                  </div>
                  <div>
                    <InputCustom
                      type="text"
                      labelName="Edition"
                      variant="medium"
                    />
                  </div>
                  <div>
                    <InputCustom
                      type="text"
                      labelName="N° SBE"
                      variant="medium"
                    />
                  </div>
                  <div className="flex flex-wrap">
                    <div>
                      <InputCustom
                        type="text"
                        labelName="Genre"
                        variant="medium"
                      />
                    </div>
                    <div className="xl:ml-16">
                      <InputCustom
                        type="text"
                        labelName="Format"
                        variant="medium"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap">
                    <div>
                      <InputCustom type="checkbox" labelName="Partage ?" />
                    </div>
                    <div className="xl:ml-12">
                      <InputCustom
                        type="file"
                        labelName="Choisir un fichier"
                        variant="medium"
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
                    />
                  </div>
                  <div>
                    <InputCustom
                      type="text"
                      labelName="Nom auteur"
                      variant="medium"
                    />
                  </div>
                  <div>
                    <InputCustom
                      type="date"
                      labelName="Date édition"
                      variant="medium"
                    />
                  </div>
                  <div className="mt-[-10px] md:mt-[-10px]">
                    <InputCustom type="number" labelName="Nombre de pages" />
                  </div>
                  <div>
                    <InputCustom
                      type="textarea"
                      labelName="Pitch de l'histoire"
                      variant="medium"
                    />
                  </div>
                </section>
              </div>
              <div className="container mx-auto flex flex-row justify-around mt-36 md:mt-6">
                <div>
                  <Button name="Annuler" variant="green" />
                </div>
                <div>
                  <Button name="Enregistrer" variant="orange" />
                </div>
              </div>
            </div>
          </body>
        </div>
      </div>
    </>
  );
}
