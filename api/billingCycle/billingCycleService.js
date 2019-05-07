const BillingCycle = require('./billingCycle')
const _ = require('lodash')

//vai criar os metodos da API REST  padrao 
BillingCycle.methods(['get','post','put','delete'])
//Sempre que der o update, retorne o objecto novo, nao o antigo
BillingCycle.updateOptions({new: true, runValidators: true})

BillingCycle.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

function sendErrorsOrNext(req, res, next){
    const bundle = res.locals.bundle

    if(bundle.errors){
        var errors = parseErrors(bundle.errors)
        //vai retornar um array de erros que vem da validação do mongoose
        res.status(500).json({errors})
    }else{
        next()
    }
}

function parseErrors(nodeRestfulErrors){
    const errors = []
    //pecorre cada um dos atributos e pega o atributo mensagem
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors
}
BillingCycle.route('count', function(req, res, next){
    BillingCycle.count(function(error, value){
        if(error){
            //recebe o error direto do mongoose e jogar no JSON
            res.status(500).json({errors: [error]});
        }else{
            res.json({value});
        }
    })
})

module.exports = BillingCycle