import React, { Component } from 'react';
import './App.css';
import Portfolio from '../PortfolioPage/PortfolioPage';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Admin from '../AdminView/AdminView';
import Button from '@material-ui/core/Button';



class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div>
        <Router>
          <div id="navBar">
              <Button id="projectButton"><Link to="/">Projects</Link></Button>
              <Button id="adminButton"><Link to="/admin">Admin</Link></Button>
            <Route exact path="/" component={Portfolio} />
            <Route path="/admin" component={Admin}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
