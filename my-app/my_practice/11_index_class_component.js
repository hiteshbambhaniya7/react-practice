import React from "react";
import ReactDOM from "react-dom/client";

//NOTE : class/functionn name should start with capital latter

class Hitesh extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>
          Hello! World <br />
          This is the Example of Class Component in React JS
        </h1>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root")); //You can also place this line above the function

root.render(<Hitesh />);
