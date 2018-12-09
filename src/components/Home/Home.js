import React, { Component } from 'react';
// import '../PortfolioPage/PortfolioBody.css';
import '../PortfolioPage/PortfolioPage';

class Home extends Component {
    render() {
        return (
            <div class="bgimg-1">
            <div className="profile-images">
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/Millerborn">
                    <img className="link-image" alt="gitImage" src="/images/github-image.jpeg" /> 
                </a>
                <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/cooper-miller-1ab28a68/">
                    <img className="link-image" alt="linkedInImage" src="/images/linkedin2.jpeg" />
                </a>
            </div>
        </div>
        );
    }
}

export default Home;