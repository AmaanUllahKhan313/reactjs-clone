import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Home from './components/home';

class App extends Component {
  render() {
    return (
      <div className="n-container">
        <NavBar/>
        <Home/>
      </div>
    );
  }
}

export default App;
