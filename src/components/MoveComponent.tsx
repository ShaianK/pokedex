import React, { useState, useEffect } from 'react';
// @ts-ignore
import { getMoveData } from '../services/pokemonService'; // Import getMoveData function from pokemonService
import getTypeColor from '../utils/typeColors';

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
