import { configureStore } from '@reduxjs/toolkit';
import pokemonDataRedux from '../slices/pokemonDataSlice';

// store 라는 변수명에 configureStore를 이용해서 리덕스를 생성해준다.
// reducer: {    pokemonDataRedux,  } -> createSlice의 name 과 동일 해야됨!!! (이게 페이로드네임? 액션 네임?)
// 하고 export

// 현재 리덕스 스토어에는 pokemonDataRedux 하나의 저장소만 생성 되었음 여러개 새성 가능
const store = configureStore({
  reducer: {
    pokemonDataRedux,
  },
});

export default store;
