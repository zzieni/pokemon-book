import { createContext, useState } from 'react';
import Swal from 'sweetalert2';

export const PokemonContext = createContext(null);

function PokemonProvider({ children }) {
  const [pickedPokemonData, setPickedPokemonData] = useState(() =>
    localStorage.getItem('localStorageData')
      ? JSON.parse(localStorage.getItem('localStorageData'))
      : []
  );

  const handleAdd = (e, selectedPokemon) => {
    e.preventDefault(); //본인 만
    // e.stopPropagation(); // 부모까지

    const maxPickedPokemon = pickedPokemonData.length >= 6;

    const checkedPokemon = pickedPokemonData.find((el) => {
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
        showCancelButton: true,
        confirmButtonText: '등록',
        cancelButtonText: '취소',
        imageUrl: `${selectedPokemon.img_url}`,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom image',
      }).then((result) => {
        if (result.value) {
          setPickedPokemonData([...pickedPokemonData, selectedPokemon]);
          localStorage.setItem(
            'localStorageData',
            JSON.stringify([...pickedPokemonData, selectedPokemon])
          );
        }
      });
    }
  };

  return (
    <PokemonContext.Provider
      value={{ pickedPokemonData, setPickedPokemonData, handleAdd }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export default PokemonProvider;
