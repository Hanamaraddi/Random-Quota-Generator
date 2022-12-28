import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => setAdvice(res.data.slip.advice));
  }, []);

  const clickHandler = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => setAdvice(res.data.slip.advice));
  };

  return (
    <div className="app">
      <center>
        <h1 className="quota">{advice}</h1>
        <button className="btn" onClick={clickHandler}>
          Get New One
        </button>
      </center>
    </div>
  );
}

export default App;
