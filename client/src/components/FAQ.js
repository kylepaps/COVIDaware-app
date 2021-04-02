import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

export class FAQ extends Component {
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
                        <h2>FAQs</h2>
                    </div>
                    <div class = "mainInfo">
                        <h4 className = "FAQHeader">How does COVID-19 spread?</h4>
                        <p>The virus is spread through close contact (within 6 ft) from person-to-person.</p>
                        <h4 className = "FAQHeader">What are the authorized vaccines?</h4>
                        <p>Moderna, Pfizer-BioNTech, AstraZeneca/COVISHIELD, Janssen.</p>
                        <h4 className = "FAQHeader">Are the vaccines free?</h4>
                        <p>Yes, approved vaccinations in Canada are free.</p>
                        <h4 className = "FAQHeader">What is COVID-19?</h4>
                        <p>CO refers to Corona, VI refers to virus, D refers to disease, and 19 refers to the year the virus was found(2019)</p>
                        <h4 className = "FAQHeader">What are Coronaviruses?</h4>
                        <p>A large family of viruses that can cause mild to moderate upper-respiratory tract illnesses, COVID-19 falls under this category.</p>
                        <h4 className = "FAQHeader">What are the symptoms of COVID-19?</h4>
                        <p>The most common symptoms include fever, dry cough, and tiredness.</p>
                        <h4 className = "FAQHeader">Who can travel to and enter Canada?</h4>
                        <p>Canadian citizens, dual Canadian citizens with a valid Canadian passport or special authorization, permanent residents of Canada, those registered under Canada’s Indian Act, and protected persons.</p>
                        <h4 className = "FAQHeader">What should you do if you have been exposed to COVID-19?</h4>
                        <p>Those who may have been exposed to someone with COVID-19 and those who have recently travelled to a country or region with the widespread transmission have been advised to self-quarantine for 14 days from the time of last possible exposure.</p>
                        <h4 className = "FAQHeader">What does Green Zone mean?</h4>
                        <p>Green stands for prevent. In this zone, 10 people are allowed indoors and 25 outdoor. Businesses are limited to 50 people indoors and 100 outside. Indoor and Outdoor dining is permitted.</p>
                        <h4 className = "FAQHeader">What does Yellow Zone mean?</h4>
                        <p>Yellow stands for Protect. In this zone, no more than 6 people can be seated together when dining and each patron must provide contact information. Establishments must be closed from 12am to 5am and music must be kept at a low volume.</p>
                        <h4 className = "FAQHeader">What does Orange Zone mean?</h4>
                        <p>Orange stands for restrict. Indoor dining is allowed with up to 50 people indoors, and up to four people can be seated together. Establishments must be closed from 10 pm to 5 am. Spectators are not permitted in sports and recreational facilities. As well, patrons can not be in a facility for more than 90 minutes unless engaging in a sport.</p>
                        <h4 className = "FAQHeader">What does Red Zone mean?</h4>
                        <p>Red stands for Control. All organized public events and social gatherings are limited to 5 people indoors and 25 people outdoors. Indoor dining is allowed with up to 10 people indoors. Dancing, singing, and live music are prohibited.Supermarkets and other stores that primarily sell groceries, convenience stores, and pharmacies are limited to 75% capacity. All other retail stores, including big box retailers and liquor stores, are limited to 50% capacity.</p>
                        <h4 className = "FAQHeader">What does Grey Zone mean?</h4>
                        <p>Grey stands for Lockdown. No indoor organized public events and social gatherings are allowed, except with members of the same household. Those who live alone can have close contact with one other household. Where physical distancing can be maintained, outdoor organized public events and social gatherings are limited to 10 people. Religious services and ceremonies are limited to 10 people indoors and 10 people outdoors if held somewhere other than a private dwelling. Drive-in events are permitted.</p>
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
export default FAQ;