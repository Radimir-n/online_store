const Router = require('express')
const router = new Router()
const TypeController = require('../controllers/typeController')
const checRole = require('../middleware/checkRoleMiddleware')

router.post('/',checRole('ADMIN'),TypeController.create)
router.get('/',TypeController.getAll)

module.exports = router
