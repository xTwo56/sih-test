// authenticateUser
const { Listing } = require("../../models/listings")

exports.createNew = async (req, res) => {
  const { listingData } = req.body()

  const newListing = await Listing.create({ listingData })

  if (!newListing) {
    return res.status(400).json({
      success: false,
      msg: "lising creation unsuccessful"
    })
  }
  const userId = req.userId

  const updatedBuyer = await Buyer.updateOne({ _id: userId },
    { $push: { listings: newListing } },
  )

  if (!updatedBuyer) {
    return res.status(400).json({
      success: false,
      msg: "buyer couldn't update"
    })
  }

  return res.status(200).json({
    success: true,
    msg: "listing successfully created"
  })
}
