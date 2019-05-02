const BillingCycle = require('./billingCycle')

//vai criar os metodos da API REST  padrao 
BillingCycle.methods(['get','post','put','delete'])
//Sempre que der o update, retorne o objecto novo, nao o antigo
BillingCycle.updateOptions({new: true, runValidators: true})

BillingCycle.route('count', function(req, res, next){
    BillingCycle.count()
})

module.exports = BillingCycle