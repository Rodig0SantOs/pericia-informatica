import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import App from "./App";
import About from "./page/about/About";
import Contact from "./page/Contact/contact";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sobreNos" element={<About />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
