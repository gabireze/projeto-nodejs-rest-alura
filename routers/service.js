const ServiceController = require("../controllers/service")

module.exports = app => {
  app.get('/service', ServiceController.read);

  app.post('/service', ServiceController.insert);
};
