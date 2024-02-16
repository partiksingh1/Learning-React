import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./components/Cards";

function App() {
  const [count, setCount] = useState(0);
  let myobj = {
    name: "partik",
    age: 23,
  };
  let newArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind Test</h1>
      <Cards username="partik" />
      <Cards username="chaiaurcode" btnText="dhekhlo" />
    </>
  );
}

export default App;
