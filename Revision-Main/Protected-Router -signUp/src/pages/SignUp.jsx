import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../Hook/ContextHook";

const SignUp = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // console.log("formData", formData);

  const { user, setUser } = useLogin();

  //  console.log("user", user);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData);
    navigate("/login");
    setFormData({ userName: "", email: "", password: "" });
    };
    

  return (
    <div>
      <form onSubmit={handleSubmit} className="text-center m-2 p-3">
        <label className="">Enter USer Name:</label>
        <input
          className="border border-fuchsia-600 mt-4 m-2"
          type="text"
          name="userName"
          id="userName"
          value={formData.userName}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, userName: e.target.value }))
          }
          required
        />
        <br />
        <br />
        <label>Enter Email:</label>
        <input
          className="border border-fuchsia-600 m-2"
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
          required
              />
              <br /><br />
              <label>Enter Password:</label>
        <input
          className="border border-fuchsia-600 m-2"
          type="password"
          name="password"
          value={formData.password}
          id="password"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, password: e.target.value }))
          }
          required
              />
              <br /><br /><br />
        <button className="bg-fuchsia-500 border-2 rounded-lg p-3" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
