// create a program to display country name with capital and currancy

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

//creating variable
// Note : use  Parenthesis() for creating block , while code is more than 2 lines

var list = (
  <div className="container">
    <div className="row mt-5" align="center" border="1">
      <div className="col-12">
        <h1 className="mb-3">Asian Countries</h1>
        <table border="1">
          <tr className="text-center fw-bold border-1">
            <td className="p-3">Country</td>
            <td>Capital</td>
            <td>Currency</td>
          </tr>
          <tbody>
            <tr>
              <td>Afghanistan</td>
              <td>Kabul</td>
              <td>Afghan afghani</td>
            </tr>
            <tr>
              <td>Bangladesh</td>
              <td>Dhaka</td>
              <td>Bangladeshi taka</td>
            </tr>
            <tr>
              <td>China</td>
              <td>Beijing</td>
              <td>Chinese yuan</td>
            </tr>
            <tr>
              <td>India</td>
              <td>New Delhi</td>
              <td>Indian rupee</td>
            </tr>
            <tr>
              <td>Indonesia</td>
              <td>Jakarta</td>
              <td>Indonesian rupiah</td>
            </tr>
            <tr>
              <td>Japan</td>
              <td>Tokyo</td>
              <td>Japanese yen</td>
            </tr>
            <tr>
              <td>Malaysia</td>
              <td>Kuala Lumpur</td>
              <td>Malaysian ringgit</td>
            </tr>
            <tr>
              <td>Pakistan</td>
              <td>Islamabad</td>
              <td>Pakistani rupee</td>
            </tr>
            <tr>
              <td>Philippines</td>
              <td>Manila</td>
              <td>Philippine peso</td>
            </tr>
            <tr>
              <td>Russia</td>
              <td>Moscow</td>
              <td>Russian ruble</td>
            </tr>
            <tr>
              <td>Saudi Arabia</td>
              <td>Riyadh</td>
              <td>Saudi riyal</td>
            </tr>
            <tr>
              <td>South Korea</td>
              <td>Seoul</td>
              <td>South Korean won</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
root.render(list);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
