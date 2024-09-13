import React from "react";
import { createContext, useContext, useState } from "react";
import ThemeDark from "./ThemeDark";

export const ThemeContext = createContext();

const ThemeLight = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
      <ThemeDark />
    </ThemeContext.Provider>
  );
};

export default ThemeLight;
