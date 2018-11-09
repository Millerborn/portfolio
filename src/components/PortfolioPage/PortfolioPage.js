import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PortfolioPage.css';


const mapStateToProps = reduxState => ({
    reduxState,
});

class Portfolio extends Component {

    componentDidMount() {
        // Dispatch action to request the projects from the API
        this.getProjectList();
    }

    getProjectList() {
        this.props.dispatch( { type: 'GET_PROJECTS' } )
    }

  render() {
    return (
      <div className="App">
        <p>Portfolio Page</p>
        <p>{JSON.stringify(this.props.reduxState.projects)}</p>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Portfolio);
