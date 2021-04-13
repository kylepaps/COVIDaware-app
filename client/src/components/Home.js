import React, { Component } from 'react';
import { Chart } from "react-google-charts";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

//import data from './Data/covidJSON.json'
/*
var dateFormat = require("dateformat");

var d7 = dateFormat((new Date(new Date().setDate(new Date().getDate()-7))), "yyyy-mm-dd")
var d6 = dateFormat((new Date(new Date().setDate(new Date().getDate()-8))), "yyyy-mm-dd")
var d5 = dateFormat((new Date(new Date().setDate(new Date().getDate()-9))), "yyyy-mm-dd")
var d4 = dateFormat((new Date(new Date().setDate(new Date().getDate()-10))), "yyyy-mm-dd")
var d3 = dateFormat((new Date(new Date().setDate(new Date().getDate()-11))), "yyyy-mm-dd")
var d2 = dateFormat((new Date(new Date().setDate(new Date().getDate()-12))), "yyyy-mm-dd")
var d1 = dateFormat((new Date(new Date().setDate(new Date().getDate()-13))), "yyyy-mm-dd")


var dt7 = Number(data[d7]['data » total_fatalities'])
var r7 = Number(data[d7]['data » total_recoveries'])
var c7 = Number(data[d7]['data » total_cases'])

var dt6 = Number(data[d6]['data » total_fatalities'])
var r6 = Number(data[d6]['data » total_recoveries'])
var c6 = Number(data[d6]['data » total_cases'])

var dt5 = Number(data[d5]['data » total_fatalities'])
var r5 = Number(data[d5]['data » total_recoveries'])
var c5 = Number(data[d5]['data » total_cases'])

var dt4 = Number(data[d4]['data » total_fatalities'])
var r4 = Number(data[d4]['data » total_recoveries'])
var c4 = Number(data[d4]['data » total_cases'])

var dt3 = Number(data[d3]['data » total_fatalities'])
var r3 = Number(data[d3]['data » total_recoveries'])
var c3 = Number(data[d3]['data » total_cases'])

var dt2 = Number(data[d2]['data » total_fatalities'])
var r2 = Number(data[d2]['data » total_recoveries'])
var c2 = Number(data[d2]['data » total_cases'])

var dt1 = Number(data[d1]['data » total_fatalities'])
var r1 = Number(data[d1]['data » total_recoveries'])
var c1 = Number(data[d1]['data » total_cases'])
*/

/*
    <Chart
        width={500}
        height={300}
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        data={[
            ['Date','Case','Death','Recoveries'],
            [d7, c7,dt7,r7],
            [d6, c6,dt6,r6],
            [d5, c5,dt5,r5],
            [d4, c4,dt4,r4],
            [d3, c3,dt3,r3],
            [d2, c2,dt2,r2],
            [d1, c1,dt1,r1],
            
            ]}
        options={{
        backgroundColor: "#E0E0E0",
        title: 'Cases, Fatalities and Recoveries in the past 7 Days',
        chartArea: { width: '50%' },
        hAxis: {
            title: 'Date',
            minValue: 0,
        },
        vAxis: {
            title: " ",
        },
        }}
        legendToggle
    />
*/
export class Home extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        fetch(`/canada`)
            .then(res => res.json())
            .then(findResponse => {
                console.log(findResponse)
                this.setState({
                    data: [findResponse],
                })
                
            });
    }

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
                        <div className = "chart">
                            <Chart className = "firstChart"
                                width={'900px'}
                                height={'600px'}
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
                        </div>
                        <br></br>
                        <div className = "chart">
                            <Chart
                                width={'900px'}
                                height={'600px'}
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
                        <br></br>

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