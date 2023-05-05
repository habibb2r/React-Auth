import React from 'react';
import './Banner.css'
import { Col, Row } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';
import LazyLoad from 'react-lazyload';


const Banner = () => {
    return (
        <div className=''>
            <div className="banner-container-ven">
            <LazyLoad height={200}>
                    <img src="https://www.tvinsider.com/wp-content/uploads/2022/06/iron-chef-quest-for-an-iron-legend-cast-1014x570.jpg" alt="banner" className="banner-image rounded" /></LazyLoad>
                    <div className="banner-overlay" />
                    <div className="banner-text">
                    <Row className='mt-0 mt-sm-5 row'>
                        <Col className='py-5 pe-5' sm={7}>
                            <h1 className='text-info welcome'>Welcome in.. </h1>
                            <h2 className='text-success-emphasis mt-3 legend'>Chef legends</h2>
                        
                            <p className='text-body-tertiary pe-5 mt-4'>
            <TypeAnimation
                sequence={[
                ' Are you fascinated by the world of culinary arts? Do you have a deep appreciation for the creativity and skill that goes into crafting exceptional dishes? If so, then you will love our collection of chef legends. '
                    , // Types 'One'
                1000, // Waits 1s
                'Our Chefs offer you perfect cooking, best served dishes with fresh ingredients and old recipes. We have only carefully sourced and seasonal ingredients in our disposal to make rustic dishes. We provide you with daily self-made bread, sourdough pizza, roasted fish-meat-vegetables and many more.', // Deletes 'One' and types 'Two'
                1000, // Waits 2s
                 // Types 'Three' without deleting 'Two'
                () => {
                    console.log('Sequence completed');
                },
                ]}
                wrapper="span"
                cursor={true}
                speed={75}
                repeat={Infinity}
                style={{  display: 'inline-block' }}
            />
            </p>
                        </Col>
                        <Col sm={5}>
                            <div className='rounded'>
                                <img className='w-100 rounded slide-img' src="https://static.toiimg.com/thumb/msid-66473975,width-1280,resizemode-4/66473975.jpg" alt="" />
                            </div>

                        </Col>
                    </Row>
                    </div>
              </div>
        </div>
    );
};

export default Banner;