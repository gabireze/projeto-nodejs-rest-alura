const customExpress = require('./config/customExpress');
const connection = require('./infrastructure/connection')

connection.connect(error => {
  if (error) {
    console.log(error)
  } else {
    console.log('banco de dados conectado com sucesso');

    const app = customExpress();

    app.listen(3000, () => console.log('servidor rodando na porta 3000'));
  }

});

