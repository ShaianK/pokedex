import { Link } from "react-router-dom";

export default function Navbar() {
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
                      <input type="text" placeholder="Search Pokemon" 
                      className="bg-transparent border-none outline-none text-xl ml-2 placeholder: text-gray-300 w-full"/>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
 )
}