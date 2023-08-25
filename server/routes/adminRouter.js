const express = require("express");
const userRouter = express.Router();
const User = require("../controller/UserController");
const profile = require("../controller/ProfileController"); 
const Blog = require("../controller/BlogController");
const Organizations = require("../controller/OrganizationController");

// user Router for admin 
userRouter.get("/", User.getAllUser);
userRouter.post("/create", User.createUser);
userRouter.post("/login", User.userLogin);
userRouter.get("/getUser/:id", User.getUser);
userRouter.put("/updateUser/:id", User.updateUser);
userRouter.delete("/userDelete/:id", User.userDelete);


// Profile Delete Route For admin
userRouter.delete("/deleteProfile/:id", profile.deleteProfile);

// admin blogs routes
userRouter.get("/", Blog.getAllBlog);
userRouter.post("/create", Blog.createBlog);
userRouter.get("/getBlog/:id", Blog.getBlog);
userRouter.put("/updateBlog/:id", Blog.updateBlog);
userRouter.delete("/BlogDelete/:id", Blog.blogDelete);

// organizationsRouter for admin
userRouter.get("/", Organizations.getAllOrganizations);
userRouter.post("/create", Organizations.createOrganization);
userRouter.get("/getBlog/:id", Organizations.getOrganization);
userRouter.put("/updateBlog/:id", Organizations.updateOrganization);
userRouter.delete("/BlogDelete/:id", Organizations.deleteOrganization);


module.exports = userRouter;
