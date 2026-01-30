import { useState, useCallback } from "react";
import React from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click</button>;
});

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <>
      <Child onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>
        Re-render
      </button>
    </>
  );
}
