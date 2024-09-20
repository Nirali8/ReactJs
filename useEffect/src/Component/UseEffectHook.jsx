import React, { useState, useEffect } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("This is React Hooks");
  }, [count]);

  return (
    <div>
      <h1 className="heading">This is react useEffect Hook</h1>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
};

export default UseEffectHook;
