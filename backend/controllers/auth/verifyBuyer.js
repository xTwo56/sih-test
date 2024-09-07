//authenticateUser
const User = require("../../models/user")
const Buyer = require("../../models/buyer")

exports.verifyBuyer = async (req, res) => {
  try {
    const buyerData = req.body
    console.log("buyerData: " + buyerData)

    const verifiedBuyer = await Buyer.create({ buyerData })

    if (!verifiedBuyer) {
      return res.status(400).json({
        success: "false",
        msg: "verification unsuccessful"
      })
    }
    const userId = req.userId

    await User.updateOne(
      { _id: userId },
      {
        $set: {
          isVerified: true,
          buyerId: verifiedBuyer._id
        }
      }
    );

    return res.status(200).json({
      success: "true",
      msg: "verification successful"
    })

  } catch (err) {
    console.log(err)
  }
}
