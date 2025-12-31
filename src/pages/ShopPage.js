// src/pages/ShopPage.js
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { Filter } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const ShopPage = () => {
  const [category, setCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  
  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(p => p.category === category);

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'wine', name: 'Wines', count: products.filter(p => p.category === 'wine').length },
    { id: 'whiskey', name: 'Whiskeys', count: products.filter(p => p.category === 'whiskey').length }
  ];

  return (
    <div className="section-py">
      <Container>
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3">Our Collection</h1>
          <p className="text-muted fs-5">Premium selection of wines and whiskeys</p>
        </div>

        <Row>
          {/* Sidebar Filters */}
          <Col lg={3} className="mb-4 mb-lg-0">
            <div className="sticky-top" style={{ top: '100px' }}>
              <div className="card border-0 shadow-sm p-4">
                <div className="d-flex align-items-center mb-4">
                  <Filter className="me-2" />
                  <h5 className="mb-0">Filters</h5>
                </div>

                {/* Category Filter */}
                <div className="mb-4">
                  <h6 className="fw-bold mb-3">Category</h6>
                  <div className="d-flex flex-column gap-2">
                    {categories.map((cat) => (
                      <Button
                        key={cat.id}
                        variant={category === cat.id ? 'navy' : 'outline-secondary'}
                        className="d-flex justify-content-between align-items-center"
                        onClick={() => setCategory(cat.id)}
                      >
                        <span>{cat.name}</span>
                        <Badge bg="secondary" pill>
                          {cat.count}
                        </Badge>
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div className="mb-4">
                  <h6 className="fw-bold mb-3">Price Range</h6>
                  <Form.Range
                    min="0"
                    max="5000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  />
                  <div className="d-flex justify-content-between mt-2">
                    <span>$0</span>
                    <span className="fw-bold">${priceRange[1]}</span>
                  </div>
                </div>

                {/* Stock Filter */}
                <div className="mb-4">
                  <h6 className="fw-bold mb-3">Availability</h6>
                  <Form.Check
                    type="checkbox"
                    id="in-stock"
                    label="In Stock Only"
                    defaultChecked
                    className="mb-2"
                  />
                </div>

                {/* Clear Filters */}
                <Button
                  variant="outline-navy"
                  className="w-100"
                  onClick={() => {
                    setCategory('all');
                    setPriceRange([0, 5000]);
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            </div>
          </Col>

          {/* Products Grid */}
          <Col lg={9}>
            {/* Results Info */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              <p className="mb-0 text-muted">
                Showing {filteredProducts.length} of {products.length} products
              </p>
              <Form.Select className="w-auto">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Best Rated</option>
              </Form.Select>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <Row className="g-4">
                {filteredProducts.map((product) => (
                  <Col key={product.id} xl={4} lg={6} md={6}>
                    <ProductCard product={product} />
                  </Col>
                ))}
              </Row>
            ) : (
              <div className="text-center py-5">
                <div className="card border-0 shadow-sm p-5">
                  <h3 className="fw-bold text-muted mb-3">No products found</h3>
                  <p className="text-muted mb-4">Try adjusting your filters</p>
                  <Button
                    variant="navy"
                    onClick={() => setCategory('all')}
                  >
                    View all products
                  </Button>
                </div>
              </div>
            )}

            {/* Pagination */}
            {filteredProducts.length > 0 && (
              <nav className="mt-5">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <span className="page-link">Previous</span>
                  </li>
                  <li className="page-item active">
                    <span className="page-link">1</span>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">2</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">3</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShopPage;