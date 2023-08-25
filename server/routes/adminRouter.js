const express = require("express");
const userRouter = express.Router();
const User = require("../controller/UserController");
const profile = require("../controller/ProfileController"); 
const Blog = require("../controller/BlogController");

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
organizationsRouter.get("/", Organizations.getAllOrganizations);
organizationsRouter.post("/create", Organizations.createOrganization);
organizationsRouter.get("/getBlog/:id", Organizations.getOrganization);
organizationsRouter.put("/updateBlog/:id", Organizations.updateOrganization);
organizationsRouter.delete("/BlogDelete/:id", Organizations.deleteOrganization);


module.exports = userRouter;
