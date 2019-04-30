const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost/dbfinance')

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."