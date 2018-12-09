import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PortfolioPage.css';
import Body from './PortfolioBody';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
class Portfolio extends Component {

    componentDidMount() {
        // Dispatch action to get projects
        this.getProjectList();
    }

    getProjectList() {
        this.props.dispatch( { type: 'GET_PROJECTS' } )
    }

  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(Portfolio);
