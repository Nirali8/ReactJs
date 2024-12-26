import React from "react";
import { useState, useEffect } from "react";

const Counter = () => {
  const [time, setTime] = useState(0);

  const [isRun, setIsRun] = useState(false);

  useEffect(() => {
    if (isRun && time > 0) {
      let timeid = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timeid);
    } else if (time === 0) {
      setIsRun(false);
    }
  }, [time, isRun]);

  return (
    <div>
          <h1 className="bg-purple-500 text-5xl p-4">This is React Counter App</h1>
          <br /><br /><br />
      <input
        type="number"
        placeholder="setTime in seconds"
        onChange={(e) => setTime(parseInt(e.target.value))}
        disabled={isRun}
          />
          <br /><br /><br />
      <button className="p-3 bg-slate-500 text-white m-4 rounded text-2xl" onClick={() => setIsRun(true)} disabled={isRun} >
        Start
      </button>
      <button className="p-3 bg-slate-500 text-white m-4 rounded text-2xl" onClick={() => setIsRun(false)}>
        Pause
      </button>
      <button className="p-3 bg-slate-500 text-white m-4 rounded text-2xl" onClick={() => setTime(0)}>
        Reset
      </button>
      <h2 className="text-3xl">{time > 0 ? `${time} remaining` : "time up"}</h2>
    </div>
  );
};

export default Counter;
