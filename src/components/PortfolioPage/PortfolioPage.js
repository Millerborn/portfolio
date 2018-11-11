import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PortfolioPage.css';

// material-ui imports
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


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

    // render description null if empty
    // isEmpty(project) {
    //     console.log('checking if value is empty', project.name);
        
    // }

  render() {
    return (
      <div className="App">
      <div id="headerDiv">
          <h1>Cooper Miller</h1>
      </div>
        {/* <Card id="card"> */}
            {this.props.reduxState.projects.map( (projects, index) => {
                return (
                    <div id="innerDiv" key={index}>
                        <div className="card">
                            <h3>{projects.name}</h3>
                            <div>{projects.thumbnail === null ? '' : projects.thumbnail}</div>
                            {/* <div> {this.props.date === null ? 'NO IDEA' : this.props.date }</div> */}
                                <div>{projects.description === null ? '' : projects.description}</div>
                                <div><a href={projects.website} target="_blank" rel="noopener noreferrer">Website</a></div>
                                <br></br>
                                <div><a href={projects.github} target="_blank" rel="noopener noreferrer">GitHub</a></div>
                                <div>{projects.date_completed === null ? '' : projects.date_completed}</div>
                                <div>{projects.tag_id === null ? '' : projects.tag_id}</div>
                        </div>
                    </div>
                        )
            })}
        {/* </Card> */}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Portfolio);
