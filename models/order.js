class Order {
  constructor(body) {
    this.client = body.client;
    this.pet = body.pet;
    this.service = body.service;
    this.status = body.status;
    this.comment = body.comment;
  }
};

module.exports = Order;