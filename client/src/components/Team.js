import React, { Component } from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

export class Team extends Component {
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
                        <h2>The COVIDaware Team</h2>
                    </div>
                    <div class = "mainInfo" id = "teamTable">
                        <table cellspacing = '0'>
                            <thead>
                                <tr>
                                    <th>Team Member</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Asad, Asif</td>
                                    <td>asif5080@mylaurier.ca</td>
                                </tr>
                                <tr>
                                    <td>Attfield, Evan</td>
                                    <td>att7010@mylaurier.ca</td>
                                </tr>
                                <tr>
                                    <td>Bahia, Ryan</td>
                                    <td>bahi3860@mylaurier.ca</td>
                                </tr>
                                <tr>
                                    <td>Baig, Ahmar</td>
                                    <td>baig9620@mylaurier.ca</td>
                                </tr>
                                <tr>
                                    <td>Chrisholm, Kevin</td>
                                    <td>chls7310@mylaurier.ca</td>
                                </tr>
                                <tr>
                                    <td>Grabinski, Bartosz</td>
                                    <td>grab7840@mylaurier.ca</td>
                                </tr>
                                <tr>
                                    <td>Hoang, Alex</td>
                                    <td>hoan5090@mylaurier.ca</td>
                                </tr>
                                <tr>
                                    <td>Kala, Raman</td>
                                    <td>kala9110@mylaurier.ca</td>
                                </tr>
                                <tr>
                                    <td>Lall, Maninder</td>
                                    <td>lall9370@mylaurier.ca</td>
                                </tr>
                                <tr>
                                    <td>Luloff, Zach</td>
                                    <td>lulo9390@mylaurier.ca</td>
                                </tr>
                                <tr>
                                    <td>Maynard, Amari</td>
                                    <td>mayn8320@mylaurier.ca</td>
                                </tr>
                                <tr>
                                    <td>Mcleod, Liam</td>
                                    <td>mcle1340@mylaurier.ca</td>
                                </tr>
                                <tr>
                                    <td>Papizewski, Kyle</td>
                                    <td>papi0600@mylaurier.ca</td>
                                </tr>
                                
                                <tr>
                                    <td>Pattathe, Lakshmi</td>
                                    <td>patt3760@mylaurier.ca</td>
                                </tr>
                                
                            </tbody>
                        </table>
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
export default Team;