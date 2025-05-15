import style from "./About.module.css";

const About = () => {
  return (
    <section className={`${style.background}`}>
      <section className="text-text-primary py-36 max-w-5xl mx-auto">
        <section className="container-main w-full text-text-primary">
          <h1 className="text-4xl font-bold text-center mb-8">Sobre Nós</h1>

          <p className="mb-6 text-lg">
            Na <strong>Perícias Informáticas</strong>, somos especialistas em
            revelar a verdade por trás dos dados. Atuamos com excelência em{" "}
            <strong>Perícias Judiciais em Tecnologia da Informação</strong>,
            oferecendo análises técnicas que são decisivas em processos
            judiciais, investigações cibernéticas e na segurança digital de
            empresas e pessoas.
          </p>

          <p className="mb-6 text-lg">
            Com ampla experiência em <strong>computação forense</strong>, nossa
            equipe de <strong>Peritos Judiciais certificados</strong> é
            referência na identificação e análise de evidências digitais,
            recuperação de dados, rastreamento de e-mails, verificação de logs e
            exames em dispositivos móveis, redes e bancos de dados.
          </p>

          <p className="mb-6 text-lg">
            Nossa missão é clara:{" "}
            <strong>
              garantir precisão, transparência e imparcialidade na produção de
              provas técnicas
            </strong>{" "}
            que sustentam decisões justas. Para isso, seguimos metodologias
            reconhecidas internacionalmente, aliando conhecimento técnico à
            linguagem acessível e objetiva, compreensível por advogados,
            magistrados e demais partes envolvidas.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Áreas de Atuação
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>
              <strong>Perícia Judicial</strong>: elaboração de laudos e
              quesitos, com atuação nos principais tribunais do país.
            </li>
            <li>
              <strong>Investigação Cibernética</strong>: suporte a órgãos como
              polícias judiciárias e Ministério Público.
            </li>
            <li>
              <strong>Assistência Técnica</strong>: consultoria técnica para
              advogados, empresas e partes envolvidas em litígios.
            </li>
            <li>
              <strong>Segurança da Informação e Compliance</strong>: auditorias
              e adequações às normas ISO/IEC 27001, PCI-DSS e SOx.
            </li>
            <li>
              <strong>Treinamentos e Palestras</strong>: capacitações em
              tecnologia, perícia e proteção de dados.
            </li>
          </ul>

          <p className="mt-8 text-lg">
            Acreditamos que <strong>a verdade está nos dados</strong>, e nosso
            compromisso é descobrir, preservar e apresentar essas informações
            com responsabilidade, ética e profissionalismo. Cada caso é tratado
            com atenção individualizada, buscando sempre o melhor resultado para
            nossos clientes — como comprovam os diversos depoimentos positivos
            que recebemos ao longo dos anos.
          </p>

          <p className="mt-6 text-lg font-medium text-blue-700">
            Se o seu caso depende de <strong>provas técnicas</strong> ou se você
            precisa de suporte especializado para entender questões digitais em
            processos judiciais,{" "}
            <span className="underline">
              fale agora com um Perito Judicial em TI
            </span>
            . Estamos prontos para ajudá-lo a encontrar a verdade com clareza,
            ciência e precisão.
          </p>
        </section>
      </section>
    </section>
  );
};

export default About;
