import React from 'react';//react pour créer les éléments
import ReactDOM from 'react-dom/client';//reactdom pour afficher  les éléments
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
//const monElement=<h1 className='text-center'>Hello i'm learning React Language  </h1> 
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <>
  
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </>
)
/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
