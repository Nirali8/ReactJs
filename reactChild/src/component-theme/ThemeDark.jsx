import React, { useContext, useState } from "react";
import { ThemeContext } from "./ThemeLight";

const ThemeDark = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "pink" : "black",
        color: theme === "light" ? "black" : "white",
        padding: "20px",
        textAlign: "center",
      }}
    >
      {theme}
      <h1>Theme Demo</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeDark;
