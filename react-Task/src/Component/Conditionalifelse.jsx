import React from 'react'
export function Car({ name, price }) {
  if (price >= 1500000) {
    return <li>{name}</li>;
  }
}

const Conditionalifelse = () => {
  return (
    <div>
      <h1>Conditional Rendering with IF-ELSE Statement</h1>
      <ul className="bg-purple-500 w-fit p-5 underline border-2 border-solid border-black">
        <Car name="Swift" price={500000} />
        <Car name="Skoda" price={7000000} />
        <Car name="Odi" price={4000000} />
        <Car name="Nano" price={200000} />
        <Car name="Creta" price={100000} />
        <Car name="Fortuner" price={2300000} />
      </ul>
    </div>
  );
}

export default Conditionalifelse
