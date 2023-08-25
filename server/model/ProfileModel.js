const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  aboutUs: {
    type: String,
    required: true,
  },
  organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organization",
  },
  valid: {
    type: Boolean,
    default: false,
  },
  profileImage: {
    type: String,
    required: true,
  },
});

const ProfileModel = mongoose.model("Profile", ProfileSchema);

module.exports = ProfileModel;
