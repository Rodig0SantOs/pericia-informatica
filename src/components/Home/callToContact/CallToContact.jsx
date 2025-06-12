import { useNavigate } from "react-router-dom";

export const CallToContact = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contato");
  };

  return (
    <section className="bg-background-CTA py-16 px-4 text-text-secondary">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">
          Seu caso precisa de provas técnicas? Fale com um Perito Judicial em TI
          agora!
        </h2>
        <p className="m-auto w-4/6 max-sm:w-full">
          Dúvidas em processos judiciais envolvendo dados, sistemas ou fraudes
          digitais? Um laudo pericial em TI pode ser decisivo para seu caso!
          Nossa equipe de Peritos Judiciais certificados garante análises
          técnicas imparciais, com embasamento científico e linguagem clara para
          tribunais.
        </p>
        <button
          className="bg-green-400 text-text-primary font-bold text-xl mt-12 py-3 px-20 rounded font-text sm:hover:bg-green-500"
          onClick={handleContactClick}
        >
          Entre em contato
        </button>
      </div>
    </section>
  );
};
