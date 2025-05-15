import "./App.css";
import { Footer } from "./components/footer/Footer";
import Header from "./components/header/Header";
import AboutServices from "./components/Home/aboutServices/AboutServices";
import CallActionMain from "./components/Home/callActionMain/callActionMain";
import { CallToContact } from "./components/Home/callToContact/CallToContact";
import { CallToNetwork } from "./components/Home/callToNetwork/callToNetwork";
import Comment from "./components/Home/comment/Comment";
import ListServeces from "./components/Home/listServeces/ListServeces";

function App() {
  return (
    <>
      <CallActionMain />
      <AboutServices />
      <ListServeces />
      <Comment />
      <CallToContact />
      <CallToNetwork />
    </>
  );
}

export default App;
