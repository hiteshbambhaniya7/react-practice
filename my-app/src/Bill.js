import React from "react";
import BillItem from './BillItem';
class Bill extends React.Component
{
    constructor(props)
    {
        super(props);
        this.title = props.title;
        this.gstno = props.gstno;
        var today = new Date(); //local variable
        this.date = today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
    }
    render()
    {
        return (<div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header text-bg-danger">
                            {this.title} - {this.gstno} - {this.date}
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Amount</th>
                                        <th>Quantity</th>
                                        <th>Tax Rate</th>
                                        <th>Tax Amt</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <BillItem name='Cold drink' price='100' taxrate='2.5' />
                                    <BillItem name='Popcorn' price='50' taxrate='3.5' />
                                    <BillItem name='cheese popcorn' price='80' taxrate='4.5' />
                                    <BillItem name='samosa' price='90' taxrate='5.5' />
                                    <BillItem name='Sandwith' price='200' taxrate='5.0' />
                                    <BillItem name='Pizza' price='300' taxrate='6.0' />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}
export default Bill