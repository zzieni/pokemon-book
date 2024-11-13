import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';

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
