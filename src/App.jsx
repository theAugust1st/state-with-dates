import React, { useState } from "react";
import "./App.css";
function App() {
  const [step,setStep]= useState(1)
  const [count,setCount]=useState(0)
  const today = new Date();
  const futureDate = new Date(today.getTime()+(1000*60*60*24*count))
  const week = [
    "sunday",
     'monday',
    "Tuesday",
    "wednesday",
    "thursday",
    "Friday",
    "saturday"
  ]
  function handleStepChange(event) {
    const value = Number(event.target.value);
    setStep(value);
  }
  function handleClick() {
    setCount(0);
    setStep(1);
  }
  return (
    <div className="App">
      <div className=" steps more">
        <p>Step:{step}</p>
              <input type="range" min={1} max={10} value={step} onChange={handleStepChange}></input>
      </div>

      <div className=" steps one">
        <button className="stepIncrease" onClick={()=>setCount(prev=>prev+step)}>+</button>
        <p>{count}</p>
        <button className="stepDecrease" onClick={()=>setCount(prev=>prev-step)}>-</button>
      </div>
      <div>
      {count == 0 ? <p>Today is {today.toLocaleDateString()} </p>:<p>{count} days from today is {week[futureDate.getDay()]} {futureDate.toLocaleDateString()}</p>}
      </div>
      <div>
        <button onClick={handleClick}>Reset</button>
      </div>
    </div>
  );
}

export default App;
