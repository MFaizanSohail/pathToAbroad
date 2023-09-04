const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const cloudinary = require("cloudinary").v2; // Import cloudinary
require("dotenv").config(); 

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: "blog_images", 
  allowedFormats: ["jpg", "png", "jpeg"], 
  transformation: [{ width: 500, height: 500, crop: "limit" }], 
});

const imageUpload = multer({ storage: storage });

module.exports = imageUpload; // Export the imageUpload middleware
