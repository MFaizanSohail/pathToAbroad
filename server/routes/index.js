const { Router } = require("express");
const router = Router();

const userRouter = require("./userRouter");
const blogRouter = require("./blogRouter");
const adminRouter = require("./adminRouter");
const organizationRouter = require("./organizationRouter");
const CkeditorBlogRouter = require('./CkeditorBlogRouter');

router.use("/user", userRouter);
router.use("/blog", blogRouter);
router.use("/organization", organizationRouter);
router.use("/admin", adminRouter);
router.use('/blogs', CkeditorBlogRouter);

module.exports = router;
