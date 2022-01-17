import { useEffect } from 'react';
const Child = ({ name }) => {
  useEffect(() => {
    console.log('child rendering');
  }, []);
  return <div className="child">i'm Child {name}</div>;
};

export default Child;
