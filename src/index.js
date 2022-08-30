import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Table from './component/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Komponen3 from './component/Komponen3';
import StatefulContainer from './container/StatefulContainer';
import YoutubeComp from './component/YoutubeComp/YoutubeComp';
import Home from './container/Home/Home';

//stateless
function Komponen(){
  return <p>State Komponen Funtional</p>
} 

const Komponen2 = () => {
  return <p>ini komponen2</p>
}

//statefull
class StatefulComponent extends React.Component{
  render(){
    return <p>StatefulComponent</p>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
    {/* <App /> */}
    {/* <Komponen/> */}
    {/* <Komponen2/> */}
    {/* <Komponen3/> */}
    {/* <StatefulComponent/> */}
    {/* <StatefulContainer/> */}
    {/* <Table/> */}
    {/* <YoutubeComp/> */}
    <Home/>
    {/* <App/> */}
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
