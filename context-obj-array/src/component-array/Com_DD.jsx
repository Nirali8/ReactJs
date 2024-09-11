import React, { useContext } from "react";
import { data } from "../App";

const Com_DD = () => {
  const array = useContext(data);
  return (
    <div>
      <h1 className="heading">This is Component DD {array}</h1>
    </div>
  );
};

export default Com_DD;
