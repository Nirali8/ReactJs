import React from "react";
import { useState } from "react";
import Compo2 from "./Compo2";
import Compo from "./Compo";
let toggle = false;

const Main_B = () => {
  const [shareCompo, setShareCompo] = useState(toggle);

  const toggleButton = () => {
    setShareCompo(toggle ? <Compo /> : <Compo2 />);
    toggle = !toggle;
  };

  return (
    <div>
      <h1 className="heading">Main_B Compo</h1>
      {shareCompo}
      {/* <button className="heading" onClick={() => setShareCompo(<Compo2 />)}> */}
      <button className="heading" onClick={toggleButton}>
        Switch to Custom Component
      </button>
    </div>
  );
};

export default Main_B;

/*

import React, { createContext, useContext, useState } from 'react';

// Create the Theme Context
const ThemeContext = createContext();

// Theme Provider
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Theme Toggle Button Component
const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '20px',
        textAlign: 'center'
      }}
    >
      <h1>{theme.charAt(0).toUpperCase() + theme.slice(1)} Mode</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

// App Component
const App = () => {
  return (
    <ThemeProvider>
      <ThemeToggleButton />
    </ThemeProvider>
  );
};

export default App;*/
