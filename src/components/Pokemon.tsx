import Navbar from "./Navbar";
import { motion } from "framer-motion";
import Move from "./Move";
import { getPokemon } from "./pokeAPIService";

export default function Pokemon() {
    
    getPokemon("magikarp");

    const StatsBar = ({ statName, statValue }: { statName: string, statValue: number }) => {
        return (
          <div className="flex items-center mb-1">
            <span className="font-semibold w-16">{statName}:</span> 
            <div className="flex items-center flex-1 ml-2">
              <div className="w-full h-3 bg-gray-300 rounded-lg">
                <motion.div
                  className="h-full bg-green-500 rounded-lg"
                  initial={{ width: "0%" }}
                  animate={{ width: `${statValue}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
              <span className="ml-2 mr-1">{statValue}</span>
            </div>
          </div>
        );
      };
      
    
    return (
        <div className="bg-gray-900 items-center h-screen">
            <Navbar />
            <div className="flex flex-col-2 gap-1 h-5/6">
                <div className="flex-none grid flex-row-3 bg-green-500 w-1/3 min-w-1/3">
                    <div>
                        <img className="h-full w-full" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"/>
                    </div>
                    <div className="flex grid-col-2 justify-between">
                        <div className="bg-blue-500">
                            <h1 className="text-base sm:text-2lg md:text-2xl lg:text-3xl xl:text-4xl text-neutral-100 uppercase tracking-tight">PIKACHU</h1> 
                            <h1 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl text-neutral-100 uppercase tracking-tight">#025</h1> 
                        </div>
                        <div className="bg-purple-500 flex grid-col-2 justify-between items-center">
                            <h1 className="bg-gray-500 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl text-neutral-100 uppercase tracking-tight mx-1">Psychic</h1> 
                            <h1 className="bg-gray-500 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl text-neutral-100 uppercase tracking-tight mx-1">Psychic</h1>
                        </div>
                    </div>
                    
                    <div className="bg-gray-200 px-4 py-2 shadow-md">
                        <h2 className="text-lg font-semibold mb-2">Stats</h2>
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-2">
                            <StatsBar statName="HP" statValue={35} />
                            <StatsBar statName="Attack" statValue={55} />
                            <StatsBar statName="Defense" statValue={40} />
                            <StatsBar statName="Speed" statValue={90} />
                            <StatsBar statName="Special Attack" statValue={50} />
                            <StatsBar statName="Special Defense" statValue={50} />
                        </div>
                    </div>

                </div> 
                <div className="flex flex-1 bg-red-500">
                    <div className="w-96 bg-slate-600 flex flex-col shadow-lg 
                            overflow-y-scroll px-1 scrollbar-thin scrollbar-thumb-gray-700
                            scrollbar-track-gray-900 scrollbar-thumb-rounded-full">
                        <h2 className="flex justify-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl text-neutral-100 uppercase tracking-tight">Moves</h2>
                        <ul>
                            <Move />
                            <Move />
                            <Move />
                            <Move />
                            <Move />
                            <Move />
                            <Move />
                            <Move />
                            <Move />
                            <Move />
                            <Move />
                            <Move />
                            <Move />
                            <Move />
                            <Move />
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
