import { useState } from 'react';
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import { PokemonContext } from '../context/PokemonContext';

function Dex() {
  const [pickedPokemonData, setPickedPokemonData] = useState([]);

  return (
    <PokemonContext.Provider
      value={{ pickedPokemonData, setPickedPokemonData }}
    >
      <header>
        <Dashboard />
      </header>

      <main>
        <PokemonList />
      </main>
      <footer />
    </PokemonContext.Provider>
  );
}

export default Dex;
