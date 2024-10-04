import React, { useState } from "react";

function ToggleExample() {
  // Initial state set to false (content is hidden by default)
  const [isVisible, setIsVisible] = useState(false);

  // Toggle function that switches the boolean value
  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Toggle the boolean value
  };

  return (
    <div>
      <h1 className="text-2xl border-2 border-dashed border-red-700">
        Toggle Example
      </h1>
      <button
        onClick={toggleVisibility}
        className="bg-green-700 m-3 p-2 rounded-md"
      >
        {isVisible ? "Hide Content" : "Show Content"}
      </button>

      {/* Conditionally render content based on boolean state */}
      {isVisible && <p className="text-2xl text-red-700">This content is now visible!</p>}
    </div>
  );
}

export default ToggleExample;
