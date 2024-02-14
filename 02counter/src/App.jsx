import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCount] = useState(0);

  function addValue() {
    if (counter >= 20) {
      console.log("cant update the counter as it it larger than 20");
    } else {
      setCount(counter + 1);
    }
  }
  function removeValue() {
    if (counter == 0) {
      console.log("already zero");
    } else {
      setCount(counter - 1);
    }
  }

  return (
    <div>
      <h1>chaii aur code</h1>
      <h2>the value is {counter}</h2>
      <button onClick={addValue}> Add Value : {counter}</button>
      <button onClick={removeValue}> Remove Value : {counter}</button>
    </div>
  );
}

export default App;
