import React from "react";
import ReactDOM from "react-dom/client";

function Student(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3>Pass value to functional component</h3>
          <h2>Example Of Props</h2>
          <br />
          <p>
            STUDENT NAME : {props.name}
            <br />
            STUDENT ROLL NO : {props.rollno}
            <br />
            STUDENT DATE OF BIRTH : {props.dob}
            <br />
            STUDENT EMAIL : {props.email}
          </p>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")); //You can also place this line above the function

root.render(
  <Student
    name="Hitesh Bambhaniya"
    rollno="008"
    dob="15 April 1997"
    email="hitesh@gmail.com"
  />
);
