import React, { useState, useEffect } from "react";
import "./ClockStyles.css"; // Import the CSS file
const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setTime(0);
    setIsActive(false);
  };

  return (
    <div className="clock">
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <p className="time">
          {String(Math.floor(time / 3600)).padStart(2, "0")}:
          {String(Math.floor((time % 3600) / 60)).padStart(2, "0")}:
          {String(time % 60).padStart(2, "0")}
        </p>
        <button onClick={toggleTimer}>{isActive ? "Pause" : "Start"}</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
