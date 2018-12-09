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
        <div class="bgimg-2">
            {this.props.projects.map( (projects, index) => {
                return (
                <Card id="display" key={index}>
                    <CardMedia>
                    <img id="img" src={projects.thumbnail} alt="thumbnail"/>
                    </CardMedia>
                    <CardContent id="card">
                        <div>{moment(projects.date_completed).format('LL')}</div>
                    </CardContent>
                        <Typography id="description">{projects.description || '' }</Typography>
                    <CardContent>
                        <h2>{projects.name}</h2>
                        <div>{projects.tag}</div>
                    </CardContent>
                    <CardContent>
                        <div>Made with {projects.tag}</div>
                    </CardContent>
                    <CardContent>
                        <Button color="primary" variant="contained">
                            {projects.website === '' ? '' : <a href={projects.website} target="_blank" rel="noopener noreferrer">Website</a>}
                        </Button>
                        <Button color="primary" variant="contained">
                            {projects.github === '' ? '' : <a href={projects.github} target="_blank" rel="noopener noreferrer">Github</a>}
                        </Button>
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


