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
      response.data.accuracy !== null ? response.data.accuracy : "N/A",
      response.data.power !== null ? response.data.power : "N/A",
      response.data.pp !== null ? response.data.pp : "N/A",
      response.data.type.name !== null ? response.data.type.name : "N/A"
    ];
    return moveData;
  } catch (error) {
    console.error(error);
    return ["N/A", "N/A", "N/A", "N/A"]; // Return "N/A" values if there's an error
  }
};