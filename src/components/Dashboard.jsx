import styled from 'styled-components';
import pokeball from '/src/assets/images/pokeball.png';

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

function Dashboard({ pickedPokemonData }) {
  return (
    <Container>
      <Title>나만의 포켓몬</Title>
      <MyPokemonSection>
        <Pokeball key={1}>
          <PokeballImg src={pokeball} alt="pokeball" />
        </Pokeball>
        <Pokeball key={2}>
          <PokeballImg src={pokeball} alt="pokeball" />
        </Pokeball>
        <Pokeball key={3}>
          <PokeballImg src={pokeball} alt="pokeball" />
        </Pokeball>
        <Pokeball key={4}>
          <PokeballImg src={pokeball} alt="pokeball" />
        </Pokeball>
        <Pokeball key={5}>
          <PokeballImg src={pokeball} alt="pokeball" />
        </Pokeball>
        <Pokeball key={6}>
          <PokeballImg src={pokeball} alt="pokeball" />
        </Pokeball>
      </MyPokemonSection>
    </Container>
  );
}

export default Dashboard;