import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

export class Provinces extends Component {
    render() {
        const province = this.props.match.params.name
        return (
            <div>
                {province}
            </div>
        )
    }
}
export default Provinces;