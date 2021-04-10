import React, { Component } from 'react';
import { Chart } from "react-google-charts";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

export class Provinces extends Component {
    render() {
        const p = this.props.match.params.name
        var province = p;
        if(p == "BritishColumbia"){
            province = "British Columbia";
        }else if(p == "NewBrunswick"){
            province = "New Brunswick";
        }else if(p == "NewfoundlandAndLabrador"){
            province = "Newfoundland And Labrador";
        }else if(p == "NovaScotia"){
            province = "Nova Scotia";
        }else if(p == "PrinceEdwardIsland"){
            province = "Prince Edward Island";
        }else if(p == "NorthwestTerritories"){
            province = "Northwest Territories";
        }
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
                        <h2>{province}</h2>
                    </div>
                    <div class = "mainInfo">
                    <Chart
                            width={'600px'}
                            height={'400px'}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Type', ''],
                                ['Deaths', 1000],
                                ['Recoveries', 30000],
                            ]}
                            options={{
                                title: 'Deaths/Recoveries Comparison',
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
export default Provinces;