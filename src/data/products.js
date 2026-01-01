// src/data/products.js
import johnny from '../assets/whiskey/johnny walker.jpg'
import sangrai from '../assets/wine/sangria-forte-brick-500ml.png'

export const products = [
  {
    id: 1,
    name: 'sangria forte brick 500ml',
    category: 'wine',
    type: 'Red Wine',
    price: 5000,
    discountPrice: 279,
    image: sangrai,
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
    price: 75000,
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