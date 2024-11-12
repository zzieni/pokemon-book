import styled from 'styled-components';
import pokeball from '/src/assets/images/pokeball.png';
import { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Container = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  text-align: center;
  margin: 10px;
`;

const Title = styled.h2`
  text-align: center;
  color: black;
  font-size: 24px;
  margin-bottom: 20px;
`;

const MyPokemonSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;

  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const Pokeball = styled.div`
  background-color: #f8f8f8;
  border: 2px dashed gray;
  border-radius: 15px;
  margin: 20px;
`;

const PokeballImg = styled.img`
  width: 50px;
  height: 50px;
  margin: 40px;
`;

const PickedPokemon = styled.div``;

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

const RemoveButton = styled.button`
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

function Dashboard() {
  const data = useContext(PokemonContext);

  const handleRemove = (e, pokemon) => {
    e.preventDefault();

    const removePokemon = data.pickedPokemonData.filter((el) => {
      return pokemon.id !== el.id;
    });

    Swal.fire({
      icon: 'warning',
      text: '등록 포켓몬이 삭제 하시겠습니까?',
      showCancelButton: true,
      confirmButtonText: '삭제',
      cancelButtonText: '취소',
    }).then((result) => {
      if (result.value) {
        data.setPickedPokemonData(removePokemon);
        localStorage.setItem('localStorageData', JSON.stringify(removePokemon));
      }
    });
  };

  const monsterBallCount = 6;

  let dashboradList = monsterBallCount - data.pickedPokemonData.length;

  let monsterBall = new Array(dashboradList).fill(null);

  return (
    <Container>
      <Title>나만의 포켓몬</Title>
      <MyPokemonSection>
        {data.pickedPokemonData.map((pokemon) => {
          return (
            <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
              <PickedPokemon>
                <PokemonImage src={pokemon.img_url} alt={pokemon} />
                <PokemonName>{pokemon.korean_name}</PokemonName>
                <RemoveButton onClick={(e) => handleRemove(e, pokemon)}>
                  삭제
                </RemoveButton>
              </PickedPokemon>
            </Link>
          );
        })}
        {monsterBall.map((_, index) => {
          return (
            <Pokeball key={index}>
              <PokeballImg src={pokeball} alt={pokeball} />
            </Pokeball>
          );
        })}
      </MyPokemonSection>
    </Container>
  );
}

export default Dashboard;
