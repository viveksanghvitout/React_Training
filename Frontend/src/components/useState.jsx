import React, { useState } from 'react';
import useCounter from '../hooks/useCounter.jsx';

const Counter = () => {
  // const [count, setCount] = useState(0);
  const { count, increment, decrement, reset } = useCounter(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      {/* <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button> */}
      <button onClick={increment}>Increment</button>
      <button disabled={count <= 0 && true} onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
