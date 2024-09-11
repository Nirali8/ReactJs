import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./component/Layout";

function App({ children }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layout>
        {children}
        <h1 className="text-2xl text-white">This Children Demo</h1>
      </Layout>
    </>
  );
}

export default App;
