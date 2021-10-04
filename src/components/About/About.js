import React from 'react';
import './About.css';
import image from '../../images/about-us.jpg';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {

    return (

        <>
            {/* background image area */}
            <div className="about">
                <h2 className="text-white title">Grow strong to take up the challenges of life. <br /> The top lessons for getting you back on track.</h2>
            </div>

            {/* about-us area */}
            <Container className="p-5">
                <Row>
                    {/* image area */}
                    <Col>
                        <img src={image} alt="about-us" />
                    </Col>

                    {/* text area */}
                    <Col>
                        <h2 className="mt-5">About Us</h2>
                        <p className="mt-3 pt-2 text-start">We offer a play-based emergent curriculum complete with low teacher to child ratios. Come see our environment and how it is designed to promote exploration, adventure and imaginative play. We believe that children are active participants in their own learning. That’s why we encourage them to ask questions and explore the world around them.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default About;