import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PortfolioPage.css';
import Button from '@material-ui/core/Button';
import Header from './Header/Header';
import Body from './PortfolioBody/PortfolioBody'


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const moment = require('moment');


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
        {/* <Header github={'Millerborn'} name={'COOPER MILLER'}/> */}
        <Body />
        {/* <div id="nameDiv">
            <h3 id="projectSection">Projects</h3>
            <p></p>
        </div>
            {this.props.reduxState.projects.map( (projects, index) => {
                return (
                    <Card id="cardDiv" key={index}>
                        <img id="img" src={projects.thumbnail} alt="thumbnail"/>
                        <CardContent id="card">
                            <h2 id="float-left">{projects.name}</h2>
                            <br></br>
                            <div>{projects.tag || ''}</div>
                            <br></br>   
                            <Button>
                                {projects.website === '' ? '' : <a href={projects.website} target="_blank" rel="noopener noreferrer">Website</a>}
                            </Button>
                            <br></br>
                            <Button>
                                {projects.github === '' ? '' : <a href={projects.github} target="_blank" rel="noopener noreferrer">Github</a>}
                            </Button>
                            <br></br>
                            <div>{moment(projects.date_completed).format('LL')}</div>
                        </CardContent>
                        <Typography id="description">{projects.description || '' }</Typography>
                    </Card>
                )
            })} */}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Portfolio);
