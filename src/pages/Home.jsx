import { useNavigate } from 'react-router-dom';
import logo from '/src/assets/images/logo.png';
import styled from 'styled-components';

const LogoImage = styled.img`
  width: 400px;
  height: auto;
  margin-bottom: 30px;
`;

const StartBtn = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff9c1b;
  }
`;

function Home() {
  const naviagte = useNavigate();
  return (
    <>
      <LogoImage src={logo} alt="logo" />
      <div>
        <StartBtn
          onClick={() => {
            naviagte('/dex');
          }}
        >
          포켓몬 도감 시작하기
        </StartBtn>
      </div>
    </>
  );
}

export default Home;
