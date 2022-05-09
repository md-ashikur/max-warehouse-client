import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar className='nav-bg' expand="lg" fixed='top'>
                <Container>
                    <Navbar.Brand className='nav-logo'>MAX WAREHOUSE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to="/home" className='nav-text'>Home</Link>
                            <Link to="/manage" className='nav-text'>Manage</Link>
                            <Link to="/myItems" className='nav-text'>My Items</Link>
                            <Link to="/blog" className='nav-text'>Blog</Link>
                            <Link to="/contact" className='nav-text'>Contact</Link>
                            <Link to="/login" className='nav-text'>Login</Link>
                           
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;