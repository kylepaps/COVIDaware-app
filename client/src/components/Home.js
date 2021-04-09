import React, { Component } from 'react';
import { Chart } from "react-google-charts";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


export class Home extends Component {
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
                        <h2>Canada</h2>
                    </div>
                    <div class = "mainInfo">
                        <Chart
                            width={'600px'}
                            height={'400px'}
                            chartType="GeoChart"
                            data={[
                                ['Country', 'Province',   'Total Cases'],
                                ['CA-ON','ON', 2000],
                                ['CA-NB','NB', 121],
                                ['CA-BC','BC', 400], 
                                ['CA-QC','QC', 1000],
                                ['CA-NS','NS', 150],
                                ['CA-MB','MB', 300], 
                                ['CA-PE','PE', 200],
                                ['CA-SK','SK', 250],
                                ['CA-AB','AB', 421],
                                ['CA-YT','YT', 70],
                                ['CA-NT','NT', 90],
                                ['CA-NL','NL', 54],
                                ['CA-NU','NU', 66]
                            ]}
                            options={{
                                region: 'CA', // Canada
                                colorAxis: { colors: ['#00853f', 'yellow', '#e31b23'] },
                                resolution: 'provinces',
                                backgroundColor: '#E0E0E0',
                                datalessRegionColor: 'grey',
                                defaultColor: '#f5f5f5',
                            }}
                            // create .env for key
                            const API_KEY = {process.env.REACT_APP_API_KEY}
                            rootProps={{ 'data-testid': '1' }}
                        />
                        <br></br>
                        <Chart
                            width={'600px'}
                            height={'400px'}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Canadaian Regions', 'Total Covid Cases'],
                                ['Ontario', 11],
                                ['New Brunswick', 2],
                                ['Manatoba', 2],
                                ['Yukon', 2],
                                ['Prince Edward', 7],
                                ['Nova Scotia', 7],
                                ['Alberta', 7],
                                ['NewFoundLand', 7],
                                ['Nunavut', 7],
                                ['Sasksatoon', 7],
                                ['North West Territories', 7],
                            ]}
                            options={{
                                title: 'Total Covid Cases',
                                pieSliceText: 'label',
                                is3D: true,
                                backgroundColor: '#E0E0E0',
                            }}
                            rootProps={{ 'data-testid': '2' }}
                        />
                        
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
export default Home;