const Order = require('../Models/Order');

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({}).populate('user', 'id name email');
    res.json({ success: true, data: orders });
  } catch (error) {
    next(error);
  }
};

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ user: req.user._id });
    res.json({ success: true, data: orders });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const createOrder = async (req, res, next) => {
  try {
    const { items, amount, customerName } = req.body;

    if (items && items.length === 0) {
      res.status(400);
      return next(new Error('No order items'));
    } else {
      const order = new Order({
        user: req.user._id,
        customerName: customerName || req.user.name,
        items,
        amount
      });

      const createdOrder = await order.save();
      res.status(201).json({ success: true, data: createdOrder });
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Update order status
// @route   PUT /api/orders/:id/status
// @access  Private/Admin
const updateOrderStatus = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);

    if (order) {
      order.status = req.body.status;
      const updatedOrder = await order.save();
      res.json({ success: true, data: updatedOrder });
    } else {
      res.status(404);
      return next(new Error('Order not found'));
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Delete an order
// @route   DELETE /api/orders/:id
// @access  Private/Admin
const deleteOrder = async (req, res, next) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);

    if (order) {
      res.json({ success: true, message: 'Order removed' });
    } else {
      res.status(404);
      return next(new Error('Order not found'));
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getOrders,
  getMyOrders,
  createOrder,
  updateOrderStatus,
  deleteOrder
};
