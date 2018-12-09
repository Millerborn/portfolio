import React, { Component } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import Projects from '../Projects/Projects';
import About from '../About/About';
import Connect from '../Connect/Connect';
import Home from '../Home/Home';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(30),
    fontWeight: theme.typography.fontWeightRegular,
  },
});


class Body extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>Welcome</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Home />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>Projects</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Projects />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>About</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <About />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>Connect</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Connect />
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
        );
    }
}

Body.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default compose(
    connect(mapReduxStateToProps),
    withStyles(styles)
)(Body);

