import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div id="container" className="h-screen bg-gray-900">
        <div className="flex justify-center items-center flex-col pt-60 min-w-[400px] w-full">
          <h1 className='text-9xl text-neutral-100 uppercase tracking-tight pb-5'>POKEDEX</h1>
          <div className="w-[450px]">
            <SearchBar/>
            <SearchResult/>
          </div>
        </div>
        <Link className="text-white" to="/pokemon">Display Pokemon</Link>
    </div>
  );
}