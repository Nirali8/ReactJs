import React from "react";
import { createContext, useState } from "react";
import Compo from "./Compo";
import Main_B from "./Main_B";
export const data = createContext();

const Main_A = ({ children }) => {
  const [shareCompo, setShareCompo] = useState(<Compo />);
  return (
    <div>
      <h1 className="heading">Main_A Compo</h1>
      <data.Provider value={{ shareCompo, setShareCompo }}>
        {children}
        <Main_B />
      </data.Provider>
    </div>
  );
};

export default Main_A;
