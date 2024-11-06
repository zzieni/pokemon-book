import React from 'react';
import Dashboard from '../compoents/Dashboard';
import PokemonList from '../compoents/PokemonList';

function Dex() {
  return (
    <>
      <header>
        <Dashboard />
      </header>
      <main>
        <PokemonList />
      </main>
      <footer />
    </>
  );
}

export default Dex;
