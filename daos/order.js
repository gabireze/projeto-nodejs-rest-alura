const connection = require('../infrastructure/connection');

class OrderDAO {
  async insert(order) {
    const sql = 'INSERT INTO Services SET ?';

    connection.query(sql, order, (error, results) => {
      if (error) {
        console.log(error);
      } else {
        console.log(results);
      };
    });
  };
};

module.exports = new OrderDAO;
