const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

//
//dados que vieram da submissao de formularios
server.use(bodyParser.urlencoded({ extended: true}))
// parser de JSON da requisição
server.use(bodyParser.json())

server.listen(port, function(){
    console.log(`BACKEND está rodando na porta ${port}`);
})

module.exports = server