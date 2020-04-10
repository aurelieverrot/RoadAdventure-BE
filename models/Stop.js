const mongoose = require("mongoose");

const StopSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
    maxlength: 100,
  },
  body: {
    type: String,
    required: true
  },
  picture: {
    type: String,
  },
  activities: {
    type: [String]
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  trip: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trip"
  }
}, {timestamps: true});

module.exports = mongoose.model("Stop", StopSchema);