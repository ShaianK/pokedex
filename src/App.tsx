import {Routes, Route, useLocation} from 'react-router-dom';
import Home from './components/Home';
import Pokemon from './components/Pokemon';
import './index.css';

export default function App() {
  const location = useLocation();
  
  return (
    <div>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/pokemon/:pokemonId" element={<Pokemon />} />
      </Routes>
    </div>
  );
}