import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PortfolioPage.css';

// material-ui imports
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
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

  render() {
    return (
      <div className="App">
        {this.props.reduxState.projects.map( (projects, index) => {
                    return (
                        <Card id="card" key={index}>
                            <CardActionArea id="innerDiv" key={index}>
                                <CardMedia img={projects.thumbnail} />
                                <h3>{projects.name}</h3>
                                <p>{projects.description}</p>
                                <p>{projects.thumbnail}</p>
                                <a href={projects.website} target="_blank">Website</a>
                                <br></br>
                                <a href={projects.github} target="_blank">GitHub</a>
                                <p>{projects.date_completed}</p>
                                <p>{projects.tag_id}</p>
                            </CardActionArea>
                        </Card>
                    )
                })}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Portfolio);
