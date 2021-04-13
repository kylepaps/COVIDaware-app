import React, { Component } from 'react';
import { Chart } from "react-google-charts";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

export class Provinces extends Component {
    constructor() {
        super();
        this.state = {
            province_code: '',
            data: [],
        };
    }

    componentDidMount() {
        const province = this.props.match.params.name
        console.log(province)
        fetch(`/provinces?name=${province}`)
            .then(res => res.json())
            .then(findResponse => {
                console.log(findResponse)
                this.setState({
                    data: [findResponse],
                })
                
            });
    }
    

    render() {
        
        const p = this.props.match.params.name
        var province = p;
        if(p == "bc"){
            province = "British Columbia";
        }else if(p == "nb"){
            province = "New Brunswick";
        }else if(p == "nl"){
            province = "Newfoundland And Labrador";
        }else if(p == "ns"){
            province = "Nova Scotia";
        }else if(p == "pe"){
            province = "Prince Edward Island";
        }else if(p == "nt"){
            province = "Northwest Territories";
        }else if(p == "on"){
            province = "Ontario";
        }else if(p == "yt"){
            province = "Yukon";
        }else if(p == "qc"){
            province = "Quebec";
        }else if(p == "ab"){
            province = "Alberta";
        }else if(p == "sk"){
            province = "Saskatchewan";
        }else if(p == "mb"){
            province = "Manitoba";
        }else if(p == "nu"){
            province = "Nunavut";
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
                        <div className = "chart">
                            <Chart
                                width={'750px'}
                                height={'500px'}
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