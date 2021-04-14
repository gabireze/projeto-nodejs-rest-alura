const moment = require('moment');
const OrderDAO = require('../daos/order');
const Order = require('../models/order');

class OrderService {
  async insert(body) {
    const order = new Order(body);
    const createdAt = moment().format('YYYY-MM-DD HH:MM:SS');
    const date = moment(body.date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');
    const datedOrder = { ...order, createdAt, date };
    const result = await OrderDAO.insert(datedOrder);
  };
};

module.exports = new OrderService;
