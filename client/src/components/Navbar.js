import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import logo from '../pictures/logo.png';
export class Navigation extends Component {
    
    render() {
        
        return (
        <Navbar className = "navBar">
            <Navbar.Brand href="/"><img className = "logo" src = {logo} alt = "logo"/></Navbar.Brand>
            <NavDropdown className = "provinceDropdown" title="Provinces" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Provinces/ab">Alberta</NavDropdown.Item>
                <NavDropdown.Item href="/Provinces/bc">British Columbia</NavDropdown.Item>
                <NavDropdown.Item href="/Provinces/mb">Manitoba</NavDropdown.Item>
                <NavDropdown.Item href="/Provinces/nb">New Brunswick</NavDropdown.Item>
                <NavDropdown.Item href="/Provinces/nl">Newfoundland and Labrador</NavDropdown.Item>
                <NavDropdown.Item href="/Provinces/ns">Nova Scotia</NavDropdown.Item>
                <NavDropdown.Item href="/Provinces/on">Ontario</NavDropdown.Item>
                <NavDropdown.Item href="/Provinces/pe">Prince Edward Island</NavDropdown.Item>
                <NavDropdown.Item href="/Provinces/qc">Quebec</NavDropdown.Item>
                <NavDropdown.Item href="/Provinces/sk">Saskatchewan</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Provinces/nt">Northwest Territories</NavDropdown.Item>
                <NavDropdown.Item href="/Provinces/nu">Nunavut</NavDropdown.Item>
                <NavDropdown.Item href="/Provinces/yt">Yukon</NavDropdown.Item>
            </NavDropdown>
            <Nav className="mr-auto">
                <Nav.Link href="/FAQ">FAQ</Nav.Link>
                <Nav.Link href="/About">About</Nav.Link>
                <Nav.Link href="/Team">Team</Nav.Link>
            </Nav>
            <Form inline >
                <FormControl requiredtype="text" placeholder="Search" className="mr-sm-2" />
                <Button type="submit" variant="outline-primary">Search</Button>
            </Form>
        </Navbar>
        )
    }
}
export default Navigation;
