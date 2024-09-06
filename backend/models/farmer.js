const { listingSchema } = require("./listings")

const mongoose = require("mongoose")

const farmerSchema = mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  phone: {
    type: String,
    required: true
  },

  address: {
    type: String,
    required: true
  },

  fid: {
    type: String,
    required: true
  },

  listings: {
    type: [listingSchema],
    default: null
  }
})

const Farmer = mongoose.model("Farmer", farmerSchema)
module.exports = Farmer
