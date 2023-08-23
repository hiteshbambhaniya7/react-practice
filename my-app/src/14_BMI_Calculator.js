import React from "react";

class Myclass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BMI: 0,
    };
  }
  calculateBMI = (event) => {
    event.preventDefault();
    const temp = this.state.weight / (this.state.height * this.state.height);
    this.setState({ BMI: temp });

    let result = "";

    if (isNaN(BMI)) {
      result = "<p>Please enter valid values for weight and height.</p>";
    } else {
    //   result = `<p>Your BMI: ${BMI.toFixed(2)}</p>`;
      if (BMI < 18.5) {
        result += "<p>Underweight</p>";
      } else if (BMI < 24.9) {
        result += "<p>Normal weight</p>";
      } else if (BMI < 29.9) {
        result += "<p>Overweight</p>";
      } else {
        result += "<p>Obese</p>";
      }
    }
  };
  render() {
    return (
      // <div className="container w-50 mt-5">
      //     <div className="card">
      //         <div className="card-header">
      //         <h3 className="text-center">BMI Calculator</h3>
      //         </div>
      //         <div className="card-body">
      //             <form method="post" className="w-75">
      //                 <div>
      //                     <label htmlFor="height" className="form-label">
      //                         Height
      //                     </label>
      //                     <input type="number" className="form-control" id="height" name="height" required/>
      //                 </div>
      //                 <div>
      //                     <label htmlFor="weight" className="form-label">
      //                         Weight
      //                     </label>
      //                     <input type="number" className="form-control" id="weight" name="weight" required />
      //                 </div>
      //                 <button type="submit" className="btn btn-primary mt-3">Calculate</button>
      //             </form>
      //         </div>
      //     </div>
      // </div>

      <div className="container mt-5">
        <h1 className="mb-4">BMI Calculator</h1>
        <form typeof="post" onSubmit={this.calculateBMI}>
          <div className="form-group">
            <label htmlFor="weight">Weight (kg):</label>
            <input
              type="number"
              className="form-control"
              id="weight"
              name="weight"
              value={this.state.weight}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="height">Height (cm):</label>
            <input
              type="number"
              className="form-control"
              id="height"
              name="height"
              value={this.state.height}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Calculate BMI
          </button>
        </form>
        <div id="result" className="mt-4" />
        <h2>BMI : {this.state.BMI}</h2>
      </div>
    );
  }
}

export default Myclass;
