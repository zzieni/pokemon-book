import { useNavigate } from 'react-router-dom';
import logo from '/src/assets/images/logo.png';

function Home() {
  const naviagte = useNavigate();
  return (
    <>
      <img src={logo} className="logo" />
      <div>
        <button
          onClick={() => {
            naviagte('/dex');
          }}
        >
          포켓몬 도감 시작하기
        </button>
      </div>
    </>
  );
}

export default Home;
