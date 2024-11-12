import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import Swal from 'sweetalert2';

// 스타일링된 컴포넌트 정의

const CardList = styled.div`
  margin: 10px;
`;

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

    const maxPickedPokemon = data.pickedPokemonData.length >= 6;

    const checkedPokemon = data.pickedPokemonData.find((el) => {
      return el.id === selectedPokemon.id;
    });
    if (maxPickedPokemon) {
      Swal.fire({
        icon: 'warning',
        text: '더 이상 포켓몬을 등록할 수 없습니다.',
      });
    } else if (checkedPokemon) {
      Swal.fire({
        icon: 'warning',
        text: '이미 추가된 포켓몬 입니다.',
      });
    } else {
      Swal.fire({
        icon: 'success',
        text: `${selectedPokemon.korean_name} 포켓몬을 등록 하시겠습니까?`,
        imageUrl: `${selectedPokemon.img_url}`,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Pokemon image',
        showCancelButton: true,
        confirmButtonText: '등록',
        cancelButtonText: '취소',
      }).then((result) => {
        if (result.value) {
          data.setPickedPokemonData([
            ...data.pickedPokemonData,
            selectedPokemon,
          ]);
          localStorage.setItem(
            'localStorageData',
            JSON.stringify([...data.pickedPokemonData, selectedPokemon])
          );
        }
      });
    }
  };

  return (
    <CardList>
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
    </CardList>
  );
}

export default PokemonCard;
