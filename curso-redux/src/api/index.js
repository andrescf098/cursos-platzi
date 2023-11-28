import axios from 'axios';

export const getPokemon = async () => {
  try {
    const response = await axios.get(
      'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
    );
    return await response.data.results;
  } catch (error) {
    console.log('Error: ', error);
  }
};

export const getPokemonDetails = async (pokemon) => {
  try {
    const response = await axios.get(pokemon.url);
    return await response.data;
  } catch (error) {
    console.log('Error: ', error);
  }
};
