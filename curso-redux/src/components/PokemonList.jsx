import PropType from 'prop-types';
import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemons }) => {
  return (
    <div className='pokemon-list'>
      {pokemons.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.name}
            id={pokemon.id}
            name={pokemon.name}
            img={pokemon.sprites.front_default}
            description={pokemon.types}
            favorite={pokemon.favorite}
          />
        );
      })}
    </div>
  );
};
PokemonList.propTypes = {
  pokemons: PropType.array,
};

export default PokemonList;
