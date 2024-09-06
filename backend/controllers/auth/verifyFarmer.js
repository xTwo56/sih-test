//authenticateUser
const Farmer = require("../../models/farmer")
const User = require("../../models/user")

exports.verifyFarmer = async (req, res) => {
  try {
    const farmerData = req.body
    console.log("farmerData: " + JSON.stringify(farmerData))

    const verifiedFarmer = await Farmer.create(farmerData)

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
