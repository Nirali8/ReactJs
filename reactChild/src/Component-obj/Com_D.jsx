import React, { Children, useContext } from "react";
import { data } from "./Main";

const Com_D = ({ Children }) => {
  const profile = useContext(data);
  return (
    <div>
      <h1 className="heading">This is Component D</h1>
      <p>{profile.fullname}</p>
      {Children}
    </div>
  );
};

export default Com_D;
