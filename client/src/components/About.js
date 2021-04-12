import React, { Component } from 'react';
import covidPic from '../pictures/covidPic.png'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

export class About extends Component {
    render() {
        return (
            <div className = "mainContainer">
                <div class = "sideBar">
                    <div class = "twitterLabel">
                        <h2>News Updates</h2>
                    </div>
                    <div class = "twitterAPI">
                        <TwitterTimelineEmbed
                            sourceType="profile"
                            screenName="covid_canada"
                            options={{height: 720}}
                        />
                    </div>
                </div>
                <div class = "infoContainer">
                    <div class = "infoTitle">
                        <h2>About COVIDaware</h2>
                    </div>
                    <div class = "mainInfo" id = "aboutInfo">
                        <p className = "aboutInfo">Since the beginning of the COVID-19 pandemic, information and statistics have been scattered across the internet. This has resulted in the need for a simple website that displays COVID-19 related information in a user friendly manner.</p><br></br>
                        <p className = "aboutInfo">COVIDaware is an intuitive method for accessing all information regarding COVID-19, in a user-friendly format. All data on the COVIDaware website is from the Canadian government website for COVID-19. The objective of COVIDaware is to create an all inclusive tool to help users develop a deeper understanding of COVID-19 data.</p>
                        <div className = "COVIDPic">
                            <img  src = {covidPic} alt = "COVID"/>
                        </div>
                        
                    </div>
                </div>
                <div class = "footer">
                    <div class = "cp">
                        <p>Last Updated 2021/04/01<br></br>&copy; COVIDaware</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default About;