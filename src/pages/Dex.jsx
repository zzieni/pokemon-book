import { useState } from 'react';
import Dashboard from '../compoents/Dashboard';
import PokemonList from '../compoents/PokemonList';

function Dex() {
  const [pickedPokemonData, setPickedPokemonData] = useState([]);

  // const [pokemonData, setPokemonData] = useState(MOCK_DATA);

  return (
    <>
      <header>
        <Dashboard
          pickedPokemonData={pickedPokemonData}
          setPickedPokemonData={setPickedPokemonData}
        />
      </header>

      <main>
        <PokemonList />
      </main>
      <footer />
    </>
  );
}

export default Dex;
