const ServiceController = {

  async insert(request, response, next) {
    console.log("chegou");
    const { body } = request;
    console.log(body);
  },

  async read(request, response, next) {
    const service = { "nome": "gabriel" };
    console.log(service);
  }
};

module.exports = ServiceController;
