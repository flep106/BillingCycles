/*
    Aqui é onde fica o mapeamento OBJETO -> Documento no mongoDB
*/
const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
    name: {type: String, required: true},
    value: {type: Number, min: 0, required: true}
})

const debtSchema = new mongoose.Schema({
    name: {type: String, required: true},
    value: {type: Number, min: 0, required: [true, 'Informe o valor do débito!']},
    status: {type: String, required: false, uppercase: true,
    //valores que status pode assumir
        enum: ['PAGO', 'PENDENTE', 'AGENDADO']}
})


const billingCycleSchema = new mongoose.Schema({
    name: {type: String, required: true},
    month: {type: Number, min: 1, max: 12, required: true},
    year: {type: Number, min: 1970, max: 2100, required: true},
    credits: [creditSchema],
    debts: [debtSchema]
})

//define o model 'BillingCycle e faz referencia ao objeto billingCycle
module.exports = restful.model('BillingCycle', billingCycleSchema)