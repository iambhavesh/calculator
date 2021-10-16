import "./App.css";
import { useState } from "react";

function App() {
  const [res, setres] = useState("");
  const [display, setdisplay] = useState("");
  const [equals, setequals] = useState(false)
  const btnValues = [
    ["AC", "Del", "/", "*"],
    [7, 8, 9, "-"],
    [4, 5, 6, "+"],
    [1, 2, 3],
    [0, ".", "="],
  ];

  const operations = ["+", "-", "*", "/", "."];

  const onValuesClickHandler = (value) => {
    if (
      (operations.includes(value) && operations.includes(res.slice(-1))) ||
      (operations.includes(value) && res === "")
    ) {
      return;
    }
    setres(res + value);
    if (!operations.includes(value)) {
      setdisplay(eval(res + value));
    }
  };

  const resetHandler = (e) => {
    e.preventDefault();
    setres("");
    setdisplay("");
  };

  const backspaceHandler = () => {
    if (res === "" || equals=== true) {
      return;
    }
    const value = res.slice(0, -1);
    setres(value);
  };

  const evaluateHandler = () => {
    setequals(true);
    setres(eval(res));
  };
  return (
    <div className="wrapper">
      <div className="screen">
        <p>{res ? res : 0}</p>
        <p>{display ? "=" + display : 0}</p>
      </div>
      <div className="button-box">
        {btnValues.flat().map((btn, i) => {
          return (
            <button
              key={i}
              className={
                btn === "+"
                  ? "plus"
                  : btn === "="
                  ? "equals"
                  : btn === 0
                  ? "zero"
                  : btn === "/"
                  ? "blue"
                  : btn === "*"
                  ? "blue"
                  : btn === "-"
                  ? "blue"
                  : btn === "AC"
                  ? "grey"
                  : btn === "Del"
                  ? "grey"
                  : ""
              }
              onClick={
                btn === "AC"
                  ? resetHandler
                  : btn === "Del"
                  ? backspaceHandler
                  : btn === "="
                  ? evaluateHandler
                  : () => onValuesClickHandler(btn)
              }
            >
              {btn}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
