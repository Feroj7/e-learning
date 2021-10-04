import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import image from '../../images/contact_image.png';

const Contact = () => {

    return (

        <div className="p-5">
            <Container>
                <Row>
                    {/* image area */}
                    <Col>
                        <img src={image} alt="contact" />
                    </Col>

                    {/* form area */}
                    <Col className="mt-5">
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Your Message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="success"><i className="fas fa-paper-plane"></i> Send</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;