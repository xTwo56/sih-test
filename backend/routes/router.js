const express = require('express')

const router = express.Router()

const { signup } = require('../controllers/auth/signup')
const { signin } = require('../controllers/auth/signin')
const { verifyBuyer } = require('../controllers/auth/verifyBuyer')
const { verifyFarmer } = require('../controllers/auth/verifyFarmer')

router.get("/test", (req, res) => {
  res.send("testing")
})
router.post('/signup', signup)
router.post('/signin', signin)
router.post('/verifyBuyer', verifyBuyer)
router.post('/verifyFarmer', verifyFarmer)

module.exports = router
