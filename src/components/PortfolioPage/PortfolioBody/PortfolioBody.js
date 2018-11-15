import React, { Component } from 'react';
import './PortfolioBody.css';

class Body extends Component {
    render() {
        return (
            <div>
                <div class="bgimg-1">
                    <header></header>
                    <div class="caption">
                        <span class="border">Cooper Miller</span>
                    </div>
                </div>

                <div class="divStyle">
                    <h3 class="h3Caption">Welcome</h3>
                    <p></p>
                </div>

                <div class="bgimg-2">
                    <div class="caption">
                        <span class="border"></span>
                    </div>
                </div>

                <div class="divStyle">
                    <h3 class="h3Caption">About Me</h3>
                    <p></p>
                </div>


                <div class="bgimg-3">
                    <div class="caption">
                        <span class="border"></span>
                    </div>
                </div>

                <div class="divStyle">
                    <h3 class="h3Caption">Learn More</h3>
                    <p></p>
                </div>

                <div class="bgimg-1">
                    <div class="caption">
                        <span class="border"></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;
