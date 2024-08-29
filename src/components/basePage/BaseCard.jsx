import React from "react";
import Card from "components/micro/card";

export default function BaseCard() {
  return (
    <>
      <div className="grid h-screen place-items-center ">
        <div className="md:bg-bg-secondary w-72 md:w-[700px] xl:w-[1200px] rounded-md h-[600px] ">
          <h2 className="text-4xl md:text-6xl text-center font-primary-font text-bg-secondary md:text-bg-primary ">
            Les derniers livres enregistrées
          </h2>
          <body>
            <div>
              <div className="flex flex-wrap justify-center scrollbar scrollbar-thumb-nav-text-color-selected scrollbar-track-sky-300 h-[400px] gap-3 overflow-y-scroll lg:gap-3 md:gap-3 md:h-[490px]">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </body>
        </div>
      </div>
    </>
  );
}
