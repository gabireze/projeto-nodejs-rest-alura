const OrderDAO = require('../daos/order');
const Order = require('../models/order');

class OrderService {
  async insert(body) {
    const order = new Order(body);
    const result = await OrderDAO.insert(order);
  };
};

module.exports = new OrderService;
