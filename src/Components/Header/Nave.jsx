import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/Authprovider';
import './Header.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { toast } from 'react-toastify';

const Nave = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () =>{
        logOut()
        .then(result =>{
            toast.success('GoodBye', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        })
        .catch(error => console.log(error));
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="" variant="">
                <Container className='mt-4'>
                    <Navbar.Brand  href="/"><h1 className='text-success text-decoration-none'>Chef <span className='text-danger'>Legends</span> </h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Link className='mx-3 text-decoration-none text-secondary' to="/">Home</Link>
                        <Link className='mx-3 text-decoration-none text-secondary' to="/blog">Blog</Link>
                    {/* <Nav.Link href='/' to="/">Home</Nav.Link>
                    <Nav.Link href='/blog'>Blog</Nav.Link> */}
                        {
                        user? <span>
                           <Tippy content={<span>{user.displayName}</span>}>
                            <img className='pp' src={user.photoURL} alt={user.displayName} data-tip={user.displayName}/></Tippy><button className='btn btn-warning' onClick={handleLogOut}>Sign Out</button></span> : <Link className='mx-3 text-decoration-none text-secondary' to="/signin">Sign In</Link>  
                        }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
                
        </div>
    );
};

export default Nave;