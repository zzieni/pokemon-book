import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import MOCK_DATA from '../data/MOCK_DATA';

const PokemonImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
`;

const PokemonName = styled.p`
  margin: 0 0 30px 0;
  font-size: 20px;
  color: #ff2525;
  font-weight: bold;
`;

const PokemonDes = styled.p`
  margin: 4px, 0, 4px, 0;
  font-size: 15px;
  color: #000000;
`;

const BackButton = styled.button`
  margin-top: 30px;
  padding: 8px 16px;
  background-color: #030303;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 30px 10px;
  &:hover {
    background-color: #3c22af;
  }
`;

// const AddButton = styled.button`
//   margin-top: 30px;
//   padding: 8px 16px;
//   background-color: #030303;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: background-color 0.3s;
//   margin: 30px 10px;
//   &:hover {
//     background-color: #22af51;
//   }
// `;

function PokemonDetail() {
  const pokemonData = MOCK_DATA;

  const { id } = useParams();
  const navigate = useNavigate();

  const pokemonDetail = pokemonData.find((pokemonId) => {
    return pokemonId.id === Number(id);
  });

  const handleBack = (e) => {
    e.preventDefault();
    navigate('/dex');
  };

  return (
    <>
      <PokemonImage src={pokemonDetail.img_url} alt={name} />
      <PokemonName>{pokemonDetail.korean_name}</PokemonName>
      <PokemonDes>타입 : {pokemonDetail.types}</PokemonDes>
      <PokemonDes>{pokemonDetail.description}</PokemonDes>
      <BackButton type="button" onClick={handleBack}>
        뒤로가기
      </BackButton>
      {/* <AddButton type="button">추가</AddButton> */}
    </>
  );
}

export default PokemonDetail;
