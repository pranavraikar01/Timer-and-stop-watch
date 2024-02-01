import React from "react";
import Timer from "./components/Timer";
import Stopwatch from "./components/Stopwatch";
import { ToastContainer } from "react-toastify";
import "./components/ClockStyles.css";
function App() {
  return (
    <>
      <h1>Timer and Stopwatch</h1>
      <div className="clock-container">
        <Timer />
        <Stopwatch />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
