const express = require("express");
const userRouter = express.Router();
const User = require("../controller/UserController");
const Blog = require("../controller/BlogController");
const Organizations = require("../controller/OrganizationController");

// user Router for admin 
userRouter.get("/user", User.getAllUser);
userRouter.post("/user/login", User.userLogin);
userRouter.get("/getUser/:id", User.getUser);
userRouter.put("/updateUser/:id", User.updateUser);
userRouter.delete("/userDelete/:id", User.userDelete);

// admin blogs routes
userRouter.get("/blog", Blog.getAllBlog);
userRouter.post("/blog/create", Blog.createBlog);
userRouter.get("/getBlog/:id", Blog.getBlog);
userRouter.put("/updateBlog/:id", Blog.updateBlog);
userRouter.delete("/blogDelete/:id", Blog.blogDelete);

// organizationsRouter for admin
userRouter.get("/organizations", Organizations.getAllOrganizations);
userRouter.post("/organizations/Create", Organizations.createOrganization);
userRouter.get("/organizations/:id", Organizations.getOrganization);
userRouter.put("/updateOrganizations/:id", Organizations.updateOrganization);
userRouter.delete("/organizationsDelete/:id", Organizations.deleteOrganization);


module.exports = userRouter;
