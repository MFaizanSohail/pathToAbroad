const Blog = require('../model/CkeditorBlogModel');

const createBlog = async (req, res) => {
    try {
        const { title, content } = req.body;
        const blog = await Blog.create({ title, content });
        res.status(201).json(blog);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports = {
	createBlog,
	getAllBlogs,
};