import { useState } from "react";
import mailGridService from "../../utils/mailGridService";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [messageStatus, setMessageStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    assunto: "",
    message: "",
  });

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setIsSending(true);

    await mailGridService(formData);
    setIsSending(false);
    setMessageStatus("success");
  };

  return (
    <section className="text-text-primary py-36 max-w-5xl mx-auto px-4">
      <section className="flex flex-col md:flex-row gap-12 w-full">
        {/* Texto / Endereço à esquerda */}
        <div className="md:w-1/2 w-full flex items-center justify-center">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-4">
              Estamos aqui para te ajudar!
            </h2>
            <p className="text-lg">
              Rua São Bento, 365
              <br />
              Centro Histórico de São Paulo
              <br />
              São Paulo - SP, 01011-100
            </p>
            <p className="mt-4">
              Ou mande um e-mail para:
              <br />
              <strong>comercial@stwbrasil.com</strong>
            </p>
          </div>
        </div>

        {/* Formulário à direita */}
        <div className="md:w-1/2 w-full">
          <h1 className="text-3xl font-bold mb-6">Entre em contato</h1>
          <form className="space-y-4" onSubmit={handleSubmitForm}>
            <div>
              <label className="block text-sm mb-1" htmlFor="name">
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Seu nome"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="assunto">
                Assunto
              </label>
              <input
                type="text"
                id="assunto"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Digite o assunto"
                value={formData.assunto}
                onChange={(e) =>
                  setFormData({ ...formData, assunto: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="message">
                Mensagem
              </label>
              <textarea
                id="message"
                className="w-full border border-gray-300 rounded-md p-2 h-32"
                placeholder="Escreva sua mensagem..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              disabled={isSending}
            >
              enviar
            </button>
            {messageStatus === "success" && (
              <div className="text-green-600">Enviado com sucesso!</div>
            )}
            {messageStatus === "error" && (
              <div className="text-red-600">
                Erro ao enviar. Tente novamente.
              </div>
            )}
          </form>
        </div>
      </section>
    </section>
  );
};

export default Contact;
