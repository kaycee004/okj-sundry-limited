// src/components/CartModal.js
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const CartModal = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  return (
    <Modal
      show={isCartOpen}
      onHide={() => setIsCartOpen(false)}
      dialogClassName="modal-fullscreen-md-down"
      contentClassName="border-0"
      style={{ left: 'auto', right: 0 }}
    >
      <Modal.Header className="border-0">
        <Modal.Title className="fw-bold">Your Cart</Modal.Title>
        <Button 
          variant="link" 
          className="p-0 ms-auto"
          onClick={() => setIsCartOpen(false)}
        >
          <X size={24} />
        </Button>
      </Modal.Header>
      
      <Modal.Body className="py-0">
        {cart.length === 0 ? (
          <div className="text-center py-5">
            <ShoppingBag size={64} className="text-muted mb-4" />
            <h5 className="fw-bold mb-3">Your cart is empty</h5>
            <p className="text-muted mb-4">Add some products to get started</p>
            <Button 
              variant="navy" 
              onClick={() => setIsCartOpen(false)}
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <div className="d-flex flex-column gap-3">
            {cart.map((item) => (
              <div key={item.id} className="d-flex gap-3 p-3 bg-light rounded">
                <div style={{ width: '80px', height: '80px', flexShrink: 0 }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-100 h-100 object-fit-cover rounded"
                  />
                </div>
                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between mb-2">
                    <h6 className="fw-bold mb-0">{item.name}</h6>
                    <Button
                      variant="link"
                      className="p-0 text-danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 size={18} />
                    </Button>
                  </div>
                  <p className="text-muted small mb-3">{item.type}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-3">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="p-1"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus size={16} />
                      </Button>
                      <span className="fw-bold">{item.quantity}</span>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="p-1"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus size={16} />
                      </Button>
                    </div>
                    <span className="fw-bold fs-5">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Modal.Body>
      
      {cart.length > 0 && (
        <Modal.Footer className="border-0 flex-column">
          <div className="w-100 d-flex justify-content-between align-items-center mb-3">
            <span className="fs-5 fw-bold">Subtotal</span>
            <span className="fs-3 fw-bold">${cartTotal.toFixed(2)}</span>
          </div>
          <p className="text-muted small text-center mb-4">
            Shipping and taxes calculated at checkout
          </p>
          <div className="w-100 d-flex flex-column gap-2">
            <Link
              to="/checkout"
              className="btn btn-navy w-100"
              onClick={() => setIsCartOpen(false)}
            >
              Checkout
            </Link>
            <Button
              variant="outline-navy"
              className="w-100"
              onClick={() => setIsCartOpen(false)}
            >
              Continue Shopping
            </Button>
          </div>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default CartModal;