import { createContext, useState } from 'react';

export const PokemonContext = createContext(null);

function PokemonProvider({ children }) {
  const [pickedPokemonData, setPickedPokemonData] = useState(() =>
    localStorage.getItem('localStorageData')
      ? JSON.parse(localStorage.getItem('localStorageData'))
      : []
  );
  return (
    <PokemonContext.Provider
      value={{ pickedPokemonData, setPickedPokemonData }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export default PokemonProvider;
