import styles from "./callActionMain.module.css";

const CallActionMain = () => {
  return (
    <section className={`${styles.backgroundCTA}`}>
      <section className="container-main pt-20 w-full text-text-primary">
        <h1 className="text-5xl font-semibold">
          Descubra a verdade agora mesmo
        </h1>
        <h2 className="text-4xl py-3 font-medium">
          Perito Judicial em{" "}
          <span className="text-green-500">Tecnologia da Informação</span>
        </h2>
        <div className="flex flex-col items-start w-full text-lg">
          <p>
            Desvende crimes cibernéticos, recupere dados e analise evidências
            digitais com precisão.
          </p>
          <p>A computação forense é a chave para a justiça na era digital.</p>
          <p>
            <span className="text-green-500">
              A verdade está nos dados – descubra como encontrá-la.
            </span>
          </p>
        </div>

        <button className="bg-green-400 text-text-primary font-bold text-xl my-6 py-3 px-20 rounded font-text sm:hover:bg-green-500">
          Contato
        </button>
      </section>
    </section>
  );
};

export default CallActionMain;
