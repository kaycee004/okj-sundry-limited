// src/pages/HomePage.js - Updated with working image URLs
import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { motion } from "framer-motion";
import johnny from "../assets/whiskey/johnny walker.jpg";
import glen from "../assets/whiskey/glenfiddich.jpg";
import strawberry from "../assets/whiskey/carnival-strawberry.jpg";
import clara from "../assets/people/1f.jpg";
import samuel from "../assets/people/1m.jpg";
import jude from "../assets/people/2m.jpg";
import {
  ArrowRight,
  Star,
  Award,
  Truck,
  Shield,
  Clock,
  Users,
  TrendingUp,
  Wine,
  ShoppingCart,
} from "lucide-react";

const HomePage = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Château Margaux 2015",
      type: "Red Wine",
      price: "₦200,000",
      image:
        "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=800&h=600&fit=crop",
      rating: 4.9,
      category: "wine",
    },
    {
      id: 2,
      name: "Macallan 18 Year",
      type: "Single Malt Whiskey",
      price: "₦150,000",
      image:
        "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&h=600&fit=crop",
      rating: 4.8,
      category: "whiskey",
    },
    {
      id: 3,
      name: "Strawberry Carnival",
      type: "Flavoured drink",
      price: "₦15,000",
      image: strawberry,
      rating: 4.7,
      category: "wine",
    },
  ];

  const bestSellers = [
    {
      id: 4,
      name: "Johnnie Walker Blue Label",
      type: "Blended Scotch",
      price: "₦85,000",
      image: johnny,
      discount: "10% OFF",
      category: "whiskey",
    },
    {
      id: 5,
      name: "Opus One 2018",
      type: "Red Wine",
      price: "₦23,000",
      image:
        "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=600&fit=crop",
      discount: null,
      category: "wine",
    },
    {
      id: 6,
      name: "Glenfiddich 15 Year",
      type: "Single Malt Scotch",
      price: "₦120,000",
      image: glen,
      discount: "15% OFF",
      category: "whiskey",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Samuel Adewale",
      role: "Wine Collector",
      content:
        "The selection here is unparalleled. Every bottle I've purchased has been exceptional.",
      rating: 5,
      image:
       samuel,
    },
    {
      id: 2,
      name: "Sarah Uchenna",
      role: "Whiskey Enthusiast",
      content:
        "Finally found a place that understands true whiskey craftsmanship. Highly recommended!",
      rating: 5,
      image:
        clara,
    },
    {
      id: 3,
      name: "Jude Aziza",
      role: "Restaurant Owner",
      content:
        "Our go-to supplier for premium spirits. Consistent quality and excellent service.",
      rating: 5,
      image:
       jude,
    },
  ];

  const features = [
    {
      icon: <Truck size={32} />,
      title: "Free Shipping",
      description: "On all orders over $100",
    },
    {
      icon: <Shield size={32} />,
      title: "Authenticity Guaranteed",
      description: "100% genuine products",
    },
    {
      icon: <Clock size={32} />,
      title: "24/7 Support",
      description: "Expert advice available",
    },
    {
      icon: <Award size={32} />,
      title: "Award Winning",
      description: "Recognized excellence",
    },
  ];

  const handleAddToCart = (product) => {
    alert(`Added ${product.name} to cart!`);
    // In a real app, you would dispatch to cart context here
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        className="position-relative text-white d-flex align-items-center"
        style={{
          minHeight: "90vh",
          background:
            "linear-gradient(rgba(10, 25, 47, 0.9), rgba(10, 25, 47, 0.7)), url(https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=1600&h=900&fit=crop) center/cover no-repeat",
        }}
      >
        <Container className="position-relative z-2">
          <Row className="align-items-center">
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* <Badge bg="light" text="dark" className="fs-6 px-3 py-2 mb-4">
                  🎉 Limited Time Offers
                </Badge> */}
                <h1 className="display-2 fw-bold mb-4">
                  Premium Spirits
                  <br />
                  <span className="text-warning">Curated</span> for Connoisseurs
                </h1>
                <p className="fs-4 mb-5" style={{ opacity: 0.9 }}>
                  Discover exceptional wines and whiskeys from the world's
                  finest producers. Join thousands of satisfied collectors.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Link
                    to="/shop"
                    className="btn btn-light btn-lg px-5 py-3 fw-bold d-inline-flex align-items-center"
                    style={{ color: "#0a192f" }}
                  >
                    Shop Collection
                    <ArrowRight className="ms-2" />
                  </Link>
                  <Link
                    to="/about"
                    className="btn btn-outline-light btn-lg px-5 py-3 fw-bold"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            </Col>
            <Col lg={6} className="mt-5 mt-lg-0">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="position-relative"
              >
                {/* <div className="position-absolute top-0 start-0 bg-warning rounded-circle p-4" style={{ width: '150px', height: '150px', transform: 'translate(-30px, -30px)' }}>
                  <div className="text-center h-100 d-flex flex-column justify-content-center">
                    <span className="fs-1 fw-bold">4.9</span>
                    <span className="d-flex justify-content-center">
                      {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-warning text-warning" />)}
                    </span>
                    <small>Customer Rating</small>
                  </div>
                </div> */}
                {/* <img 
                  src="https://images.unsplash.com/photo-1566633808648-b67b1c36e0c5?w=600&h=400&fit=crop" 
                  alt="Premium Collection"
                  className="img-fluid rounded-3 shadow-lg"
                  style={{ height: '400px', width: '100%', objectFit: 'cover' }}
                /> */}
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="g-4">
            {features.map((feature, index) => (
              <Col lg={3} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4"
                >
                  <div className="text-primary mb-3">{feature.icon}</div>
                  <h5 className="fw-bold mb-2">{feature.title}</h5>
                  <p className="text-muted mb-0">{feature.description}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Featured Products */}
      <section className="section-py">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3">Featured Products</h2>
            <p className="text-muted fs-5">Our most sought-after selections</p>
          </div>

          <Row className="g-4">
            {featuredProducts.map((product, index) => (
              <Col lg={4} md={6} key={product.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-100 border-0 shadow-sm hover-shadow">
                    <div
                      className="position-relative product-img"
                      style={{ height: "250px", backgroundColor: "#f8f9fa" }}
                    >
                      <Card.Img
                        variant="top"
                        src={product.image}
                        alt={product.name}
                        className="h-100 w-100 object-fit-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://via.placeholder.com/800x600/0a192f/ffffff?text=${encodeURIComponent(
                            product.name
                          )}`;
                        }}
                      />
                      <Badge
                        bg={product.category === "wine" ? "danger" : "warning"}
                        className="position-absolute top-0 start-0 m-3"
                      >
                        {product.category === "wine" ? (
                          <Wine size={16} className="me-1" />
                        ) : (
                          "🥃"
                        )}
                        {product.category}
                      </Badge>
                    </div>
                    <Card.Body className="p-4">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <div>
                          <Card.Title className="fs-5 fw-bold mb-1">
                            {product.name}
                          </Card.Title>
                          <Card.Text className="text-muted mb-0">
                            {product.type}
                          </Card.Text>
                        </div>
                        <div className="d-flex align-items-center">
                          <Star className="text-warning me-1" size={18} />
                          <span className="fw-bold">{product.rating}</span>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="fs-3 fw-bold text-dark">
                          {product.price}
                        </span>
                        <Button
                          variant="outline-navy"
                          className="add-to-cart-btn d-flex align-items-center gap-2"
                          onClick={() => handleAddToCart(product)}
                        >
                          <ShoppingCart size={18} />
                          <span>Add to Cart</span>
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Categories Section */}
      <section className="section-py bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3">Shop by Category</h2>
            <p className="text-muted fs-5">Explore our curated collections</p>
          </div>

          <Row className="g-4">
            <Col lg={6}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Link to="/shop?category=wine" className="text-decoration-none">
                  <div
                    className="position-relative rounded-3 overflow-hidden"
                    style={{ height: "400px" }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=400&fit=crop"
                      alt="Wines"
                      className="img-fluid w-100 h-100 object-fit-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://via.placeholder.com/800x400/0a192f/ffffff?text=Premium+Wines";
                      }}
                    />
                    <div
                      className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white"
                      style={{
                        background:
                          "linear-gradient(rgba(10, 25, 47, 0.7), rgba(10, 25, 47, 0.7))",
                      }}
                    >
                      <Wine size={64} className="mb-3" />
                      <h3 className="display-5 fw-bold mb-2">Premium Wines</h3>
                      <p className="fs-5">From Bordeaux to Napa Valley</p>
                      <Button
                        variant="outline-light"
                        size="lg"
                        className="mt-3"
                      >
                        Shop Wines
                      </Button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </Col>

            <Col lg={6}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to="/shop?category=whiskey"
                  className="text-decoration-none"
                >
                  <div
                    className="position-relative rounded-3 overflow-hidden"
                    style={{ height: "400px" }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&h=400&fit=crop"
                      alt="Whiskeys"
                      className="img-fluid w-100 h-100 object-fit-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://via.placeholder.com/800x400/0a192f/ffffff?text=Fine+Whiskeys";
                      }}
                    />
                    <div
                      className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white"
                      style={{
                        background:
                          "linear-gradient(rgba(10, 25, 47, 0.7), rgba(10, 25, 47, 0.7))",
                      }}
                    >
                      <span className="display-1 mb-3">🥃</span>
                      <h3 className="display-5 fw-bold mb-2">Fine Whiskeys</h3>
                      <p className="fs-5">Scotch, Bourbon & Japanese</p>
                      <Button
                        variant="outline-light"
                        size="lg"
                        className="mt-3"
                      >
                        Shop Whiskeys
                      </Button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Best Sellers */}
      <section className="section-py">
        <Container>
          <div className="d-flex justify-content-between align-items-center mb-5">
            <div>
              <h2 className="display-4 fw-bold mb-2">Best Sellers</h2>
              <p className="text-muted fs-5">
                Most popular among our customers
              </p>
            </div>
            <Link
              to="/shop"
              className="btn btn-outline-navy btn-lg d-none d-md-inline-flex align-items-center"
            >
              View All <ArrowRight className="ms-2" />
            </Link>
          </div>

          <Row className="g-4">
            {bestSellers.map((product, index) => (
              <Col lg={4} md={6} key={product.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="position-relative"
                >
                  {product.discount && (
                    <Badge
                      bg="danger"
                      className="position-absolute top-0 end-0 m-3 px-3 py-2 fs-6 z-2"
                    >
                      {product.discount}
                    </Badge>
                  )}
                  <Card className="h-100 border-0 shadow-sm hover-shadow">
                    <div
                      className="product-img"
                      style={{ height: "250px", backgroundColor: "#f8f9fa" }}
                    >
                      <Card.Img
                        variant="top"
                        src={product.image}
                        alt={product.name}
                        className="h-100 w-100 object-fit-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://via.placeholder.com/800x600/0a192f/ffffff?text=${encodeURIComponent(
                            product.name
                          )}`;
                        }}
                      />
                    </div>
                    <Card.Body className="p-4">
                      <Badge
                        bg={product.category === "wine" ? "danger" : "warning"}
                        className="mb-3"
                      >
                        {product.category}
                      </Badge>
                      <Card.Title className="fs-5 fw-bold mb-2">
                        {product.name}
                      </Card.Title>
                      <Card.Text className="text-muted mb-3">
                        {product.type}
                      </Card.Text>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <span className="fs-3 fw-bold text-dark">
                            {product.price}
                          </span>
                          {product.discount && (
                            <span className="text-muted text-decoration-line-through ms-2">
                              $
                              {(
                                parseInt(product.price.replace("$", "")) * 1.1
                              ).toFixed(0)}
                            </span>
                          )}
                        </div>
                        <Button
                          variant="outline-navy"
                          className="add-to-cart-btn d-flex align-items-center gap-2"
                          onClick={() => handleAddToCart(product)}
                        >
                          <ShoppingCart size={18} />
                          <span>Add to Cart</span>
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-5 d-md-none">
            <Link
              to="/shop"
              className="btn btn-navy btn-lg d-inline-flex align-items-center"
            >
              View All Products <ArrowRight className="ms-2" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="section-py bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3">What Our Customers Say</h2>
            <p className="text-muted fs-5">
              Trusted by thousands of connoisseurs
            </p>
          </div>

          <Row className="g-4">
            {testimonials.map((testimonial, index) => (
              <Col lg={4} md={6} key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <div className="d-flex align-items-center mb-4">
                        <div
                          className="rounded-circle overflow-hidden me-3"
                          style={{
                            width: "60px",
                            height: "60px",
                            backgroundColor: "#f8f9fa",
                          }}
                        >
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="img-fluid w-100 h-100 object-fit-cover"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                                testimonial.name
                              )}&background=0a192f&color=fff`;
                            }}
                          />
                        </div>
                        <div>
                          <h6 className="fw-bold mb-0">{testimonial.name}</h6>
                          <small className="text-muted">
                            {testimonial.role}
                          </small>
                        </div>
                      </div>
                      <div className="d-flex mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={18}
                            className="text-warning me-1"
                          />
                        ))}
                      </div>
                      <Card.Text
                        className="text-muted"
                        style={{ fontStyle: "italic" }}
                      >
                        "{testimonial.content}"
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section
        className="section-py"
        style={{ backgroundColor: "#0a192f", color: "white" }}
      >
        <Container>
          <Row className="text-center g-4">
            <Col lg={3} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="display-4 fw-bold mb-2">10K+</div>
                <div className="fs-5">Happy Customers</div>
              </motion.div>
            </Col>
            <Col lg={3} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="display-4 fw-bold mb-2">500+</div>
                <div className="fs-5">Premium Products</div>
              </motion.div>
            </Col>
            <Col lg={3} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="display-4 fw-bold mb-2">50+</div>
                <div className="fs-5">Countries Served</div>
              </motion.div>
            </Col>
            <Col lg={3} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="display-4 fw-bold mb-2">12</div>
                <div className="fs-5">Years of Excellence</div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-py">
        <Container>
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge bg="warning" text="dark" className="fs-6 px-3 py-2 mb-4">
                <TrendingUp size={20} className="me-2" />
                Exclusive Offer
              </Badge>
              <h2 className="display-4 fw-bold mb-4">
                Join Our Exclusive Membership
              </h2>
              <p className="fs-5 mb-5 mx-auto" style={{ maxWidth: "700px" }}>
                Get access to limited editions, member-only discounts, early
                releases, and personalized recommendations from our master
                sommeliers.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Link
                  to="/login"
                  className="btn btn-outline-navy btn-lg px-5 py-3 fw-bold d-inline-flex align-items-center"
                >
                  <Users className="me-2" />
                  Sign Up Free
                </Link>
                <Link
                  to="/about"
                  className="btn btn-outline-navy btn-lg px-5 py-3 fw-bold"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Newsletter */}
      <section className="section-py bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="display-5 fw-bold mb-3">Stay Updated</h2>
                <p className="text-muted fs-5 mb-4">
                  Subscribe to our newsletter for exclusive offers, new
                  arrivals, and expert insights delivered to your inbox.
                </p>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="input-group input-group-lg">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email address"
                    style={{
                      borderRadius: "50px 0 0 50px",
                      border: "2px solid #0a192f",
                      padding: "1rem 1.5rem",
                    }}
                  />
                  <button
                    className="btn btn-navy"
                    type="button"
                    style={{
                      borderRadius: "0 50px 50px 0",
                      padding: "1rem 2rem",
                    }}
                  >
                    Subscribe
                  </button>
                </div>
                <small className="text-muted mt-3 d-block">
                  By subscribing, you agree to our Privacy Policy. Unsubscribe
                  anytime.
                </small>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
