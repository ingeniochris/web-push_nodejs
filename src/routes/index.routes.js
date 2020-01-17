const { Router } = require('express')
const route = Router()

const { getIndex } = require('../controllers/index.controller')
const { getSuscription } = require('../controllers/web_push.controller')

route.route('/').get(getIndex)

route.route('/subscription').post(getSuscription)

module.exports = route
