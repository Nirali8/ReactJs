import React, { useState, useEffect } from "react";

const Timer = () => {
  // State to manage the timer's seconds
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // Effect to handle the timer interval
  useEffect(() => {
    let interval = null;

    if (isActive) {
      // Start the timer when isActive is true
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1); // Update seconds using previous state
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      // Clear the interval if timer is stopped
      clearInterval(interval);
    }
    return () => clearInterval(interval); // Cleanup on unmount or when isActive changes
  }, [isActive, seconds]); // Depend on isActive and seconds

  // Event handlers
  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setSeconds(0);
  };

  return (
    <div className="m-3 p-2">
      <h1>{seconds} s</h1>
      <button
        onClick={handleStart}
        className="p-2 border-2 border-black rounded-lg m-2"
      >
        Start
      </button>
      <button
        onClick={handleStop}
        className="p-2 border-2 border-black rounded-lg m-2"
      >
        Stop
      </button>
      <button
        onClick={handleReset}
        className="p-2 border-2 border-black rounded-lg m-2"
      >
        Reset
      </button>
    </div>
  );
};

export default Timer;
