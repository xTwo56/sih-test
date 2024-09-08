
const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

exports.authenticateUser = async (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized access, no token found"
    });
  }
  const decodedToken = jwt.verify(token, JWT_SECRET);

  console.log("mw-au userId: " + decodedToken.userId)
  req.userId = decodedToken.userId

  next()
}
