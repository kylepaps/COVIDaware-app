import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import logo from './logo.png';

export class Navigation extends Component {
    render() {
        return (
        <Navbar className = "navBar">
            <Navbar.Brand href="/"><img className = "logo" src = {logo} alt = "logo"/></Navbar.Brand>
            <NavDropdown className = "provinceDropdown" title="Provinces" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Provinces/Alberta">Alberta</NavDropdown.Item>
                <NavDropdown.Item href="/Provinces/BritishColumbia">British Columbia</NavDropdown.Item>
                <NavDropdown.Item href="/Provinces/Manitoba">Manitoba</NavDropdown.Item>
                <NavDropdown.Item href="/Provinces/NewBrunswick">New Brunswick</NavDropdown.Item>
                <NavDropdown.Item href="/Provinces/NewfoundlandAndLabrador">Newfoundland and Labrador</NavDropdown.Item>
                <NavDropdown.Item href="/Provinces/NovaScotia">Nova Scotia</NavDropdown.Item>
                <NavDropdown.Item href="/Provinces/Ontario">Ontario</NavDropdown.Item>
                <NavDropdown.Item href="/Provinces/PrinceEdwardIsland">Prince Edward Island</NavDropdown.Item>
                <NavDropdown.Item href="/Provinces/Quebec">Quebec</NavDropdown.Item>
                <NavDropdown.Item href="/Provinces/Saskatchewan">Saskatchewan</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Provinces/NorthwestTerritories">Northwest Territories</NavDropdown.Item>
                <NavDropdown.Item href="/Provinces/Nunavut">Nunavut</NavDropdown.Item>
                <NavDropdown.Item href="/Provinces/Yukon">Yukon</NavDropdown.Item>
            </NavDropdown>
            <Nav className="mr-auto">
                <Nav.Link href="/FAQ">FAQ</Nav.Link>
                <Nav.Link href="/About">About</Nav.Link>
                <Nav.Link href="/Team">Team</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
            </Form>
        </Navbar>
        )
    }
}
export default Navigation;
