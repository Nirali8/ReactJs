import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import { CardOne } from './Card'
import Recipe from "./Recipe";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <CardOne/> */}
      <Recipe />
    </>
  );
}

export default App;
