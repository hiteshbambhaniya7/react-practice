import React from "react";
import ReactDOM from "react-dom/client";

class Myclass extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Hitesh Bambhaniya",
      contact: +91 - 8140930688,
      email: "hitesh@test.com",
    };
  }

  render() {
    return (
      <div className="container">
        <h1>Example of State</h1> <hr />
        <p>
          Student Name : {this.state.name} <br />
          contact No : {this.state.contact}
          <br />
          Email : {this.state.email}
        </p>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root")); //You can also place this line above the function

root.render(<Myclass />);
