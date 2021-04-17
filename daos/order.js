const connection = require('../infrastructure/connection');
const moment = require('moment');
class OrderDAO {
  async insertOrder(order) {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO Orders SET ?';

      connection.query(sql, order, (error, results) => {
        if (error) {
          return reject(error);
        } else {
          return resolve(results);
        };
      });
    });
  };

  async getOrders() {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM Orders';

      connection.query(sql, (error, results) => {
        if (error) {
          return reject(error);
        } else {
          return resolve(results);
        };
      });
    });
  };

  async getOrderById(orderId) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM Orders WHERE id=${orderId}`;

      connection.query(sql, (error, results) => {
        if (error) {
          return reject(error);
        } else {
          return resolve(results);
        };
      });
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
        response.status(200).json({ ...updatedValues, orderId });
      };
    });
  };

  async deleteOrderById(orderId) {
    return new Promise((resolve, reject) => {
      const sql = 'DELETE FROM Orders WHERE id=?';

      connection.query(sql, [orderId], (error, results) => {
        if (error) {
          return reject(error);
        } else {
          return resolve(results);
        };
      });
    });
  };
};

module.exports = new OrderDAO;
