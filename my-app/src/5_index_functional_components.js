import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
function Header(props) {
    return (<nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">{props.title} Year :- {props.year}</a>
        </div>
    </nav>);
}
function Footer()
{
    return (<div className='container-fluid p-3 bg-black'>
        <div className='row'>
            <div className='col-12'>
                <p className='text-white text-center'>Copyright 2023 the easylearn academy</p>
            </div>
        </div>
    </div>);
}
function Team(props)
{
    return (<div className='col-lg-4'>
    <div className='card'>
        <div className='card-header text-bg-danger'>
            <h3>{props.name}</h3>
        </div>
        <div className='card-body'>
            Match Played : {props.match} <br />
            Match Won : {props.win} <br />
            Match loss : {props.loss} <br />
            Position : {props.position}
        </div>
    </div>
</div>);
}
function Page() {

    return (
        <div>
            <Header title='IPL Points Table' year='2023' />
            <div className='container mt-5 mb-5'>
                <div className='row'>
                    <Team name='Channai super kings' match='16' win='13' loss='3' position='1' />
                    <Team name='Gujarat Lions' match='16' win='14' loss='2' position='2' />
                    <Team name='Rajasthan Royals' match='16' win='12' loss='4' position='3' />
                </div>
            </div>
            <Footer />
        </div>
    );
}
root.render(<Page />)