const OrderService = require('../services/order')

class OrderController {

  async insert(request, response, next) {
    const { body } = request;
    const result = await OrderService.insert(body, response);
  };

  async read(request, response, next) {
    const service = { "nome": "gabriel" };
    console.log(service);
  };
};

module.exports = new OrderController;
