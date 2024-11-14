https://pokemon-book-ten.vercel.app/

# 나만의 포켓몬도감
이 프로젝트는 Context API를 사용하여 props drilling을 없애고 전역 상태 관리를 구현한 포켓몬도감 애플리케이션입니다.

## 구현 기능
1. 포켓몬 리스트와 선택 기능 
   * MOCK_DATA에서 데이터를 가져와 PokemonList에 전달하고, 포켓몬 리스트를 PokemonCard 형태로 보여준다.
   * 포켓몬을 선택할 수 있도록 하고, 선택된 포켓몬이 Dashboard에 추가되도록 구현

2. 포켓몬 삭제 기능
   * 선택된 포켓몬을 Dashboard에서 해제할 수 있다.

3. 알림 기능
   * 중복된 포켓몬을 선택하거나, 6개 이상 선택하려 할 때 alert 메시지를 띄워 사용자에게 안내한다.

4. 디테일 페이지
   * PokemonDetail 컴포넌트에서, path params로 전달받은 포켓몬 ID를 통해 상세 정보를 표시한다.
   * 디테일 페이지 내의 "뒤로가기" 버튼을 사용하여 포켓몬 리스트 페이지로 돌아 갈 수 있다.
   
![image](https://github.com/user-attachments/assets/dcf35eff-11f9-4750-8085-39ef01b2082a)


## 컴포넌트 설명
* Dashboard: 선택된 포켓몬 표시 및 관리
* PokemonCard: 개별 포켓몬 정보 카드
* PokemonDetail: 포켓몬 상세 정보 페이지
* PokemonList: 전체 포켓몬 리스트 표시
* NotFound: 404 에러 페이지

## 컨텍스트
* PokemonProvider: 포켓몬 관련 전역 상태 관리

## 페이지
* Home: 메인 페이지
* Dex: 포켓몬도감 페이지

## 라우팅
* Router.jsx: 애플리케이션의 라우팅 설정
이 구조를 통해 효율적인 상태 관리와 직관적인 사용자 경험을 제공하는 포켓몬도감 애플리케이션을 구현할 수 있습니다.
