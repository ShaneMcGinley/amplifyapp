import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return ( 
    function NavBar() {
      return ( 
        <div className="topnav" id="myTopnav">
          <a href="#home" class="active">Home</a>
          <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
          </a>
        </div>
      );
    },

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from V2</h1>
      </header>
    </div>
  );
}

export default App;
