import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import PokemonProvider from '../context/PokemonProvider';

function Dex() {
  // const handleAdd = (e, selectedPokemon) => {
  //   e.preventDefault(); //본인 만
  //   // e.stopPropagation(); // 부모까지

  //   const maxPickedPokemon = pickedPokemonData.length >= 6;

  //   const checkedPokemon = pickedPokemonData.find((el) => {
  //     return el.id === selectedPokemon.id;
  //   });
  //   if (maxPickedPokemon) {
  //     Swal.fire({
  //       icon: 'warning',
  //       text: '더 이상 포켓몬을 등록할 수 없습니다.',
  //     });
  //   } else if (checkedPokemon) {
  //     Swal.fire({
  //       icon: 'warning',
  //       text: '이미 추가된 포켓몬 입니다.',
  //     });
  //   } else {
  //     Swal.fire({
  //       icon: 'success',
  //       text: `${selectedPokemon.korean_name} 포켓몬을 등록 하시겠습니까?`,
  //       showCancelButton: true,
  //       confirmButtonText: '등록',
  //       cancelButtonText: '취소',
  //       imageUrl: 'https://unsplash.it/400/200',
  //       imageWidth: 400,
  //       imageHeight: 200,
  //       imageAlt: 'Custom image',
  //     }).then((result) => {
  //       if (result.value) {
  //         setPickedPokemonData([...pickedPokemonData, selectedPokemon]);
  //         localStorage.setItem(
  //           'localStorageData',
  //           JSON.stringify([...pickedPokemonData, selectedPokemon])
  //         );
  //       }
  //     });
  //   }
  // };

  return (
    <PokemonProvider>
      <header>
        <Dashboard />
      </header>

      <main>
        <PokemonList />
      </main>
      <footer />
    </PokemonProvider>
  );
}

export default Dex;
