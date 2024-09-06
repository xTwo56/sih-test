import { listingSchema } from "./listings"

const mongoose = require("mongoose")

const buyerSchema = mongoose.Schema({

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

  gstId: {
    type: String,
    required: true
  },

  listings: {
    type: [listingSchema],
    default: null
  }
})

const Buyer = mongoose.model("Buyer", buyerSchema)
module.exports = Buyer
