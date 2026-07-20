const express = require('express');
const router = express.Router();
const {
  getOrders,
  getMyOrders,
  createOrder,
  updateOrderStatus,
  deleteOrder
} = require('../Controllers/orderController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
  .post(protect, createOrder)
  .get(protect, admin, getOrders);

router.route('/myorders').get(protect, getMyOrders);

router.route('/:id/status').put(protect, admin, updateOrderStatus);
router.route('/:id').delete(protect, admin, deleteOrder);

module.exports = router;
