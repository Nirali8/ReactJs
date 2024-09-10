import React from "react";
import { useState } from "react";

const Usestate = () => {
  const [count, setCount] = useState(0);

  // function sum(){
  //     return 5 + 5
  // }

  // console.log(sum());

  // const sum = () => {
  //     return 6 + 6
  // }

  // console.log(sum());

  // const handleIncrease = () => {
  //     return console.log('Increment');
  // }

  // const handleDecrese = () => {
  //     return console.log('Decrement');
  // }

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrese = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count = {count}</p>
      <button onClick={handleIncrease}>Increment</button>
      <button onClick={handleDecrese}>Decrement</button>
    </div>
  );
};

export default Usestate;
