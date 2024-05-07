import Navbar from "./Navbar";
import PokemonData from "./pokemonDataDisplay";

export default function Pokemon() {
    return (
        <div>
            <Navbar />
            <PokemonData pokemonName="magikarp" />
        </div>
    )
}
