const { response } = require("express");
const UserModel = require("../model/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
	try {
	  const existingUser = await UserModel.findOne({ email: req.body.email });
	  if (existingUser) {
		return res.status(400).json({ message: "Email is already taken." });
	  }
  
	  const newUser = await UserModel.create(req.body);
	  res.status(200).json(newUser);
	} catch (error) {
	  res.status(500).json({ message: "Error creating user.", error });
	}
  };

  const userLogin = async (req, res) => {
	try {
	  const { email, password } = req.body;
	  const user = await UserModel.findOne({ email: email });
  
	  if (!user) {
		return res.status(401).json({ status: "error", message: "Invalid email or password." });
	  }
  
	  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  
	  if (isPasswordCorrect) {
		const token = jwt.sign(
		  { email: user.email, type: user.type },
		  "jwt-secret-key",
		  { expiresIn: "1d" }
		);
		res.cookie('token', token, { httpOnly: true, sameSite: 'strict' }); // Set the cookie here
		return res.json({ status: "success", type: user.type });
	  } else {
		return res.status(401).json({ status: "error", message: "Invalid email or password." });
	  }
	} catch (err) {
	  res.status(500).json({ status: "error", message: "An error occurred." });
	}
  };
  

const getUser = (req, res) => {
	const id = req.params.id;
	UserModel.findById({ _id: id })
		.then((user) => res.json(user))
		.catch((err) => res.json(err));
};

const getAllUser = (req, res) => {
	UserModel.find()
		.then((users) => res.json(users))
		.catch((err) => res.json(err));
};

const userDelete = (req, res) => {
	const id = req.params.id;
	UserModel.findById(id).then((user) => {
		if (user.type === "admin") {
			return res
				.status(403)
				.json({ error: "Admin user cannot be deleted." });
		}
		UserModel.findByIdAndDelete({ _id: id })
			.then((user) => res.json(user))
			.catch((err) => res.json(err));
	});
};

const updateUser = (req, res) => {
	const id = req.params.id;
	UserModel.findById(id)
		.then((user) => {
			if (user.type === "admin") {
				return res
					.status(403)
					.json({ error: "Admin user cannot be updated." });
			}
			UserModel.findByIdAndUpdate(
				{ _id: id },
				{
					name: req.body.name,
					email: req.body.email,
					password: req.body.password,
					type: req.body.type,
				}
			)
				.then((user) => res.json(user))
				.catch((err) => res.json(err));
		})
		.catch((err) =>
			res.status(500).json({ error: "Internal Server Error" })
		);
};

module.exports = {
	createUser,
	getAllUser,
	userLogin,
	getUser,
	updateUser,
	userDelete,
};
