const connection = require('../infrastructure/connection');

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
};

module.exports = new OrderDAO;
