import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter Name:{" "}
      </label>
      <input id="name" type="text"></input>
      <button style={{ backgroundColor: "blue", color: "white" }}>
        Submit
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
