import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

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
                        <a class="twitter-timeline" href="https://twitter.com/Covid19_Canada?ref_src=twsrc%5Etfw">Tweets by Covid19_Canada</a> 
                        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                    </div>
                </div>
                <div class = "infoContainer">
                    <div class = "infoTitle">
                        <h2>{province}</h2>
                    </div>
                    <div class = "mainInfo">
                        <p>Info</p>
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