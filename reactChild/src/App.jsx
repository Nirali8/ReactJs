import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./component/Layout";
import Main from "./Component-obj/Main";
import Main_A from "./component-compo/Main_A";
import Main_B from "./component-compo/Main_B";
import ThemeLight from "./component-theme/ThemeLight";
function App({ children }) {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Layout>
        {children}
        <h1 className="text-2xl text-white">This Children Demo</h1>
      </Layout> */}

      {/* <Main /> */}

      {/* <Main_A /> */}

      <ThemeLight />
    </>
  );
}

export default App;
