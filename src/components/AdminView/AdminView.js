import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AdminView.css';


const mapStateToProps = reduxState => ({
    reduxState,
});

class Admin extends Component {

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
        {/* <p>{JSON.stringify(this.props.reduxState.projects)}</p> */}
        <div id="projectDiv">
            {this.props.reduxState.projects.map( (projects, index) => {
                return (
                    <div id="innerDiv" key={index}>
                        <p>{projects.name}</p>
                        <p>{projects.description}</p>
                        <p>{projects.thumbnail}</p>
                        <p>{projects.website}</p>
                        <p>{projects.github}</p>
                        <p>{projects.date_completed}</p>
                        <p>{projects.tag_id}</p>
                    </div>
                )
            })}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Admin);
