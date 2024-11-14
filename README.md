# 나만의 포켓몬도감
props drilling 
 
Context API : props drilling을 없애고, 전역 상태 관리를 구현

## 구현 기능
1. 포켓몬 리스트와 선택 기능 
  MOCK_DATA에서 데이터를 가져와 PokemonList에 전달하고, 포켓몬 리스트를 PokemonCard 형태로 보여준다.
  포켓몬을 선택할 수 있도록 하고, 선택된 포켓몬이 Dashboard에 추가되도록 구현

2. 포켓몬 삭제 기능
  선택된 포켓몬을 Dashboard에서 해제할 수 있다.

3. 알림 기능
  중복된 포켓몬을 선택하거나, 6개 이상 선택하려 할 때 alert 메시지를 띄워 사용자에게 안내한다.

4. 디테일 페이지
   PokemonDetail 컴포넌트에서, path params로 전달받은 포켓몬 ID를 통해 상세 정보를 표시한다.
   디테일 페이지 내의 "뒤로가기" 버튼을 사용하여 포켓몬 리스트 페이지로 돌아 갈 수 있다.
   

## 파일 구조

📦src
 ┣ 📂assets
 ┃ ┣ 📂images
 ┃ ┣ 📜logo.png
 ┃ ┗ 📜pokeball.png
 ┣ 📂components
 ┃ ┣ 📜Dashboard.jsx
 ┃ ┣ 📜NotFound.jsx
 ┃ ┣ 📜PokemonCard.jsx
 ┃ ┣ 📜PokemonDetail.jsx
 ┃ ┗ 📜PokemonList.jsx
 ┣ 📂context
 ┃ ┗ 📜PokemonProvider.jsx
 ┣ 📂data
 ┃ ┗ 📜MOCK_DATA.js
 ┣ 📂pages
 ┃ ┣ 📜Dex.jsx
 ┃ ┗ 📜Home.jsx
 ┣ 📜App.css
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┣ 📜main.jsx
 ┗ 📜Router.jsx
