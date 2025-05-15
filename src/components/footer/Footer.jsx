import {
  FaSquareInstagram,
  FaLinkedin,
  FaXTwitter,
  FaFacebook,
} from "react-icons/fa6";

export const Footer = () => {
  return (
    <section className="bg-background-CTA py-16 px-4 text-text-secondary">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        {/* Logo ou nome */}
        <h2 className="text-2xl font-bold">Perícia Informatica</h2>

        {/* Links úteis */}
        <ul className="flex justify-center gap-6 text-sm font-medium flex-wrap">
          <li>
            <a href="#sobre" className="hover:underline">
              Sobre nós
            </a>
          </li>
          <li>
            <a href="#servicos" className="hover:underline">
              Serviços
            </a>
          </li>
          <li>
            <a href="#contato" className="hover:underline">
              Contato
            </a>
          </li>
          <li>
            <a href="#politica" className="hover:underline">
              Política de Privacidade
            </a>
          </li>
        </ul>

        {/* Redes sociais */}
        <ul className="flex justify-center gap-6">
          <li className="text-2xl text-[#E4405F]">
            <a
              href="https://www.instagram.com/stwbrasil/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareInstagram />
            </a>
          </li>
          <li className="text-2xl text-[#0077B5]">
            <a
              href="https://www.linkedin.com/company/stwbrasil-tecnologia-da-informacao"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="text-2xl text-[#1877F2]">
            <a
              href="https://www.facebook.com/StwBrasil/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </li>
        </ul>

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Perícia Informatica. Todos os
          direitos reservados.
        </p>
      </div>
    </section>
  );
};
