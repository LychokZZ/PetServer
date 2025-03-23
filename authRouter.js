const Router = require('express')
const router = new Router
const controller = require('./authContoller')

router.post('/registration', controller.registation)
router.post('/login', controller.login)
router.post('/setStan', controller.Stan)
router.post('/product',controller.product)

router.get('/getStan', controller.getStan)
router.get('/getProduct', controller.getProduct)

module.exports = router 