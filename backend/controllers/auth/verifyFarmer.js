//authenticateUser
const Farmer = require("../../models/farmer")
const User = require("../../models/user")

exports.verifyFarmer = async (req, res) => {
  try {
    console.log("verify farmer")
    const farmerData = req.body
    console.log("verify farmer farmerData: " + JSON.stringify(farmerData))

    const verifiedFarmer = await Farmer.create(farmerData)
    console.log("verifiedFarmer: " + verifiedFarmer)

    if (!verifiedFarmer) {
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
          farmerId: verifiedFarmer._id
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
