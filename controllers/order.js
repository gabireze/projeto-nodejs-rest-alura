const OrderService = require('../services/order')

class OrderController {

  async insertOrder(request, response, next) {
    const { body } = request;
    const result = await OrderService.insertOrder(body, response);
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

  async deleteOrderById(request, response, next) {
    const orderId = request.params.id;
    const result = await OrderService.deleteOrderById(orderId, response);
  };

};

module.exports = new OrderController;
