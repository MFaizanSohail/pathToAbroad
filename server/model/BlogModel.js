const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  eligibility: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  applyingProcess: {
    type: String,
    required: true,
  },
  benefits: {
    type: String,
    required: true,
  },
  deadline: {
    type: String,
    required: true,
  },
  valid: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    enum: ["draft", "public", "private"],
    default: "draft",
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
  updatedDate: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  imageUrl: {
    type: Array, 
    required: true,
  },
  organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organization",
  },
});

const BlogModel = mongoose.model("Blog", BlogSchema);

module.exports = BlogModel;
