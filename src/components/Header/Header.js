import React, { Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    header: {
        padding: 10,
        backgroundColor: '#FFEB3B',
        fontFamily: 'oswald',
    },
});

class Header extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.header}>
                <h1>Cooper Miller</h1>  
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