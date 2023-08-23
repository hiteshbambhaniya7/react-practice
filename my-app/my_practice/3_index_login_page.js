// Create a logIn page

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

//creating variable
var out = (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="card-header">
          <h1>LogIn</h1>
        </div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label for="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label for="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="btn btn-danger">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

root.render(out);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
