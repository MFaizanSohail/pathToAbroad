const express = require("express");
const organizationsRouter = express.Router();
const Organizations = require("../controller/OrganizationController");

organizationsRouter.post("/create", Organizations.createOrganization);
organizationsRouter.get("/getOrganization", Organizations.getAllOrganizations);
organizationsRouter.get("/getOrganization/:id", Organizations.getOrganization);

module.exports = organizationsRouter;
