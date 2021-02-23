const express = require('express')
const billingCycle = require('../api/billingCycle')

module.exports = function(server){
    
    //API Routes
    const router = express.Router()
    server.use('/api', router)

    // TODO Routes de Ciclo de Pagamento
    const BillingCycle = require('../api/billingCycleServices')
    BillingCycle.register(router, '/billingcycles')
}