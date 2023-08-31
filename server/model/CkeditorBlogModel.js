const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const CkeditorBlogModel = mongoose.model('CkeditorBlog', blogSchema);

module.exports = CkeditorBlogModel;
