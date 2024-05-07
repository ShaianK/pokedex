import axios from 'axios';

export const getPokemonData = async (pokemonName) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  return response.data;
};

export const getEvolutionChain = async (speciesUrl) => {
  const speciesResponse = await axios.get(speciesUrl);
  const evolutionChainResponse = await axios.get(speciesResponse.data.evolution_chain.url);
  return evolutionChainResponse.data;
};

export const getMoveData = async (move) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/move/${move}`);
    const moveData = [
      response.data.accuracy,
      response.data.power,
      response.data.pp
    ];
    return moveData;
  } catch (error) {
    console.error(error);
    return [null, null, null]; // Return null values if there's an error
  }
};
