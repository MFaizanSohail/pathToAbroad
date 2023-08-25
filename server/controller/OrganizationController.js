const OrganizationModel = require("../model/OrganizationModel"); // Adjust the path as needed

// Create a new organization
const createOrganization = async (req, res) => {
  try {
    const organization = await OrganizationModel.create(req.body);
    res.status(201).json(organization);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all organizations
const getAllOrganizations = async (req, res) => {
  try {
    const organizations = await OrganizationModel.find();
    res.json(organizations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific organization by ID
const getOrganization = async (req, res) => {
  try {
    const organization = await OrganizationModel.findById(req.params.id);
    if (!organization) {
      return res.status(404).json({ message: "Organization not found" });
    }
    res.json(organization);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an organization by ID
const deleteOrganization = async (req, res) => {
  try {
    const organization = await OrganizationModel.findByIdAndDelete(req.params.id);
    if (!organization) {
      return res.status(404).json({ message: "Organization not found" });
    }
    res.json({ message: "Organization deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Edit an organization by ID
const updateOrganization = async (req, res) => {
  try {
    const organization = await OrganizationModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!organization) {
      return res.status(404).json({ message: "Organization not found" });
    }
    res.json(organization);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = {
	createOrganization,
	getAllOrganizations,
	getOrganization,
	updateOrganization,
	deleteOrganization,
};