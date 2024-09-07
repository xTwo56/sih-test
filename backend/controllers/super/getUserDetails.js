
const Farmer = require("../../models/farmer")
const User = require("../../models/user")

exports.getUserDetails = async (req, res) => {

  const userId = req.userId
  console.log("userId")

  const { isVerified, farmerId, buyerId, name, address } = await User.findOne({
    _id: userId
  })

  if (!isVerified) {
    return res.status(400).json({
      success: false,
      msg: "user not verified"
    })
  }

  if (farmerId) {
    const farmer = await Farmer.findOne({
      farmerId
    })
    return res.status(200).json({
      success: true,
      msg: "farmer found",
      data: farmer
    })
  }

  const buyer = await Buyer.findOne({
    buyerId
  })
  return res.status(200).json({
    success: true,
    msg: "buyer found",
    data: buyer
  })
}
