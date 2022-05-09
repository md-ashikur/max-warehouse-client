import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import './Header.css';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }

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

                            

                            {user ?
                                <div>
                                    <Link to="/manage" className='nav-text'>Manage Item</Link>
                                    <Link to="/addItem" className='nav-text'>Add Item</Link>
                                    <Link to="/myItems" className='nav-text'>My Items</Link>
                                    <Link to="/blog" className='nav-text'>Blog</Link>

                                    <button className='signOut' onClick={handleSignOut}>Sign out</button>
                                </div>


                                :
                                <div><Link to="/blog" className='nav-text'>Blog</Link>
                                <Link to="login" className='nav-text'>Login</Link></div>
                                

                            }

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;