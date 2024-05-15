import { Link, useNavigate } from 'react-router-dom';
import names from '../assets/names.json';
import { motion } from "framer-motion";
import useSearchValue from '../hooks/useSearchValue';

export default function SearchBar() {
  const { searchValue, handleChange, handleKeyDown } = useSearchValue();
  const navigate = useNavigate();

  const getPokemonIndex = (pokemonName: string) => {
    return names.findIndex(name => name.toLowerCase() === pokemonName.toLowerCase());
  };

  const filteredPokemon = names.filter(pokemon => pokemon.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <>
      <div className="bg-slate-500 w-full rounded-lg h-[12] p-4 shadow-large flex items-center">
        <input
          type="text"
          placeholder="Search Pokemon"
          className="bg-transparent border-none outline-none text-xl ml-0 placeholder:text-gray-300 w-full"
          value={searchValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />

        <Link to={`/pokemon/${searchValue}`}>
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg"
              alt="Poke Ball"
              className="text-red-500 cursor-pointer"
              style={{ width: "24px", height: "24px", opacity: 0.8 }}
            />
          </motion.div>
        </Link>
      </div>

      <div className="w-full bg-slate-500 flex flex-col shadow-lg rounded-lg mt-4 h-[250px] overflow-y-scroll px-1 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-600 scrollbar-thumb-rounded-full">
        {filteredPokemon.map((pokemon, index) => (
          <li key={index} onClick={() => navigate(`/pokemon/${pokemon.toLowerCase()}`)} className="flex cursor-pointer items-center justify-between py-2 hover:bg-slate-700 rounded-lg">
            <img
              className="w-12 ml-1"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonIndex(pokemon) + 1}.png`}
              alt={`Sprite of ${pokemon}`}
            />
            <p className="text-xl text-neutral-100">{pokemon}</p>
            <p className="text-xl mr-2 text-neutral-100">{`#${getPokemonIndex(pokemon) + 1}`}</p>
          </li>
        ))}
      </div>
    </>
  );
}
