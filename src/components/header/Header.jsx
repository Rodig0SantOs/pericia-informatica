import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import pericias from "../../assets/logo/Logo_Perícia_Informatica_segunda_versao.svg";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();

  const isSobrePage = location.pathname === "/sobreNos";
  const isContato = location.pathname === "/contato";

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2 ${
        hasScrolled ? "bg-block-primary shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center max-sm:px-4 py-4 container-main">
        <h1>
          <img
            className="w-12 sm:w-36 md:w-44 lg:w-52 xl:w-60 2xl:w-20"
            src={pericias}
            alt="logo"
          />
        </h1>

        <button
          className="sm:hidden text-text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } sm:block absolute sm:static top-full left-0 right-0 bg-block-primary sm:bg-transparent p-4 sm:p-0 shadow-md sm:shadow-none`}
        >
          <ul className="flex flex-col sm:flex-row gap-1 sm:gap-6 font-text items-start sm:items-center">
            <li className="w-full sm:w-auto">
              <a
                href="/"
                className={`block w-full hover:bg-button-primary hover:text-text-primary transition duration-200 px-4 py-3 sm:px-4 sm:py-1 rounded ${
                  hasScrolled || isSobrePage || isContato
                    ? "text-text-primary"
                    : "sm:text-text-secondary"
                }`}
              >
                Home
              </a>
            </li>

            <li className="w-full sm:w-auto">
              <a
                href="/sobreNos"
                className={`block w-full hover:bg-button-primary hover:text-text-primary transition duration-200 px-4 py-3 sm:px-4 sm:py-1 rounded ${
                  hasScrolled || isSobrePage || isContato
                    ? "text-text-primary"
                    : "sm:text-text-secondary"
                }`}
              >
                Sobre
              </a>
            </li>

            <li className="w-full sm:w-auto">
              <a
                href="#servicos"
                className={`block w-full hover:bg-button-primary hover:text-text-primary transition duration-200 px-4 py-3 sm:px-4 sm:py-1 rounded ${
                  hasScrolled || isSobrePage || isContato
                    ? "text-text-primary"
                    : "sm:text-text-secondary"
                }`}
              >
                Serviços
              </a>
            </li>

            <li className="w-full sm:w-auto mt-2 sm:mt-0">
              <a
                href="/contato"
                className={`block w-full text-center transition duration-200 py-3 px-4 sm:py-2 sm:px-6 font-bold text-sm sm:text-base rounded-sm ${
                  hasScrolled
                    ? "bg-button-primary text-text-primary hover:bg-subtitle-emphasis"
                    : "bg-button-primary text-text-primary hover:bg-subtitle-emphasis"
                }`}
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
