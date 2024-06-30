import {Routes, Route, useLocation} from 'react-router-dom';
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';
import WhoPokemon from './pages/WhoPokemon';
import './index.css';

export default function App() {
  const location = useLocation();
  
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/pokemon/:pokemonId" element={<Pokemon />} />
        <Route path="whosthatpokemon" element={<WhoPokemon />} />
      </Routes>
    </>
  );
}