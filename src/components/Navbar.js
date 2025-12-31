// src/components/Navbar.js - Fixed with useEffect import
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { ShoppingCart, User } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const NavigationBar = () => {
  const { cartCount, setIsCartOpen } = useCart();
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Shop', path: '/shop' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar 
      expand="lg" 
      className={`navbar-dark py-3 ${scrolled ? 'scrolled' : ''}`}
      style={{ 
        backgroundColor: '#0a192f',
        position: 'sticky',
        top: 0,
        zIndex: 1030,
        transition: 'all 0.3s ease'
      }}
      expanded={expanded}
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <div 
            className="rounded-circle bg-white d-flex align-items-center justify-content-center me-3" 
            style={{ 
              width: '45px', 
              height: '45px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
            }}
          >
            <span className="text-dark fw-bold fs-5">OKJ</span>
          </div>
          <div className="d-flex flex-column">
            <span className="fs-3 fw-bold font-serif text-white mb-0">OKJ Sundry Limited</span>
            <small className="text-light opacity-75">Premium Wines & Whiskeys</small>
          </div>
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle 
          aria-controls="navbar-nav" 
          onClick={() => setExpanded(!expanded)}
          className="border-0"
          style={{ color: 'white' }}
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="navbar-nav">
          {/* Navigation Links */}
          <Nav className="mx-auto">
            {navItems.map((item) => (
              <Nav.Link
                key={item.name}
                as={Link}
                to={item.path}
                className="px-3 fw-medium text-white mx-2"
                onClick={handleNavClick}
                style={{
                  position: 'relative',
                  transition: 'all 0.3s ease'
                }}
              >
                {item.name}
                <span 
                  className="position-absolute bottom-0 start-0 w-100 bg-white"
                  style={{ 
                    height: '2px', 
                    transform: 'scaleX(0)',
                    transition: 'transform 0.3s ease',
                    transformOrigin: 'left'
                  }}
                ></span>
              </Nav.Link>
            ))}
          </Nav>

          {/* User Actions */}
          <div className="d-flex align-items-center mt-3 mt-lg-0">
            <Button
              variant="link"
              as={Link}
              to="/login"
              className="text-white text-decoration-none d-flex align-items-center me-3"
              onClick={handleNavClick}
              style={{ fontSize: '1.1rem' }}
            >
              <User size={22} className="me-1" />
              <span className="d-none d-lg-inline">Login</span>
            </Button>
            
            <Button
              variant="outline-light"
              className="position-relative d-flex align-items-center"
              onClick={() => {
                setIsCartOpen(true);
                setExpanded(false);
              }}
              style={{ 
                borderRadius: '50px',
                padding: '8px 20px'
              }}
            >
              <ShoppingCart size={20} className="me-2" />
              <span>Cart</span>
              {cartCount > 0 && (
                <span 
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
                  style={{ fontSize: '0.7rem', minWidth: '20px' }}
                >
                  {cartCount}
                </span>
              )}
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;