// Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
const App = () => {
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "red", color: "white" }}>Submit</button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
