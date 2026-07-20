require('dns').setServers(['8.8.8.8']);
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');

// Connect to MongoDB
connectDB();

const app = express();

// Security and utility middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));

// Routes
app.use('/api/auth', require('./Routes/authRoutes'));
app.use('/api/users', require('./Routes/userRoutes'));
app.use('/api/products', require('./Routes/productRoutes'));
app.use('/api/categories', require('./Routes/categoryRoutes'));
app.use('/api/orders', require('./Routes/orderRoutes'));
app.use('/api/reviews', require('./Routes/reviewRoutes'));
app.use('/api/blogs', require('./Routes/blogRoutes'));
app.use('/api/settings', require('./Routes/settingRoutes'));

// Root endpoint
app.get('/', (req, res) => {
  res.json({ success: true, message: 'Teckkie Gadgets API is running' });
});

// Error handling middleware
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
