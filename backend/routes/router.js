const express = require('express')

const router = express.Router()

const { authenticateUser } = require('../middlewares/authenticateUser')
const { signup } = require('../controllers/auth/signup')
const { signin } = require('../controllers/auth/signin')
const { verifyBuyer } = require('../controllers/auth/verifyBuyer')
const { verifyFarmer } = require('../controllers/auth/verifyFarmer')
const { getUserDetails } = require('../controllers/super/getUserDetails')

router.get("/test", (req, res) => {
  res.send("testing")
})
router.post('/signup', signup)
router.post('/signin', signin)
router.post('/verifyBuyer', authenticateUser, verifyBuyer)
router.post('/verifyFarmer', authenticateUser, verifyFarmer)
router.get('/getUserDetails', authenticateUser, getUserDetails)

module.exports = router
