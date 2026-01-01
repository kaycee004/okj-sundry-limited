// src/components/Footer.js - Using React Icons instead
import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTruck,
  FaShieldAlt,
  FaCreditCard,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="mt-auto"
      style={{
        backgroundColor: "#0a192f",
        color: "white",
      }}
    >
      {/* Trust Badges */}
      <div className="py-4" style={{ backgroundColor: "#112240" }}>
        <Container>
          <Row className="text-center g-4">
            <Col md={4}>
              <div className="d-flex flex-column align-items-center">
                <FaTruck size={32} className="text-white mb-2" />
                <span className="fw-bold">Free Shipping</span>
                <small className="text-light opacity-75">
                  On orders over $100
                </small>
              </div>
            </Col>
            <Col md={4}>
              <div className="d-flex flex-column align-items-center">
                <FaShieldAlt size={32} className="text-white mb-2" />
                <span className="fw-bold">Quality Guarantee</span>
                <small className="text-light opacity-75">
                  100% authentic products
                </small>
              </div>
            </Col>
            <Col md={4}>
              <div className="d-flex flex-column align-items-center">
                <FaCreditCard size={32} className="text-white mb-2" />
                <span className="fw-bold">Secure Payment</span>
                <small className="text-light opacity-75">
                  Protected by encryption
                </small>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Footer */}
      <div className="py-5">
        <Container>
          <Row className="g-5">
            {/* Company Info */}
            <Col lg={4} md={6}>
              <div className="mb-4">
                <Link
                  to="/"
                  className="d-flex align-items-center text-white text-decoration-none mb-4"
                >
                  <div
                    className="rounded-circle bg-white d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "50px",
                      height: "50px",
                      boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                    }}
                  >
                    <span className="text-dark fw-bold fs-5">OKJ</span>
                  </div>
                  <div>
                    <span className="fs-3 fw-bold font-serif d-block">
                      OKJ Sundry Limited
                    </span>
                    <small className="text-light opacity-75">Est. 2010</small>
                  </div>
                </Link>
                <p className="text-light mb-4" style={{ lineHeight: "1.6" }}>
                  Curating the world's finest wines and whiskeys for discerning
                  collectors and enthusiasts since 2010.
                </p>
                <div className="d-flex gap-3">
                  <a
                    href="/"
                    className="text-white"
                    style={{ fontSize: "1.2rem" }}
                  >
                    <FaFacebookF size={20} />
                  </a>
                  <a
                    href="/"
                    className="text-white"
                    style={{ fontSize: "1.2rem" }}
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a
                    href="/"
                    className="text-white"
                    style={{ fontSize: "1.2rem" }}
                  >
                    <FaTwitter size={20} />
                  </a>
                </div>
              </div>
            </Col>

            {/* Quick Links */}
            <Col lg={2} md={6}>
              <h5 className="fw-bold mb-4">Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <Link
                    to="/"
                    className="text-light text-decoration-none d-flex align-items-center"
                    style={{ transition: "all 0.3s ease" }}
                  >
                    <span className="me-2">›</span>
                    <span>Home</span>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="/shop"
                    className="text-light text-decoration-none d-flex align-items-center"
                    style={{ transition: "all 0.3s ease" }}
                  >
                    <span className="me-2">›</span>
                    <span>Shop All</span>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="/about"
                    className="text-light text-decoration-none d-flex align-items-center"
                    style={{ transition: "all 0.3s ease" }}
                  >
                    <span className="me-2">›</span>
                    <span>Our Story</span>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="/contact"
                    className="text-light text-decoration-none d-flex align-items-center"
                    style={{ transition: "all 0.3s ease" }}
                  >
                    <span className="me-2">›</span>
                    <span>Contact Us</span>
                  </Link>
                </li>
              </ul>
            </Col>

            {/* Contact Info */}
            <Col lg={3} md={6}>
              <h5 className="fw-bold mb-4">Contact Info</h5>
              <div className="d-flex flex-column gap-4">
                <div className="d-flex align-items-start">
                  <FaPhone
                    size={18}
                    className="text-white mt-1 me-3 flex-shrink-0"
                  />
                  <div>
                    <span className="d-block fw-bold">Phone</span>
                    <span className="text-light opacity-75">
                      +234 (80) 1234-4567
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <FaEnvelope
                    size={18}
                    className="text-white mt-1 me-3 flex-shrink-0"
                  />
                  <div>
                    <span className="d-block fw-bold">Email</span>
                    <span className="text-light opacity-75">
                      support@okjsundrylimited.com
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <FaMapMarkerAlt
                    size={18}
                    className="text-white mt-1 me-3 flex-shrink-0"
                  />
                  <div>
                    <span className="d-block fw-bold">Address</span>
                    <span className="text-light opacity-75">
                      123 Spirits Lane
                      <br />
                      Benin City, Edo State
                    </span>
                  </div>
                </div>
              </div>
            </Col>

            {/* Newsletter */}
            <Col lg={3} md={6}>
              <h5 className="fw-bold mb-4">Newsletter</h5>
              <p className="text-light opacity-75 mb-4">
                Subscribe to get special offers, free giveaways, and exclusive
                updates.
              </p>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email address"
                  aria-label="Email"
                  style={{
                    borderRadius: "50px 0 0 50px",
                    border: "none",
                  }}
                />
                <button
                  className="btn btn-light"
                  type="button"
                  style={{
                    borderRadius: "0 50px 50px 0",
                    fontWeight: "600",
                  }}
                >
                  Subscribe
                </button>
              </div>
              <small className="text-light opacity-75">
                We respect your privacy. Unsubscribe at any time.
              </small>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Copyright */}
      <div
        className="py-4 text-center"
        style={{
          backgroundColor: "#112240",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-md-start mb-3 mb-md-0">
              <span className="text-light opacity-75">
                © {currentYear} OKJ Sundry Limited. All rights reserved.
              </span>
            </Col>
            <Col md={6} className="text-md-end">
              <div className="d-flex justify-content-md-end gap-4">
                <Link
                  to="/privacy"
                  className="text-light opacity-75 text-decoration-none"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="text-light opacity-75 text-decoration-none"
                >
                  Terms of Service
                </Link>
                <Link
                  to="/shipping"
                  className="text-light opacity-75 text-decoration-none"
                >
                  Shipping Policy
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
