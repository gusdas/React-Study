// import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './font/font.css';
import StartPage from './Pages/StartPage';
import QuizPage from './Pages/QuizPage';

import StartContainer from './containers/StartContainer';
import QuizContainer from './containers/QuizContainer';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/RootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
// import { rootSaga } from './sagas/RootSaga';
// const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, ReduxThunk))
);
// sagaMiddleware.run(rootSaga);
// export const sagaAction = (type) => store.dispatch({ type });
function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<StartPage />}></Route>
        <Route path="/quiz" element={<QuizContainer />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
