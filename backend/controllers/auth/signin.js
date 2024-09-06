const jwt = require('jsonwebtoken')
const User = require("../../models/user")
require('dotenv').config()
const JWT_SECRET = process.env.JWT_SECRET

exports.signin = async (req, res) => {
  const { email, password } = req.body
  const existingUser = await User.findOne({ email })

  if (!existingUser) {
    return res.status(401).json({
      success: false,
      msg: "user doesn't exist"
    })
  }

  if (existingUser.password != password) {
    return res.status(401).json({
      success: false,
      msg: "invalid credentials"
    })
  }

  const token = jwt.sign(
    { userId: existingUser._id },
    JWT_SECRET,
    { expiresIn: '1h' }
  )

  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 3600000
  });

  return res.status(200).json({
    success: true,
    msg: "user loggedin"
  })

}
