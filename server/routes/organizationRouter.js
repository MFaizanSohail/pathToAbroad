const express = require("express");
const organizationsRouter = express.Router();
const Organizations = require("../controller/OrganizationController");

organizationsRouter.post("/create", Organizations.createOrganization);
organizationsRouter.get("/getOrganization/:id", Organizations.getOrganization);
organizationsRouter.put("/updateOrganization/:id", Organizations.updateOrganization);
organizationsRouter.delete("/deleteOrganization/:id", Organizations.deleteOrganization);

module.exports = organizationsRouter;
