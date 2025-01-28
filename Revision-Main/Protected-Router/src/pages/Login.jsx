import React, { useState } from "react";
import { useLogin } from "../Hook/ContextHook";

const Login = () => {
  const { isLogin, setIsLogin, user, setUser } = useLogin();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName !== user.userName || password !== user.psw)
      alert("Invalid UserName Or PAssword");
    else {
      setIsLogin(!isLogin);
      setUser({ userName, password });
    }
    setUserName("");
    setPassword("");
  };
  return (
    <div className="container mx-auto">
      <label>Enter UserNAme:</label>
      <input
        className="border border-black m-3"
        type="text"
        placeholder="UserName"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />
      <br />
      <label>Enter PAssword:</label>
      <input
        className="border border-black m-3"
        type="password"
        placeholder="Password"
        name=""
        id=""
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <br />
      <button onClick={handleSubmit} className="bg-red-600 p-4 m-3 rounded">
        {isLogin ? "LogOut" : "Login"}
      </button>
    </div>
  );
};

export default Login;
