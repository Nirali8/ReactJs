import React, { useContext } from "react";
import { data } from "../App";

const Com_D = () => {
  const { firstName, lastName } = useContext(data); //destructuring
  const profile = useContext(data);
  return (
    <div>
      <h1 className="heading">
        This is Component D {firstName}
        {lastName}
        {profile.age}
      </h1>
    </div>
  );
};

export default Com_D;
