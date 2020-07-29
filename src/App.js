import React from 'react';
import './App.css';
import logo from './Bitcoin.png'

import Crypto from './Crypto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} alt="logo-bitcoin" />
        <h1>Crypto rate</h1>
      </header>

      <Crypto />
    </div>
  );
}

export default App;
