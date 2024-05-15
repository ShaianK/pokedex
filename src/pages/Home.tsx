import SearchBar from "../components/Search";

export default function Home() {
  return (
    <div id="container" className="h-screen bg-gray-200 flex flex-col justify-center items-center">
        <div className="flex flex-col items-center">
          <h1 className='text-black text-4xl md:text-9xl tracking-tight pb-5'>POKEDEX</h1>
          <div className="w-full md:w-[450px]">
            <SearchBar/>
          </div>
        </div>
    </div>
  );
}