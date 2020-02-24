//importando express
const express = require('express')
//criando o servidor do app
const app = express();

app.use(require('./routes'))

//setando a porta do app
app.listen(8080);