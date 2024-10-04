import React from 'react'
export function Navaratri({ Dress, wear }) {
  if (Dress && "yes") {
    return <li>{wear}</li>;
  }
}
const Conditionallogical = () => {
  return (
    <div>
      <h1>Conditional Rendering with Logical && Operator</h1>
      <ul className="bg-purple-500 w-fit p-5 underline border-2 border-solid border-black">
        <Navaratri Dress="Choli" wear={"yes"} />
        <Navaratri Dress="Kurti" wear={"no"} />
        <Navaratri Dress="Sarara" wear={"no"} />
        <Navaratri Dress="Saree" wear={"yes"} />
        <Navaratri Dress="Jeans" wear={"no"} />
        <Navaratri Dress="Suit" wear={"yes"} />
      </ul>
    </div>
  );
}

export default Conditionallogical
