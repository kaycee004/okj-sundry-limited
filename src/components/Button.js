// src/components/Button.js
import React from 'react';
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';

const CustomButton = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  type = 'button',
  disabled = false,
  size,
  ...props 
}) => {
  
  const getVariant = () => {
    switch(variant) {
      case 'navy':
        return 'primary'; // We'll style this with custom CSS
      case 'outline-navy':
        return 'outline-primary'; // We'll style this with custom CSS
      default:
        return variant;
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant={getVariant()}
        className={`${className} ${variant === 'navy' ? 'btn-navy' : ''} ${variant === 'outline-navy' ? 'btn-outline-navy' : ''}`}
        onClick={onClick}
        type={type}
        disabled={disabled}
        size={size}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
};

export default CustomButton;