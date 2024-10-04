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
    <div>
      <h1>{seconds}s</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;
