import React from "react";
import {
  BsBarChart,
  BsCloudArrowDown,
  BsDatabaseLock,
  BsShieldLock,
} from "react-icons/bs";

const AboutServices = () => {
  return (
    <section className="flex justify-between max-sm:flex-col">
      <section className="bg-block-primary w-full max-sm:px-2 py-14">
        <section className="container-minMain py-12">
          <h1 className="text-3xl font-bold mb-2">Serviços de Perícia Digital</h1>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col items-center m-auto text-center pt-2">
              <BsBarChart className="text-8xl m-auto my-4 text-green-600" />
              <p>
                Análise de mídias, recuperação de dados, rastreamento de
                e-mails, exames em dispositivos móveis, redes e bancos de dados.
                Verificação de logs, busca de evidências digitais e elaboração
                de quesitos e contestações de laudos.
              </p>
            </div>

            <div class="h-[1px] bg-green-300 flex-grow my-9"></div>

            <div className="flex flex-col items-center m-auto text-center pt-2">
              <BsDatabaseLock className="text-8xl m-auto my-4 text-green-600" />
              <p>
                Com o avanço da tecnologia, os crimes digitais crescem, exigindo
                análise forense de ativos, preservação de dados, detecção de
                incidentes e coleta de evidências. Realizamos investigações
                digitais, reconstrução de eventos e análises físicas para
                garantir a apuração precisa dos fatos.
              </p>
            </div>
          </div>
        </section>
      </section>

      <section className="bg-block-secondary w-full max-sm:px-2 py-14">
        <section className="container-minMain py-12 ">
          <h1 className="text-3xl font-bold mb-2">Nossa Expertise</h1>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col items-center m-auto text-center pt-2">
              <BsShieldLock className="text-8xl m-auto my-4 text-green-600" />
              <p>
                A Perícias Informáticas é referência em análise forense digital,
                oferecendo serviços de alta precisão para investigação de crimes
                cibernéticos e recuperação de dados. Com expertise em exames
                técnicos, rastreamento de evidências e análise de dispositivos,
                atuamos como assistentes técnicos.
              </p>
            </div>

            <div class="h-[1px] bg-green-300 flex-grow my-9"></div>

            <div className="flex flex-col items-center m-auto text-center pt-2">
              <BsCloudArrowDown className="text-8xl m-auto my-4 text-green-600" />
              <p>
                Especializada em investigações digitais, a Perícias Informáticas
                realiza análises forenses em dispositivos móveis, redes, bancos
                de dados e mídias digitais. Com metodologias internacionais,
                oferecemos suporte técnico em processos judiciais, desde a
                coleta de evidências até a elaboração de laudos periciais.
              </p>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default AboutServices;
