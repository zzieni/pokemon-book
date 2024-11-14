import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dex from './pages/Dex';
import PokemonDetail from './components/PokemonDetail';
import NotFound from './components/NotFound';

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex" element={<Dex />} />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
