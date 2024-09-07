const jwt = require('jsonwebtoken')
const User = require('../../models/user')
require('dotenv').config()
const JWT_SECRET = process.env.JWT_SECRET

exports.signup = async (req, res) => {
  try {
    const { email, password, role } = req.body
    console.log("email" + email)
    const existingUser = await User.findOne({ email })

    if (!existingUser) {
      let user = await User.create({
        email,
        password,
        role
      })

      const token = jwt.sign(
        { userId: user._id },
        JWT_SECRET,
        { expiresIn: '1h' }
      )
      console.log("token creation" + token)

      res.cookie('token', token, {
        httpOnly: true,
        maxAge: 3600000
      })

      return res.status(200).json({
        success: true,
        msg: "user created"
      })
    }

    return res.status(400).json({
      success: false,
      msg: "user already exists"
    })

  } catch (err) {
    console.log(err)
  }
}
