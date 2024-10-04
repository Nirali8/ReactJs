import React from 'react'
import { useState } from 'react';

const MultipleState = () => {
     const [name, setName] = useState("");
     const [age, setAge] = useState(0);
     const [email, setEmail] = useState("");
  return (
    <div className="m-3 p-5">
      <h1 className="text-2xl border-2 border-dashed border-red-700">Multiple State Variables</h1>

      <input className="border-2 p-2 m-3"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <br />

      <input className="border-2 p-2 m-3"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter your age"
      />
      <br />
      <input className="border-2 p-2 m-3"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <br />
      <p className="text-2xl text-purple-700 font-bold">Name: {name}</p>
      <p className="text-2xl text-purple-700 font-bold">Age: {age}</p>
      <p className="text-2xl text-purple-700 font-bold">Email: {email}</p>
    </div>
  );
}

export default MultipleState
