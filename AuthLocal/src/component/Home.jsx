import React from "react";
import { useEffect } from "react";

// useEffect(() => {
//   const Authenticate = localStorage.getItem('authenticate')
// })

const LogoutUser = () => {
  localStorage.removeItem("users");
};

const Home = () => {
  return (
    <>
      <div className="heading">WelCome, HomePage</div>
      <button onClick={LogoutUser}>Logout</button>
    </>
  );
};

export default Home;
