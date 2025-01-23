import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const redirectHome = () => {
      navigate('/')
  }

  const redirect = (id) => {
      navigate(`/loader/${id}`)
  }
  return (
    <div>
      <h1 className="bg-blue-500 text-3xl">This is Login Page Componenets</h1>
      <button onClick={redirectHome} className="bg-amber-500 text-2xl m-2 p-2">
        Home Page
      </button>
      <button className="bg-amber-500 text-2xl m-2 p-2" onClick={() => redirect(1)}>
        User 1
      </button>
      <button className="bg-amber-500 text-2xl p-2" onClick={() => redirect(2)}>
        User 2
      </button>
    </div>
  );
};

export default Login;
