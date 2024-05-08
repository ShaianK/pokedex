import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'; 
import { useState, useRef } from 'react';

export default function Navbar() {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const handleKeyDown = (e: { key: string; }) => {
    if (e.key === 'Enter') {
        navigate(`/pokemon/${searchValue.toLowerCase().replace(/\s+/g, '')}`);
    }
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-full mx-auto px-1 sm:px-2 lg:px-4">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-white text-3xl">Pokedex</h1>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <div className="bg-slate-600 w-full rounded-lg p-1 shadow-large flex items-center">
                <input
                  ref={inputRef}
                  onKeyDown={handleKeyDown}
                  type="text"
                  placeholder="Search Pokemon"
                  className="bg-transparent border-none outline-none text-xl ml-2 placeholder: text-gray-300 w-full"
                  onChange={(e) => setSearchValue(e.target.value)}
                  value={searchValue}
                  />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
 )
}