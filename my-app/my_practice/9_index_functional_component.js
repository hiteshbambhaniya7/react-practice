import React from "react";
import ReactDOM from "react-dom/client";

//NOTE : class/functionn name should start with capital latter

function Hitesh() {
  return (
    <div>
      <h1>Hello! This is an example of Functional Component in React JS</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")); //You can also place this line above the function

root.render(<Hitesh />);
