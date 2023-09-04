const express = require("express");
const blogRouter = express.Router();
const Blog = require("../controller/BlogController");
// const imageUpload = require("../middleware/imageUpload");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dgvf1akje",
  api_key: "165166384453277",
  api_secret: "XEQm2b7vwiDsbc-M5NPDWpHobUQ",
});
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

blogRouter.get("/", Blog.getAllBlog);
blogRouter.post("/create",upload.array("image"), Blog.createBlog);
blogRouter.get("/getBlog/:id", Blog.getBlog);
blogRouter.put("/updateBlog/:id", Blog.updateBlog);
blogRouter.delete("/BlogDelete/:id", Blog.blogDelete);

module.exports = blogRouter;
