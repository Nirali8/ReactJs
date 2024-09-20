import React from "react";
import Toggles from "./Toggles";
import { useState, useEffect } from "react";

const UseEffectToggle = () => {
  const [toggle, setToggle] = useState(false);

  const [data, setData] = useState([]);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const res = fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
      });
  }, []);

  return (
    <div>
      <h1>UseEffectToggle</h1>
      <h1 className="heading">This is React Hooks</h1>
      {/* <button onClick={product}>ProductData</button> */}
      <Toggles toggle={toggle} handleToggle={handleToggle} />

      {data.map((item) => {
        return (
          <>
            <div>
              <img src={item.image} alt="" className="size-32" />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default UseEffectToggle;
