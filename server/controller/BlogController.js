const BlogModel = require("../model/BlogModel");

const createBlog = (req, res) => {
	BlogModel.create(req.body)
		.then((blog) => res.json(blog))
		.catch((err) => res.json(err));
};

const getBlog = (req, res) => {
	const id = req.params.id;
	BlogModel.findById({ _id: id })
		.then((blog) => res.json(blog))
		.catch((err) => res.json(err));
};

const getAllBlog = (req, res) => {
	BlogModel.find()
		.then((blogs) => res.json(blogs))
		.catch((err) => res.json(err));
};

const blogDelete = (req, res) => {
	const id = req.params.id;
	BlogModel.findById(id).then((blog) => {
		BlogModel.findByIdAndDelete({ _id: id })
			.then((blog) => res.json(blog))
			.catch((err) => res.json(err));
	});
};

const updateBlog = (req, res) => {
	const id = req.params.id;
	BlogModel.findById(id)
		.then((blog) => {
			BlogModel.findByIdAndUpdate(
				{ _id: id },
				{
					name: req.body.name,
					email: req.body.email,
					password: req.body.password,
					type: req.body.type,
				}
			)
				.then((blog) => res.json(blog))
				.catch((err) => res.json(err));
		})
		.catch((err) =>
			res.status(500).json({ error: "Internal Server Error" })
		);
};

module.exports = {
	createBlog,
	getAllBlog,
	getBlog,
	updateBlog,
	blogDelete,
};
