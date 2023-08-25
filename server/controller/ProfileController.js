const ProfileModel = require("../model/ProfileModel");

const createProfile = async (req, res) => {
	try {
		const profile = await ProfileModel.create(req.body);
		res.status(201).json(profile);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const updateProfile = async (req, res) => {
	try {
		const profile = await ProfileModel.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		if (!profile) {
			return res.status(404).json({ message: "Profile not found" });
		}
		res.json(profile);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const deleteProfile = async (req, res) => {
	try {
		const profile = await ProfileModel.findByIdAndDelete(req.params.id);
		if (!profile) {
			return res.status(404).json({ message: "Profile not found" });
		}
		res.json({ message: "Profile deleted" });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = {
	createProfile,
	updateProfile,
	deleteProfile,
};
