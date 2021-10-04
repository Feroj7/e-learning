import React, { useContext } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { coursesContext } from '../../App';
import image from '../../images/e-learning.jpg';
import './Home.css';

const Home = () => {

    // using courses context api
    const [courses] = useContext(coursesContext);

    return (
        <>
            {/* hero-section start */}
            <div className="hero-section p-5 mb-5">
                <Container>
                    <Row className="align-items-center justify-content-center">
                        <Col>
                            <h2>Welcome To E-Learning Platform</h2>
                            <p className="text-start mt-4">Here You Can Find Different Courses on Digital Technology. At E-Learning, we see our aim in providing care and an early learning environment which is tailored to each individual students needs, in safe, secure, happy and relaxed surroundings. We are committed to your success!</p>
                            <Link to="/courses">
                                <button className="btnstyle-2">Get Started</button>
                            </Link>
                        </Col>
                        <Col className="image-area">
                            <img src={image} alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* hero-section end */}

            {/* corses section start */}
            <div className="p-5">
                <p>LEARN AT YOUR PACE
                </p>
                <h2 className="mb-5">Current Signature Courses
                </h2>
                <Container>
                    <Row md={3} className="g-5">
                        {
                            courses.slice(0, 4).map(course =>
                                <Col key={course.key}>
                                    <Card style={{ height: '530px' }}>
                                        <Card.Img style={{ height: '250px' }} variant="top" src={course.img} />
                                        <Card.Body>
                                            <h2 className="text-start price">${course.price}</h2>
                                            <Card.Title className="text-start course-title">{course.courseTitle}</Card.Title>
                                            <p className="text-start text-success"><small>{course.trainer}</small></p>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Row className="text-muted">
                                                <Col>
                                                    <i className="far fa-file-alt"></i>
                                                    <small className="ms-2">{course.lessons} Lessons</small>
                                                </Col>
                                                <Col>
                                                    <i className="fas fa-user-tie"></i>
                                                    <small className="ms-2">{course.students} Students</small>
                                                </Col>
                                            </Row>
                                        </Card.Footer>
                                        <button className="enroll-btn">Enroll Now</button>
                                    </Card>
                                </Col>
                            )
                        }

                    </Row>
                    <Link to="/courses">
                        <button className="mt-5 btnstyle-2">View All Courses</button>
                    </Link>
                </Container>
            </div>
            {/* courses section end */}

            {/* ready section start */}
            <Container>
                <Row className="mt-5 mb-5 p-5 ready-section">
                    <Col className="p-5">
                        <h2 className="text-white">Are you ready to start <br /> your course now!</h2>
                    </Col>
                    <Col className="mt-4 p-5">
                        <Link to="/courses">
                            <button className="me-3 btnstyle-1">Lets Get Started</button>
                        </Link>
                        <Link to="/contact">
                            <button className="btnstyle-2" >Contact Us</button>
                        </Link>
                    </Col>
                </Row>
            </Container>
            {/* ready section end */}
        </>
    );
};

export default Home;