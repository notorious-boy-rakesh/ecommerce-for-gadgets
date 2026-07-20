require('dns').setServers(['8.8.8.8']);
require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./Models/Product');

const popularProducts = [
  {
    name: 'Apple iPhone 17 Pro',
    price: 129999,
    category: 'Smartphones',
    desc: 'The latest flagship from Apple with cutting edge A19 Pro chip and a revolutionary new camera system.',
    stock: 50,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe5wgwenNQeDKIzl0XGDb8iQ_KQcD9yUuoRA4EQcHEPg&s=10',
    badge: '🔥 Hot',
    badgeClass: 'badge-hot'
  },
  {
    name: 'Casio G-Shock GA-2110',
    price: 5999,
    oldPrice: 7995,
    category: 'Watches',
    desc: 'Tough, durable, and stylish. The GA-2110 features a carbon core guard structure and a sleek octagonal bezel.',
    stock: 120,
    img: 'https://www.hollandwatchgroup.com/pictures/g-shock-classic-ga-2110su-3aer-11590278.jpg',
    badge: 'Sale',
    badgeClass: 'badge-sale'
  },
  {
    name: 'Sony WH-1000XM5',
    price: 24999,
    oldPrice: 34990,
    category: 'Audio',
    desc: 'Industry-leading noise cancellation, exceptional sound quality, and crystal clear hands-free calling.',
    stock: 35,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT377knUMAB5wtM8qcxThg_wPZ6ejBe0muzybHUcw_6RQ&s=10',
    badge: '',
    badgeClass: ''
  },
  {
    name: 'Xiaomi Smart Band 9',
    price: 4499,
    oldPrice: 6999,
    category: 'Wearables',
    desc: 'Advanced health tracking, beautiful AMOLED display, and a 14-day battery life all in a lightweight band.',
    stock: 200,
    img: 'https://i03.appmifile.com/54_item_in/21/04/2025/756a8b36570f89e71f292b9647d4c42c.png?thumb=1&w=400&q=85',
    badge: 'New',
    badgeClass: 'badge-new'
  }
];

const seedPopularProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { family: 4 });
    console.log('MongoDB connected...');

    // Optionally check if they already exist to avoid duplicates
    for (const prod of popularProducts) {
      const exists = await Product.findOne({ name: prod.name });
      if (!exists) {
        await Product.create(prod);
        console.log(`Added: ${prod.name}`);
      } else {
        console.log(`Already exists: ${prod.name}`);
      }
    }

    console.log('Seeding completed!');
    process.exit();
  } catch (error) {
    console.error('Error with data import', error);
    process.exit(1);
  }
};

seedPopularProducts();
