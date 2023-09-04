const BlogModel = require("../model/BlogModel");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const createBlog = async (req, res) => {
	try {
	  const { title, description, eligibility, details, applyingProcess, benefits, deadline, organization } = req.body;
	  const imageUrl = []; 
	  console.log("files ",req.files);
	  for (const file of req.files) {
		const result = await cloudinary.uploader.upload(file.path);
		imageUrl.push(result.secure_url);
	  }
	  console.log("imageUrl", imageUrl);
	  res.send(imageUrl)
	  const newBlog = new BlogModel({ 
		title, 
		description, 
		eligibility, 
		details, 
		applyingProcess, 
		benefits, 
		deadline,
		imageUrl, 
		organization
	  });
	  await newBlog.save();
	  
	  res.status(201).json({ message: 'Blog Successfully Created!',blog:newBlog });
	} catch (error) {
	  console.error("Error creating blog:", error);
	  res.status(500).json({ message: 'Error creating blog. ' + error });
	}
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
