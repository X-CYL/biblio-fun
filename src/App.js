import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Acceuil from "components/pages/Acceuil";
import QuiSuisJe from "components/pages/QuiSuisJe";
import Connexion from 'components/pages/Connexion';
import Inscription from 'components/pages/Inscription';
import NotFound404 from 'components/pages/NotFound404';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/qui suis je" element={<QuiSuisJe />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
