import PokemonCard from './PokemonCard';
import styled from 'styled-components';
import MOCK_DATA from '../data/MOCK_DATA';

const PokemonListSection = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  text-align: center;
  margin: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

function PokemonList() {
  const pokemonData = MOCK_DATA;

  return (
    <PokemonListSection>
      {pokemonData.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </PokemonListSection>
  );
}

export default PokemonList;
