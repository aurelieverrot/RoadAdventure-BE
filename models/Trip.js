const mongoose = require("mongoose");

const TripSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 100,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  status: {
    type: Boolean,
  }
}, {timestamps: true});

module.exports = mongoose.model("Trip", TripSchema);