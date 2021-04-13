module.exports = app => {
  app.get('/atendimentos', (req, rest) => rest.send('Você está na roda de atendimentos'))
}