import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root')
);
