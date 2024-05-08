import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import names from '../assets/names.json';
import { motion } from "framer-motion";

export default function SearchBar() {
  const [myValue, setMyValue] = useState('');
  const navigate = useNavigate();

  const handleChange = (value: React.SetStateAction<string>) => {
    setMyValue(value);
    console.log(value);
  };

  const handleKeyDown = (e : any) => {
    if (e.key === 'Enter') {
      navigate(`/pokemon/${myValue.replace(/\s+/g, '')}`);
    }
  };

  const getPokemonIndex = (pokemonName: string): number => {
    return names.findIndex(name => name.toLowerCase() === pokemonName.toLowerCase());
  };

  return (
    <>
    <div className="bg-slate-600 w-full rounded-lg h-[12] p-4 shadow-large flex items-center">
      <input
        type="text"
        placeholder="Search Pokemon"
        className="bg-transparent border-none outline-none text-xl ml-0 placeholder:text-gray-300 w-full"
        value={myValue}
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <Link to={`/pokemon/${myValue}`}>
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
    
    <div className="w-full bg-slate-600 flex flex-col shadow-lg rounded-lg 
                        mt-4 h-[250px] overflow-y-scroll px-1 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-700 
                        scrollbar-thumb-rounded-full">
        {names.filter(pokemon => pokemon.toLowerCase().includes(myValue.toLowerCase())).map((pokemon, index) => (
            <li onClick={() => navigate(`/pokemon/${pokemon.toLowerCase()}`)} className="flex cursor-pointer items-center justify-between py-2 hover:bg-slate-700 rounded-lg" key={index}>
            <img
                className="w-12 ml-1"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonIndex(pokemon) + 1}.png`}
                alt={`Sprite of ${pokemon}`}
            ></img>
            <p className="text-xl text-neutral-100">{pokemon}</p>
            <p className="text-xl mr-2 text-neutral-100">{`#${getPokemonIndex(pokemon) + 1}`}</p>
            </li>
        ))}                      
    </div>

    </>
    
  );
}
