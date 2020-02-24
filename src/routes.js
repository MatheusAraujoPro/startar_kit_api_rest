//importando o express
const express = require('express')

//criando um objeto roteador
const routes = new express.Router();

//criando as rotas da aplicação
routes.get('/', (req, res)=>{
    res.send('Olá mundo')
});


//exportando módulo de rotas
module.exports = routes;

