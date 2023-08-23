import React, { Component } from 'react';

class BillItem extends Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.price = props.price;
        this.taxrate = props.taxrate;
        this.state = { 
            tax: 0,
            amount:0,
            quantity:0,
            grandtotal:0,
            taxtotal:0,
         }
    }
    updateBill = (event) =>{
       this.setState({
            quantity: event.target.value
       },()=> {
            console.log(this.state.quantity);
            var temp_total = this.price * this.state.quantity;
            var temp_tax = (temp_total * this.taxrate) / 100;
            var tempgrandtotal = this.state.grandtotal + temp_total;
            var temptaxtotal = this.state.taxtotal + temp_tax
            temp_total = temp_total + temp_tax;
            this.setState({
                tax:temp_tax,
                amount:temp_total,
                grandtotal: tempgrandtotal,
                taxtotal:temptaxtotal
            });
       });
    }
    render() { 
        return ( <tr>
            <td>{this.name}</td>
            <td>{this.price}</td>
            <td><input type='number' id='qty' name='qty' className="form-control"
                onBlur={this.updateBill} /></td>
            <td>{this.taxrate}</td>
            <td>{this.state.tax}</td>
            <td>{this.state.amount}</td>
        </tr> );
    }
}
// class App extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         previousSums: [],
//         currentNumber: '',
//         totalSum: 0,
//       };
//     }
  
//     handleNumberChange = (event) => {
//       this.setState({ currentNumber: event.target.value });
//     };
  
//     handleAddClick = () => {
//       const { currentNumber, previousSums, totalSum } = this.state;
//       if (currentNumber !== '') {
//         const newSum = totalSum + parseInt(currentNumber);
//         this.setState({
//           previousSums: [...previousSums, newSum],
//           currentNumber: '',
//           totalSum: newSum,
//         });
//       }
//     };
  
//     render() {
//       const { previousSums, currentNumber, totalSum } = this.state;
  
//       return (
//         <div className="App">
//           <h1>Sum of Previous Sums Calculator</h1>
//           <div>
//             <input
//               type="number"
//               placeholder="Enter a number"
//               value={currentNumber}
//               onChange={this.handleNumberChange}
//             />
//             <button onClick={this.handleAddClick}>Add</button>
//           </div>
//           <div>
//             <h2>Previous Sums:</h2>
//             <ul>
//               {previousSums.map((sum, index) => (
//                 <li key={index}>{sum}</li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <h2>Total Sum:</h2>
//             <p>{totalSum}</p>
//           </div>
//         </div>
//       );
//     }
//   }
 
export default BillItem;
