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
      <h1>Toggle Example</h1>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide Content" : "Show Content"}
      </button>

      {/* Conditionally render content based on boolean state */}
      {isVisible && <p>This content is now visible!</p>}
    </div>
  );
}

export default ToggleExample;
