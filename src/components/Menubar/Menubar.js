import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import './Menubar.css';

const Menubar = () => {

    //menu items style
    const activeStyle = {
        fontWeight: "bold",
        color: "white"
    };

    return (

        <div>
            <Navbar className="navbar">
                <Container>
                    <Row>
                        <Col>
                            <Link to="/home">
                                <Navbar.Brand className="text-white fw-bold">E-Learning</Navbar.Brand>
                            </Link>
                        </Col>
                        <Col className="menu">
                            <Nav className="me-auto" >
                                <NavLink activeStyle={activeStyle} to="/home" className="me-4">Home</NavLink>
                                <NavLink activeStyle={activeStyle} to="/courses" className="me-4">Courses</NavLink>
                                <NavLink activeStyle={activeStyle} to="/about" className="me-4">About</NavLink>
                                <NavLink activeStyle={activeStyle} to="/contact" className="me-4">Contact</NavLink>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menubar;