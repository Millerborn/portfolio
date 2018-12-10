import React, { Component } from 'react';
import '../PortfolioPage/PortfolioPage.css';
class About extends Component {
    render() {
        return (
            <div>
                <img className="link-image" alt="" src="/images/ireland-profile.jpg"></img>
                <p>I am a Junior Developer entering the Tech industry. 
                    My background comes from working in fast paced environments
                    communicating with teammates to accomplish a mutual goal,
                    give customers the best experience possible. I have a passion
                    for giving people a unique and enjoyable experience.
                    I want to translate that into the tech industry and work with new
                    and talented people to make something incredible.    
                </p>
            </div>
        );
    }
}

export default About;
