import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Main from "./Component-obj/Main";
import Main_A from "./component-array/Main_A";
import { createContext } from "react";

export const data = createContext();
const profile = {
  firstName: "Nirali",
  lastName: "Sanghnai",
  age: 30,
};
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Object Passing */}
      {/* <data.Provider value={profile}>
        <Main />
      </data.Provider> */}

      <data.Provider value={["Nirali", "Sanghani", 30]}>
        <Main_A />
      </data.Provider>
    </>
  );
}

export default App;
