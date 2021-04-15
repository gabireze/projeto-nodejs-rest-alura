const connection = require('../infrastructure/connection');

class OrderDAO {
  async insert(order, response) {
    const sql = 'INSERT INTO Services SET ?';

    connection.query(sql, order, (error, results) => {
      if (error) {
        return response.status(400).json(error);
      } else {
        response.status(201).json(results);
      };
    });
  };
};

module.exports = new OrderDAO;
