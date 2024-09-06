const mongoose = require("mongoose")
const { Schema } = mongoose

const listingSchema = mongoose.Schema({

  crop: {
    type: String,
    required: true
  },
  /* cropImage: {

  }*/

  price: {
    type: String,
    required: true
  },

  amount: {
    type: String,
    required: true
  },

  // interval of dates
  duration: {
    type: Date,
    required: true,
  },

  buyerId: {
    type: Schema.Types.ObjectId,
    ref: "Buyer",
    default: null
  },

  farmerId: {
    type: Schema.Types.ObjectId,
    ref: "Farmer",
    default: null
  },

  status: {
    type: String,
    enum: ['confirmed', 'finalised', 'ongoing', 'listed'],
    default: 'listed'
  },

  description: {
    type: String,
    default: null
  }
})

const Listing = mongoose.model('Listing', listingSchema)
module.exports = {
  Listing,
  listingSchema
}
