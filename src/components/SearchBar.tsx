import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import names from '../assets/names.json';

export default function SearchBar() {
  const [myValue, setMyValue] = useState('');
  const navigate = useNavigate();

  const handleChange = (value: React.SetStateAction<string>) => {
    setMyValue(value);
    console.log(value);
  };

  const handleKeyDown = (e : any) => {
    if (e.key === 'Enter') {
      navigate(`/pokemon/${myValue}`);
    }
  };

  let id = 1;

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
        <FaSearch className="text-red-500 cursor-pointer" />
      </Link>
    </div>
    
    <div className="w-full bg-slate-600 flex flex-col shadow-lg rounded-lg 
                        mt-4 h-[250px] overflow-y-scroll px-1 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 
                        scrollbar-thumb-rounded-full">
        {names.filter(pokemon => pokemon.toLowerCase().includes(myValue.toLowerCase())).map((pokemon, index) => (
            <li className="flex items-center justify-between py-2 hover:bg-slate-700 rounded-lg" key={index}>
            <img
                className="w-12"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`}
                alt={`Sprite of ${pokemon}`}
            ></img>
            <p className="text-xl text-neutral-100">{pokemon}</p>
            <p className="text-xl text-neutral-100">{`#${index + 1}`}</p>
            </li>
        ))}                      
    </div>

    </>
    
  );
}
