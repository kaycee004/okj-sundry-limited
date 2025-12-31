// src/data/products.js
import johnny from '../assets/whiskey/johnny walker.jpg'

export const products = [
  {
    id: 1,
    name: 'Château Margaux 2015',
    category: 'wine',
    type: 'Red Wine',
    price: 299,
    discountPrice: 279,
    image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=800&auto=format&fit=crop',
    rating: 4.9,
    description: 'Premier Grand Cru Classé from Bordeaux',
    origin: 'France',
    year: 2015,
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: 'Johnny Walker',
    category: 'whiskey',
    type: 'Whiskey',
    price: 450,
    discountPrice: null,
    image: johnny,
    rating: 4.8,
    description: 'Sherry oak aged single malt',
    origin: 'Scotland',
    year: null,
    inStock: true,
    featured: true
  },
  // ... add more products as needed
];