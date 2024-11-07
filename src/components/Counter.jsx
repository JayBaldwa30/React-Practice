import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

export default Counter;
