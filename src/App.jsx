import './App.css';
import PokemonProvider from './context/PokemonProvider';
import Router from './Router';

function App() {
  return (
    <>
      <PokemonProvider>
        <Router />
      </PokemonProvider>
    </>
  );
}

export default App;
