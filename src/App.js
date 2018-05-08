import React, { Component } from 'react';
import Userbar from './components/navigation/Userbar';
import Dashboard from './components/dashboard/Dashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="layout">
          <Userbar />
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default App;
