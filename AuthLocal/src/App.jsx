import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home"
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import Navbar from "./component/Navbar";
import "./App.css";

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
