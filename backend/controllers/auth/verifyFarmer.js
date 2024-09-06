//authenticateUser
const Farmer = require("../../models/farmer")

exports.verifyFarmer = async (req, res) => {
  try {
    const { _id, ...farmerData } = req.body

    const verifiedFarmer = await Farmer.create({ farmerData })

    if (!verifiedFarmer) {
      return res.status(400).json({
        success: "false",
        msg: "verification unsuccessful"
      })
    }
    const userId = req.userId

    await User.update(
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
