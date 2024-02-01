import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ClockStyles.css";

const Timer = () => {
  const [duration, setDuration] = useState(0); // Initial duration set to 0 seconds
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isInitialRender, setIsInitialRender] = useState(true);

  const handleComplete = () => {
    if (!isInitialRender) {
      toast.success("Timer completed!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    setIsTimerRunning(false);
  };

  const startTimer = () => {
    setIsTimerRunning(true);
    setIsInitialRender(false);
  };

  return (
    <div className="clock">
      <div className="timer">
        <h2>Timer</h2>
        <div>
          <label>Set Timer (seconds):</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            disabled={isTimerRunning}
          />
        </div>
        <button onClick={startTimer} disabled={isTimerRunning}>
          Start Timer
        </button>
        {isInitialRender ? (
          <span className="time">00:00:00</span>
        ) : (
          <Countdown
            date={Date.now() + duration * 1000} // Convert duration to milliseconds
            onComplete={handleComplete}
            renderer={({ hours, minutes, seconds, completed }) => {
              if (completed) {
                return <span className="time">00:00:00</span>;
              } else {
                return (
                  <span className="time">
                    {String(hours).padStart(2, "0")}:
                    {String(minutes).padStart(2, "0")}:
                    {String(seconds).padStart(2, "0")}
                  </span>
                );
              }
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Timer;
