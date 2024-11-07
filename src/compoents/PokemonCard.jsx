import React from 'react';
import styled from 'styled-components';
import MOCK_DATA from '../data/MOCK_DATA';

// 스타일링된 컴포넌트 정의
const Card = styled.div`
  width: 200px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background-color: #f8f8f8;
  margin: 30px;
`;

const PokemonImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  margin-bottom: 12px;
`;

const PokemonInfo = styled.p`
  margin: 4px 0;
  font-size: 14px;
  color: #333;
  font-weight: bold;
`;

const AddButton = styled.button`
  margin-top: 12px;
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

function PokemonCard() {
  const POKEMON_DATA = MOCK_DATA;

  return (
    <>
      {POKEMON_DATA.map((pokemon) => {
        return (
          <Card key={pokemon.id}>
            <PokemonImage src={pokemon.img_url} alt={name} />
            <PokemonInfo>{pokemon.korean_name}</PokemonInfo>
            <PokemonInfo>No. {pokemon.id}</PokemonInfo>
            <AddButton>추가</AddButton>
          </Card>
        );
      })}
    </>
  );
}

export default PokemonCard;
