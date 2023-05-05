import React from 'react';
import './Aim.css'
import { Col, Container, Row } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';
import LazyLoad from 'react-lazyload';

const Aim = () => {
    return (
        <Container className='shadow-sm p-3 mb-5 bg-body-tertiary rounded'>
            <h2 className='text-center my-5 text-info '>Aim of This Website ?</h2>
           <Row>
                <Col sm={5}>
                <LazyLoad height={200}>
                    <img className='w-100 rounded-5 p-3' src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F06%2Fnetflix-iron-chef-quest-for-an-iron-legend-trailer-watch-info-000.jpg?w=960&cbr=1&q=90&fit=max" alt="" /></LazyLoad>
                </Col>
                <Col className='px-4 mt-2' sm={7}>
                    <h3 className='text-left'> Reason why we builded this website..</h3>
                    <p>
                    <TypeAnimation
                        sequence={[ "Chef Legends website would be to provide a platform that celebrates the world's most accomplished and innovative chefs. The website would be dedicated to featuring profiles of top chefs and their restaurants, sharing their unique culinary journeys, and highlighting their signature dishes and techniques. The website could also offer a range of resources for aspiring chefs and culinary enthusiasts, including interviews, cooking tips and techniques, and information on top culinary schools and training programs. Additionally, the website could feature recipes, cooking tutorials, and product reviews to help users improve their culinary skills at home. Overall, the aim of a Chef Legends website would be to create a community of culinary enthusiasts, celebrate the artistry of cooking, and provide resources and inspiration for anyone looking to improve their culinary skills or learn more about the world of fine dining...", 1000,  () => {},]}
                        wrapper="span" cursor={true} speed={85} repeat={Infinity} style={{  display: 'inline-block' }}
                    />
                    </p>
                
                </Col>
           </Row>

        </Container>

        
    );
};

export default Aim;