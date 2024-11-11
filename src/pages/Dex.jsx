import { useState } from 'react';
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';

function Dex() {
  const [pickedPokemonData, setPickedPokemonData] = useState([]);

  return (
    <>
      <header>
        <Dashboard
          pickedPokemonData={pickedPokemonData}
          setPickedPokemonData={setPickedPokemonData}
        />
      </header>

      <main>
        <PokemonList
          pickedPokemonData={pickedPokemonData}
          setPickedPokemonData={setPickedPokemonData}
        />
      </main>
      <footer />
    </>
  );
}

export default Dex;
