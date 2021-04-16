import React, { Component } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

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
                                    <th>Github Usernames</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Asif, Asad</td>
                                    <td>asif5080@mylaurier.ca</td>
                                    <td>Asad-Asif</td>
                                </tr>
                                <tr>
                                    <td>Attfield, Evan</td>
                                    <td>attf7010@mylaurier.ca</td>
                                    <td>evan-attf</td>
                                </tr>
                                <tr>
                                    <td>Bahia, Ryan</td>
                                    <td>bahi3860@mylaurier.ca</td>
                                    <td>Ryan-Bahia</td>
                                </tr>
                                <tr>
                                    <td>Baig, Ahmar</td>
                                    <td>baig9620@mylaurier.ca</td>
                                    <td>AhmarBaig</td>
                                </tr>
                                <tr>
                                    <td>Chisholm, Kevin</td>
                                    <td>chis7310@mylaurier.ca</td>
                                    <td>kevinchisholm45</td>
                                </tr>
                                <tr>
                                    <td>Grabinski, Bartosz</td>
                                    <td>grab7840@mylaurier.ca</td>
                                    <td>GrabinskiBart</td>
                                </tr>
                                <tr>
                                    <td>Hoang, Alex</td>
                                    <td>hoan5090@mylaurier.ca</td>
                                    <td>Halex2936</td>
                                </tr>
                                <tr>
                                    <td>Kala, Raman</td>
                                    <td>kala9110@mylaurier.ca</td>
                                    <td>ramankala</td>
                                </tr>
                                <tr>
                                    <td>Lall, Maninder</td>
                                    <td>lall9370@mylaurier.ca</td>
                                    <td>maninder-lall</td>
                                </tr>
                                <tr>
                                    <td>Luloff, Zach</td>
                                    <td>lulo9390@mylaurier.ca</td>
                                    <td>zlu55</td>
                                </tr>
                                <tr>
                                    <td>Maynard, Amari</td>
                                    <td>mayn8320@mylaurier.ca</td>
                                    <td>MalcomMaynard</td>
                                </tr>
                                <tr>
                                    <td>Mcleod, Liam</td>
                                    <td>mcle1340@mylaurier.ca</td>
                                    <td>Liam-McLeod</td>
                                </tr>
                                <tr>
                                    <td>Papizewski, Kyle</td>
                                    <td>papi0600@mylaurier.ca</td>
                                    <td>kylepaps</td>
                                </tr>
                                
                                <tr>
                                    <td>Pattathe, Lakshmi</td>
                                    <td>patt3760@mylaurier.ca</td>
                                    <td>lakshmipat</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Team;