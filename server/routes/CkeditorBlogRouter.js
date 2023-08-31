const express = require('express');
const router = express.Router();
const blogController = require('../controller/CkeditorBlogController');

router.post('/create', blogController.createBlog);
router.get('/getAll', blogController.getAllBlogs);

module.exports = router;
