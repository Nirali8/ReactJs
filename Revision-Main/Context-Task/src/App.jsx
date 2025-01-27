import { useState } from "react";
import "./App.css";

import UserContextProvider from "./componant/login/context/UserContextProvider";
import Login from "./componant/login/Login";
import Profile from "./componant/login/Profile";

function App() {
  return (
    <>
      <h1 className="text-center text-3xl bg-yellow-600 p-4 m-3">
        This is App Components
      </h1>
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>
      
    </>
  );
}

export default App;
