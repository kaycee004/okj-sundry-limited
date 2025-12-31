// src/components/ProductCard.js
// Update src/components/ProductCard.js
// Make sure it has this import at the top:
// import Button from './Button'; // or use react-bootstrap Button
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../contexts/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-100 border-0 shadow-sm hover-shadow">
        <div
          className="product-img"
          style={{ height: "250px", overflow: "hidden" }}
        >
          <Card.Img
            variant="top"
            src={product.image}
            alt={product.name}
            className="h-100 w-100 object-fit-cover"
          />
        </div>
        <Card.Body className="d-flex flex-column">
          <div className="mb-2">
            <Badge
              pill
              className={
                product.category === "wine" ? "badge-wine" : "badge-whiskey"
              }
            >
              {product.category}
            </Badge>
          </div>
          <Card.Title className="fs-5 fw-bold mb-2">{product.name}</Card.Title>
          <Card.Text className="text-muted mb-3">{product.type}</Card.Text>

          <div className="d-flex justify-content-between align-items-center">
            <div className="fs-4 fw-bold text-dark">${product.price}</div>
            <Button
              variant="outline-navy"
              className="add-to-cart-btn d-flex align-items-center gap-2"
              onClick={() => addToCart(product)}
            >
              <ShoppingCart size={18} />
              <span>Add to Cart</span>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
