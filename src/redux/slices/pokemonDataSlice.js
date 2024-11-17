import { createSlice } from '@reduxjs/toolkit';

// 초기 데이터 initialState 생성 => state로 만들어준 데이터를 그대로 이용하면 된다.
const initialState = localStorage.getItem('localStorageData')
  ? JSON.parse(localStorage.getItem('localStorageData'))
  : [];

// createSlice 생성해주기 name 작명,
const pokemonDataSlice = createSlice({
  name: 'pokemonDataRedux',
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      state.push(action.payload);
    },
    removePokemon: (state, action) => {
      return state.filter((el) => action.payload !== el.id);
    },
  },
});

export const { addPokemon } = pokemonDataSlice.actions;
export const { removePokemon } = pokemonDataSlice.actions;
export default pokemonDataSlice.reducer;
