const moment = require('moment');
const OrderDAO = require('../daos/order');
const Order = require('../models/order');

class OrderService {
  async insertOrder(body, response) {
    try {
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
      const isNotValid = errors.length;

      if (isNotValid) {
        return new Error(errors);
      } else {
        const datedOrder = { ...order, createdAt, date: bodyDate };
        const result = await OrderDAO.insertOrder(datedOrder);
        return result;
      };
    } catch (error) {
      throw error;
    };
  };

  async getOrders() {
    try {
      const results = await OrderDAO.getOrders();
      if (this.isValidGetResults(results)) {
        return results;
      } else {
        throw new Error('Nenhum registro foi encontrado');
      };
    } catch (error) {
      throw error;
    };
  };

  async getOrderById(orderId) {
    try {
      const results = await OrderDAO.getOrderById(orderId);
      if (this.isValidGetResults(results)) {
        return results[0];
      } else {
        throw new Error('Registro não encontrado');
      };
    } catch (error) {
      throw error;
    };
  };

  isValidGetResults(results) {
    return results && results.length > 0 && results[0] !== {};
  }

  async patchOrderById(orderId, updatedValues) {
    try {
      const result = await OrderDAO.patchOrderById(orderId, updatedValues);
      return result;
    } catch (error) {
      throw error;
    };
  };

  async deleteOrderById(orderId) {
    try {
      const results = await OrderDAO.deleteOrderById(orderId);
      if (this.isValidDeletedResults(results)) {
        return results;
      } else {
        throw new Error('Nenhum registro foi deletado');
      };
    } catch (error) {
      throw error;
    };
  };

  isValidDeletedResults(results) {
    return results && results.affectedRows > 0;
  };
};

module.exports = new OrderService;
