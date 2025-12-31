// src/pages/ContactPage.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="section-py">
      <Container>
        {/* Header */}
        <div className="text-center mb-5">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="display-4 fw-bold mb-3"
          >
            Contact Us
          </motion.h1>
          <p className="text-muted fs-5">We'd love to hear from you</p>
        </div>

        <Row className="g-5">
          {/* Contact Info */}
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-0 shadow-sm h-100">
                <Card.Body className="p-5">
                  <h3 className="fw-bold mb-4">Get in Touch</h3>
                  
                  <div className="d-flex flex-column gap-4">
                    <div className="d-flex align-items-start gap-3">
                      <Mail className="text-navy mt-1" />
                      <div>
                        <h5 className="fw-bold mb-1">Email</h5>
                        <p className="text-muted mb-0">support@okjsundrylimited.com</p>
                        <p className="text-muted mb-0">sales@okjsundrylimited.com</p>
                      </div>
                    </div>
                    
                    <div className="d-flex align-items-start gap-3">
                      <Phone className="text-navy mt-1" />
                      <div>
                        <h5 className="fw-bold mb-1">Phone</h5>
                        <p className="text-muted mb-0">+234 (80) 1234-4567</p>
                        <p className="text-muted mb-0">+234 (80) 1234-4568</p>
                      </div>
                    </div>
                    
                    <div className="d-flex align-items-start gap-3">
                      <MapPin className="text-navy mt-1" />
                      <div>
                        <h5 className="fw-bold mb-1">Address</h5>
                        <p className="text-muted mb-0">
                          123 Spirits Lane<br />
                          Benin City, Edo State<br />
                          Nigeria
                        </p>
                      </div>
                    </div>
                    
                    <div className="d-flex align-items-start gap-3">
                      <Clock className="text-navy mt-1" />
                      <div>
                        <h5 className="fw-bold mb-1">Business Hours</h5>
                        <p className="text-muted mb-1">Monday - Friday: 9AM - 8PM</p>
                        <p className="text-muted mb-1">Saturday: 10AM - 6PM</p>
                        <p className="text-muted mb-0">Sunday: 12PM - 5PM</p>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>

              {/* Map */}
              <div className="mt-4">
                <div className="ratio ratio-16x9">
                  <iframe
                    title="Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316fb6a3a7%3A0x8d4586f3f7b6b8e1!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1616335679776!5m2!1sen!2s"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </Col>

          {/* Contact Form */}
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-5">
                  <h3 className="fw-bold mb-4">Send us a Message</h3>
                  
                  <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Col md={6}>
                        <Form.Group controlId="formFirstName">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter your first name"
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="formLastName">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter your last name"
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formSubject">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter subject"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formMessage">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Enter your message"
                        required
                      />
                    </Form.Group>

                    <Button
                      type="submit"
                      variant=""
                      className="w-100 py-3 btn-outline-navy fw-bold d-flex align-items-center justify-content-center"
                    >
                      <Send className="me-2" />
                      Send Message
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactPage;