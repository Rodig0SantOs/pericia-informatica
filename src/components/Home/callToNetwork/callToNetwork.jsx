export const CallToNetwork = () => {
  return (
    <section className="py-16 px-4 text-text-primary bg-gray-50">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        <h2 className="text-2xl font-bold">Nosso endereço e contato</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Entre em contato conosco ou venha nos visitar!
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto text-text-primary">
          <div>
            <h3 className="font-semibold mb-2">Endereço</h3>
            <p>
              R. São Bento, 365
              <br />
              Centro Histórico de São Paulo
              <br />
              São Paulo - SP, 01011-100
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Telefone</h3>
            <p>(11) 93767-9650</p>
            {/* <p>(11) 4002-8922</p> */}
          </div>
          <div>
            <h3 className="font-semibold mb-2">E-mail</h3>
            <p>comercial@stwbrasil.com</p>
            {/* <p>suporte@exemplo.com.br</p> */}
          </div>
        </div>
      </div>
    </section>
  );
};
