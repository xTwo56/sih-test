

exports.authenticateUser = async (req, res, next) => {
  const token = req.coookies.token
  if (!token) {
    return res.status(401).json({ success: false, message: "Unauthorized access, no token found" });
  }
  const decodedToken = jwt.verify(token, JWT_SECRET);
  req.userId = decodedToken.userId

  next()
}
