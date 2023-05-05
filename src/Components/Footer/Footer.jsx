import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaConciergeBell,FaAddressBook } from 'react-icons/fa';

const Footer = () => {
    return (
        <Container className='shadow p-3 mb-5 bg-body-tertiary rounded'>
            <div className='d-sm-flex justify-content-sm-between mt-5 px-5 py-4'>
                <div className='pb-4 pb-sm-0 text-center'><h1><FaConciergeBell></FaConciergeBell> Chef Legends</h1></div>
                <div>
                    <h3 className='mb-4 text-left'>Contact Us <FaAddressBook/></h3>
                    <div>
                        <p>Phone Number : +019383838, +013383838</p>
                        <p>Address : Mohave County, Arizona, USA</p>
                        
                    </div>
                </div>
                <div className='d-flex flex-column justify-content-start pt-4 pt-sm-0'>
                    <h4>One click away to Register <Link className='text-decoration-none' to='/signup'>Sign Up</Link></h4>
                    <h4>Already Our User? <Link className='text-decoration-none' to='/signin'>Sign In</Link></h4>
                </div>
            </div>
        </Container>
    );
};

export default Footer;