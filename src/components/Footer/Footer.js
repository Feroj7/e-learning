import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {

    return (

        <div className="footer text-white p-5">
            <Container>
                <Row>
                    <Col>
                        <h4>Address</h4>
                        <p>House Building, Uttara</p>
                        <p>0123456789 (9am - 5pm, Monday - Friday)</p>
                        <small>info@e-learning.com</small>
                    </Col>
                    <Col>
                        <h4>Explore</h4>
                        <Link to="/courses"><p>Courses</p></Link>
                        <Link to="/about"><p>About</p></Link>
                        <Link to="/contact"><p>Contact</p></Link>
                    </Col>
                    <Col>
                        <h4>Information</h4>
                        <p>Membership</p>
                        <p>Purchase guide</p>
                        <p>Privacy policy</p>
                        <p>Terms of service</p>
                    </Col>
                    <p>&copy; Copyright 2021 | All Rights Reserved By <span className="fw-bold">E-Learning</span></p>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;