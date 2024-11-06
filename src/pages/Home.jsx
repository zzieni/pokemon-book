import React from 'react';
import Dex from './Dex';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigte = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      <div>
        <button
          onClick={() => {
            navigte('/dex');
          }}
        >
          포켓몬 도감 시작하기
        </button>
      </div>
    </div>
  );
}

export default Home;
