import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Usestate from "./Hook/Usestate";
import UseState2 from "./Hook/UseState2";
import UseState3 from "./Hook/UseState3";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Usestate />
      <UseState2 />
      <UseState3 />
    </>
  );
}

export default App;
