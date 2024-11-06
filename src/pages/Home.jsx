import React from 'react';
import Dex from './Dex';
import { useNavigate } from 'react-router-dom';
import logo from '/src/assets/images/logo.png';

function Home() {
  const navigte = useNavigate();
  return (
    <>
      <img src={logo} className="logo" />
      <div>
        <button
          onClick={() => {
            navigte('/dex');
          }}
        >
          포켓몬 도감 시작하기
        </button>
      </div>
    </>
  );
}

export default Home;
