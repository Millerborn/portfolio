import React, { Component } from 'react';
import './App.css';
import Portfolio from '../PortfolioPage/PortfolioPage';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Admin from '../AdminView/AdminView';
import Button from '@material-ui/core/Button';



class App extends Component {
  // Render the app on the DOM
  render() {
    return (
      <div id="AppDiv">
        <Router>
          <div id="navBar">
            <Route exact path="/" component={Portfolio} />
            <Route path="/admin" component={Admin}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
