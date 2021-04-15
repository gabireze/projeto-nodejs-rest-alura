const OrderService = require('../services/order')

class OrderController {

  async insert(request, response, next) {
    const { body } = request;
    const result = await OrderService.insert(body, response);
  };

  async getOrders(request, response, next) {
    const result = await OrderService.getOrders(response);
  };

  async getOrderById(request, response, next) {
    const orderId = request.params.id;
    const result = await OrderService.getOrderById(orderId, response);
  };

  async patchOrderById(request, response, next) {
    const orderId = request.params.id;
    const updatedValues = request.body;
    const result = await OrderService.patchOrderById(orderId, updatedValues, response);
  };

};

module.exports = new OrderController;
