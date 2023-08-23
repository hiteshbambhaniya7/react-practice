import React from 'react';
import ReactDOM from 'react-dom/client';
import './mystyle.css';
import Bill from './Bill'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Bill title='Fresh Foods' gstno='ABC123456' />);