
import React from "react";
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from 'react-bootstrap';

function NavigationBar({children}) {



    return (
        <>
            <Navbar fixed="top" bg="dark" variant="dark">
                <Navbar.Brand href="/">Caglar Orhan</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                    <Nav.Link href="/articles">Articles</Nav.Link>
                    <Nav.Link href="/journey">Journey</Nav.Link>

                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                <Nav className="mr-auto">
                    <NavDropdown alignRight={true} title="Options" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/myaccount">My Account</NavDropdown.Item>
                        <NavDropdown.Item href="/signup">Sign-up</NavDropdown.Item>
                        <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                        <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/aboutme">About Me</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Form>
            </Navbar>
        </>
    );
}

export default NavigationBar
