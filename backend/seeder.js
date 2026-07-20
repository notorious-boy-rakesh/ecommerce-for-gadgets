require('dns').setServers(['8.8.8.8']);
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./Models/User');
const Product = require('./Models/Product');
const connectDB = require('./config/db');

const importData = async () => {
  try {
    await connectDB();
    await User.deleteMany();
    await Product.deleteMany();

    const createdUsers = await User.create([
      {
        name: 'Admin User',
        email: 'admin@example.com',
        password: 'password123',
        role: 'Admin'
      },
      {
        name: 'Normal User',
        email: 'user@example.com',
        password: 'password123'
      }
    ]);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = [
      {
        name: 'Wireless Earbuds',
        desc: 'High quality wireless earbuds with noise cancellation.',
        price: 99.99,
        img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500',
        category: 'Electronics',
        stock: 50
      },
      {
        name: 'Smart Watch',
        desc: 'Fitness tracking smart watch with heart rate monitor.',
        price: 199.99,
        img: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500',
        category: 'Electronics',
        stock: 30
      }
    ];

    await Product.insertMany(sampleProducts);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

importData();
