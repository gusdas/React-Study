// import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './font/font.css';
// import StartPage from './Pages/StartPage';
import QuizPage from './Pages/QuizPage';

import StartContainer from './containers/StartContainer';

import { Provider } from 'react-redux';

import { createStore } from 'redux';
import rootReducer from './store/reducers/RootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(rootReducer, composeWithDevTools());

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<StartContainer />}></Route>
        <Route path="/quiz" element={<QuizPage />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
