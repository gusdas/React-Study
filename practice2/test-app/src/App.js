import './app.css';
import Parent from './Parent';
import { useState, useRef } from 'react';
function App() {
  const [name, setName] = useState('hong');
  const counter = useRef(0);
  setTimeout((w) => {
    console.log(`바뀜`);
  }, 1000);
  return (
    <div>
      <button onClick={() => setName(`hong ${(counter.current += 1)}`)}>
        change
      </button>
      <Parent name={name} />
    </div>
  );
}

export default App;
