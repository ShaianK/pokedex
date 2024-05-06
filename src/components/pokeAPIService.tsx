import axios from 'axios';

export const pokeAPIService = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 5000,
});

export const getPokemon = async (pokemon: string) => {
  try {
    const response = await pokeAPIService.get(`pokemon/${pokemon}`);
    console.log(response.data)
    
    let pokemonStats : any = []
    let pokemonTypes : any = []

    response.data.stats.forEach((stat: { base_stat: any; }) => {
        pokemonStats.push(stat.base_stat)
    });

    response.data.types.forEach((type: { type: { name: any; }; }) => {
        pokemonTypes.push(type.type.name)
    });

    let pokemonData = [getMoves(response), pokemonStats, pokemonTypes]

    console.log(pokemonData)

    return pokemonData;
  } catch (error) {
    console.error(error);
  }
};

export const getMoves = (res : any) => {
    let movesNames = res.data.moves
    let movesDataArr : any = []

    movesNames.forEach((move : any) => {
        getMove(move.move.name).then((res) => movesDataArr.push(res))
    })

    return movesDataArr
}

export const getMove = async (move : string) => {
    try {
        const response = await pokeAPIService.get(`move/${move}`)

        let moveArr = [response.data.name, response.data.accuracy, response.data.power, response.data.pp, response.data.type.name]

        return moveArr
    } catch (error) {
        console.error(error);
    }
}