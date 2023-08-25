const express = require("express");
const blogRouter = express.Router();
const Blog = require("../controller/BlogController");

blogRouter.get("/", Blog.getAllBlog);
blogRouter.post("/create", Blog.createBlog);
blogRouter.get("/getBlog/:id", Blog.getBlog);
blogRouter.put("/updateBlog/:id", Blog.updateBlog);
blogRouter.delete("/BlogDelete/:id", Blog.blogDelete);

module.exports = blogRouter;
