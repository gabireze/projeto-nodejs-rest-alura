const order = require('../daos/order');
const OrderService = require('../services/order')

class OrderController {

  async insertOrder(request, response, next) {
    const { body } = request;
    const result = await OrderService.insertOrder(body, response);
  };

  async getOrders(request, response, next) {
    try {
      const result = await OrderService.getOrders();
      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json(error);
    };
  };

  async getOrderById(request, response, next) {
    const { params: { id: orderId } } = request;
    try {
      const result = await OrderService.getOrderById(orderId);
      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json(error);
    };
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
