import React, { useContext } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { coursesContext } from '../../App';

const Courses = () => {

    // using courses context api
    const [courses] = useContext(coursesContext);


    return (
        <div className="p-5">
            <h2 className="mb-5">Start learning from <span className="fw-bold"> E-Learning</span></h2>
            <Container>
                <Row md={3} className="g-5">
                    {
                        courses.map(course =>
                            <Col key={course.key}>
                                <Card style={{ height: '770px' }}>
                                    <Card.Img style={{ height: '250px' }} variant="top" src={course.img} />
                                    <Card.Body>
                                        <h2 className="text-start price">${course.price}</h2>
                                        <Card.Title className="text-start course-title">{course.courseTitle}</Card.Title>
                                        <p className="text-start text-success"><small>{course.trainer}</small></p>
                                        <Card.Text className="text-start">
                                            {course.description}
                                        </Card.Text>
                                        <ul className="text-start">
                                            <li>{course.features1}</li>
                                            <li>{course.features2}</li>
                                            <li>{course.features3}</li>
                                        </ul>
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
            </Container>
        </div>
    );
};

export default Courses;