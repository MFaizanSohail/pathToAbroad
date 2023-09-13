const mongoose = require("mongoose");

const OrganizationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["Business", "University", "Consultant"],
  },
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  province: {
    type: String,
  },
  createON: {
    type: Date,
    default: Date.now,
  },
  updateON: {
    type: Date,
    default: Date.now,
  },
});

const OrganizationModel = mongoose.model("Organization", OrganizationSchema);

module.exports = OrganizationModel;
