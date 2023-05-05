import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import Viewrecepies from './Viewrecepies';

const Viewdetails = () => {
    // const {id} = useParams();
    // console.log(id)
    const data = useLoaderData();
    console.log(data)
    const {id, name, picture, experience, likes, description, recepies} = data;
    const collections = recepies;
    console.log(collections)
    return (
        <Container>
            
            <Row>
                <Col className='shadow-lg p-3 mb-5 bg-body-tertiary rounded-4 px-sm-5' sm={4}>
                    <img className='w-75 py-4 rounded-circle' src={picture} alt=""></img>
                    <h4><span className='fw-semibold'>Name :</span>  
                    <TypeAnimation
                        sequence={[ ` ${name}`, 2000, ` ${name}`, () => {},]}
                        wrapper="span" cursor={true} speed={5} repeat={Infinity} style={{marginLeft: '10px',  display: 'inline-block' }}
                    />
                    </h4>
                    
                    <p><span className='fw-semibold'>Experience :</span> {experience} Years</p>
                    <p><span className='fw-semibold'>Likes : :</span> {likes}</p>
                    <p><span className='fw-semibold'>Intro :</span> <TypeAnimation
                        sequence={[ ` ${description}`, 2000, ` ${description}`, () => {},]}
                        wrapper="span" cursor={true} speed={95} repeat={Infinity} style={{  display: 'inline-block' }}
                    /></p>
                    <p><span className='fw-semibold'>Total Recepies :</span> {recepies.length}</p>
                </Col>
                <Col className='shadow-lg p-3 mb-5 bg-body-tertiary rounded-4' sm={8}>
                    <h2 className='text-center mb-4'>{name}'s Recepie collection</h2>
                    <div>
                        {
                            collections.map(collection => <Viewrecepies key={id} collection={collection}></Viewrecepies>)
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Viewdetails;