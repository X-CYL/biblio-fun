import Footer from "../src/components/layout/Footer";
import Acceuil from "../src/components/pages/Acceuil";
import Header from "../src/components/layout/Header";
import QuiSuisJe from "../src/components/pages/QuiSuisJe";
import BackgroundImageComponent from "./components/layout/BackgroundImageComponent";
import backgroundImage from "./assets/pics/fairytale-storytelling-with-open-book-concept.jpeg";
import BiblioFunTitle from "./components/micro/BiblioFunTitle";

function App() {
  return (
    <>
      <div>
        <Header />
        <BiblioFunTitle />
        <BackgroundImageComponent>
          
        </BackgroundImageComponent>
        <Footer />
      </div>
    </>
  );
}

export default App;
