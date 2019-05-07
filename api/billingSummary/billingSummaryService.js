const _ = require('lodash')
const BillingCycle = require('../billingCycle/billingCycle')

//middleware
function getSummary(req, res){
    //api do mogoose 'aggregate'
    BillingCycle.aggregate([{
         // Aqui é a projecao de cada um dos documentos
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}
    }, {
        // agrupos os elementos
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
    }, {
        //mostre apenas os campos creditos e debitos
        $project: {_id: 0, credit: 1, debt: 1}
    }]).exec((error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            //trata o caso de retorno de um objeto undefined (Objeto padrão)
            res.json(result[0] || { credit: 0, debt: 0 })
        }
    })
}
//objeto ocm um unico metodo getSummary
module.exports = { getSummary }