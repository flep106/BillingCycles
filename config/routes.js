const express = require('express')

module.exports = function (server) {

    //API Routes
    const router = express.Router()

    server.use('/api', router)
    
    // foi apenas para teste de URL
    // router.route('/teste').get(function(req, res){
    //   res.send('funcionou')
    // }) 

    //rotas da PI
    const billingCycleService = require('../api/billingCycle/billingCycleService')

    billingCycleService.register(router, '/billingCycles')
  }