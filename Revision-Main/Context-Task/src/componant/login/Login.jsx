import { useState } from "react";
import { useContext } from "react";
import UserContext from "./context/UserContext";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
    setPassword("");
    setUserName("")
  };

  return (
      <div className="container mx-auto">
          <label>
              Enter UserNAme:
          </label>
      <input
        className="border border-black m-3"
        type="text"
        placeholder="UserName"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
          />
          <br /><br />
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
          <br /><br /><br />
      <button onClick={handleSubmit} className="bg-red-600 p-4 m-3 rounded">
        Submit
      </button>
    </div>
  );
};

export default Login;
