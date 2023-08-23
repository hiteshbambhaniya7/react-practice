import React from "react";

class Myclass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpleinterest: 0,
    };
  }

  calculateSI = (event) => {
    event.preventDefault();
    //formula P*R*N / 100
    let temp = (this.state.principal * this.state.rate * this.state.year) / 100;
    this.setState({ simpleinterest: temp });
  };
  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <div className="container w-50">
        <h1 className="text-center">Calculate Simple Interest</h1>
        <form
          action="/calculate-simple-interest"
          method="post"
          onSubmit={this.calculateSI}
        >
          <div className="mb-3">
            <label htmlFor="principal" className="form-label">
              Principal
            </label>
            <input
              type="number"
              className="form-control"
              id="principal"
              name="principal"
              required
              value={this.state.principal}
              onChange={this.onInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="interest-rate" className="form-label">
              Interest Rate
            </label>
            <input
              type="number"
              className="form-control"
              id="rate"
              name="rate"
              required
              value={this.state.rate}
              onChange={this.onInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="time" className="form-label">
              Time (years)
            </label>
            <input
              type="number"
              className="form-control"
              id="year"
              name="year"
              required
              value={this.state.year}
              onChange={this.onInputChange}
            />
          </div>
          <div align="center">
            <button type="submit" className="btn btn-primary">
              Calculate
            </button>
          </div>
          <h2 className="mt-3">
            Simple Interest : {this.state.simpleinterest}
          </h2>
        </form>
      </div>
    );
  }
}

export default Myclass;
