import React from 'react';
import Navbar from "./Navbar";
import PokemonData from "./pokemonDataDisplay";
import { useParams } from 'react-router-dom';

export default function Pokemon() {
    //pokemonName = 'charizard'
    const { pokemonId } = useParams();
    console.log("POKEMON NAME RECIVED IS" + pokemonId)
    
    return (
        <div>
            <Navbar />
            <PokemonData pokemonName={pokemonId?.toLowerCase() || ''} />
        </div>
    )
}
