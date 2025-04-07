import "./App.css";
import About from "./companents/About";
import Header from "./companents/Header";
import Promo from "./companents/Promo";
import Schema from "./companents/Schema";
import Contacts from "./companents/Contacts";
import Footer from "./companents/Footer";
import { BrowserRouter } from "react-router-dom";

// import { HashRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Promo />
      <About />
      <Schema />
      <Contacts />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
