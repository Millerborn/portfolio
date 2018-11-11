import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PortfolioPage.css';

// material-ui imports
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';


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
      <div id="headerDiv">
          <h1>Cooper Miller</h1>
      </div>
        {/* <Card id="card"> */}
            {this.props.reduxState.projects.map( (projects, index) => {
                return (
                    <div id="innerDiv" key={index}>
                        <div className="card">
                            <h2>{projects.name}</h2>
                            <div>{projects.thumbnail === '' ? '' : <img src={projects.thumbnail} alt="thumbnail"/>}</div>
                            <div>{projects.description || '' }</div>
                            <div>
                                {projects.website === '' ? '' : <a href={projects.website} target="_blank" rel="noopener noreferrer">Website</a>}
                            </div>
                            <br></br>
                            <div>
                                {projects.github === '' ? '' : <a href={projects.github} target="_blank" rel="noopener noreferrer">Github</a>}
                            </div> 
                            <br></br>                               
                            <div>{projects.date_completed}</div>
                            <div>{projects.tag_id === null ? '' : projects.tag}</div>
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
