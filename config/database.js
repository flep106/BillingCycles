const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost/dbfinance')

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor limite {MIN}."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior limite {MAX}."