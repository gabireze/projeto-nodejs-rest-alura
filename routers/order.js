const OrderController = require('../controllers/order');

module.exports = app => {
  app.get('/orders', OrderController.read);

  app.post('/orders', OrderController.insert);
};
