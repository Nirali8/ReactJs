import React from "react";
import { useState, useEffect } from "react";

const Toggles = ({ toggle, handleToggle }) => {
  useEffect(() => {
    console.log("This is React Hooks");
  }, [toggle]);

  return (
    <div>
      <button onClick={handleToggle}>Toggle Me</button>

      {toggle ? <div>This is React Element</div> : null}
    </div>
  );
};

export default Toggles;
