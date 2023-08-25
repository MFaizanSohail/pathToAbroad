const express = require("express");
const userRouter = express.Router();
const User = require("../controller/UserController");

userRouter.get("/", User.getAllUser);
userRouter.post("/create", User.createUser);
userRouter.post("/login", User.userLogin);
userRouter.get("/getUser/:id", User.getUser);
userRouter.put("/updateUser/:id", User.updateUser);

module.exports = userRouter;
