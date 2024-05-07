import React, { useState, useEffect } from 'react';
// @ts-ignore
import { getPokemonData, getEvolutionChain, getMoveData } from './pokemonService'; 
import { motion } from 'framer-motion';
import MoveComponent from './MoveComponent';

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

const PokemonDataDisplay = ({ pokemonName }: { pokemonName: string }) => {
  const [pokemonData, setPokemonData] : [any, any] = useState(null);
  const [evolutionChain, setEvolutionChain] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemonData(pokemonName);
      setPokemonData(data);

      const evolutionChainData = await getEvolutionChain(data.species.url);
      setEvolutionChain(evolutionChainData);
    };

    fetchData();
  }, [pokemonName]);

  if (!pokemonData || !evolutionChain) {
    return <div>Loading...</div>;
  }

  const getEvolutions = (chain: any) => {
    const evolutions = [];
    let current = chain;

    do {
      const name = current.species.name;
      const id = current.species.url.split('/')[6];
      const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
      evolutions.push({ name, id, sprite });
      current = current.evolves_to[0];
    } while (current && current.hasOwnProperty('evolves_to'));

    return evolutions;
  };

  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md h-screen grid grid-cols-2 gap-4">
      <div className="flex flex-col items-center justify-center">
        <img
          className="w-64 h-64 object-contain"
          src={(pokemonData as any).sprites.other['official-artwork'].front_default}
          alt={(pokemonData as any).name}
        />
        {pokemonData && <h2 className="text-xl font-semibold">{pokemonData.name}</h2>}
        <div className="flex mt-2">
          <span className="text-gray-700 mr-4">ID: {(pokemonData as any).id}</span>
          <div className="flex">
            {pokemonData.types.map((type: { type: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }; }, index: React.Key | null | undefined) => (
              <div
                key={index}
                className={`mr-2 px-2 py-1 text-white rounded ${getTypeColor(type.type.name)}`}>
                {type.type.name}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-200 px-4 py-2 shadow-md">
          <h2 className="text-lg font-semibold mb-2">Stats</h2>
          <div className="grid grid-cols-1 sd:w-96 md:w-96 md:grid-cols-2 lg:w-96 lg:rid-cols-2 xl:w-96 xl:grid-cols-2 gap-2">
            {pokemonData && (
              <>
                <StatsBar statName="HP" statValue={pokemonData.stats[0].base_stat} />
                <StatsBar statName="Attack" statValue={pokemonData.stats[1].base_stat} />
                <StatsBar statName="Defense" statValue={pokemonData.stats[2].base_stat} />
                <StatsBar statName="Speed" statValue={pokemonData.stats[5].base_stat} />
                <StatsBar statName="Special Attack" statValue={pokemonData.stats[3].base_stat} />
                <StatsBar statName="Special Defense" statValue={pokemonData.stats[4].base_stat} />
              </>
            )}
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold">Evolutions:</h3>
          <ul>
            {getEvolutions((evolutionChain as any)?.chain).map((evolution, index) => (
              <li className="flex" key={index}>
                <img className="w-20 h-20 object-contain" src={evolution.sprite} alt={evolution.name} />
                <span>{evolution.name} (ID: {evolution.id})</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="overflow-y-auto">
        <h3 className="text-lg font-semibold">Moves:</h3>

        <div className="grid grid-cols-1 gap-4">
          {pokemonData.moves.map((move: { move: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }; }) => {
            
            return (
              <MoveComponent key={move.move.name as string} moveName={move.move.name as string} />
            );
          })}
        </div>


      </div>

    </div>
  );
};

const getTypeColor = (type: any) => {
  switch (type) {
    case 'normal':
      return 'bg-gray-400';
    case 'fire':
      return 'bg-red-500';
    case 'water':
      return 'bg-blue-500';
    case 'electric':
      return 'bg-yellow-500';
    case 'grass':
      return 'bg-green-500';
    case 'ice':
      return 'bg-blue-200';
    case 'fighting':
      return 'bg-red-700';
    case 'poison':
      return 'bg-purple-500';
    case 'ground':
      return 'bg-yellow-700';
    case 'flying':
      return 'bg-blue-300';
    case 'psychic':
      return 'bg-purple-400';
    case 'bug':
      return 'bg-green-600';
    case 'rock':
      return 'bg-gray-600';
    case 'ghost':
      return 'bg-purple-800';
    case 'dragon':
      return 'bg-blue-800';
    case 'dark':
      return 'bg-gray-800';
    case 'steel':
      return 'bg-gray-500';
    case 'fairy':
      return 'bg-pink-300';
    default:
      return 'bg-gray-400';
  }
};

export default PokemonDataDisplay;
