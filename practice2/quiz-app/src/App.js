// import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './font/font.css';
import StartPage from './Pages/StartPage';
import QuizContainer from './containers/QuizContainer';

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />}></Route>
      <Route path="/quiz" element={<QuizContainer />}></Route>
    </Routes>
  );
}

export default App;
