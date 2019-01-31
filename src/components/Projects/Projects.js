import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import '../PortfolioPage/PortfolioPage.css';

const moment = require('moment');
class Projects extends Component {

  render() {
    return (
        <div className="projects-div">
            {this.props.projects.map( (projects, index) => {
                return (
                <Card className="project-content" id="display" key={index}>
                    <CardMedia>
                    <img id="img" src={projects.thumbnail} alt="thumbnail"/>
                    </CardMedia>
                    <CardContent id="card">
                        <div>{moment(projects.date_completed).format('LL')}</div>
                    </CardContent>
                        <Typography id="description">{projects.description || '' }</Typography>
                    <CardContent>
                        <h2>{projects.name}</h2>
                    </CardContent>
                    <CardContent>
                        <div>Made with {projects.tag}</div>
                    </CardContent>
                    <CardContent>
                        <Button color="primary" variant="contained"><a className="project-link-button" href={projects.website} target="_blank" rel="noopener noreferrer">Website</a></Button> <Button color="primary" variant="contained"><a className="project-link-button" href={projects.github} target="_blank" rel="noopener noreferrer">Github</a></Button>
                    </CardContent>
                </Card>
            )
        })}
        </div>
    );
  }
}

const mapStateToProps = reduxState => ({
    projects: reduxState.projects,
});

export default connect(mapStateToProps)(Projects);


