import React from "react";
import style from "./ListServeces.module.css";
import CardOverview from "../../Home/cardOverview/cardOverview"
import ListServicos from "../../../utils/servicosData";

const ListServeces = () => {
  return (
    <section
      className={`flex justify-between m-auto max-sm:flex-col max-md:px-2 ${style.backgroundImage}`}
    >
      <section className="container-main w-full max-sm:px-2 flex flex-col items-end">
        <section className="my-16">
          <h1 className="text-4xl tracking-wide font-bold text-text-primary">
            Perícias Judiciais Tecnológicas realizadas por <br /> especialistas
            para resolver suas demandas <br /> com eficiência e precisão.
          </h1>

          <section className="w-full flex flex-col items-end my-20">
            {ListServicos.map((servico, index) => (
              <CardOverview
                key={index}
                titulo={servico.titulo}
                descricao={servico.descricao}
              />
            ))}
          </section>
        </section>
      </section>
    </section>
  );
};

export default ListServeces;
