// src/pages/LoginPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? 'Login' : 'Register');
  };

  return (
    <div className="section-py">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4 p-md-5">
                  {/* Toggle */}
                  <div className="d-flex mb-4">
                    <Button
                      variant={isLogin ? 'navy' : 'outline-secondary'}
                      className="flex-fill rounded-0 rounded-start"
                      onClick={() => setIsLogin(true)}
                    >
                      Login
                    </Button>
                    <Button
                      variant={!isLogin ? 'navy' : 'outline-secondary'}
                      className="flex-fill rounded-0 rounded-end"
                      onClick={() => setIsLogin(false)}
                    >
                      Register
                    </Button>
                  </div>

                  <h2 className="text-center fw-bold mb-4">
                    {isLogin ? 'Welcome Back' : 'Create Account'}
                  </h2>

                  <Form onSubmit={handleSubmit}>
                    {!isLogin && (
                      <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your full name"
                          required
                        />
                      </Form.Group>
                    )}

                    <Form.Group className="mb-3">
                      <Form.Label>Email Address</Form.Label>
                      <div className="position-relative">
                        <Form.Control
                          type="email"
                          placeholder="Enter your email"
                          required
                          className="ps-5"
                        />
                        <Mail className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <div className="position-relative">
                        <Form.Control
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Enter your password"
                          required
                          className="ps-5 pe-5"
                        />
                        <Lock className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
                        <Button
                          variant="link"
                          className="position-absolute top-50 end-0 translate-middle-y p-0 me-3"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </Button>
                      </div>
                    </Form.Group>

                    {!isLogin && (
                      <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Confirm your password"
                          required
                        />
                      </Form.Group>
                    )}

                    {isLogin && (
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <Form.Check
                          type="checkbox"
                          id="remember-me"
                          label="Remember me"
                        />
                        <Link to="/" className="text-decoration-none">
                          Forgot password?
                        </Link>
                      </div>
                    )}

                    <Button
                      type="submit"
                      variant="navy"
                      className="w-100 py-3 mb-4"
                    >
                      {isLogin ? 'Sign In' : 'Create Account'}
                    </Button>
                  </Form>

                  <div className="text-center">
                    <p className="text-muted">
                      {isLogin ? "Don't have an account? " : "Already have an account? "}
                      <Button
                        variant="link"
                        className="p-0 text-decoration-none"
                        onClick={() => setIsLogin(!isLogin)}
                      >
                        {isLogin ? 'Sign up' : 'Sign in'}
                      </Button>
                    </p>
                  </div>

                  {isLogin && (
                    <>
                      <div className="position-relative my-4">
                        <hr />
                        <span className="position-absolute top-50 start-50 translate-middle bg-white px-3 text-muted">
                          Or continue with
                        </span>
                      </div>
                      
                      <div className="row g-3">
                        <div className="col">
                          <Button variant="outline-secondary" className="w-100">
                            Google
                          </Button>
                        </div>
                        <div className="col">
                          <Button variant="outline-secondary" className="w-100">
                            Facebook
                          </Button>
                        </div>
                      </div>
                    </>
                  )}
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;