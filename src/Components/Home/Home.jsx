import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Viewchef from './Details/Viewchef';
import Spinner from '../Style/Spinner/Spinner';
import Banner from './Banner/Banner';
import Aim from './ExtraSections/Aim/Aim';
import Visitor from './ExtraSections/Visitor/Visitor';

// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';


const Home = () => {
    const [chefs, setChef] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://assignment10-server-habibb2r.vercel.app/home')
        .then(res => res.json())
        .then((data) => {
            
            setChef(data);
        setIsLoading(false);
        })
        .catch(error => console.log(error))
    })

    if(isLoading) {
        return <Spinner></Spinner>;
      }
    return (
        <Container>

            <Banner></Banner>
            
            <div className='my-5 shadow-sm p-3 mb-5 bg-body-tertiary rounded'>
                <h2 className='text-center my-4 text-info'>Our Legend Chefs</h2>
                <p className='text-center my-4'>Here is some of worlds best chef legends ..</p>
                <div className='row'>
                    {
                    chefs.map(chef => <Viewchef  key={chef.id} chef={chef}></Viewchef>)
                    }
                </div>
            </div>
            <Aim></Aim>
            <Visitor></Visitor>
        </Container>
    );
};

export default Home;