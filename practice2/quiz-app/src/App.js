import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './font/font.css';
import StartPage from './Pages/StartPage';
import QuizPage from './Pages/QuizPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />}></Route>
      <Route path="/quiz" element={<QuizPage />}></Route>
    </Routes>
  );
}

export default App;
