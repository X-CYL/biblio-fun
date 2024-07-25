import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Acceuil from "../src/components/pages/Acceuil";
import QuiSuisJe from "./components/pages/QuiSuisJe";
import NotFound404 from './components/pages/NotFound404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/qui suis je" element={<QuiSuisJe />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
