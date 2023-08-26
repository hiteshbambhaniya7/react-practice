import React from "react";

let Staff = () => {
  return (
    <div>
      <h1>STAFF PROFILE</h1>
      <table className="table table-bordered table-striped table-hover">
        <thead className="fs-5">
          <tr>
            <th>Post Name & Cadre</th>
            <th>Pay Scale (Grade-Pay)</th>
            <th>Sanction Post</th>
            <th>Fill-up Post</th>
            <th>Vacant Post</th>
          </tr>
        </thead>
        <tbody className="fs-6">
          <tr>
            <td>Principal</td>
            <td>15600-39100 (6600)</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Sr. Lecturer</td>
            <td>9300-34800 (4600)</td>
            <td>7</td>
            <td>4</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Jr. Lecturer</td>
            <td>9300-34800 (4400)</td>
            <td>15</td>
            <td>8</td>
            <td>7</td>
          </tr>
          <tr>
            <td>Technician</td>
            <td>5200-20200 (2800)</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Librarian</td>
            <td>5200-20200 (2400)</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr>
            <td>O.S</td>
            <td>9300-34800 (4400)</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Head Clerk</td>
            <td>9300-34800 (4200)</td>
            <td>2</td>
            <td>2</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Sr. Clerk</td>
            <td>5200-20200 (2400)</td>
            <td>3</td>
            <td>2</td>
            <td>1</td>
          </tr>
          <tr>
            <td>COM. Operator</td>
            <td>5200-20200 (1900)</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Jr. clerk</td>
            <td>5200-20200 (1900)</td>
            <td>2</td>
            <td>2</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Peon</td>
            <td>4440-7440 (1300)</td>
            <td>3</td>
            <td>2</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Watchman</td>
            <td>4440-7440 (1300)</td>
            <td>3</td>
            <td>2</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Staff;
