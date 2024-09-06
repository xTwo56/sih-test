const jwt = require('jsonwebtoken')
const User = require('../../models/user')

exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body
    console.log("email" + email)
    const existingUser = await User.findOne({ email })

    if (!existingUser) {
      let user = await User.create({
        email,
        password
      })

      const token = jwt.sign(
        { userId: newUser._id },
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
        msg: "user created successfully"
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
