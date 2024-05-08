import React, { useState, useEffect } from 'react';
// @ts-ignore
import { getMoveData } from './pokemonService'; // Import getMoveData function from pokemonService

const getTypeColor = (type: string) => {
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

type MoveComponentProps = {
  moveName: string;
};

const MoveComponent: React.FC<MoveComponentProps> = ({ moveName }) => {
  const [moveData, setMoveData] = useState<[string | null, number | null, number | null, string[]]>([null, null, null, []]);

  useEffect(() => {
    getMoveData(moveName).then((data: React.SetStateAction<[string | null, number | null, number | null, string[]]>) => {
        setMoveData(data);
    });
  }, [moveName]);

  console.log('Move data:', moveData);

  return (
    <div className="bg-white p-4 flex rounded-lg shadow-md justify-between">
      <p className="text-lg font-semibold">{moveName.replace("-", ' ')}</p>

      <div className='flex'>
        <p className="hidden lg:block text-lg font-semibold mx-4">ACC: {moveData[0]} POW: {moveData[1]} PP: {moveData[2]}</p>
        <div className="flex">
  <div
     // @ts-ignore
    key={moveData[3]}
    // @ts-ignore
    className={`mr-2 px-2 py-1 text-white rounded ${getTypeColor(moveData[3])}`}>
    {moveData[3]}
  </div>
</div>
      </div>
    </div>
  );
};

export default MoveComponent;
