import React from "react";
import { useState } from "react";

const StateWithObject = () => {
  const [user, setUser] = useState({
    name: "",
    age: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update the state using the spread operator
    setUser({
      ...user,
      [name]: value, // Dynamically update the property using computed property names
    });
  };

  return (
    <div>
      <h1 className="text-4xl text-red-700 border-double border-4 border-black">
        Object State Example
      </h1>

      <input
        className="border-2 rounded p-2 border-black m-2"
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <br />

      <input
        className="border-2 rounded p-2 border-black m-2"
        type="number"
        name="age"
        value={user.age}
        onChange={handleChange}
        placeholder="Enter your age"
      />
      <br />

      <input
        className="border-2 rounded p-2 border-black m-2"
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />

      <h2 className="text-4xl mt-7 mb-2">User Information:</h2>
      <p className="text-2xl text-purple-700 font-bold">Name: {user.name}</p>
      <p className="text-2xl text-purple-700 font-bold">Age: {user.age}</p>
      <p className="text-2xl text-purple-700 font-bold">Email: {user.email}</p>
    </div>
  );
};

export default StateWithObject;
