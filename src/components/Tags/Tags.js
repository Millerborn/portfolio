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
        <div>
            {this.props.reduxState.tags.map( (tags, index) => {
                return (
                    <div id="tagDiv" key={index}>
                        <p>{tags.name}</p>
                    </div>
                )
            })}
        </div>
    );
  }
}

export default connect(mapStateToProps)(Portfolio);
