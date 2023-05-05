import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import {FcLike} from 'react-icons/fc'
import { GiTimeTrap } from "react-icons/gi";
import {FaConciergeBell} from 'react-icons/fa'
import LazyLoad from 'react-lazyload';




const Viewchef = (props) => {
    const {name, picture, experience, likes, recepies, id} = props.chef;
    return (
        <div className='col-sm-4 mt-3 shadow p-3 mb-5 bg-body-tertiary rounded'>
            <Card>
            <LazyLoad height={200}>
                <Card.Img style={{height: '50vh'}} variant="top" src={picture} /></LazyLoad>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <div>
                        <button className='btn btn-light me-3'>Likes : {likes} <FcLike></FcLike></button>
                        <button className='btn btn-warning'>{recepies.length} Recepies <FaConciergeBell></FaConciergeBell></button>
                        <p><span className='fw-semibold'><GiTimeTrap></GiTimeTrap> Experince :</span> {experience} Years</p>
                    </div>
                    <button className='btn btn-secondary'><Link className='text-decoration-none text-white' to={`./viewdetails/${id}`}> View Recipies</Link></button>
                    
                </Card.Body>
            </Card>
        </div>
    );
};

export default Viewchef;