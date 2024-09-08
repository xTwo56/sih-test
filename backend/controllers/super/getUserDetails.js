
const Farmer = require("../../models/farmer")
const User = require("../../models/user")
const Buyer = require("../../models/buyer")

exports.getUserDetails = async (req, res) => {

  const userId = req.userId
  console.log("getUserDetails userId: " + userId)

  const userData = await User.findOne({
    _id: userId
  })

  console.log("userData: " + userData)

  if (userData.farmerId) {
    const farmer = await Farmer.findOne({
      _id: userData.farmerId
    })
    console.log("getUserDetails farmerId: " + userData.farmerId)
    console.log("getUserDetails farmer: " + farmer)

    return res.status(200).json({
      success: true,
      msg: "farmer found",
      farmer
    })
  }

  if (userData.buyerId) {
    const buyer = await Buyer.findOne({
      _id: userData.buyerId
    })

    console.log("getUserDetails buyer: " + buyer)
    return res.status(200).json({
      success: true,
      msg: "buyer found",
      buyer
    })
  }

  return res.status(200).json({
    success: false,
    msg: "user not verified",
    data: false
  })
}
