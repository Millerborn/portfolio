import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PortfolioPage.css';
import Button from '@material-ui/core/Button';


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
            {this.props.reduxState.projects.map( (projects, index) => {
                return (
                    <div id="innerDiv" key={index}>
                        <div id="card">
                        <div>{projects.tag_id === null ? '' : projects.tag}</div>   
                            <div id="thumbnail">{projects.thumbnail === '' ? '' : <img id="img" src={projects.thumbnail} alt="thumbnail"/>}</div>
                            <h2>{projects.name}</h2>
                            <div>
                            <Button>
                                {projects.website === '' ? '' : <a href={projects.website} target="_blank" rel="noopener noreferrer">Website</a>}
                            </Button>
                            </div>
                            <div>
                            <Button>
                                {projects.github === '' ? '' : <a href={projects.github} target="_blank" rel="noopener noreferrer">Github</a>}
                            </Button>
                            </div> 
                            <div id="description">{projects.description || '' }</div>
                            <div>{projects.date_completed}</div>
                        </div>
                    </div>
                        )
            })}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Portfolio);
