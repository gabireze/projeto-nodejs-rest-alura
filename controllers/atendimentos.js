module.exports = app => {
  app.get('/atendimentos', (req, rest) => rest.send('Você está na roda de atendimentos e está realizando um GET'))

  app.post('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos e está realizando um POST'))
}