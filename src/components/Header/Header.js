import React, { Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './Header.css';

const styles = theme => ({
    header: {
        padding: 15,
        fontFamily: 'Roboto',
        color: 'black',
        fontSize: '70px',
    },
});

class Header extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div id="hit-the-floor" className={classes.header}>
                <strong><p>Cooper Miller</p></strong>  
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(
    withStyles(styles)
)(Header);