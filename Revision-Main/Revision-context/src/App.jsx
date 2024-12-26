import { useState } from "react";
import "./App.css";

import { createContext } from "react";
import ComA from "./simple/ComA";
export const user = createContext();


import UserContextProvider from "./componant/login/context/UserContextProvider";
import Login from "./componant/login/Login";
import Profile from "./componant/login/Profile";

import ThemeContextProvider from "./componant/themeChange/context/ThemeContextProvider";
import ThemeButton from "./componant/themeChange/ThemeButton";
import Card from "./componant/themeChange/Card";


function App() {
  const [count, setCount] = useState(0);
  let users = "Nirali";
  return (
    <>
      <h1 className="text-center text-3xl bg-yellow-600 p-4 m-3">
        This is App Components
      </h1>

      <user.Provider value={users}>
        <h1 className="bg-slat-500">This is React useContext Components</h1>
        <ComA />
      </user.Provider>

      {/* <UserContextProvider>
        <Login />
        <Profile/>
      </UserContextProvider> */}

      {/* <ThemeContextProvider>
        <ThemeButton />
        <Card/>
      </ThemeContextProvider> */}
    </>
  );
}

export default App;
