import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormAlgo from './FormAlgo';



function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <FormAlgo/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    </>
  );
}

export default App;
