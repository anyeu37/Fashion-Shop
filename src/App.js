import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Header/Navbar';
import Router from './router/Router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <React.Fragment>
          <div className="Header">
            <Navbar />
          </div>
          <Router />
        </React.Fragment>
      </div>
    );
  }
}

export default App;
