import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "components/pages/Acceuil";
import QuiSuisJe from "components/pages/QuiSuisJe";
import Connexion from "components/pages/Connexion";
import Inscription from "components/pages/Inscription";
import RecordBook from "components/pages/Enregistrement";
import NotFound404 from "components/pages/NotFound404";
import AfficheLivres from "components/pages/AfficheLivres";
import Contact from "components/pages/Contact";
import Admin from "components/pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/qui suis je" element={<QuiSuisJe />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/book/create" element={<RecordBook />} />
        <Route path="/book/:bookId/edit" element={<RecordBook />} />
        <Route path="/affiche livres" element={<AfficheLivres />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/administration" element={<Admin />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
