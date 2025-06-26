import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Loading from "./components/loading";
import RetroPortfolio from "./components/page";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RetroPortfolio/>
    </>
  );
}

export default App;
