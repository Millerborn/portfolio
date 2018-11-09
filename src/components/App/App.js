import React, { Component } from 'react';
import './App.css';
import Portfolio from '../PortfolioPage/PortfolioPage'
class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <p>Empty Page</p>
        <Portfolio />
      </div>
    );
  }
}

export default App;
