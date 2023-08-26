import React from "react";

var Branches = () => {
  return (
    <div>
        <h2>DIET's Branches Details</h2>
      <table className="table">
        <thead className="fs-5">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Branch Abbrivation</th>
            <th scope="col">Full Name of Branch</th>
          </tr>
        </thead>
        <tbody id='tbody' className="fs-6">
          <tr>
            <th scope="row">1</th>
            <td>PSTE</td>
            <td>Pre- Service Teacher Education</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>WE</td>
            <td>Work Experience</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>DRU</td>
            <td>District Resource Unit</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>IFIC</td>
            <td>In – Service Programmes Field Interaction and Innovation Co-Ordination.</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>CMDE</td>
            <td>Curriculum Material Development and Evaluation</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>ICT</td>
            <td>Information and Communication Technology.</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>PM</td>
            <td>Planning and Management.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Branches;
