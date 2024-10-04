import React from 'react'
 export function Fruit({name , quality}){
  return(
  <li>
    { quality === 'bad' ? <li>{name}</li> : <li></li>}
  </li>
  )
}

const Conditionalternary = () => {
  return (
    <div>
      <h1>Conditional Rendering with Ternory Operator</h1>
      <ul className="bg-purple-500 w-fit p-5 underline border-2 border-solid border-black">
        <Fruit name="Apple" quality={"good"} />
        <Fruit name="Banana" quality={"bad"} />
        <Fruit name="Graps" quality={"bad"} />
        <Fruit name="Kiwi" quality={"good"} />
        <Fruit name="Gvava" quality={"bad"} />
        <Fruit name="Strawberry" quality={"good"} />
      </ul>
    </div>
  );
}

export default Conditionalternary
