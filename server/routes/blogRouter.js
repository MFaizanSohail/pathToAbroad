const express = require("express");
const blogRouter = express.Router();
const Blog = require("../controller/BlogController");
const imageUpload = require("../middleware/imageUpload");

blogRouter.get("/", Blog.getAllBlog);
blogRouter.post("/create", imageUpload.single("image"), Blog.createBlog);
blogRouter.get("/getBlog/:id", Blog.getBlog);
blogRouter.put("/updateBlog/:id", Blog.updateBlog);
blogRouter.delete("/BlogDelete/:id", Blog.blogDelete);

module.exports = blogRouter;
