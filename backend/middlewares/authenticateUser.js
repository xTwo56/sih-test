
const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

exports.authenticateUser = async (req, res, next) => {
  const token = req.cookies.token
  console.log("token: " + token)
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized access, no token found"
    });
  }
  const decodedToken = jwt.verify(token, JWT_SECRET);
  req.userId = decodedToken.userId

  next()
}
