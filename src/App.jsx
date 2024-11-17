import { Provider } from 'react-redux';
import './App.css';
import Router from './Router';
import store from './redux/config/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
}

export default App;
