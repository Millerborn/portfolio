import React, { Component } from 'react';

class Header extends Component {
    // Displays the header when github username is provided via props
    render() {
        return (
            <header id="header">
                <div className="bg-color">
                </div>
                {/* Only render if a github username was passed through props */}
                {this.props.github != '' &&
                    <div>
                        <div className="user-img-container">
                            {/* <div className="user-img">
                                <img id="profile-image" alt="profile-image" src="/images/DSC_3405-2.jpg" />
                            </div> */}
                        </div>
                        <div>
                            <h1>{this.props.name}</h1>
                        </div>
                    </div>
                }

            </header>
        );
    }
}

export default Header;