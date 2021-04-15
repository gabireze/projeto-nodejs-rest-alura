const connection = require('../infrastructure/connection');
const moment = require('moment');
class OrderDAO {
  async insert(order, response) {
    const sql = 'INSERT INTO Orders SET ?';

    connection.query(sql, order, (error, results) => {
      if (error) {
        return response.status(400).json(error);
      } else {
        response.status(201).json(results);
      };
    });
  };

  async getOrders(response) {
    const sql = 'SELECT * FROM Orders';

    connection.query(sql, (error, results) => {
      if (error) {
        response.status(400).json(error);
      } else {
        response.status(200).json(results);
      };
    });
  };

  async getOrderById(orderId, response) {
    const sql = `SELECT * FROM Orders WHERE id=${orderId}`;

    connection.query(sql, (error, results) => {
      const order = results[0];
      if (error) {
        response.status(400).json(error);
      } else {
        response.status(200).json(order);
      };
    });
  };

  async patchOrderById(orderId, updatedValues, response) {
    const sql = 'UPDATE Orders SET ? WHERE id=?';

    const { date } = updatedValues;

    if (date) {
      updatedValues.date = moment(date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');
    }

    connection.query(sql, [updatedValues, orderId], (error, results) => {
      if (error) {
        response.status(400).json(error);
      } else {
        response.status(200).json(results);
      };
    });
  };
};

module.exports = new OrderDAO;
