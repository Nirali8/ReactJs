import React from "react";
import Com_A from "./Com_A";
import { createContext } from "react";

export const data = createContext("Demo Context");
const profile = {
  fullname: "Nirali",
  age: 30,
};

const Main = () => {
  return (
    <div>
      <data.Provider value={profile}>
        <Com_A />
      </data.Provider>
    </div>
  );
};

export default Main;
