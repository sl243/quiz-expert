import React, { useState } from 'react';
import './Header.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to='/'>Quiz Expert</Navbar.Brand>
                <Nav className="me-auto">
                    {/* <Nav.Link as = {Link} to = '/'>Home</Nav.Link> */}
                    <Nav.Link as={Link} to='/topics'>Topics</Nav.Link>
                    <Nav.Link as={Link} to='/statistics'>Statistics</Nav.Link>
                    <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    );
};

export default Header;