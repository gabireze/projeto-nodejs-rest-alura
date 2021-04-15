const moment = require('moment');
const OrderDAO = require('../daos/order');
const connection = require('../infrastructure/connection');
const Order = require('../models/order');

class OrderService {
  async insert(body, response) {
    const order = new Order(body);
    const createdAt = moment().format('YYYY-MM-DD HH:MM:SS');
    const bodyDate = moment(body.date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');

    const validatedDate = moment(bodyDate).isSameOrAfter(createdAt);
    const validatedClient = body.client.length >= 5;

    const validations = [
      {
        name: 'date',
        valid: validatedDate,
        message: 'Data deve ser maior ou igual a data atual'
      },
      {
        name: 'client',
        valid: validatedClient,
        message: 'O nome do cliente deve conter 5 ou mais caracteres'
      }
    ];

    const errors = validations.filter(field => !field.valid);
    const isNotValid = errors.length

    if (isNotValid) {
      response.status(400).json(errors);
    } else {
      const datedOrder = { ...order, createdAt, date: bodyDate };
      const result = await OrderDAO.insert(datedOrder, response);
    }
  };

  async getOrders(response) {
    const result = await OrderDAO.getOrders(response);
  };

  async getOrderById(orderId, response) {
    const result = await OrderDAO.getOrderById(orderId, response);
  };

}

module.exports = new OrderService;
