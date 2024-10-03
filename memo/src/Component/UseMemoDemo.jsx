import React from "react";
import { useState, useMemo } from "react";

const UseMemoDemo = () => {
  const [add, setAdd] = useState(0);

  const [count, setCount] = useState(0);

  const Update = () => {
    setAdd((add) => add + 1);
    };
    const longCalci = (no) =>
    {
        let total = 0;
        for (let i = 0; i < 1e9; i++)
            total += i % no;
        return total;
    }
     const calculatedValue = useMemo(() => longCalci(add), [add]);

  return (
    <>
      <div>
        {count}
        <button onClick={() => setCount((count) => count + 1)}>Counter</button>
      </div>
      <div>
        {add}
        <button onClick={Update}>Click To Add</button>
          </div>
          <div>
              {calculatedValue}
          </div>
    </>
  );
};

export default UseMemoDemo;
