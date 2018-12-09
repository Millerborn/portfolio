import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../PortfolioPage/PortfolioPage';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    img: {
      width: '150px',
      height: '150px',
      padding: '20px',
    },
  });

class Home extends Component {

    render() {
        const { classes } = this.props;   
        return (
            <div className="profile-images">
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/Millerborn">
                    <img className={classes.img} alt="gitImage" src="/images/github-image.jpeg" /> 
                </a>
                <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/cooper-miller-1ab28a68/">
                    <img className={classes.img} alt="linkedInImage" src="/images/linkedin2.jpeg" />
                </a>
                <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/thebarrellmaker/">
                    <img className={classes.img} alt="instagramImage" src="/images/instagram.jpeg" /> 
                </a>
                <a rel="noopener noreferrer" target="_blank" href="https://soundcloud.com/saggasays">
                    <img className={classes.img} alt="soundCloudImage" src="/images/soundcloud.jpeg" />
                </a>
                <a rel="noopener noreferrer" target="_blank" href="/images/Resume (3).pdf">
                    <img className={classes.img} alt="soundCloudImage" src="/images/resume-1.jpeg" />
                </a>
                <a rel="noopener noreferrer" target="_blank" href="mailto:coopermllr@gmail.com">
                    <img className={classes.img} alt="soundCloudImage" src="/images/gmail.jpeg" />
                </a>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default compose(
    connect(mapReduxStateToProps),
    withStyles(styles)
)(Home);
