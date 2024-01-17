const Router = require('express')
const router = new Router()
const collectionRouter = require('../controllers/collectionController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), collectionRouter.create)
router.get('/', collectionRouter.getAll)

module.exports = router