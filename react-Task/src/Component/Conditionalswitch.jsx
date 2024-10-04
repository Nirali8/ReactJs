import React from "react";
export function Hospital({ Disease, DrAvailable }) {
  switch (DrAvailable) {
    case "yes":
      return <li>{Disease}</li>;
    default:
      return <li></li>;
  }
}

const Conditionalswitch = () => {
  return (
    <div>
      <h1>Conditional Rendering with Switch Case Statements </h1>{" "}
      <ul className="bg-purple-500 w-fit p-5 underline border-2 border-solid border-black">
        <Hospital Disease="Pneumonia" DrAvailable={"yes"} />
        <Hospital Disease="dengue" DrAvailable={"yes"} />
        <Hospital Disease="Typhoid" DrAvailable={"no"} />
        <Hospital Disease="Heart Attack" DrAvailable={"no"} />
        <Hospital Disease="Cancer" DrAvailable={"yes"} />
        <Hospital Disease="COVID-19" DrAvailable={"no"} />{" "}
      </ul>
    </div>
  );
};

export default Conditionalswitch;
