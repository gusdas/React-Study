import Child from './Child';
import { useEffect, useState } from 'react';
const Parent = ({ name }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('parent rendering');
  }, []);

  return (
    <div className="parent">
      i'm Parent {name} {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <Child name={name} />
    </div>
  );
};

export default Parent;
