import React from 'react';
import logo from './logo.svg';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
