import React, { Component } from 'react';
import './App.css';
import Portfolio from '../PortfolioPage/PortfolioPage';
import { HashRouter as Router, Route } from 'react-router-dom';
import Admin from '../AdminView/AdminView';



class App extends Component {
  // Render the app on the DOM
  render() {
    return (
      <Router>
        <div id="AppDiv">
          <div id="navBar">
            <Route exact path="/" component={Portfolio} />
            <Route path="/admin" component={Admin}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
