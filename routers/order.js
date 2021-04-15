const OrderController = require('../controllers/order');

module.exports = app => {
  app.get('/orders', OrderController.getOrders);
  app.get('/orders/:id', OrderController.getOrderById);

  app.post('/orders', OrderController.insertOrder);

  app.patch('/orders/:id', OrderController.patchOrderById);

  app.delete('/orders/:id', OrderController.deleteOrderById);
};
