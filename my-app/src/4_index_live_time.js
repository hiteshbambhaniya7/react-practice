import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
function getCurrentDateTime()
{
    var now = new Date();
    var output = (<div class='container'>
        <div class='row'>
            <div class='col-lg-3'>
                <h3>{now.toLocaleTimeString()}</h3>
                <hr/>
                <h5>{now.getDate()} - {now.getMonth()+1} - {now.getFullYear()}</h5>
            </div>
        </div>
    </div>);
    root.render(output);
}
setInterval(getCurrentDateTime,1000);