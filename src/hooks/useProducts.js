import { useState, useEffect } from 'react';
import { products } from '../data/products';

export const useProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('all');

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setAllProducts(products);
      setFilteredProducts(products);
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    if (category === 'all') {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(allProducts.filter(p => p.category === category));
    }
  }, [category, allProducts]);

  const searchProducts = (query) => {
    if (!query.trim()) {
      setFilteredProducts(allProducts);
      return;
    }
    
    const filtered = allProducts.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.type.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
    );
    
    setFilteredProducts(filtered);
  };

  const getFeaturedProducts = () => {
    return allProducts.filter(p => p.featured);
  };

  return {
    products: filteredProducts,
    allProducts,
    loading,
    category,
    setCategory,
    searchProducts,
    getFeaturedProducts
  };
};