import React from 'react'
import { useState } from 'react';

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
      <h1>Object State Example</h1>

      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />

      <input
        type="number"
        name="age"
        value={user.age}
        onChange={handleChange}
        placeholder="Enter your age"
      />

      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />

      <h2>User Information:</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default StateWithObject
