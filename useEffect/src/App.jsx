import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CardOne } from "./Card";
import UseEffectHook from "./Component/UseEffectHook";
import UseEffectToggle from "./Component/UseEffectToggle";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <CardOne/> */}
      {/* <UseEffectHook /> */}
      <UseEffectToggle />
    </>
  );
}

export default App;
