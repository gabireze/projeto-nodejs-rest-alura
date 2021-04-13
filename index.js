const express = require('express')

const app = express()

app.listen(3000, () => console.log('servidor rodando na porta 3000'))

app.get('/atendimentos', (req, rest) => rest.send('Você está na roda de atendimentos'))