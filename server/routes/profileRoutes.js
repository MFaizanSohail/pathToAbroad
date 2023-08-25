const express = require("express");
const profileRouter = express.Router();
const profile = require("../controller/ProfileController"); 

profileRouter.post("/createProfile", profile.createProfile);
profileRouter.patch("/updateProfile/:id", profile.updateProfile);

module.exports = profileRouter;
