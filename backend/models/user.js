const mongoose = require("mongoose");
const { Schema } = mongoose

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  farmerId: {
    type: Schema.Types.ObjectId,
    ref: 'Farmer',
    default: null
  },

  buyerId: {
    type: Schema.Types.ObjectId,
    ref: 'Buyer',
    default: null
  },

  role: {
    type: String,
    enum: ['farmer', 'buyer']
  }
})

const User = mongoose.model('User', userSchema);
module.exports = User
