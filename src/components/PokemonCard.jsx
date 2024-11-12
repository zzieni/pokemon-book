import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';

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

const PokemonName = styled.p`
  margin: 4px 0;
  font-size: 20px;
  color: #000000;
  font-weight: bold;
`;

const PokemonId = styled.p`
  margin: 4px 0;
  font-size: 15px;
  color: #000000;
  /* font-weight: bold; */
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
    background-color: #005200;
  }
`;

function PokemonCard({ pokemon }) {
  const data = useContext(PokemonContext);

  const handleAdd = (e, selectedPokemon) => {
    e.preventDefault(); //본인 만
    // e.stopPropagation(); // 부모까지

    // 6개 제한, 중복 체크 하고 altet
    const maxPickedPokemon = data.pickedPokemonData.length >= 6;

    const checkedPokemon = data.pickedPokemonData.find((el) => {
      return el.id === selectedPokemon.id;
    });

    if (maxPickedPokemon) {
      alert('더 이상 포켓몬을 등록할 수 없습니다.');
    } else if (checkedPokemon) {
      alert('이미 추가된 포켓몬 입니다.');
    } else {
      data.setPickedPokemonData([...data.pickedPokemonData, selectedPokemon]);
    }
  };

  return (
    <>
      <Link to={`/pokemon/${pokemon.id}`}>
        <Card>
          <PokemonImage src={pokemon.img_url} alt={pokemon} />
          <PokemonName>{pokemon.korean_name}</PokemonName>
          <PokemonId>No. {pokemon.id}</PokemonId>
          <AddButton value={pokemon} onClick={(e) => handleAdd(e, pokemon)}>
            추가
          </AddButton>
        </Card>
      </Link>
    </>
  );
}

export default PokemonCard;
