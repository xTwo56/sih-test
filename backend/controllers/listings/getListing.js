const { Listing } = require("../../models/listings")

exports.getListing = async (req, res) => {
  const listings = await Listing.findMany({
    status: 'listed'
  })

  if (!listings) {
    return res.status(400).json({
      success: false,
      msg: "couldn't fetch listings"
    })
  }

  if (!listings.length) {
    return res.status(400).json({
      success: false,
      data: null
    })
  }

  return res.status(200).json({
    success: true,
    data: listings
  })

}
